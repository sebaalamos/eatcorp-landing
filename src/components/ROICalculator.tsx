'use client'

import { useState } from 'react'
import { TrendingUp, Clock, DollarSign } from 'lucide-react'

export function ROICalculator() {
  const [facturas, setFacturas] = useState(80)
  const [equipo, setEquipo] = useState(12)
  const [locales, setLocales] = useState(1)

  // Cálculo simple: ahorro por automatización
  // - Cada factura procesada manualmente toma ~10 min ($800 en tiempo administrativo)
  // - Cada miembro de equipo gana ~1hr/sem en coordinación ($1.200/sem * 4)
  // - Cada local adicional ahorra coordinación operativa
  const ahorroMensual = facturas * 800 + equipo * 1200 * 4 + locales * 5000
  const horasMes = facturas * 0.15 + equipo * 4 + locales * 8
  const costoPlan = locales <= 1 && equipo <= 5 ? 29000 : 79000
  const recuperoDias = Math.max(1, Math.round((costoPlan / ahorroMensual) * 30))

  const formatCLP = (n: number) => `$${n.toLocaleString('es-CL')}`

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide">
            Calculadora de ahorro
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Cuánto te ahorra EatCorp?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mueve los sliders según tu operación y ve el ahorro estimado en tiempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl border border-slate-200 p-8">
          <div className="space-y-8">
            <SliderInput
              label="Facturas al mes"
              value={facturas}
              min={10}
              max={500}
              step={10}
              onChange={setFacturas}
              format={(v) => v.toString()}
            />
            <SliderInput
              label="Personas en tu equipo"
              value={equipo}
              min={3}
              max={50}
              step={1}
              onChange={setEquipo}
              format={(v) => v.toString()}
            />
            <SliderInput
              label="Locales que operas"
              value={locales}
              min={1}
              max={10}
              step={1}
              onChange={setLocales}
              format={(v) => v.toString()}
            />
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="relative space-y-6">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
                  <DollarSign size={16} />
                  AHORRO MENSUAL ESTIMADO
                </div>
                <div className="text-5xl font-bold tabular-nums tracking-tight">
                  {formatCLP(ahorroMensual)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Clock size={12} />
                    HORAS GANADAS
                  </div>
                  <div className="text-2xl font-bold tabular-nums">{Math.round(horasMes)} hrs/mes</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <TrendingUp size={12} />
                    RECUPERO
                  </div>
                  <div className="text-2xl font-bold tabular-nums">{recuperoDias} días</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 leading-relaxed">
                Cálculo basado en clientes promedio. Ahorro real puede ser mayor según
                eficiencia operativa actual.
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
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format: (v: number) => string
}

function SliderInput({ label, value, min, max, step, onChange, format }: SliderProps) {
  const percent = ((value - min) / (max - min)) * 100

  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <span className="text-2xl font-bold text-emerald-700 tabular-nums">{format(value)}</span>
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
      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <style jsx>{`
        .slider-emerald::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 3px solid #059669;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
        }
        .slider-emerald::-moz-range-thumb {
          width: 20px;
          height: 20px;
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
