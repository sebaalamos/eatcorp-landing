import { Logo } from './Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Logo size={36} textColor="text-white" />
            <p className="text-sm mt-4 leading-relaxed">
              Plataforma de gestión integral para restaurantes en Chile.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#apps" className="hover:text-white transition">Apps</a></li>
              <li><a href="#features" className="hover:text-white transition">Características</a></li>
              <li><a href="https://app.eatcorp.cl" className="hover:text-white transition">Iniciar sesión</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hola@eatcorp.cl" className="hover:text-white transition">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} EatCorp. Hecho en Chile.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
