import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rejoindreSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  country: z.string().min(1, "Pays requis"),
  organisation: z.string().optional(),
  type: z.enum(["individuel", "organisation"]),
  motivations: z.string().min(20, "Merci de détailler vos motivations (20 car. min)"),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = rejoindreSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { firstName, name, email, phone, country, organisation, type, motivations } = parsed.data;

  const html = `
    <h2>Nouvelle demande d'adhésion NSS</h2>
    <table cellpadding="6" style="border-collapse:collapse;width:100%;max-width:500px;">
      <tr><td><strong>Prénom</strong></td><td>${firstName}</td></tr>
      <tr><td><strong>Nom</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Téléphone</strong></td><td>${phone ?? "—"}</td></tr>
      <tr><td><strong>Pays</strong></td><td>${country}</td></tr>
      <tr><td><strong>Organisation</strong></td><td>${organisation ?? "—"}</td></tr>
      <tr><td><strong>Type</strong></td><td>${type === "individuel" ? "Individuel" : "Organisation"}</td></tr>
    </table>
    <p><strong>Motivations :</strong></p>
    <p style="background:#f5f5f0;padding:12px;border-radius:8px;">${motivations.replace(/\n/g, "<br/>")}</p>
  `;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "NSS <noreply@wasafrica.org>",
    to: process.env.CONTACT_EMAIL ?? "contact@wasafrica.org",
    replyTo: email,
    subject: `Demande d'adhésion NSS — ${firstName} ${name} (${country})`,
    html,
  });

  if (error) {
    console.error("[rejoindre]", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
