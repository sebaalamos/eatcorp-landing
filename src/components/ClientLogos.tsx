'use client'

import { useState } from 'react'
import { LeadModal } from './LeadModal'

const clients = [
  { name: 'El Toro', tag: 'Vitacura', instagram: 'https://instagram.com/eltoro.cl', initials: 'ET', gradient: 'from-amber-400 to-orange-500' },
  { name: 'Tigre', tag: 'Vitacura', instagram: 'https://instagram.com/tigre.cl', initials: 'TG', gradient: 'from-primary-400 to-teal-500' },
]

export function ClientLogos() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-12 px-4 bg-brand-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Restoranes que operan con EatCorp
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-brand-800/60 border border-slate-700 hover:border-primary-500/40 hover:bg-brand-800 transition-all"
            >
              <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0`}>
                {c.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-100">{c.name}</div>
                <div className="text-[11px] text-slate-400">{c.tag}</div>
              </div>
            </a>
          ))}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-dashed border-slate-700 hover:border-primary-500/60 text-slate-500 hover:text-primary-300 transition-all"
          >
            <div className="w-9 h-9 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center text-slate-500 text-lg leading-none">
              +
            </div>
            <div className="text-sm font-medium text-left">
              <div className="text-slate-300">¿Tu restorán acá?</div>
              <div className="text-[11px] text-slate-500">Escríbenos</div>
            </div>
          </button>
        </div>
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
