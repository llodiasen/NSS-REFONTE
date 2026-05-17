import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import videos from "@/data/videos.json";

const BASE_URL = process.env.NEXTAUTH_URL ?? "https://wasafrica.org";
const LOCALES = ["fr", "en", "pt"];

function buildUrls(paths: string[], priority: number, changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    paths.map((path) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority,
    }))
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = buildUrls(
    [
      "",
      "/mouvement",
      "/mouvement/associations",
      "/mouvement/partenaires",
      "/mouvement/engagements",
      "/impact",
      "/programmes/cifap",
      "/programmes/emmap",
      "/ressources/faq",
      "/ressources/actualites",
      "/ressources/galerie",
      "/videos",
      "/agir/rejoindre",
      "/agir/donner",
      "/contact",
      "/mentions-legales",
      "/confidentialite",
    ],
    0.8,
    "weekly"
  );

  // Homepage priorité max
  const homepages = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }));

  // Articles
  const articlePages = LOCALES.flatMap((locale) =>
    ARTICLES.map((article) => ({
      url: `${BASE_URL}/${locale}/ressources/actualites/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Vidéos disponibles
  const videoSlugs = videos
    .filter((v) => v.statut === "disponible" && v.id)
    .map((v) => v.id as string);

  const videoPages = LOCALES.flatMap((locale) =>
    videoSlugs.map((id) => ({
      url: `${BASE_URL}/${locale}/videos#${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [...homepages, ...staticPages, ...articlePages, ...videoPages];
}
