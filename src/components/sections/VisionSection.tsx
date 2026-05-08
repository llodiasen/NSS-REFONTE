// NOUVEAU — P1-AJOUTÉ — 2C : Notre vision (texte PDF officiel NSS)
import Container from "@/components/ui/Container";
import { Eye } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="bg-primary-900 py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Icône */}
          <div className="inline-flex items-center justify-center w-14 h-14
                          rounded-full bg-white/10 border border-white/20 mb-8">
            <Eye size={26} className="text-primary-300" aria-hidden="true" />
          </div>

          {/* Eyebrow */}
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Notre vision
          </p>

          {/* Texte officiel NSS */}
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
            NSS œuvre pour une Afrique où les femmes rurales, impliquées dans
            la prise de décision, cultivent, transforment, vendent et consomment
            les produits de l&apos;agriculture familiale tout en préservant
            l&apos;environnement.
          </p>

          {/* Ligne décorative */}
          <div className="mt-10 flex items-center justify-center gap-4" aria-hidden="true">
            <div className="h-px w-16 bg-primary-700" />
            <span className="text-primary-300 font-display text-sm italic">
              Nous Sommes la Solution — depuis 2011
            </span>
            <div className="h-px w-16 bg-primary-700" />
          </div>
        </div>
      </Container>
    </section>
  );
}
