import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import MediathequeHero from "@/components/mediatheque/MediathequeHero";
import MediathequeClient from "@/components/mediatheque/MediathequeClient";

export const metadata: Metadata = {
  title: "Vidéos | Médiathèque NSS",
  description:
    "Regardez les reportages, témoignages et formations filmées du réseau NSS — 340 vidéos disponibles.",
};

export default function MediathequePage() {
  return (
    <>
      <Header />
      <main>
        <MediathequeHero />
        <MediathequeClient />
      </main>
    </>
  );
}
