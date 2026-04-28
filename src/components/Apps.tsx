'use client'

import { ShoppingCart, CheckSquare, Share2, Wrench, Calendar, Users } from 'lucide-react'

const apps = [
  {
    id: 'buyeat',
    icon: ShoppingCart,
    name: 'BuyEat',
    description: 'Compras a proveedores',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
  },
  {
    id: 'taskeat',
    icon: CheckSquare,
    name: 'TaskEat',
    description: 'Tareas y equipos',
    color: 'bg-green-50 text-green-600 border-green-200',
  },
  {
    id: 'likeeat',
    icon: Share2,
    name: 'LikeEat',
    description: 'Redes sociales + IA',
    color: 'bg-pink-50 text-pink-600 border-pink-200',
  },
  {
    id: 'maintaineat',
    icon: Wrench,
    name: 'MaintainEat',
    description: 'Activos y mantenimiento',
    color: 'bg-orange-50 text-orange-600 border-orange-200',
  },
  {
    id: 'bookeat',
    icon: Calendar,
    name: 'BookEat',
    description: 'Reservas en línea',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
  },
  {
    id: 'staffeat',
    icon: Users,
    name: 'StaffEat',
    description: 'Gestión de personal',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
  },
]

export function Apps() {
  const handleAppClick = (appId: string) => {
    if (['bookeat', 'staffeat'].includes(appId)) {
      // External apps
      return
    }
    window.location.href = `https://app.eatcorp.cl/#/${appId}`
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Todas las apps</h2>
          <p className="text-xl text-gray-600">Acceso a la plataforma completa</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((app) => {
            const Icon = app.icon
            return (
              <button
                key={app.id}
                onClick={() => handleAppClick(app.id)}
                className={`p-6 rounded-xl border-2 hover:shadow-md transition-all text-left ${app.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${app.color.split(' ')[0]}`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{app.name}</h3>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
