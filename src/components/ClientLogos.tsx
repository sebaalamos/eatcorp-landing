const clients = [
  { name: 'La Mar', tag: 'Bistró' },
  { name: 'El Toro', tag: 'Restaurant' },
  { name: 'Sal & Roca', tag: 'Cocina de autor' },
  { name: 'Don Tito', tag: 'Pizzería' },
  { name: 'Atacama', tag: 'Hotel boutique' },
  { name: 'La Estación', tag: 'Casino' },
]

export function ClientLogos() {
  return (
    <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Restaurantes que operan con EatCorp
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          {clients.map((c) => (
            <div key={c.name} className="text-center">
              <div className="font-serif text-2xl font-bold text-slate-700">{c.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">{c.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
