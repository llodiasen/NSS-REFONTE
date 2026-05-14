import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getLocale } from "next-intl/server";
import {
  DM_Serif_Display,
  Outfit,
  Cormorant_Garamond,
  DM_Sans,
} from "next/font/google";
import PWARegister from "@/components/PWARegister";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#045627",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NSS",
  },
  icons: {
    apple: "/images/pwa/apple-touch-icon.png",
  },
};

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "block",   // évite le flash Georgia sur les gros titres
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "block",   // évite le flash Georgia sur les gros titres
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: false,
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  const fontVars = [
    dmSerifDisplay.variable,
    outfit.variable,
    cormorantGaramond.variable,
    dmSans.variable,
  ].join(" ");

  return (
    <html lang={locale} className={fontVars}>
      <body style={{ margin: 0, background: "#fff", color: "#111" }}>
        {children}
        <PWARegister />
      </body>
    </html>
  );
}
