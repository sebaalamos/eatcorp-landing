'use client'

import { useEffect, useRef, useState } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -1000, y: -1000 })
  const current = useRef({ x: -1000, y: -1000 })
  const raf = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduced || !fine) return
    setEnabled(true)

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      const lerp = 0.12
      current.current.x += (target.current.x - current.current.x) * lerp
      current.current.y += (target.current.y - current.current.y) * lerp
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 200}px, ${current.current.y - 200}px, 0)`
      }
      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-0 will-change-transform"
      style={{
        background: 'radial-gradient(closest-side, rgba(16,185,129,0.18), rgba(16,185,129,0.06) 40%, transparent 70%)',
        filter: 'blur(40px)',
        transform: 'translate3d(-1000px, -1000px, 0)',
      }}
    />
  )
}
