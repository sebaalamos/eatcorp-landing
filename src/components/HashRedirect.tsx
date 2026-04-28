'use client'

import { useEffect } from 'react'

const APP_URL = 'https://app.eatcorp.cl'

export function HashRedirect() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#/')) {
      window.location.replace(`${APP_URL}${hash}`)
    }
  }, [])
  return null
}
