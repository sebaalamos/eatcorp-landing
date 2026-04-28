'use client'

import { useState } from 'react'
import { Check, Sparkles } from 'lucide-react'

type Plan = {
  name: string
  monthly: number
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 1,
    description: 'Para restaurantes que recién empiezan',
    features: [
      '2 apps a elección',
      'Hasta 5 usuarios',
      '1 local',
      'Soporte por email',
      '1 GB de almacenamiento',
      'Hasta 100 facturas/mes',
    ],
    cta: 'Empieza gratis 14 días',
  },
  {
    name: 'Pro',
    monthly: 2.5,
    description: 'El más elegido por nuestros clientes',
    popular: true,
    features: [
      'Todas las apps incluidas',
      'Hasta 25 usuarios',
      'Hasta 3 locales',
      'Soporte por email + chat',
      '10 GB de almacenamiento',
      'Facturas ilimitadas',
      'IA en LikeEat (Magic Post + Brand Discovery)',
      'Lotes de pago bancario',
      'Auditoría completa',
    ],
    cta: 'Empieza gratis 14 días',
  },
  {
    name: 'Enterprise',
    monthly: 0,
    description: 'Para cadenas y operaciones grandes',
    features: [
      'Todas las apps + integraciones custom',
      'Usuarios ilimitados',
      'Locales ilimitados',
      'Account manager dedicado',
      'Almacenamiento ilimitado',
      'SLA 99.9%',
      'Onboarding presencial',
      'API access',
      'SSO + auditoría avanzada',
    ],
    cta: 'Hablar con ventas',
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  const formatUF = (n: number) => n.toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 2 })

  return (
    <section id="pricing" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wide">
            Precios simples
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Elige el plan de tu restaurante
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            14 días gratis sin tarjeta de crédito. Cancela cuando quieras.
          </p>

          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                !annual ? 'bg-primary-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                annual ? 'bg-primary-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Anual
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  annual ? 'bg-amber-400 text-amber-900' : 'bg-amber-100 text-amber-800'
                }`}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const price = annual ? plan.monthly * 0.8 : plan.monthly
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? 'bg-brand-900 text-white border-2 border-primary-500 shadow-2xl md:scale-105'
                    : 'bg-white border border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    <Sparkles size={12} />
                    Más popular
                  </div>
                )}

                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    {plan.monthly > 0 ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-4xl font-bold tabular-nums ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                            {formatUF(price)}
                          </span>
                          <span className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                            UF/mes
                          </span>
                        </div>
                        {annual && (
                          <div className={`text-xs mt-1 ${plan.popular ? 'text-primary-400' : 'text-primary-700'}`}>
                            Facturado anualmente · Ahorra {formatUF(plan.monthly * 12 * 0.2)} UF al año
                          </div>
                        )}
                      </>
                    ) : (
                      <div className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                        Conversemos
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary-400' : 'text-primary-600'}`}
                      />
                      <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-400 text-slate-900'
                      : 'bg-brand-900 hover:bg-brand-800 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Todos los planes incluyen actualizaciones automáticas, hosting en Chile y backups diarios.
        </p>
      </div>
    </section>
  )
}
