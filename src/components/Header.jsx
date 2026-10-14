import React from 'react';

export default function Header() {
  return (
    <header className="header-bg">
      <div className="container-custom header-flex">
        <h1 style={{ color: '#ffffff', fontSize: '1.4rem' }}>Mi Tienda React</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#inicio" className="nav-link">Inicio</a></li>
            <li><a href="#productos" className="nav-link">Productos</a></li>
            <li><a href="#contacto" className="nav-link">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}