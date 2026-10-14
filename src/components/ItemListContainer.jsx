import { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo de productos.');
        }
        return response.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-lg animate-pulse">Cargando catálogo de productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-400">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div id="productos" className="my-8">
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-2">
        Catálogo de Productos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}