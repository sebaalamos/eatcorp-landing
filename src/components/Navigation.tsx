'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">EatCorp</div>
        <button
          onClick={handleClick}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Cargando...' : isLoggedIn ? 'Mi cuenta' : 'Entrar'}
        </button>
      </div>
    </nav>
  )
}
