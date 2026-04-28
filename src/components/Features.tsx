import { ShoppingCart, CheckSquare, Share2, Wrench } from 'lucide-react'

const features = [
  {
    icon: ShoppingCart,
    title: 'BuyEat',
    description: 'Gestión integral de compras a proveedores. Cotiza, compara y administra tus pedidos en un solo lugar.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: CheckSquare,
    title: 'TaskEat',
    description: 'Organiza tareas y coordina tu equipo. Asignaciones, plazos y seguimiento en tiempo real.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Share2,
    title: 'LikeEat',
    description: 'Gestiona redes sociales con IA. Publica, analiza y crece tu presencia digital automáticamente.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Wrench,
    title: 'MaintainEat',
    description: 'Control de activos y mantenimiento. Registra equipos, planifica mantenimientos y reduce paradas.',
    color: 'bg-orange-100 text-orange-600',
  },
]

export function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apps integradas</h2>
          <p className="text-xl text-gray-600">Todo lo que necesitas para operar tu restaurante</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
