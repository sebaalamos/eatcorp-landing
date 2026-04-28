'use client'

export function Hero() {
  const handleClick = () => {
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-emerald-50 via-white to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-emerald-800">Hecho en Chile para restaurantes chilenos</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          La plataforma todo-en-uno
          <br />
          para tu <span className="text-emerald-600">restaurante</span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Compras, tareas, redes sociales, mantenimiento y reservas. Todas las herramientas
          que tu restaurante necesita en una sola plataforma integrada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={handleClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30"
          >
            Comienza gratis
          </button>
          <a
            href="#apps"
            className="border-2 border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Ver las apps
          </a>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/40 to-amber-100/40 rounded-2xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 mx-4 bg-slate-800 border border-slate-700 rounded px-3 py-1 text-xs text-slate-400">
                app.eatcorp.cl
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <DashboardCard label="Compras del mes" value="$2.4M" trend="+12%" color="bg-blue-500" />
                <DashboardCard label="Tareas activas" value="24" trend="6 pendientes" color="bg-emerald-500" />
                <DashboardCard label="Posts esta semana" value="12" trend="+3 vs sem. ant." color="bg-pink-500" />
                <DashboardCard label="Activos OK" value="98%" trend="2 mantenciones" color="bg-amber-500" />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <MockChartCard />
                <MockListCard />
                <MockListCard variant="approvals" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardCard({ label, value, trend, color }: { label: string; value: string; trend: string; color: string }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 text-left">
      <div className={`w-2 h-2 rounded-full ${color} mb-2`}></div>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{trend}</div>
    </div>
  )
}

function MockChartCard() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4">
      <div className="text-xs text-slate-500 mb-3 text-left">Compras semanales</div>
      <div className="flex items-end gap-1 h-20">
        {[40, 65, 50, 80, 45, 90, 70].map((h, i) => (
          <div key={i} className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    </div>
  )
}

function MockListCard({ variant }: { variant?: 'approvals' }) {
  const items = variant === 'approvals'
    ? ['Pago provincial — $480K', 'Factura Coca Cola — $320K', 'Mantención horno']
    : ['Reponer aceite oliva', 'Coordinar cena evento', 'Revisar inventario']

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 text-left">
      <div className="text-xs text-slate-500 mb-3">{variant === 'approvals' ? 'Pendientes aprobación' : 'Tareas recientes'}</div>
      <div className="space-y-2">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm border-2 ${variant === 'approvals' ? 'border-amber-400 bg-amber-50' : 'border-slate-300'}`}></div>
            <div className="text-xs text-slate-700 truncate">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
