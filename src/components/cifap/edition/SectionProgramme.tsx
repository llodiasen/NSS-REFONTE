import {
  Sprout, Archive, FlaskConical, ShieldCheck, Scissors, RefreshCw,
  ShieldAlert, Leaf, Wheat, Globe, Layers, Droplets, Package,
  type LucideIcon,
} from 'lucide-react'
import type { CifapProgrammeItem } from '@/lib/cifap-editions'

const ICONS: Record<string, LucideIcon> = {
  Sprout, Archive, FlaskConical, ShieldCheck, Scissors, RefreshCw,
  ShieldAlert, Leaf, Wheat, Globe, Layers, Droplets, Package,
}

interface Props {
  items: CifapProgrammeItem[]
}

export default function SectionProgramme({ items }: Props) {
  return (
    <section id="programme" aria-labelledby="prog-titre">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4"
         style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Programme technique
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => {
          const Icon = ICONS[item.icone] ?? Sprout
          return (
            <div
              key={item.titre}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-nss-clair flex items-center justify-center mb-4">
                <Icon size={20} style={{ color: '#166534' }} aria-hidden="true" />
              </div>
              <h3
                className="font-semibold text-gray-900 text-lg mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.titre}
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
