// NOUVEAU — P1-AJOUTÉ — 2E : CTA intermédiaire entre Programmes et Actualités
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTAIntermediary({ locale }: { locale: string }) {
  return (
    <section className="bg-white py-10 border-y border-neutral-100">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <p className="text-neutral-700 font-semibold text-lg">
            Vous souhaitez vous engager aux côtés du mouvement ?
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Link href={`/${locale}/agir/rejoindre`} className="btn btn-primary">
              Rejoindre le mouvement
              <ArrowRight size={14} />
            </Link>
            <Link href={`/${locale}/agir/donner`} className="btn btn-secondary text-neutral-700">
              Soutenir NSS
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
