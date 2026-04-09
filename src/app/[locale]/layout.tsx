import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
  DM_Serif_Display,
  Outfit,
  Cormorant_Garamond,
  DM_Sans,
} from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

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

  const fontVars = [
    dmSerifDisplay.variable,
    outfit.variable,
    cormorantGaramond.variable,
    dmSans.variable,
  ].join(" ");

  return (
    <html lang={locale} className={fontVars}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
