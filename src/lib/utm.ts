'use client'

import { useEffect, useState } from 'react'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
const STORAGE_KEY = 'eatcorp_utm_v1'

export type Utm = Partial<Record<typeof UTM_KEYS[number], string>>

export function readStoredUtm(): Utm | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed as Utm : null
  } catch {
    return null
  }
}

export function useUtm(): Utm | null {
  const [utm, setUtm] = useState<Utm | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const next: Utm = {}
    for (const key of UTM_KEYS) {
      const value = params.get(key)
      if (value) next[key] = value
    }
    if (Object.keys(next).length > 0) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // sessionStorage puede estar bloqueado; ignorar
      }
      setUtm(next)
      return
    }
    setUtm(readStoredUtm())
  }, [])

  return utm
}
