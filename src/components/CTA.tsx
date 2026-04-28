'use client'

export function CTA() {
  const handleClick = () => {
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">¿Listo para optimizar tu restaurante?</h2>
        <p className="text-xl text-purple-100 mb-8">
          Únete a decenas de restaurantes que ya usan EatCorp para mejorar su operación.
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Empieza ahora gratis
        </button>
      </div>
    </section>
  )
}
