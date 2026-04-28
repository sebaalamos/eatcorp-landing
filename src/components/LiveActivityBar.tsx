'use client'

import { useEffect, useState } from 'react'

const messages = [
  { icon: '📦', text: 'El Toro aprobó factura $480.500' },
  { icon: '✅', text: '24 tareas completadas hoy en TaskEat' },
  { icon: '✨', text: 'Tigre publicó 8 posts esta semana' },
  { icon: '🔧', text: 'MaintainEat agendó 3 mantenciones preventivas' },
  { icon: '💰', text: 'Lote de pago $2.4M ejecutado en BuyEat' },
  { icon: '👥', text: '2 nuevos miembros se unieron a El Toro' },
  { icon: '📸', text: 'Magic Post generó caption para Tigre en 4 segundos' },
  { icon: '⚡', text: 'Discrepancia detectada y resuelta automáticamente' },
]

export function LiveActivityBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-brand-900 border-y border-brand-800 py-3 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-wider text-primary-400 uppercase">En vivo</span>
        </div>
        <div className="relative h-6 flex-1 max-w-2xl overflow-hidden">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center gap-2 text-sm text-slate-300 transition-all duration-700 ${
                i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="text-base">{m.icon}</span>
              <span>{m.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
