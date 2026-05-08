import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { Prisma } from "@prisma/client";

const patchSchema = z.object({
  action: z.enum(["role", "suspend", "reactivate"]),
  role: z.nativeEnum(Role).optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) return null;
  if (session.user.role !== "ADMIN") return null;
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, isActive: true },
  });
  if (!user || !user.isActive || user.role !== "ADMIN") return null;
  return session;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Accès refusé." }, { status: 403 });
  }

  const { id } = await params;
  const body = await request.json();
  const parsed = patchSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });
  }

  const { action, role } = parsed.data;

  // Empêcher l'admin de se modifier lui-même
  if (id === session.user.id) {
    return NextResponse.json({ error: "Vous ne pouvez pas modifier votre propre compte." }, { status: 400 });
  }

  try {
    if (action === "role" && role) {
      await prisma.user.update({ where: { id }, data: { role } });
    } else if (action === "suspend") {
      await prisma.user.update({ where: { id }, data: { isActive: false } });
    } else if (action === "reactivate") {
      await prisma.user.update({ where: { id }, data: { isActive: true } });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "Membre introuvable." }, { status: 404 });
    }
    console.error("[admin/membres PATCH]", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Accès refusé." }, { status: 403 });
  }

  const { id } = await params;

  if (id === session.user.id) {
    return NextResponse.json({ error: "Vous ne pouvez pas supprimer votre propre compte." }, { status: 400 });
  }

  try {
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "Membre introuvable." }, { status: 404 });
    }
    console.error("[admin/membres DELETE]", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
