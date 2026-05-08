import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

const patchSchema = z.object({
  title: z.string().min(3, "Titre requis").optional(),
  slug: z.string().min(3, "Slug requis").regex(/^[a-z0-9-]+$/, "Slug invalide (minuscules, chiffres, tirets)").optional(),
  content: z.string().min(1, "Contenu requis").optional(),
  excerpt: z.string().max(300).optional(),
  coverUrl: z.string().url("URL invalide").optional().or(z.literal("")),
  published: z.boolean().optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") return null;
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
  if (!session) return NextResponse.json({ error: "Accès refusé." }, { status: 403 });

  const { id } = await params;
  const body = await request.json();
  const parsed = patchSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    const data = {
      ...parsed.data,
      coverUrl: parsed.data.coverUrl === "" ? null : parsed.data.coverUrl,
      ...(parsed.data.published === true && { publishedAt: new Date() }),
      ...(parsed.data.published === false && { publishedAt: null }),
    };

    const article = await prisma.article.update({ where: { id }, data });
    return NextResponse.json({ success: true, article });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
      if (error.code === "P2002") return NextResponse.json({ error: "Ce slug est déjà utilisé." }, { status: 409 });
    }
    console.error("[admin/articles PATCH]", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Accès refusé." }, { status: 403 });

  const { id } = await params;

  try {
    await prisma.article.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
    }
    console.error("[admin/articles DELETE]", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
