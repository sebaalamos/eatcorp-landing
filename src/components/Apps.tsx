'use client'

import { ShoppingCart, CheckSquare, Share2, Wrench, Calendar, Users } from 'lucide-react'

const apps = [
  { id: 'buyeat', icon: ShoppingCart, name: 'BuyEat', description: 'Compras a proveedores', accent: 'blue', external: false },
  { id: 'taskeat', icon: CheckSquare, name: 'TaskEat', description: 'Tareas y equipos', accent: 'emerald', external: false },
  { id: 'likeeat', icon: Share2, name: 'LikeEat', description: 'RRSS con IA', accent: 'pink', external: false },
  { id: 'maintaineat', icon: Wrench, name: 'MaintainEat', description: 'Activos y mantención', accent: 'amber', external: false },
  { id: 'bookeat', icon: Calendar, name: 'BookEat', description: 'Reservas en línea', accent: 'cyan', external: true },
  { id: 'staffeat', icon: Users, name: 'StaffEat', description: 'Gestión de personal', accent: 'violet', external: true },
] as const

const accentClasses: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400',
  pink: 'bg-pink-50 text-pink-700 border-pink-200 hover:border-pink-400',
  amber: 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:border-cyan-400',
  violet: 'bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-400',
}

export function Apps() {
  const handleAppClick = (appId: string, external: boolean) => {
    if (external) return
    window.location.href = `https://app.eatcorp.cl/#/${appId}`
  }

  return (
    <section id="apps" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide">
            Toda la suite
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">6 apps, una sola plataforma</h2>
          <p className="text-xl text-slate-600">Activa solo las que tu restaurante necesita</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {apps.map((app) => {
            const Icon = app.icon
            return (
              <button
                key={app.id}
                onClick={() => handleAppClick(app.id, app.external)}
                className={`group relative p-6 rounded-xl border-2 transition-all text-left ${accentClasses[app.accent]} hover:shadow-lg`}
              >
                {app.external && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">Externa</span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-lg bg-white shadow-sm border border-current/10`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{app.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-700">{app.description}</p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
