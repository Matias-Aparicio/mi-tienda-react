import { useState } from 'react';

export default function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    precio: '',
    stock: '',
    imagenFile: null
  });

  const [loadingImg, setLoadingImg] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagenFile') {
      setFormData({ ...formData, imagenFile: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de subida de imagen a Imgbb
    console.log("Subiendo imagen a Imgbb...");
    setLoadingImg(true);

    setTimeout(() => {
      setLoadingImg(false);
      console.log("Imagen subida con éxito.");
      
      // URL simulada de la imagen tal como se solicitó
      const simulatedUrl = "https://i.ibb.co/m56Jhw6m/teclado.jpg";
      console.log(`URL: ${simulatedUrl}`);

      const datosCompletos = {
        id: formData.id,
        nombre: formData.nombre,
        precio: formData.precio,
        stock: formData.stock,
        urlImagen: simulatedUrl
      };

      console.log("Enviando los siguientes datos COMPLETOS a la API:");
      console.log(datosCompletos);

      alert("¡Producto procesado con éxito! Revisa la consola del navegador para ver el log detallado.");
      
      // Limpiar formulario opcionalmente
      setFormData({ id: '', nombre: '', precio: '', stock: '', imagenFile: null });
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="mt-16 bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
        Agregar Nuevo Producto
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">ID</label>
            <input 
              type="text" 
              name="id" 
              value={formData.id} 
              onChange={handleChange} 
              required
              placeholder="Ej: 4"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Nombre del Producto</label>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required
              placeholder="Ej: Teclado Mecánico"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Precio</label>
            <input 
              type="number" 
              name="precio" 
              value={formData.precio} 
              onChange={handleChange} 
              required
              placeholder="Ej: 1111"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Stock</label>
            <input 
              type="number" 
              name="stock" 
              value={formData.stock} 
              onChange={handleChange} 
              required
              placeholder="Ej: 11"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Imagen</label>
          <input 
            type="file" 
            name="imagenFile" 
            onChange={handleChange} 
            accept="image/*"
            required
            className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-500 cursor-pointer"
          />
        </div>

        <button 
          type="submit" 
          disabled={loadingImg}
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2.5 rounded-lg transition-colors text-sm shadow-md disabled:opacity-50"
        >
          {loadingImg ? "Subiendo imagen y guardando..." : "Guardar Producto"}
        </button>
      </form>
    </div>
  );
}