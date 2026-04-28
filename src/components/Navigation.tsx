'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Logo } from './Logo'

export function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)
      setIsLoading(false)
    }
    checkSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleClick = () => {
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo size={36} />
        <div className="flex items-center gap-6">
          <a href="#features" className="hidden md:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition">Apps</a>
          <a href="#pricing" className="hidden md:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition">Precios</a>
          <a href="#faq" className="hidden md:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition">FAQ</a>
          <a href="#contacto" className="hidden md:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition">Contacto</a>
          <button
            onClick={handleClick}
            disabled={isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 shadow-sm"
          >
            {isLoading ? '...' : isLoggedIn ? 'Mi cuenta' : 'Entrar'}
          </button>
        </div>
      </div>
    </nav>
  )
}
