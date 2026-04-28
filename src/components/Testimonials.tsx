import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Antes nos quedábamos hasta tarde cuadrando facturas en Excel. Ahora la administración aprueba todo el lote en 10 minutos y el archivo bancario sale solo. Tiempo recuperado para lo que importa.',
    role: 'Equipo de operaciones',
    restaurant: 'El Toro',
    location: 'Las Condes',
    initials: 'ET',
    gradient: 'from-amber-400 to-orange-500',
    apps: ['BuyEat', 'TaskEat'],
  },
  {
    quote:
      'LikeEat nos genera el plan mensual de Instagram con efemérides chilenas que ni se nos habrían ocurrido. Aprobamos posts en segundos en lugar de pasarnos horas pensando qué publicar.',
    role: 'Equipo de marketing',
    restaurant: 'Tigre',
    location: 'Bellavista',
    initials: 'TG',
    gradient: 'from-primary-400 to-teal-500',
    apps: ['LikeEat', 'TaskEat'],
  },
  {
    quote:
      'Tengo varios locales y antes era imposible saber qué pasaba en cada uno. Ahora veo todo: pagos pendientes, tareas, posts, mantenciones. Hecho en Chile, soporte en castellano, perfecto para nosotros.',
    role: 'Dueña',
    restaurant: 'Restaurante familiar',
    location: 'Anonimato preferido · multi-local',
    initials: 'DR',
    gradient: 'from-pink-400 to-rose-500',
    apps: ['BuyEat', 'TaskEat', 'LikeEat', 'MaintainEat'],
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-brand-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Lo que dicen los restoranes
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Operadores reales operando con EatCorp todos los días.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.restaurant}
              className="bg-gradient-to-br from-brand-800 to-brand-900 rounded-2xl border border-slate-700 p-6 shadow-md hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 transition-all flex flex-col"
            >
              <Quote size={28} className="text-primary-400 mb-4 opacity-80" />

              <p className="text-slate-200 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold shadow-md flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-100 text-sm">{t.restaurant}</div>
                  <div className="text-xs text-slate-400 truncate">{t.role}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{t.location}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {t.apps.map((app) => (
                  <span
                    key={app}
                    className="text-[10px] font-semibold uppercase tracking-wide text-primary-300 bg-primary-500/15 border border-primary-500/30 px-2 py-0.5 rounded"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
