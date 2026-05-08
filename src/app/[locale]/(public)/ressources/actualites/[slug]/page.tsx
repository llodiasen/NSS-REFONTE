import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES, ALL_CATEGORIES, getArticleBySlug } from "@/data/articles";
import BlogArticleSidebar from "@/components/sections/blog/BlogArticleSidebar";
import ArticleGallery from "@/components/sections/blog/ArticleGallery";
import CloudinaryGallery from "@/components/sections/blog/CloudinaryGallery";
import ArticleMeta from "@/components/sections/blog/ArticleMeta";

export const dynamic = "force-dynamic";

const BADGE: Record<string, { bg: string; color: string }> = {
  Presse:      { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Partenariat: { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Formation:   { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Plaidoyer:   { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Mouvement:   { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Événement:   { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
};

function articleImage(category: string, coverUrl: string | null): string {
  if (coverUrl) return coverUrl;
  const map: Record<string, string> = {
    Formation:   "/images/actualites/cifap-2024.jpg",
    Plaidoyer:   "/images/galerie/plaidoyer-1.jpg",
    Mouvement:   "/images/actualites/rencontre-2025.jpg",
    Presse:      "/images/actualites/pescara-2024.jpg",
    Partenariat: "/images/galerie/leader-1.jpg",
  };
  return map[category] ?? "/images/galerie/rencontre-1.jpg";
}

function readingTime(text: string): number {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
}


/** Render **bold** inline within a string */
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part);
}

/** Render markdown-style blocks: ## h2, > blockquote, regular paragraphs */
function renderContent(content: string, dropCap = true): React.ReactNode[] {
  const blocks = content.split(/\n\n+/).filter(Boolean);
  const nodes: React.ReactNode[] = [];
  let firstText = dropCap;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();

    if (block.startsWith("```")) continue;

    if (block.startsWith("## ")) {
      nodes.push(
        <h2 key={i} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 400, color: "#071A10", marginBottom: "16px", marginTop: "40px", lineHeight: 1.25 }}>
          {block.replace(/^## /, "")}
        </h2>
      );
      continue;
    }

    if (block.startsWith("> ")) {
      nodes.push(
        <blockquote key={i} style={{ borderLeft: "2px solid #1D9E75", padding: "4px 0 4px 24px", margin: "36px 0" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 400, fontStyle: "italic", color: "#2d5a3d", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>
            {renderInline(block.replace(/^> /, ""))}
          </p>
        </blockquote>
      );
      continue;
    }

    if (firstText) {
      firstText = false;
      const first = block.charAt(0);
      const rest = block.slice(1);
      nodes.push(
        <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.85, color: "#1a1a1a", marginBottom: "24px", textAlign: "justify" }}>
          <span aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontSize: "60px", fontWeight: 400, lineHeight: 0.75, color: "var(--green-700)", float: "left", marginRight: "8px", marginTop: "8px" }}>{first}</span>
          {renderInline(rest)}
        </p>
      );
      continue;
    }

    nodes.push(
      <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.85, color: "#1a1a1a", marginBottom: "24px", textAlign: "justify" }}>
        {renderInline(block)}
      </p>
    );
  }
  return nodes;
}

interface Props { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const canonical = article.canonical;

  return {
    title: `${article.title} — NSS | wasafrica.org`,
    description: article.excerpt,
    robots: article.robots ?? "index, follow",
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author] : undefined,
      tags: article.tags,
      locale: "fr_SN",
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ActualitesSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const minutes = readingTime(article.content);
  const badge = BADGE[article.category] ?? { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" };
  const coverSrc = articleImage(article.category, article.coverUrl);

  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 5);
  const sorted = [...ARTICLES].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const idx = sorted.findIndex((a) => a.slug === slug);
  const prev = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const next = idx > 0 ? sorted[idx - 1] : null;

  const counts = ARTICLES.reduce<Record<string, number>>((acc, a) => {
    acc[a.category] = (acc[a.category] ?? 0) + 1;
    return acc;
  }, {});
  const categories = ALL_CATEGORIES.map((name) => ({ name, count: counts[name] ?? 0 }));

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "var(--green-900)", position: "relative", overflow: "hidden", minHeight: "360px" }}>
        <Image src={coverSrc} alt="" aria-hidden="true" fill style={{ objectFit: "cover", objectPosition: "center 30%", zIndex: 0 }} sizes="100vw" priority />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: ["linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(3,8,5,0.95) 40%, rgba(6,14,9,0.88) 65%, rgba(0,0,0,0.70) 100%)", "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, transparent 35%, rgba(0,0,0,0.35) 100%)", "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(45,154,106,0.08), transparent 65%)"].join(", "), zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--container-max)", margin: "0 auto", padding: "48px var(--container-pad) 32px" }}>
          <div style={{ maxWidth: "820px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Accueil</Link>
              {" / "}
              <Link href={`/${locale}/ressources/actualites`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Actualités</Link>
              {" / "}
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Article</span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", background: badge.bg, color: badge.color, borderRadius: "20px", padding: "4px 12px" }}>
                {article.category}
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 400, lineHeight: 1.15, color: "#ffffff", marginBottom: "0" }}>
              {article.title}
            </h1>
            <ArticleMeta date={formatDate(article.publishedAt)} readTime={`${minutes} min de lecture`} location={article.location} dark />
          </div>
        </div>
      </section>

      {/* ── ARTICLE + SIDEBAR ── */}
      <div style={{ background: "#ffffff" }}>
        <div className="article-layout" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px var(--container-pad)", display: "grid", gridTemplateColumns: "1fr 340px", gap: "64px", alignItems: "start" }}>

          <article>

            {/* Image de couverture */}
            <figure style={{ margin: "0 0 40px" }}>
              <div className="article-cover" style={{ borderRadius: "12px", overflow: "hidden", height: "460px", position: "relative" }}>
                <Image src={coverSrc} alt={article.title} fill style={{ objectFit: "cover", objectPosition: "center 30%" }} sizes="(max-width: 768px) 100vw, 800px" priority />
              </div>
              {(article.stats?.length || article.coverCaption) && (
                <figcaption style={{ marginTop: "12px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0 24px" }}>
                  {article.stats?.map(({ label, value }, i) => (
                    <span key={label} style={{ display: "flex", alignItems: "baseline", gap: "6px", fontFamily: "var(--font-body)", fontSize: "13px", color: "#4b5563" }}>
                      {i > 0 && <span aria-hidden="true" style={{ color: "#d1d5db", marginRight: "0" }}>·</span>}
                      <strong style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 400, color: "#1D9E75", lineHeight: 1 }}>{value}</strong>
                      <span style={{ fontWeight: 500, textTransform: "lowercase", letterSpacing: "0.01em" }}>{label}</span>
                    </span>
                  ))}
                  {article.coverCaption && (
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#6b7280", fontStyle: "italic" }}>
                      {article.coverCaption}
                    </span>
                  )}
                </figcaption>
              )}
            </figure>

            {/* Contenu — avec injection [[GALLERY]], [[VIDEO]], [[PHOTO_1/2/3]] */}
            {(() => {
              const hasGallery = !!(article.cloudinaryImages?.length) && article.content.includes("[[GALLERY]]");
              const hasVideo   = !!article.videoUrl && article.content.includes("[[VIDEO]]");
              const hasVideos  = !!(article.videoUrls?.length);
              const hasPhotos  = !!(article.simpleImages?.length);

              if (!hasGallery && !hasVideo && !hasVideos && !hasPhotos) return renderContent(article.content);

              const MARKER_RE = /\[\[GALLERY\]\]|\[\[VIDEO\]\]|\[\[VIDEO_1\]\]|\[\[VIDEO_2\]\]|\[\[VIDEO_3\]\]|\[\[PHOTO_[1-9]\]\]/g;
              const parts = article.content.split(MARKER_RE);
              const markers: string[] = [];
              let m: RegExpExecArray | null;
              const re2 = new RegExp(MARKER_RE.source, "g");
              while ((m = re2.exec(article.content)) !== null) markers.push(m[0]);

              return (
                <>
                  {parts.map((part, i) => (
                    <span key={i}>
                      {renderContent(part, i === 0)}
                      {markers[i] === "[[GALLERY]]" && article.cloudinaryImages?.length && (
                        <CloudinaryGallery publicIds={article.cloudinaryImages} defaultCaption={article.cloudinaryGalleryCaption} />
                      )}
                      {markers[i] === "[[VIDEO]]" && article.videoUrl && (
                        <div style={{ margin: "32px 0", borderRadius: "10px", overflow: "hidden", background: "#000", lineHeight: 0 }}>
                          <video src={article.videoUrl} controls playsInline style={{ width: "100%", maxHeight: "480px", display: "block" }} />
                        </div>
                      )}
                      {/^\[\[VIDEO_[123]\]\]$/.test(markers[i] ?? "") && (() => {
                        const vidIdx = parseInt((markers[i] ?? "").replace(/\D/g, ""), 10) - 1;
                        const src = article.videoUrls?.[vidIdx];
                        return src ? (
                          <div style={{ margin: "32px 0", borderRadius: "10px", overflow: "hidden", background: "#000", lineHeight: 0 }}>
                            <video src={src} controls playsInline style={{ width: "100%", maxHeight: "480px", display: "block" }} />
                          </div>
                        ) : null;
                      })()}
                      {/^\[\[PHOTO_[1-9]\]\]$/.test(markers[i] ?? "") && (() => {
                        const idx2 = parseInt((markers[i] ?? "").replace(/\D/g, ""), 10) - 1;
                        const src = article.simpleImages?.[idx2];
                        return src ? (
                          <figure style={{ margin: "36px 0" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={src} alt="" style={{ width: "100%", borderRadius: "10px", display: "block", objectFit: "cover", maxHeight: "520px" }} loading="lazy" />
                          </figure>
                        ) : null;
                      })()}
                    </span>
                  ))}
                </>
              );
            })()}

            {/* Galerie vedette Cloudinary (hors contenu [[GALLERY]]) */}
            {article.cloudinaryImages?.length && !article.content.includes("[[GALLERY]]") && (
              <CloudinaryGallery
                publicIds={article.cloudinaryImages}
                defaultCaption={article.cloudinaryGalleryCaption}
              />
            )}

            {/* Galerie statique legacy */}
            {!article.cloudinaryImages?.length && article.gallery && article.gallery.length > 0 && (
              <ArticleGallery items={article.gallery} />
            )}

            {/* ── Auteur + Source ── */}
            {article.author && (
              <ArticleMeta
                author={article.author}
                sourceName={article.sourceName}
                sourceUrl={article.sourceUrl}
                location={article.location}
              />
            )}

            {/* Tags pills */}
            {article.tags && article.tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "40px" }}>
                {article.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "#1D9E75", background: "rgba(29,158,117,0.08)", border: "1px solid rgba(29,158,117,0.2)", borderRadius: "20px", padding: "4px 12px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Navigation prev/next */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", borderTop: "1px solid rgba(0,0,0,0.07)", marginTop: "48px", paddingTop: "32px", flexWrap: "wrap" }}>
              {prev ? (
                <Link href={`/${locale}/ressources/actualites/${prev.slug}`} style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", maxWidth: "44%", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "var(--text-muted)" }}>
                  ← <span style={{ color: "var(--text-primary)" }}>{prev.title}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link href={`/${locale}/ressources/actualites/${next.slug}`} style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", maxWidth: "44%", textAlign: "right", marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--text-primary)" }}>{next.title}</span> →
                </Link>
              )}
            </div>
          </article>

          {/* ── Sidebar ── */}
          <BlogArticleSidebar related={related} locale={locale} categories={categories} activeCategory={article.category} basePath="ressources/actualites" />
        </div>
      </div>

      {/* ── JSON-LD ── */}
      {article.canonical && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": article.title,
              "datePublished": article.publishedAt,
              "author": article.author ? { "@type": "Person", "name": article.author } : undefined,
              "publisher": article.sourceName
                ? { "@type": "Organization", "name": article.sourceName, "url": new URL(article.canonical).origin }
                : { "@type": "Organization", "name": "NSS — Nous Sommes la Solution", "url": "https://wasafrica.org" },
              "url": article.canonical,
              "keywords": article.tags ?? [],
            }),
          }}
        />
      )}

      <style>{`
        @media (max-width: 1024px) { .article-layout { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 768px)  { .article-layout { padding: 40px 24px !important; } .gallery-grid { grid-template-columns: 1fr !important; } .article-cover { height: 220px !important; } }
      `}</style>
    </>
  );
}
