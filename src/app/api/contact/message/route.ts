import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  name: z.string().min(2, "Nom requis"),
  organisation: z.string().optional(),
  country: z.string().optional(),
  email: z.string().email("Email invalide"),
  sujet: z.enum(["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"]),
  message: z.string().min(20, "Message trop court (20 car. min)"),
  rgpd: z.literal(true, { message: "Vous devez accepter la politique de confidentialité." }),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, name, organisation, country, email, sujet, message } = parsed.data;

  const html = `
    <h2>Nouveau message de contact — NSS</h2>
    <table cellpadding="6" style="border-collapse:collapse;width:100%;max-width:500px;">
      <tr><td><strong>Nom</strong></td><td>${firstName} ${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Organisation</strong></td><td>${organisation ?? "—"}</td></tr>
      <tr><td><strong>Pays</strong></td><td>${country ?? "—"}</td></tr>
      <tr><td><strong>Objet</strong></td><td>${sujet}</td></tr>
    </table>
    <p><strong>Message :</strong></p>
    <p style="background:#f5f5f0;padding:12px;border-radius:8px;white-space:pre-wrap;">${message}</p>
  `;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "NSS <noreply@wasafrica.org>",
    to: process.env.CONTACT_EMAIL ?? "contact@wasafrica.org",
    replyTo: email,
    subject: `[NSS Contact] ${sujet} — ${firstName} ${name}`,
    html,
  });

  if (error) {
    console.error("[contact/message]", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
