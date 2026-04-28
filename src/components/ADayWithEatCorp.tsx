import { Truck, CheckSquare, ChefHat, Camera, Wrench } from 'lucide-react'

const moments = [
  {
    time: '08:00',
    icon: Truck,
    title: 'Llega el reparto',
    description: 'Recepcionista escanea la factura en BuyEat. Discrepancias detectadas automáticamente.',
    app: 'BuyEat',
    appColor: 'bg-blue-500',
  },
  {
    time: '11:00',
    icon: CheckSquare,
    title: 'Aprobación de pagos',
    description: 'Admin revisa lote del día. Aprueba en 5 minutos lo que antes tomaba 2 horas.',
    app: 'BuyEat',
    appColor: 'bg-blue-500',
  },
  {
    time: '14:00',
    icon: ChefHat,
    title: 'Cocina en marcha',
    description: 'Equipo actualiza tareas en TaskEat. Visibilidad híbrida — cada uno ve solo lo suyo.',
    app: 'TaskEat',
    appColor: 'bg-emerald-500',
  },
  {
    time: '17:00',
    icon: Camera,
    title: 'Post para la noche',
    description: 'LikeEat sugiere el post de hoy basado en efeméride chilena. Aprobado en un click.',
    app: 'LikeEat',
    appColor: 'bg-pink-500',
  },
  {
    time: '23:00',
    icon: Wrench,
    title: 'Cierre y revisiones',
    description: 'MaintainEat alerta que la cámara fría necesita revisión. Técnico agendado para mañana.',
    app: 'MaintainEat',
    appColor: 'bg-amber-500',
  },
]

export function ADayWithEatCorp() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide">
            Un día con EatCorp
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Así se vive un día normal
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Desde que abre el restaurante hasta que cierra, cada momento conectado.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 -translate-x-px"></div>

          <div className="space-y-12">
            {moments.map((m, i) => {
              const Icon = m.icon
              const isLeft = i % 2 === 0
              return (
                <div key={m.time} className={`relative flex md:items-center gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block flex-1"></div>

                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-emerald-500 shadow-lg flex items-center justify-center z-10">
                    <Icon size={20} className="text-emerald-700" />
                  </div>

                  <div className="ml-20 md:ml-0 flex-1">
                    <div className={`bg-white border border-slate-200 rounded-xl p-5 shadow-md ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{m.time}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider text-white ${m.appColor} px-2 py-0.5 rounded`}>{m.app}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{m.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
