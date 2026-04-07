import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nous Sommes la Solution (NSS) — wasafrica.org",
    template: "%s | NSS wasafrica.org",
  },
  description:
    "Mouvement panafricain de 175 000 femmes rurales engagées pour la souveraineté alimentaire et l'agroécologie. Par nous-mêmes. Pour nous-mêmes. En nous-mêmes.",
  metadataBase: new URL("https://wasafrica.org"),
  openGraph: {
    siteName: "Nous Sommes la Solution (NSS)",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nous Sommes la Solution (NSS) — Mouvement panafricain de femmes rurales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Fonts — DM Serif Display + Outfit */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: "#fff", color: "#111" }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/plausible.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
