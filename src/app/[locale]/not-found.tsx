import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center space-y-8">

        {/* SVG 404 stylisé avec feuilles */}
        <div className="flex justify-center" aria-hidden="true">
          <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-xs">

            {/* Chiffres 404 */}
            <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
              fontFamily="Georgia, serif" fontSize="110" fontWeight="bold"
              fill="#d4e8dd" letterSpacing="-6">
              404
            </text>

            {/* Feuille 1 — grande, haut gauche */}
            <path d="M52 30 C52 30 28 55 38 82 C48 109 72 100 72 100 C72 100 96 75 86 48 C76 21 52 30 52 30Z"
              fill="#2d6a4f" opacity="0.85" />
            <path d="M52 30 L72 100" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" />

            {/* Feuille 2 — moyenne, haut centre */}
            <path d="M148 14 C148 14 132 34 138 54 C144 74 162 68 162 68 C162 68 178 48 172 28 C166 8 148 14 148 14Z"
              fill="#52b788" opacity="0.7" />
            <path d="M148 14 L162 68" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" />

            {/* Feuille 3 — grande, haut droite */}
            <path d="M268 22 C268 22 244 47 254 74 C264 101 288 92 288 92 C288 92 312 67 302 40 C292 13 268 22 268 22Z"
              fill="#2d6a4f" opacity="0.9" />
            <path d="M268 22 L288 92" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" />

            {/* Petite feuille — bas gauche */}
            <path d="M30 130 C30 130 18 146 24 160 C30 174 44 170 44 170 C44 170 56 154 50 140 C44 126 30 130 30 130Z"
              fill="#74c69d" opacity="0.6" />
            <path d="M30 130 L44 170" stroke="#52b788" strokeWidth="1" strokeLinecap="round" />

            {/* Petite feuille — bas droite */}
            <path d="M282 138 C282 138 270 154 276 168 C282 182 296 178 296 178 C296 178 308 162 302 148 C296 134 282 138 282 138Z"
              fill="#74c69d" opacity="0.6" />
            <path d="M282 138 L296 178" stroke="#52b788" strokeWidth="1" strokeLinecap="round" />

            {/* Petite feuille — milieu bas */}
            <path d="M200 150 C200 150 190 162 194 174 C198 186 210 182 210 182 C210 182 220 170 216 158 C212 146 200 150 200 150Z"
              fill="#52b788" opacity="0.5" />
            <path d="M200 150 L210 182" stroke="#2d6a4f" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>

        {/* Texte */}
        <div className="space-y-3">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-neutral-800">
            Oups, cette page est introuvable
          </h1>
          <p className="text-neutral-500 text-base italic">
            &ldquo;Même les meilleures semences ne poussent pas partout.&rdquo;
          </p>
          <p className="text-neutral-400 text-sm">
            La page que vous cherchez a peut-être été déplacée, renommée ou n&apos;existe pas.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/fr" className="btn btn-primary">
            ← Retour à l&apos;accueil
          </Link>
          <Link href="/fr/contact" className="btn btn-secondary text-primary-700">
            Nous contacter
          </Link>
        </div>

        {/* Liens rapides */}
        <div className="pt-4 border-t border-primary-100">
          <p className="text-xs text-neutral-400 mb-3 font-semibold uppercase tracking-wide">
            Pages principales
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {[
              { href: "/fr/mouvement", label: "Le mouvement" },
              { href: "/fr/impact", label: "Notre impact" },
              { href: "/fr/programmes/cifap", label: "CIFAP" },
              { href: "/fr/ressources/faq", label: "FAQ" },
              { href: "/fr/agir/rejoindre", label: "Rejoindre" },
              { href: "/fr/agir/donner", label: "Donner" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-primary-700 hover:text-primary-500 hover:underline
                           transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
