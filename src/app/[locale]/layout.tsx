import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import BottomNav from "@/components/layout/BottomNav";

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
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        {children}
        <BottomNav />
      </NextIntlClientProvider>

      {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/plausible.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
