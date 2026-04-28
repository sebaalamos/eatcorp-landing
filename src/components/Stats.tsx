'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix: string
  label: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Restoranes activos' },
  { value: 12000, suffix: '+', label: 'Facturas procesadas' },
  { value: 30, suffix: 'hrs', label: 'Ahorradas/mes en promedio' },
  { value: 97, suffix: '%', label: 'Retención mensual' },
]

function CountUp({ end, suffix, prefix }: { end: number; suffix: string; prefix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true
            const duration = 1800
            const start = performance.now()
            const tick = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.round(end * eased))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  const formatted = value.toLocaleString('es-CL')
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-20 px-4 bg-brand-950 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-slate-100 mb-2 tabular-nums tracking-tight">
                <CountUp end={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
