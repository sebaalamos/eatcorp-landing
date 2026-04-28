const steps = [
  {
    n: '01',
    title: 'Activa las apps que necesitas',
    description: 'Sin instalación. Elige solo las apps que tu restaurante usa. Puedes activar más después en cualquier momento.',
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
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide">
            Cómo funciona
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Listo en 3 pasos
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sin migración compleja. Sin consultorías. Sin contratos largos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <div className="text-7xl font-bold text-emerald-100 mb-4 leading-none">{s.n}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{s.description}</p>
              <div className="text-sm font-medium text-emerald-700 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                {s.detail}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 text-2xl text-slate-300 z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
