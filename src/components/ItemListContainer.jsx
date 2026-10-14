import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: 'center', padding: '40px' }}>Cargando catálogo...</p>;

  return (
    <div id="productos" style={{ marginTop: '20px' }}>
      <h2 style={{ borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '20px' }}>
        Catálogo de Productos
      </h2>
      <div className="grid-productos">
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}