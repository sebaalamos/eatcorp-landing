import { Shield, Headset, Zap, Lock } from 'lucide-react'

const items = [
  { icon: Headset, label: 'Soporte en castellano', sub: 'Respuesta en 24h hábiles' },
  { icon: Lock, label: 'TLS + RLS', sub: 'Encriptado end-to-end' },
  { icon: Shield, label: 'Backups diarios', sub: '30 días de retención' },
  { icon: Zap, label: 'Uptime 99.9%', sub: 'Monitoreo 24/7' },
]

const tech = ['Supabase', 'Vercel', 'Resend', 'Sentry']

export function TrustBar() {
  return (
    <section className="py-16 px-4 bg-brand-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-start gap-3 p-4 bg-brand-800/60 rounded-xl border border-slate-700">
                <div className="w-10 h-10 rounded-lg bg-brand-950 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary-300" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-100">{item.label}</div>
                  <div className="text-xs text-slate-400">{item.sub}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Construido con tecnología confiable
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
            {tech.map((t) => (
              <div key={t} className="font-mono text-sm text-slate-400 px-3 py-1 border border-slate-700 bg-brand-950/40 rounded">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
