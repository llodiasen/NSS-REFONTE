import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXTAUTH_URL ?? "https://wasafrica.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/fr/membre/",
          "/en/membre/",
          "/pt/membre/",
          "/fr/admin/",
          "/en/admin/",
          "/pt/admin/",
          "/fr/invite/",
          "/en/invite/",
          "/pt/invite/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
