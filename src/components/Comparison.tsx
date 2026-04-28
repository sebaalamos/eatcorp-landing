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

function CellIcon({ value }: { value: Cell }) {
  if (value === 'yes')
    return (
      <div className="flex justify-center">
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
          <Check size={16} className="text-emerald-700" />
        </div>
      </div>
    )
  if (value === 'no')
    return (
      <div className="flex justify-center">
        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
          <X size={16} className="text-red-600" />
        </div>
      </div>
    )
  return (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
        <Minus size={16} className="text-amber-700" />
      </div>
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

        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Característica</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-700 min-w-[140px]">
                    <div>Excel + WhatsApp</div>
                    <div className="text-[10px] font-normal text-slate-500 mt-0.5 uppercase tracking-wider">El método tradicional</div>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-700 min-w-[140px]">
                    <div>Software genérico</div>
                    <div className="text-[10px] font-normal text-slate-500 mt-0.5 uppercase tracking-wider">ERP, CRM globales</div>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-bold text-emerald-700 min-w-[140px] bg-emerald-50/50">
                    <div className="flex items-center justify-center gap-2">
                      <svg viewBox="0 0 64 64" width="20" height="20"><rect width="64" height="64" rx="13" fill="#a31818"/><path d="M19 16 H45 V24 H27.5 V28 H41 V35 H27.5 V40 H45 V48 H19 Z" fill="#fef3e2"/></svg>
                      EatCorp
                    </div>
                    <div className="text-[10px] font-normal text-emerald-600 mt-0.5 uppercase tracking-wider">Hecho para ti</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={`border-b border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                    <td className="py-4 px-6 text-sm text-slate-800 font-medium">{r.feature}</td>
                    <td className="py-4 px-4"><CellIcon value={r.manual} /></td>
                    <td className="py-4 px-4"><CellIcon value={r.generic} /></td>
                    <td className="py-4 px-4 bg-emerald-50/50"><CellIcon value={r.eatcorp} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Sí</div>
          <div className="flex items-center gap-1.5"><Minus size={14} className="text-amber-600" /> Parcial</div>
          <div className="flex items-center gap-1.5"><X size={14} className="text-red-600" /> No</div>
        </div>
      </div>
    </section>
  )
}
