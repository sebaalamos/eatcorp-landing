import { ShoppingCart, CheckSquare, Share2, Wrench, Sparkles, RotateCw, AlertTriangle, Heart, MessageCircle, Send, Bookmark, BadgeCheck } from 'lucide-react'

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

function MockupFrame({ children, glow }: { children: React.ReactNode; glow: string }) {
  return (
    <div className="relative">
      <div className={`absolute -inset-2 ${glow} rounded-2xl blur-xl opacity-60`}></div>
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
  const invoices = [
    { name: 'Distribuidora Central', amount: '$1.240.000', due: 'Vence hoy', status: 'Pendiente', selected: true, urgent: true },
    { name: 'Carnes del Sur Ltda.', amount: '$680.500', due: 'Pronto pago -3%', status: 'Pendiente', selected: true, savings: true },
    { name: 'Bebidas Nacional S.A.', amount: '$720.000', due: 'En 5 días', status: 'Pendiente', selected: true },
    { name: 'Lácteos Cordillera', amount: '$310.000', due: 'En 8 días', status: 'Aprobada' },
    { name: 'Verduras del Valle', amount: '$245.500', due: 'En 12 días', status: 'Aprobada' },
    { name: 'Insumos Cocina Pro', amount: '$182.000', due: 'En 18 días', status: 'Pagada' },
  ]

  return (
    <MockupFrame glow="bg-blue-100">
      <div className="p-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">Pagos pendientes</div>
            <div className="text-[10px] text-slate-500 mt-0.5">El Toro · Las Condes</div>
          </div>
          <div className="flex gap-1">
            {['Todas', 'Pendientes', 'Aprobadas'].map((f, i) => (
              <span key={f} className={`text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${i === 1 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-1.5 mb-3">
          {invoices.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-2.5 rounded-lg border ${p.selected ? 'bg-blue-50/50 border-blue-200' : 'bg-white border-slate-200'}`}
              style={{ animation: `slide-up 0.5s ease-out ${i * 0.07}s backwards` }}
            >
              <div className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 ${p.selected ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}>
                {p.selected && <div className="text-white text-[9px] leading-none flex items-center justify-center h-full">✓</div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-slate-900 truncate">{p.name}</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-slate-600 font-medium">{p.amount}</span>
                  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${p.urgent ? 'bg-rose-100 text-rose-700' : p.savings ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    {p.due}
                  </span>
                </div>
              </div>
              <span
                className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${
                  p.status === 'Pendiente' ? 'bg-amber-100 text-amber-800' : p.status === 'Aprobada' ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <div className="text-[10px] text-slate-600">
            <span className="font-bold text-slate-900">3 seleccionadas</span> · Total <span className="font-bold text-slate-900">$2.640.500</span>
          </div>
          <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5">
            <CheckSquare size={12} />
            Aprobar lote
          </button>
        </div>
      </div>
    </MockupFrame>
  )
}

function TaskEatMockup() {
  const cols = [
    {
      name: 'Por hacer',
      color: 'bg-slate-50 border-slate-200',
      tasks: [
        { label: 'Reponer aceite oliva', priority: 'media', when: 'hoy', who: 'M', whoBg: 'bg-emerald-500' },
        { label: 'Coordinar evento jueves', priority: 'alta', when: 'mañana', who: 'C', whoBg: 'bg-amber-500' },
        { label: 'Pedir botellas Pisco', priority: 'baja', when: '3d', who: 'J', whoBg: 'bg-blue-500' },
      ],
    },
    {
      name: 'En curso',
      color: 'bg-amber-50 border-amber-200',
      tasks: [
        { label: 'Limpieza profunda horno', priority: 'alta', when: 'hoy', who: 'P', whoBg: 'bg-rose-500' },
        { label: 'Inventario semanal', priority: 'media', when: 'hoy', who: 'M', whoBg: 'bg-emerald-500' },
      ],
    },
    {
      name: 'Listas',
      color: 'bg-emerald-50 border-emerald-200',
      tasks: [
        { label: 'Capacitar nuevo runner', priority: 'media', when: 'ayer', who: 'C', whoBg: 'bg-amber-500' },
        { label: 'Probar nuevo proveedor', priority: 'baja', when: 'lun', who: 'J', whoBg: 'bg-blue-500' },
        { label: 'Cambiar menú QR', priority: 'media', when: 'sáb', who: 'P', whoBg: 'bg-rose-500' },
      ],
    },
  ]

  const priorityClass = (p: string) =>
    p === 'alta' ? 'bg-rose-100 text-rose-700' : p === 'media' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'

  return (
    <MockupFrame glow="bg-emerald-100">
      <div className="p-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold text-slate-900">Cocina · El Toro</div>
            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">8</span>
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-600 text-white">Mi equipo</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {cols.map((c, ci) => (
            <div key={c.name} className={`p-2 rounded-lg border ${c.color}`}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wide text-slate-700">{c.name}</div>
                <span className="text-[9px] text-slate-500">{c.tasks.length}</span>
              </div>
              <div className="space-y-1.5">
                {c.tasks.map((t, j) => (
                  <div
                    key={j}
                    className="bg-white p-1.5 rounded border border-slate-200 shadow-sm"
                    style={{ animation: `slide-up 0.5s ease-out ${(ci * 3 + j) * 0.08}s backwards` }}
                  >
                    <div className="text-[9px] font-medium text-slate-800 leading-tight mb-1">{t.label}</div>
                    <div className="flex items-center justify-between">
                      <span className={`text-[7px] font-bold uppercase tracking-wide px-1 py-0.5 rounded ${priorityClass(t.priority)}`}>
                        {t.priority}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] text-slate-400">{t.when}</span>
                        <div className={`w-3.5 h-3.5 rounded-full ${t.whoBg} flex items-center justify-center text-white text-[7px] font-bold`}>
                          {t.who}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-500">
          <div className="flex -space-x-1.5">
            {['bg-emerald-500', 'bg-blue-500', 'bg-amber-500', 'bg-rose-500'].map((b, i) => (
              <div key={i} className={`w-5 h-5 rounded-full ${b} border-2 border-white`}></div>
            ))}
          </div>
          <span>4 personas · 8 tareas activas</span>
        </div>
      </div>
    </MockupFrame>
  )
}

function LikeEatMockup() {
  const week = [
    { d: 'L', emoji: '🥗', label: 'Bowl' },
    { d: 'M', emoji: '🍝', label: 'Pasta', active: true },
    { d: 'M', emoji: '🥩', label: 'Asado' },
    { d: 'J', emoji: '🍷', label: 'Maridaje' },
    { d: 'V', emoji: '🌶️', label: 'Picante', special: '18-S' },
    { d: 'S', emoji: '🥟', label: 'Empanada' },
    { d: 'D', emoji: '🍳', label: 'Brunch' },
  ]

  return (
    <MockupFrame glow="bg-pink-100">
      <div className="p-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">Plan de la semana</div>
            <div className="text-[10px] text-slate-500 mt-0.5">@eltoro · 9 posts agendados</div>
          </div>
          <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 font-semibold">
            <Sparkles size={10} />
            <span>Brand IA</span>
          </div>
        </div>

        <div className="flex gap-1 mb-3">
          {[
            { name: 'IG', active: true },
            { name: 'TikTok', active: false },
            { name: 'FB', active: false },
          ].map((p) => (
            <button
              key={p.name}
              className={`text-[10px] font-semibold px-2 py-1 rounded-md ${p.active ? 'bg-pink-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'}`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mb-3 p-2 bg-white border border-slate-200 rounded-lg">
          {week.map((day, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center gap-0.5 py-1 rounded-md ${
                day.active ? 'bg-pink-50 ring-1 ring-pink-300' : ''
              }`}
            >
              <div className="text-[8px] font-bold text-slate-500 uppercase">{day.d}</div>
              <div className="text-base leading-none">{day.emoji}</div>
              <div className="text-[7px] text-slate-400 truncate max-w-full px-0.5">{day.label}</div>
              {day.special && (
                <div className="absolute -top-1 -right-0.5 text-[7px] font-bold bg-amber-400 text-amber-900 px-0.5 py-px rounded-sm leading-none">
                  {day.special}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 px-2.5 py-1.5 border-b border-slate-100">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[8px] font-bold shadow-sm">
              ET
            </div>
            <div className="flex items-center gap-0.5 flex-1 min-w-0">
              <span className="text-[10px] font-bold text-slate-900 truncate">eltoro_restaurante</span>
              <BadgeCheck size={11} className="text-blue-500 flex-shrink-0 fill-blue-500 stroke-white" />
            </div>
            <span className="text-[9px] text-slate-400">Hoy 18:30</span>
          </div>

          <div className="aspect-[5/4] relative overflow-hidden bg-slate-200">
            <PastaIllustration />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shimmer_2.4s_ease-in-out_infinite] pointer-events-none"></div>

            <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/85 backdrop-blur text-[9px] font-bold text-slate-700">
              <span className="text-pink-600">📷</span>
              <span>Reel</span>
            </div>
            <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/85 backdrop-blur flex items-center justify-center shadow-sm">
              <RotateCw size={12} className="text-slate-700" />
            </button>
            <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-pink-600/90 text-white text-[9px] font-bold">
              <Sparkles size={9} />
              <span>IA · 2,3s</span>
            </div>
            <div className="absolute bottom-2 right-2 left-auto flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-slate-900/70 backdrop-blur text-[9px] font-medium text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Subiendo 87%</span>
            </div>
          </div>

          <div className="px-2.5 py-2">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <Heart size={16} className="text-slate-700" />
                <MessageCircle size={16} className="text-slate-700" />
                <Send size={16} className="text-slate-700" />
              </div>
              <Bookmark size={16} className="text-slate-700" />
            </div>
            <div className="text-[10px] font-bold text-slate-900">312 me gusta</div>
            <div className="text-[10px] text-slate-700 leading-snug mt-0.5">
              <span className="font-bold">eltoro_restaurante</span> Pasta fresca, salsa de la nona y un vino que abraza. ¿Reservas mesa para esta noche? 🍷
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="text-[10px] text-pink-600">#pastafresca</span>
              <span className="text-[10px] text-pink-600">#santiagochile</span>
              <span className="text-[10px] text-pink-600">#martes</span>
            </div>
            <div className="text-[9px] text-slate-400 mt-1">Ver los 18 comentarios</div>
          </div>
        </div>

        <div className="mt-2.5 px-2 py-1.5 rounded-md bg-pink-50 border border-pink-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-700">
            <Sparkles size={10} className="text-pink-600" />
            <span>Predicción: <span className="font-bold text-slate-900">240–380 likes</span> · alcance 2,1K</span>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wide text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
            91% aprob.
          </span>
        </div>

        <div className="flex gap-1.5 mt-3">
          <button className="flex-1 py-2 bg-emerald-600 text-white text-[11px] font-semibold rounded-lg shadow-sm">Aprobar</button>
          <button className="flex-1 py-2 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-lg">Editar</button>
          <button className="flex-1 py-2 bg-pink-100 text-pink-700 text-[11px] font-semibold rounded-lg">Pedir otro</button>
        </div>
      </div>
    </MockupFrame>
  )
}

function MaintainEatMockup() {
  const assets = [
    { name: 'Horno industrial', tech: 'PR', techBg: 'bg-emerald-500', priority: 'OK', priorityClass: 'bg-emerald-100 text-emerald-700', progress: 30, progressColor: 'bg-emerald-500', sub: 'Mantención en 28 días' },
    { name: 'Cámara fría #1', tech: 'JC', techBg: 'bg-rose-500', priority: 'Urgente', priorityClass: 'bg-rose-100 text-rose-700 animate-pulse', progress: 100, progressColor: 'bg-rose-500', sub: 'Revisión vencida hace 4 días', alert: true },
    { name: 'Lavavajillas', tech: 'PR', techBg: 'bg-emerald-500', priority: 'OK', priorityClass: 'bg-emerald-100 text-emerald-700', progress: 50, progressColor: 'bg-emerald-500', sub: 'Mantención en 18 días' },
    { name: 'Freidora', tech: 'MA', techBg: 'bg-amber-500', priority: 'Pronto', priorityClass: 'bg-amber-100 text-amber-700', progress: 80, progressColor: 'bg-amber-500', sub: 'Mantención en 5 días' },
    { name: 'Vitrina caliente', tech: 'PR', techBg: 'bg-emerald-500', priority: 'OK', priorityClass: 'bg-emerald-100 text-emerald-700', progress: 15, progressColor: 'bg-emerald-500', sub: 'Mantención en 42 días' },
  ]

  return (
    <MockupFrame glow="bg-amber-100">
      <div className="p-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">Activos críticos</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Tigre · Bellavista</div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">1 alerta</span>
        </div>
        <div className="space-y-1.5">
          {assets.map((a, i) => (
            <div key={i} className={`p-2.5 rounded-lg border ${a.alert ? 'bg-rose-50/40 border-rose-200' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${a.alert ? 'bg-rose-100' : 'bg-slate-100'}`}>
                  {a.alert ? <AlertTriangle size={14} className="text-rose-600 animate-pulse" /> : <Wrench size={14} className="text-slate-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[11px] font-semibold text-slate-900 truncate">{a.name}</div>
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full flex-shrink-0 ${a.priorityClass}`}>{a.priority}</span>
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5">{a.sub}</div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${a.progressColor} rounded-full origin-left`}
                        style={{ width: `${a.progress}%`, animation: `fill-bar 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s backwards` }}
                      ></div>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${a.techBg} flex items-center justify-center text-white text-[7px] font-bold`}>
                      {a.tech}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  )
}

function PastaIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="pasta-bg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
        <radialGradient id="plate" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="80%" stopColor="#f5e6b8" />
          <stop offset="100%" stopColor="#d4a373" />
        </radialGradient>
        <linearGradient id="pasta-strand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <radialGradient id="sauce" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </radialGradient>
      </defs>

      <rect width="200" height="160" fill="url(#pasta-bg)" />

      <ellipse cx="100" cy="85" rx="78" ry="58" fill="rgba(0,0,0,0.18)" />
      <ellipse cx="100" cy="80" rx="76" ry="56" fill="url(#plate)" />
      <ellipse cx="100" cy="78" rx="62" ry="46" fill="#faf3dd" opacity="0.6" />

      <g opacity="0.95">
        <path d="M 50 75 Q 90 50 145 70 T 155 95 Q 130 115 95 105 T 50 75" fill="url(#pasta-strand)" />
        <path d="M 60 70 Q 100 55 140 75" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 55 90 Q 100 70 150 95" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 65 100 Q 110 85 145 105" stroke="#fcd34d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>

      <g>
        <ellipse cx="105" cy="82" rx="32" ry="20" fill="url(#sauce)" opacity="0.85" />
        <ellipse cx="115" cy="78" rx="6" ry="4" fill="#ef4444" opacity="0.9" />
        <ellipse cx="92" cy="88" rx="5" ry="3.5" fill="#dc2626" opacity="0.9" />
      </g>

      <g>
        <ellipse cx="125" cy="68" rx="5" ry="2.5" fill="#16a34a" transform="rotate(-20 125 68)" />
        <ellipse cx="80" cy="92" rx="4" ry="2" fill="#16a34a" transform="rotate(35 80 92)" />
        <ellipse cx="110" cy="98" rx="3.5" ry="2" fill="#15803d" transform="rotate(-10 110 98)" />
      </g>

      <ellipse cx="78" cy="60" rx="22" ry="10" fill="white" opacity="0.18" />
    </svg>
  )
}
