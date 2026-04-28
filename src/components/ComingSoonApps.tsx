import { CreditCard, QrCode, BarChart3, Lock } from 'lucide-react'

type Upcoming = {
  icon: typeof CreditCard
  name: string
  description: string
  eta: string
  color: string
  wireframe: 'pos' | 'menu' | 'analytics'
}

const upcoming: Upcoming[] = [
  {
    icon: CreditCard,
    name: 'PayEat',
    description: 'Cobros con tarjeta + propinas digitales',
    eta: 'Q3 2026',
    color: 'from-emerald-500 to-teal-500',
    wireframe: 'pos',
  },
  {
    icon: QrCode,
    name: 'MenuEat',
    description: 'Carta digital con QR + actualizaciones en vivo',
    eta: 'Q4 2026',
    color: 'from-orange-500 to-red-500',
    wireframe: 'menu',
  },
  {
    icon: BarChart3,
    name: 'DataEat',
    description: 'Analytics avanzado + insights con IA',
    eta: '2027',
    color: 'from-violet-500 to-purple-500',
    wireframe: 'analytics',
  },
]

export function ComingSoonApps() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wide">
            Próximamente
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Lo que viene en el roadmap
          </h2>
          <p className="text-lg text-slate-600">
            Apps en desarrollo basadas en feedback de nuestros restaurantes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {upcoming.map((app) => {
            const Icon = app.icon
            return (
              <div
                key={app.name}
                className="relative bg-white rounded-xl border-2 border-dashed border-slate-300 overflow-hidden group hover:border-slate-400 transition"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.color} opacity-60`}></div>

                <Wireframe type={app.wireframe} />

                <div className="p-6 pt-4 relative">
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    <Lock size={10} />
                    {app.eta}
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-md mb-3 opacity-80 group-hover:opacity-100 transition`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{app.name}</h3>
                  <p className="text-sm text-slate-600">{app.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          ¿Tienes una idea? <a href="mailto:hola@eatcorp.cl" className="text-emerald-700 hover:underline font-medium">Cuéntanos</a> qué app necesitas.
        </p>
      </div>
    </section>
  )
}

function Wireframe({ type }: { type: Upcoming['wireframe'] }) {
  if (type === 'pos') {
    return (
      <div className="h-32 px-5 pt-4 pb-2 bg-gradient-to-b from-slate-100/60 to-transparent">
        <div className="grid grid-cols-3 gap-1.5 opacity-40">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded border-2 border-dashed border-emerald-400/60 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400/40"></div>
            </div>
          ))}
        </div>
        <div className="mt-2 h-3 rounded border-2 border-dashed border-emerald-400/60 opacity-40 flex items-center justify-end px-1">
          <div className="w-8 h-1 bg-emerald-400/60 rounded"></div>
        </div>
      </div>
    )
  }

  if (type === 'menu') {
    return (
      <div className="h-32 px-5 pt-4 pb-2 bg-gradient-to-b from-slate-100/60 to-transparent">
        <div className="grid grid-cols-2 gap-1.5 opacity-40">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded border-2 border-dashed border-orange-400/60 p-1.5 flex gap-1.5"
            >
              <div className="w-6 h-6 rounded bg-orange-300/40 flex-shrink-0"></div>
              <div className="flex-1 space-y-1 pt-0.5">
                <div className="h-1 w-3/4 bg-orange-400/40 rounded"></div>
                <div className="h-1 w-1/2 bg-orange-400/30 rounded"></div>
                <div className="h-1 w-1/3 bg-orange-500/50 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // analytics
  return (
    <div className="h-32 px-5 pt-4 pb-2 bg-gradient-to-b from-slate-100/60 to-transparent">
      <div className="opacity-40 h-full flex flex-col">
        <div className="flex justify-between items-end h-16 gap-1 border-b-2 border-dashed border-violet-400/60 pb-0.5">
          {[40, 65, 50, 80, 35, 90, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t border-2 border-dashed border-violet-400/60 bg-violet-200/30"
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>
        <div className="flex gap-1 mt-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 h-3 rounded border-2 border-dashed border-violet-400/60 flex items-center justify-center">
              <div className="w-2 h-1 bg-violet-400/40 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
