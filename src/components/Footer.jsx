export default function Footer() {
  const personas = [
    { nombre: "Carlos Gómez", rol: "Desarrollador Full Stack", email: "carlos@mitienda.com" },
    { nombre: "Ana Martínez", rol: "Diseñadora UI/UX", email: "ana@mitienda.com" },
    { nombre: "Lucas Pérez", rol: "Soporte Técnico", email: "lucas@mitienda.com" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-10 pb-6 border-t border-slate-800 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Mi Tienda S.A.</h3>
            <p className="text-sm text-slate-400">
              Soluciones tecnológicas y componentes de alto rendimiento para entusiastas y profesionales.
            </p>
            <p className="text-sm text-slate-400 mt-2">📍 Buenos Aires, Argentina</p>
          </div>

          {/* Tarjetas de las 3 personas */}
          <div>
            <h4 className="text-white text-md font-semibold mb-3">Nuestro Equipo</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {personas.map((p, index) => (
                <div key={index} className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <p className="text-white font-medium text-sm">{p.nombre}</p>
                  <p className="text-xs text-cyan-400">{p.rol}</p>
                  <p className="text-xs text-slate-400 truncate mt-1">{p.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-800">
          © {new Date().getFullYear()} Mi Tienda React. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}