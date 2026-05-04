type Stat = {
  number: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    number: '6',
    label: 'Apps integradas',
    description: 'BuyEat, TaskEat, LikeEat, MaintainEat, BookEat y StaffEat — todo conectado.',
  },
  {
    number: '30 min',
    label: 'Setup completo',
    description: 'Activa apps, invita a tu equipo y opera el mismo día.',
  },
  {
    number: '14 días',
    label: 'Gratis',
    description: 'Sin tarjeta de crédito, sin compromiso, sin letra chica.',
  },
  {
    number: '24h',
    label: 'Soporte',
    description: 'En castellano, en horario hábil, con personas reales.',
  },
]

export function Stats() {
  return (
    <section className="py-20 px-4 bg-brand-950 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ number, label, description }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-800 bg-brand-900/40 p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-300 leading-none mb-1 tracking-tight">
                {number}
              </div>
              <div className="text-sm font-semibold text-slate-100 mb-2">{label}</div>
              <div className="text-sm text-slate-400 leading-relaxed">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
