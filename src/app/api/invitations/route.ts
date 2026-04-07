import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { Resend } from "resend";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { invitationSchema } from "@/lib/validations/auth";
import { invitationEmailHtml } from "@/lib/email/invitation-template";

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Accès refusé." }, { status: 403 });
  }

  // Double vérification en base
  const admin = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, isActive: true },
  });
  if (!admin || !admin.isActive || admin.role !== "ADMIN") {
    return NextResponse.json({ error: "Accès refusé." }, { status: 403 });
  }

  const body = await request.json();
  const parsed = invitationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { email, role } = parsed.data;

  // Vérifier si un compte existe déjà
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json(
      { error: "Un compte existe déjà avec cette adresse email." },
      { status: 409 }
    );
  }

  // Vérifier si une invitation active existe déjà
  const existingInvitation = await prisma.invitation.findFirst({
    where: { email, usedAt: null, expiresAt: { gte: new Date() } },
  });
  if (existingInvitation) {
    return NextResponse.json(
      { error: "Une invitation active existe déjà pour cet email." },
      { status: 409 }
    );
  }

  const token = randomUUID();
  const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000); // 72h

  await prisma.invitation.create({
    data: {
      email,
      role,
      token,
      expiresAt,
      invitedById: session.user.id,
    },
  });

  const resend = new Resend(process.env.RESEND_API_KEY);
  const baseUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
  const inviteUrl = `${baseUrl}/fr/invite/${token}`;

  const { error: emailError } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "NSS <noreply@wasafrica.org>",
    to: email,
    subject: "Invitation à rejoindre l'espace membre NSS",
    html: invitationEmailHtml({ email, role, inviteUrl, expiresAt }),
  });

  if (emailError) {
    console.error("[invitations] Resend error:", emailError);
    // L'invitation est créée mais l'email a échoué — on informe sans bloquer
    return NextResponse.json(
      { success: true, warning: "Invitation créée mais l'envoi d'email a échoué." },
      { status: 201 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
