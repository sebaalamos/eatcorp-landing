'use client'

export function CTA() {
  const handleClick = () => {
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  return (
    <section id="contacto" className="py-24 px-4 bg-brand-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Tu restaurante merece<br />una plataforma a la altura
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Únete a los restaurantes que están operando con EatCorp. Sin tarjeta de crédito,
          sin instalación, sin complicaciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleClick}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary-600/30"
          >
            Empieza ahora gratis
          </button>
          <a
            href="mailto:hola@eatcorp.cl"
            className="border-2 border-brand-700 text-slate-200 hover:border-primary-500 hover:text-primary-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Hablar con nosotros
          </a>
        </div>
      </div>
    </section>
  )
}
