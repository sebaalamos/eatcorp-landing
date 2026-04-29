const steps = [
  {
    n: '01',
    title: 'Activa las apps que necesitas',
    description: 'Sin instalación. Elige solo las apps que tu restorán usa. Puedes activar más después en cualquier momento.',
    detail: '6 apps disponibles — más en camino',
  },
  {
    n: '02',
    title: 'Invita a tu equipo',
    description: 'Cada persona con su rol por app. Cocinero ve TaskEat, recepcionista usa BuyEat, admin tiene visibilidad total.',
    detail: 'Roles granulares y permisos por app',
  },
  {
    n: '03',
    title: 'Opera mejor desde el día 1',
    description: 'Datos integrados entre apps. Lo que pasa en BuyEat se refleja en tu dashboard. Tu equipo trabaja en lo que importa.',
    detail: 'Setup completo en menos de 30 minutos',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-brand-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Cómo funciona
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Listo en 3 pasos
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Sin migración compleja. Sin consultorías. Sin contratos largos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-brand-900 rounded-2xl border border-slate-800 p-8 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 transition-all">
              <div className="text-7xl font-bold text-primary-500/20 mb-4 leading-none">{s.n}</div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{s.description}</p>
              <div className="text-sm font-medium text-primary-300 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-400"></span>
                {s.detail}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 text-2xl text-slate-700 z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
