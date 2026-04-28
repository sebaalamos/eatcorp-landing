import { Shield, Server, Zap, Lock } from 'lucide-react'

const items = [
  { icon: Server, label: 'Hosting Chile', sub: 'Datos en Santiago' },
  { icon: Lock, label: 'TLS + RLS', sub: 'Encriptado end-to-end' },
  { icon: Shield, label: 'Backups diarios', sub: '30 días de retención' },
  { icon: Zap, label: 'Uptime 99.9%', sub: 'Monitoreo 24/7' },
]

const tech = ['Supabase', 'Vercel', 'Resend', 'Sentry']

export function TrustBar() {
  return (
    <section className="py-16 px-4 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary-700" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-900">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Construido con tecnología confiable
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            {tech.map((t) => (
              <div key={t} className="font-mono text-sm text-slate-500 px-3 py-1 border border-slate-200 rounded">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
