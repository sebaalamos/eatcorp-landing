'use client'

import { useState } from 'react'
import { TrendingUp, Clock, DollarSign, ShoppingCart, Users, MapPin, Share2, Wrench } from 'lucide-react'

type OperationStyle = 'manual' | 'mixed' | 'software'

const styleMultiplier: Record<OperationStyle, number> = {
  manual: 1.3, // papel + WhatsApp + memoria → más caos, más ahorro al automatizar
  mixed: 1, // Excel + WhatsApp → baseline (típico)
  software: 0.7, // ya usan algún SaaS genérico → menos margen de ahorro
}

const styleLabel: Record<OperationStyle, string> = {
  manual: 'Papel + WhatsApp',
  mixed: 'Excel + WhatsApp',
  software: 'Software genérico',
}

export function ROICalculator() {
  const [facturas, setFacturas] = useState(80)
  const [equipo, setEquipo] = useState(12)
  const [locales, setLocales] = useState(1)
  const [posts, setPosts] = useState(8)
  const [activos, setActivos] = useState(6)
  const [style, setStyle] = useState<OperationStyle>('mixed')

  const m = styleMultiplier[style]

  // Breakdown del ahorro mensual (CLP)
  const ahorroCompras = Math.round(facturas * 800 * m)
  const ahorroEquipo = Math.round(equipo * 1200 * 4 * m)
  const ahorroLocales = Math.round(locales * 5000 * m)
  const ahorroPosts = Math.round(posts * 4500 * m) // tiempo + valor RRSS
  const ahorroMantenimiento = Math.round(activos * 8000 * m) // evita paradas sorpresa

  const ahorroMensual = ahorroCompras + ahorroEquipo + ahorroLocales + ahorroPosts + ahorroMantenimiento
  const horasMes = Math.round(facturas * 0.15 + equipo * 4 + locales * 8 + posts * 0.4 + activos * 0.5)
  const costoPlan = locales <= 1 && equipo <= 5 ? 38000 : 95000 // 1 UF / 2.5 UF aprox CLP
  const recuperoDias = Math.max(1, Math.round((costoPlan / Math.max(ahorroMensual, 1)) * 30))

  const formatCLP = (n: number) => `$${n.toLocaleString('es-CL')}`

  const breakdown = [
    { label: 'Compras', icon: ShoppingCart, value: ahorroCompras, color: 'bg-blue-500' },
    { label: 'Equipo', icon: Users, value: ahorroEquipo, color: 'bg-primary-500' },
    { label: 'RRSS', icon: Share2, value: ahorroPosts, color: 'bg-pink-500' },
    { label: 'Mantenimiento', icon: Wrench, value: ahorroMantenimiento, color: 'bg-amber-500' },
    { label: 'Multi-local', icon: MapPin, value: ahorroLocales, color: 'bg-violet-500' },
  ].filter((b) => b.value > 0)

  const maxValue = Math.max(...breakdown.map((b) => b.value), 1)

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wide">
            Calculadora de ahorro
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Cuánto te ahorra EatCorp?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Cuéntanos cómo operas hoy y ve el ahorro estimado en tiempo real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">¿Cómo operas hoy?</label>
              <div className="grid grid-cols-3 gap-2">
                {(['manual', 'mixed', 'software'] as OperationStyle[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`text-xs font-semibold py-2.5 px-2 rounded-lg border-2 transition ${
                      style === s
                        ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {styleLabel[s]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <SliderInput
                label="Facturas/mes"
                icon={ShoppingCart}
                value={facturas}
                min={10}
                max={500}
                step={10}
                onChange={setFacturas}
              />
              <SliderInput
                label="Equipo"
                icon={Users}
                value={equipo}
                min={3}
                max={50}
                step={1}
                onChange={setEquipo}
              />
              <SliderInput
                label="Locales"
                icon={MapPin}
                value={locales}
                min={1}
                max={10}
                step={1}
                onChange={setLocales}
              />
              <SliderInput
                label="Posts/mes"
                icon={Share2}
                value={posts}
                min={0}
                max={30}
                step={1}
                onChange={setPosts}
              />
              <SliderInput
                label="Activos críticos"
                icon={Wrench}
                value={activos}
                min={0}
                max={30}
                step={1}
                onChange={setActivos}
                colSpan={2}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-900 to-brand-800 rounded-xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="relative space-y-5">
              <div>
                <div className="flex items-center gap-2 text-primary-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                  <DollarSign size={14} />
                  Ahorro mensual estimado
                </div>
                <div
                  key={ahorroMensual}
                  className="text-4xl md:text-5xl font-bold tabular-nums tracking-tight"
                  style={{ animation: 'count-pop 0.4s ease-out' }}
                >
                  {formatCLP(ahorroMensual)}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-brand-700">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Desglose por área</div>
                {breakdown.map((b) => {
                  const Icon = b.icon
                  const percent = (b.value / maxValue) * 100
                  return (
                    <div key={b.label} className="space-y-0.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Icon size={11} />
                          <span>{b.label}</span>
                        </div>
                        <span className="font-semibold tabular-nums text-white">{formatCLP(b.value)}</span>
                      </div>
                      <div className="h-1 bg-brand-700/60 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${b.color} rounded-full origin-left`}
                          style={{ width: `${percent}%`, transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-700">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1 uppercase tracking-wider">
                    <Clock size={10} />
                    Horas ganadas
                  </div>
                  <div className="text-xl font-bold tabular-nums">{horasMes} hrs/mes</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1 uppercase tracking-wider">
                    <TrendingUp size={10} />
                    Recupero
                  </div>
                  <div className="text-xl font-bold tabular-nums">{recuperoDias} días</div>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 leading-relaxed">
                Cálculo basado en clientes promedio. Ahorro real puede ser mayor según
                la eficiencia operativa actual y el plan elegido.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type SliderProps = {
  label: string
  icon: typeof ShoppingCart
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  colSpan?: number
}

function SliderInput({ label, icon: Icon, value, min, max, step, onChange, colSpan }: SliderProps) {
  const percent = ((value - min) / (max - min)) * 100

  return (
    <div className={colSpan === 2 ? 'col-span-2' : ''}>
      <div className="flex justify-between items-baseline mb-1.5">
        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
          <Icon size={12} className="text-slate-500" />
          {label}
        </label>
        <span className="text-xl font-bold text-primary-700 tabular-nums">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer slider-emerald"
        style={{
          background: `linear-gradient(to right, #059669 0%, #10b981 ${percent}%, #e2e8f0 ${percent}%, #e2e8f0 100%)`,
        }}
      />
      <div className="flex justify-between text-[9px] text-slate-400 mt-0.5">
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <style jsx>{`
        .slider-emerald::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 3px solid #059669;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
        }
        .slider-emerald::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 3px solid #059669;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
        }
      `}</style>
    </div>
  )
}
