export default function Item({ id, nombre, precio, stock, urlImagen }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col hover:border-cyan-500 transition-all">
      <div className="h-48 overflow-hidden bg-slate-800 relative">
        <img 
          src={urlImagen} 
          alt={nombre} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-cyan-400 font-semibold mb-1">ID: {id}</span>
        <h3 className="text-lg font-bold text-white mb-2">{nombre}</h3>
        <div className="mt-auto flex justify-between items-center pt-3 border-t border-slate-800">
          <span className="text-xl font-extrabold text-emerald-400">${precio}</span>
          <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
            Stock: {stock}
          </span>
        </div>
      </div>
    </div>
  );
}