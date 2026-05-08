import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

const createSchema = z.object({
  title: z.string().min(3, "Titre requis"),
  slug: z.string().min(3, "Slug requis").regex(/^[a-z0-9-]+$/, "Slug invalide"),
  content: z.string().min(1, "Contenu requis"),
  excerpt: z.string().max(300).optional(),
  coverUrl: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(false),
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

export async function POST(request: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Accès refusé." }, { status: 403 });

  const body = await request.json();
  const parsed = createSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { title, slug, content, excerpt, coverUrl, published } = parsed.data;

  try {
    const article = await prisma.article.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt ?? null,
        coverUrl: coverUrl || null,
        published,
        publishedAt: published ? new Date() : null,
      },
    });
    return NextResponse.json({ success: true, article }, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return NextResponse.json({ error: "Ce slug est déjà utilisé." }, { status: 409 });
    }
    console.error("[admin/articles POST]", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
