'use client'

import { useState } from 'react'
import { trackCTA } from '@/lib/track'
import { LeadModal } from './LeadModal'

export function CTA() {
  const [modalOpen, setModalOpen] = useState(false)

  const handlePrimary = () => {
    trackCTA('cta_final_primary')
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  const handleSecondary = () => {
    trackCTA('cta_final_secondary')
    setModalOpen(true)
  }

  return (
    <section id="contacto" className="py-24 px-4 bg-brand-900 relative overflow-hidden border-y border-slate-800">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
          Tu restorán merece<br />una plataforma a la altura
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Únete a los restoranes que están operando con EatCorp. Sin tarjeta de crédito,
          sin instalación, sin complicaciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handlePrimary}
            className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary-600/40"
          >
            Empieza ahora gratis
          </button>
          <button
            type="button"
            onClick={handleSecondary}
            className="border-2 border-slate-700 text-slate-200 hover:border-primary-500 hover:text-primary-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Hablar con nosotros
          </button>
        </div>
        <p className="mt-5 text-sm text-slate-400 text-center">
          Sin tarjeta de crédito · Sin instalación · Activo en 30 minutos
        </p>
      </div>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="contact"
        ctaTrack="cta_final_secondary"
        title="Hablemos"
        description="Cuéntanos sobre tu restorán y te contactamos en menos de 24 horas hábiles."
        withMessage
      />
    </section>
  )
}
