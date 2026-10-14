import React from 'react';

export default function Item({ id, nombre, precio, stock, urlImagen }) {
  return (
    <div className="card-item">
      <div className="card-img-container">
        <img src={urlImagen} alt={nombre} className="card-img" />
      </div>
      <div className="card-body">
        <span style={{ fontSize: '0.8rem', color: '#38bdf8' }}>ID: {id}</span>
        <h3 style={{ margin: '8px 0', fontSize: '1.1rem' }}>{nombre}</h3>
        <div className="card-footer">
          <span style={{ fontSize: '1.2rem', color: '#4ade80', fontWeight: 'bold' }}>${precio}</span>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Stock: {stock}</span>
        </div>
      </div>
    </div>
  );
}