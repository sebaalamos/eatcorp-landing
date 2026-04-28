import { ShoppingCart, CheckSquare, Share2, Wrench } from 'lucide-react'

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide">
            Apps integradas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Una app para cada operación</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Especializadas en lo que hacen, integradas entre sí. Activa solo las que necesites.
          </p>
        </div>

        <div className="space-y-24">
          <FeatureRow
            icon={ShoppingCart}
            iconBg="bg-blue-500"
            title="BuyEat"
            tagline="Compras a proveedores"
            description="Cotiza, recepciona, aprueba y paga facturas. Detección automática de discrepancias entre OC y factura. Lotes de pago con export bancario directo."
            mockup={<BuyEatMockup />}
            reverse={false}
          />
          <FeatureRow
            icon={CheckSquare}
            iconBg="bg-emerald-500"
            title="TaskEat"
            tagline="Tareas y equipos"
            description="Organiza tareas en categorías con permisos por equipo. Asignaciones, plazos y comentarios. Visibilidad híbrida — cada miembro ve solo lo suyo."
            mockup={<TaskEatMockup />}
            reverse={true}
          />
          <FeatureRow
            icon={Share2}
            iconBg="bg-pink-500"
            title="LikeEat"
            tagline="Redes sociales con IA"
            description="Plan mensual generado por IA con efemérides chilenas. Magic Post: una foto y la IA escribe el caption. Brand Discovery aprende tu estilo."
            mockup={<LikeEatMockup />}
            reverse={false}
          />
          <FeatureRow
            icon={Wrench}
            iconBg="bg-amber-500"
            title="MaintainEat"
            tagline="Activos y mantenimiento"
            description="Registra equipos críticos, planifica mantenciones preventivas y reduce tiempo de parada. Asigna técnicos y trackea trabajos."
            mockup={<MaintainEatMockup />}
            reverse={true}
          />
        </div>
      </div>
    </section>
  )
}

type FeatureRowProps = {
  icon: typeof ShoppingCart
  iconBg: string
  title: string
  tagline: string
  description: string
  mockup: React.ReactNode
  reverse: boolean
}

function FeatureRow({ icon: Icon, iconBg, title, tagline, description, mockup, reverse }: FeatureRowProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div>
        <div className={`inline-flex items-center gap-3 mb-4`}>
          <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md`}>
            <Icon size={22} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500">{tagline}</p>
          </div>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">{description}</p>
        <a href="#apps" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold">
          Conocer más
          <span aria-hidden>→</span>
        </a>
      </div>
      <div>{mockup}</div>
    </div>
  )
}

function MockupFrame({ children, accent = 'emerald' }: { children: React.ReactNode; accent?: string }) {
  return (
    <div className="relative">
      <div className={`absolute -inset-2 bg-${accent}-100 rounded-2xl blur-xl opacity-60`}></div>
      <div className="relative bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-3 py-2 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        {children}
      </div>
    </div>
  )
}

function BuyEatMockup() {
  return (
    <MockupFrame accent="blue">
      <div className="p-5 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-semibold text-slate-900">Pagos pendientes</div>
          <div className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">3 nuevos</div>
        </div>
        <div className="space-y-2">
          {[
            { name: 'Distribuidora Santa Elena', amount: '$1.240.000', status: 'aprobado', color: 'emerald' },
            { name: 'Carnes del Sur Ltda.', amount: '$680.500', status: 'pendiente', color: 'amber' },
            { name: 'Coca-Cola Andina', amount: '$320.000', status: 'pagado', color: 'slate' },
          ].map((p, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
              <div>
                <div className="text-sm font-medium text-slate-900">{p.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{p.amount}</div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full bg-${p.color}-100 text-${p.color}-800 font-medium`}>{p.status}</div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg">Aprobar lote</button>
      </div>
    </MockupFrame>
  )
}

function TaskEatMockup() {
  return (
    <MockupFrame accent="emerald">
      <div className="p-5 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-sm font-semibold text-slate-900">Cocina</div>
          <div className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">8 tareas</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { col: 'Por hacer', count: 3, color: 'slate' },
            { col: 'En curso', count: 2, color: 'amber' },
            { col: 'Listas', count: 3, color: 'emerald' },
          ].map((c, i) => (
            <div key={i} className={`bg-${c.color}-50 p-2 rounded-lg border border-${c.color}-100`}>
              <div className="text-xs font-semibold text-slate-700 mb-2">{c.col}</div>
              <div className="space-y-1.5">
                {Array.from({ length: c.count }).map((_, j) => (
                  <div key={j} className="bg-white p-1.5 rounded border border-slate-200">
                    <div className="h-1.5 bg-slate-200 rounded w-3/4 mb-1"></div>
                    <div className="h-1 bg-slate-100 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-white"></div>
          </div>
          <span>3 personas en este equipo</span>
        </div>
      </div>
    </MockupFrame>
  )
}

function LikeEatMockup() {
  return (
    <MockupFrame accent="pink">
      <div className="p-5 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-slate-900">Tu post para hoy</div>
          <div className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-800">
            <span>✨</span>
            <span>IA</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="aspect-square bg-gradient-to-br from-amber-100 via-orange-200 to-red-200 flex items-center justify-center text-5xl">
            🍝
          </div>
          <div className="p-3">
            <div className="text-xs text-slate-700 leading-relaxed line-clamp-2">
              Pasta fresca, salsa de la nona y un vino que abraza. ¿Reservas mesa para esta noche? 🍷
            </div>
            <div className="flex gap-1 mt-2">
              <span className="text-xs text-pink-600">#pastafresca</span>
              <span className="text-xs text-pink-600">#santiago</span>
              <span className="text-xs text-pink-600">#martes</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg">Aprobar</button>
          <button className="flex-1 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">Pedir otro</button>
        </div>
      </div>
    </MockupFrame>
  )
}

function MaintainEatMockup() {
  return (
    <MockupFrame accent="amber">
      <div className="p-5 bg-gradient-to-br from-slate-50 to-white">
        <div className="text-sm font-semibold text-slate-900 mb-4">Activos críticos</div>
        <div className="space-y-2">
          {[
            { name: 'Horno industrial', status: 'OK', next: 'Mantención en 12 días', color: 'emerald' },
            { name: 'Cámara fría #1', status: 'Alerta', next: 'Revisión vencida', color: 'amber' },
            { name: 'Lavavajillas', status: 'OK', next: 'Mantención en 28 días', color: 'emerald' },
          ].map((a, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg bg-${a.color}-100 flex items-center justify-center`}>
                  <Wrench size={16} className={`text-${a.color}-700`} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">{a.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{a.next}</div>
                </div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full bg-${a.color}-100 text-${a.color}-800 font-semibold`}>{a.status}</div>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  )
}
