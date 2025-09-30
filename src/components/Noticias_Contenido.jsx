import { useState, useEffect } from "react"; // Importamos hooks de React
import Noticias_elegida from "./Noticias_elegida"; // Importamos el componente del modal (detalle de la noticia)

export default function Noticias_Contenido() {
  // Estado para guardar las noticias traídas desde el backend
  const [noticias, setNoticias] = useState([]);

  // Estado para guardar cuál noticia se seleccionó (para abrir el modal)
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  // Hook que se ejecuta una sola vez al montar el componente
  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        // Hacemos la llamada a la API que devuelve un array de noticias
        const res = await fetch("http://localhost:3000/api/noticias");
        const data = await res.json(); // Convertimos la respuesta a JSON

        // Guardamos las noticias en el estado
        setNoticias(data);
      } catch (err) {
        // Si algo sale mal, mostramos el error por consola
        console.error("Error al cargar las noticias:", err);
      }
    };

    // Llamamos a la función que hace el fetch
    fetchNoticias();
  }, []); // El array vacío significa que esto se ejecuta solo una vez
// Función para dar formato a la fecha
function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const anio = fecha.getFullYear();
  return `${dia}-${mes}-${anio}`;
}
  return (
    <>
      {/* Contenedor de las tarjetas de noticias */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-24 mt-32 px-4 mb-40">
        {/* Recorremos cada noticia y la mostramos en una tarjeta */}
        {noticias.map((noti, idx) => (
          <div
            key={noti.id || idx} // Usamos el ID de la noticia si existe, si no, el índice
            className="bg-white rounded-lg shadow-md w-full sm:w-[22rem] flex flex-col overflow-hidden cursor-pointer"
            onClick={() => setNoticiaSeleccionada(noti)} // Al hacer click, abrimos el modal con esa noticia
          >
            {/* Mostramos la primera imagen del array multimedia */}
            <img
              src={noti.multimedia?.[0]} // usamos el primer archivo multimedia si existe
              alt={noti.titulo}
              className="w-full h-44 object-cover bg-blue-100"
            />

            {/* Contenido textual de la tarjeta */}
            <div className="p-5">
              <div className="font-bold text-lg mb-2">{noti.titulo}</div>
              <div className="text-orange-600 font-bold text-sm mb-2">{formatearFecha(noti.fecha)}</div>
              <div className="text-gray-600 text-sm">{noti.subtitulo}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Si hay una noticia seleccionada, mostramos el componente modal */}
      {noticiaSeleccionada && (
        <Noticias_elegida
          noticia={noticiaSeleccionada}
          onClose={() => setNoticiaSeleccionada(null)} // Al cerrar el modal, limpiamos la selección
        />
      )}
    </>
  );
}
