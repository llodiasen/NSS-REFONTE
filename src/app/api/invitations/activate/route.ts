import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { activateAccountSchema } from "@/lib/validations/auth";
import { Prisma } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = activateAccountSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { token, firstName, name, password } = parsed.data;

    // Vérifier le token
    const invitation = await prisma.invitation.findUnique({
      where: { token },
    });

    if (!invitation) {
      return NextResponse.json({ error: "Lien d'invitation invalide." }, { status: 404 });
    }

    if (invitation.usedAt) {
      return NextResponse.json({ error: "Ce lien d'invitation a déjà été utilisé." }, { status: 409 });
    }

    if (invitation.expiresAt < new Date()) {
      return NextResponse.json({ error: "Ce lien d'invitation a expiré." }, { status: 410 });
    }

    const passwordHash = await hash(password, 12);

    // Créer le compte + marquer l'invitation comme utilisée (transaction)
    await prisma.$transaction([
      prisma.user.create({
        data: {
          email: invitation.email,
          firstName,
          name,
          password: passwordHash,
          role: invitation.role,
          isActive: true,
        },
      }),
      prisma.invitation.update({
        where: { token },
        data: { usedAt: new Date() },
      }),
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return NextResponse.json(
        { error: "Un compte existe déjà avec cet email." },
        { status: 409 }
      );
    }
    console.error("[activate] Erreur:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
