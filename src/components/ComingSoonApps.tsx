import { CreditCard, QrCode, BarChart3, Lock } from 'lucide-react'

const upcoming = [
  {
    icon: CreditCard,
    name: 'PayEat',
    description: 'Cobros con tarjeta + propinas digitales',
    eta: 'Q3 2026',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: QrCode,
    name: 'MenuEat',
    description: 'Carta digital con QR + actualizaciones en vivo',
    eta: 'Q4 2026',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    name: 'DataEat',
    description: 'Analytics avanzado + insights con IA',
    eta: '2027',
    color: 'from-violet-500 to-purple-500',
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
                className="relative bg-white rounded-xl border-2 border-dashed border-slate-300 p-6 overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.color} opacity-60`}></div>

                <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  <Lock size={10} />
                  {app.eta}
                </div>

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-md mb-4 opacity-80 group-hover:opacity-100 transition`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{app.name}</h3>
                <p className="text-sm text-slate-600">{app.description}</p>
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
