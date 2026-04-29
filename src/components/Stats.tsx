import { Sparkles, Languages, Zap } from 'lucide-react'

type Fact = {
  icon: typeof Sparkles
  title: string
  description: string
}

const facts: Fact[] = [
  {
    icon: Sparkles,
    title: 'Early access',
    description: 'Trabajando con los primeros restoranes en sumarse.',
  },
  {
    icon: Languages,
    title: 'Castellano nativo',
    description: 'UI, soporte y onboarding en castellano.',
  },
  {
    icon: Zap,
    title: 'Setup en <30 min',
    description: 'Activa apps, invita equipo y opera el mismo día.',
  },
]

export function Stats() {
  return (
    <section className="py-20 px-4 bg-brand-950 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facts.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-800 bg-brand-900/40 p-6 text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/15 border border-primary-500/30 mb-4">
                <Icon size={18} className="text-primary-300" />
              </div>
              <div className="text-xl font-semibold text-slate-100 mb-1.5 tracking-tight">{title}</div>
              <div className="text-sm text-slate-400 leading-relaxed">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
