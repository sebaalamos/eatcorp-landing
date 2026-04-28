import { Check, X, Minus } from 'lucide-react'

type Cell = 'yes' | 'no' | 'partial'

const rows: { feature: string; manual: Cell; generic: Cell; eatcorp: Cell }[] = [
  { feature: 'Específico para restaurantes', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'Multi-app integrado (compras + tareas + RRSS + ...)', manual: 'no', generic: 'partial', eatcorp: 'yes' },
  { feature: 'Soporte y UI en castellano', manual: 'partial', generic: 'partial', eatcorp: 'yes' },
  { feature: 'Hecho en Chile, datos en Chile', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'IA para redes sociales', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'Lotes de pago bancario (export Excel)', manual: 'partial', generic: 'no', eatcorp: 'yes' },
  { feature: 'Permisos granulares por app', manual: 'no', generic: 'partial', eatcorp: 'yes' },
  { feature: 'Recepción de OC con detección de discrepancias', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'Setup en menos de 30 minutos', manual: 'partial', generic: 'no', eatcorp: 'yes' },
]

const columns = [
  {
    key: 'manual' as const,
    title: 'Excel + WhatsApp',
    subtitle: 'El método tradicional',
    accent: 'border-slate-200 bg-slate-50',
    titleColor: 'text-slate-700',
    subColor: 'text-slate-500',
  },
  {
    key: 'generic' as const,
    title: 'Software genérico',
    subtitle: 'ERP, CRM globales',
    accent: 'border-slate-200 bg-slate-50',
    titleColor: 'text-slate-700',
    subColor: 'text-slate-500',
  },
  {
    key: 'eatcorp' as const,
    title: 'EatCorp',
    subtitle: 'Hecho para ti',
    accent: 'border-emerald-300 bg-emerald-50/60',
    titleColor: 'text-emerald-700',
    subColor: 'text-emerald-600',
    highlight: true,
  },
]

function CellIcon({ value, size = 'md' }: { value: Cell; size?: 'md' | 'sm' }) {
  const dim = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'
  const icon = size === 'sm' ? 12 : 16
  if (value === 'yes')
    return (
      <div className={`${dim} rounded-full bg-emerald-100 flex items-center justify-center`}>
        <Check size={icon} className="text-emerald-700" />
      </div>
    )
  if (value === 'no')
    return (
      <div className={`${dim} rounded-full bg-red-100 flex items-center justify-center`}>
        <X size={icon} className="text-red-600" />
      </div>
    )
  return (
    <div className={`${dim} rounded-full bg-amber-100 flex items-center justify-center`}>
      <Minus size={icon} className="text-amber-700" />
    </div>
  )
}

export function Comparison() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide">
            Comparativa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Por qué EatCorp?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comparado con cómo se opera hoy en la mayoría de restaurantes.
          </p>
        </div>

        <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700 w-2/5">Característica</th>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={`text-center py-4 px-3 text-sm font-semibold ${c.titleColor} ${c.highlight ? 'bg-emerald-50/60' : ''}`}
                  >
                    <div>{c.title}</div>
                    <div className={`text-[10px] font-normal mt-0.5 uppercase tracking-wider ${c.subColor}`}>{c.subtitle}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={`border-b border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                  <td className="py-4 px-6 text-sm text-slate-800 font-medium">{r.feature}</td>
                  <td className="py-4 px-3"><div className="flex justify-center"><CellIcon value={r.manual} /></div></td>
                  <td className="py-4 px-3"><div className="flex justify-center"><CellIcon value={r.generic} /></div></td>
                  <td className="py-4 px-3 bg-emerald-50/60"><div className="flex justify-center"><CellIcon value={r.eatcorp} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {columns.map((c) => (
            <div
              key={c.key}
              className={`relative rounded-2xl border-2 shadow-md overflow-hidden ${c.highlight ? 'border-emerald-400' : 'border-slate-200'}`}
            >
              {c.highlight && (
                <div className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                  Recomendado
                </div>
              )}
              <div className={`px-5 py-4 border-b ${c.highlight ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
                <h3 className={`text-lg font-bold ${c.titleColor}`}>{c.title}</h3>
                <p className={`text-[11px] uppercase tracking-wider font-semibold ${c.subColor}`}>{c.subtitle}</p>
              </div>
              <ul className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <li key={r.feature} className="flex items-center gap-3 px-5 py-3">
                    <CellIcon value={r[c.key]} size="sm" />
                    <span className="text-sm text-slate-700 flex-1 leading-snug">{r.feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Sí</div>
          <div className="flex items-center gap-1.5"><Minus size={14} className="text-amber-600" /> Parcial</div>
          <div className="flex items-center gap-1.5"><X size={14} className="text-red-600" /> No</div>
        </div>
      </div>
    </section>
  )
}
