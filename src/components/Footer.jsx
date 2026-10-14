import React from 'react';

export default function Footer() {
  const personas = [
    { nombre: "Carlos Gómez", rol: "Desarrollador Full Stack", email: "carlos@mitienda.com" },
    { nombre: "Ana Martínez", rol: "Diseñadora UI/UX", email: "ana@mitienda.com" },
    { nombre: "Lucas Pérez", rol: "Soporte Técnico", email: "lucas@mitienda.com" }
  ];

  return (
    <footer className="footer-bg">
      <div className="container-custom">
        <div style={{ marginBottom: '20px' }}>
          <h3>Mi Tienda S.A.</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
            Soluciones tecnológicas y componentes de alto rendimiento.
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>📍 Buenos Aires, Argentina</p>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem' }}>Nuestro Equipo</h4>
          <div className="grid-equipo">
            {personas.map((p, index) => (
              <div key={index} className="card-persona">
                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{p.nombre}</p>
                <p style={{ color: '#38bdf8', fontSize: '0.8rem' }}>{p.rol}</p>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '4px' }}>{p.email}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.8rem', marginTop: '30px', paddingTop: '15px', borderTop: '1px solid #1e293b' }}>
          © {new Date().getFullYear()} Mi Tienda React. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}