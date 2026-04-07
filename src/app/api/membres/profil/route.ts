import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { profileSchema } from "@/lib/validations/auth";

export async function PATCH(request: NextRequest) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = profileSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { firstName, name, organisation, country, bio } = parsed.data;

    await prisma.user.update({
      where: { id: session.user.id },
      data: { firstName, name, organisation, country, bio },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[profil] Erreur:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
