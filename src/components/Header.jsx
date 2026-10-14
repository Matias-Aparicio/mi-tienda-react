export default function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">Mi Tienda React</h1>
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a></li>
            <li><a href="#productos" className="hover:text-cyan-400 transition-colors">Productos</a></li>
            <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}