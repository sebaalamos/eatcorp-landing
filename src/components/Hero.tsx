'use client'

export function Hero() {
  const handleClick = () => {
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Gestiona tu restaurante
          <br />
          <span className="text-purple-600">simple y rápido</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Suite completa de apps para compras, tareas, redes sociales, mantenimiento de activos y más. Todo integrado en un solo lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Comienza gratis
          </button>
          <button
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Ver demo
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">Confían en EatCorp</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-gray-400 font-semibold">+50 restaurantes</div>
            <div className="text-gray-400 font-semibold">+500 usuarios activos</div>
            <div className="text-gray-400 font-semibold">En Chile</div>
          </div>
        </div>
      </div>
    </section>
  )
}
