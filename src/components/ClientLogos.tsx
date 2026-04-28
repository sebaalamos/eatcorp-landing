const clients = [
  { name: 'El Toro', tag: 'Restaurant · Las Condes', real: true },
  { name: 'Tigre', tag: 'Restaurant · Bellavista', real: true },
  { name: 'Tu restorán', tag: 'Próximamente', placeholder: true },
  { name: 'Tu restorán', tag: 'Próximamente', placeholder: true },
]

export function ClientLogos() {
  return (
    <section className="py-12 px-4 bg-brand-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Restoranes que operan con EatCorp
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((c, i) => (
            <div key={i} className={`text-center ${c.placeholder ? 'opacity-50' : 'opacity-90'}`}>
              <div
                className={`font-serif text-2xl font-bold ${
                  c.placeholder
                    ? 'text-slate-500 border-2 border-dashed border-slate-700 rounded-lg py-2 px-3'
                    : 'text-slate-200'
                }`}
              >
                {c.name}
              </div>
              <div className={`text-[10px] uppercase tracking-wider mt-1.5 ${c.placeholder ? 'text-slate-500' : 'text-slate-400'}`}>
                {c.tag}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-500 mt-6 italic">
          Y otros restoranes que prefieren mantenerse anónimos
        </p>
      </div>
    </section>
  )
}
