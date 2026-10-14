import React, { useState } from 'react';

export default function ProductForm() {
  const [formData, setFormData] = useState({ id: '', nombre: '', precio: '', stock: '', imagenFile: null });
  const [loadingImg, setLoadingImg] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subiendo imagen a Imgbb...");
    setLoadingImg(true);

    setTimeout(() => {
      setLoadingImg(false);
      console.log("Imagen subida con éxito.");
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

      alert("¡Producto procesado con éxito! Revisa la consola.");
      setFormData({ id: '', nombre: '', precio: '', stock: '', imagenFile: null });
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="form-container">
      <h3 style={{ borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '20px' }}>
        Agregar Nuevo Producto
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label style={{ fontSize: '0.85rem' }}>ID</label>
            <input type="text" name="id" value={formData.id} onChange={handleChange} required className="form-input" placeholder="Ej: 4" />
          </div>
          <div className="form-group">
            <label style={{ fontSize: '0.85rem' }}>Nombre del Producto</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="form-input" placeholder="Ej: Teclado Mecánico" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label style={{ fontSize: '0.85rem' }}>Precio</label>
            <input type="number" name="precio" value={formData.precio} onChange={handleChange} required className="form-input" placeholder="Ej: 1111" />
          </div>
          <div className="form-group">
            <label style={{ fontSize: '0.85rem' }}>Stock</label>
            <input type="number" name="stock" value={formData.stock} onChange={handleChange} required className="form-input" placeholder="Ej: 11" />
          </div>
        </div>

        <div className="form-group">
          <label style={{ fontSize: '0.85rem' }}>Imagen</label>
          <input type="file" name="imagenFile" onChange={handleChange} accept="image/*" required style={{ color: '#94a3b8' }} />
        </div>

        <button type="submit" disabled={loadingImg} className="form-btn">
          {loadingImg ? "Subiendo imagen y guardando..." : "Guardar Producto"}
        </button>
      </form>
    </div>
  );
}