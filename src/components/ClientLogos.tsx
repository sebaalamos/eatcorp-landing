'use client'

import { useState } from 'react'
import { LeadModal } from './LeadModal'

const clients = [
  { name: 'El Toro', tag: 'Restaurant · Las Condes', instagram: 'https://instagram.com/eltoro.cl' },
  { name: 'Tigre', tag: 'Restaurant · Bellavista', instagram: 'https://instagram.com/tigre.cl' },
]

export function ClientLogos() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-12 px-4 bg-brand-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Restoranes que operan con EatCorp
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="font-serif text-2xl font-bold text-slate-200">{c.name}</div>
              <div className="text-[10px] uppercase tracking-wider mt-1.5 text-slate-400">
                {c.tag}
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-slate-500 mt-6">
          ¿Tu restorán acá?{' '}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-primary-300 hover:text-primary-200 transition-colors"
          >
            Escríbenos
          </button>
        </p>
      </div>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="contact"
        ctaTrack="cta_client_logos"
        title="Súmate a EatCorp"
        description="Cuéntanos sobre tu restorán y te contactamos en menos de 24 horas hábiles."
        withMessage
      />
    </section>
  )
}
