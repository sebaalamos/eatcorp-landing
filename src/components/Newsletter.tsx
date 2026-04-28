'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // mock — solo localStorage por ahora
    if (typeof window !== 'undefined') {
      const list = JSON.parse(localStorage.getItem('eatcorp_newsletter') || '[]')
      list.push({ email, at: new Date().toISOString() })
      localStorage.setItem('eatcorp_newsletter', JSON.stringify(list))
    }
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 4000)
  }

  return (
    <div className="bg-gradient-to-br from-brand-900 to-brand-800 rounded-2xl p-8 md:p-10 border border-brand-700 mb-12">
      <div className="grid md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-primary-400 text-xs font-semibold uppercase tracking-widest mb-2">
            <Mail size={14} />
            Newsletter
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            Mantente al día
          </h3>
          <p className="text-sm text-slate-300">
            Tips, casos de éxito y novedades para restaurantes. Una vez al mes, sin spam.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-3 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="tu@restaurante.cl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500 focus:bg-brand-900 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary-500 hover:bg-primary-400 text-slate-900 font-semibold rounded-lg transition flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {submitted ? (
              <>
                <Check size={18} />
                Suscrito
              </>
            ) : (
              'Suscribirme'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
