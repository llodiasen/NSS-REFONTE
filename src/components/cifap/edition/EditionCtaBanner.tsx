import Link from 'next/link'

interface Props {
  locale: string
}

export default function EditionCtaBanner({ locale }: Props) {
  return (
    <div className="bg-nss-fonce rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <h3
          className="text-white font-bold text-xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Rejoindre le réseau NSS
        </h3>
        <p
          className="text-gray-300 text-sm mt-1"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          175 000 femmes qui nourrissent l&apos;Afrique — faites partie du mouvement.
        </p>
      </div>
      <Link
        href={`/${locale}/agir/rejoindre`}
        className="bg-white text-nss-fonce rounded-xl px-6 py-3 font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Adhérer maintenant →
      </Link>
    </div>
  )
}
