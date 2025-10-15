import { useState, useEffect } from "react";
import Noticias_elegida from "./Noticias_elegida";

export default function Noticias_Contenido() {
  const [noticias, setNoticias] = useState([]);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/noticias");
        const data = await res.json();

        const normalizarNoticia = (n) => {
          const base = "http://localhost:3000";
          return {
            ...n,
            multimedia: [n.imagen1, n.imagen2, n.imagen3, n.imagen4]
              .filter(Boolean)
              .map((img) => `${base}${img}`),
          };
        };

        setNoticias((data.items || []).map(normalizarNoticia));
      } catch (err) {
        console.error("Error al cargar las noticias:", err);
      }
    };

    fetchNoticias();
  }, []);

  function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const anio = fecha.getFullYear();
    return `${dia}-${mes}-${anio}`;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 md:gap-24 mt-8 px-4 mb-40">
        {noticias.map((noti, idx) => (
          <div
            key={noti.id || idx}
            className="bg-white rounded-lg shadow-md w-full sm:w-[22rem] flex flex-col overflow-hidden cursor-pointer"
            onClick={() => setNoticiaSeleccionada(noti)}
          >
            <img
              src={noti.multimedia?.[0]}
              alt={noti.titulo}
              className="w-full h-44 object-cover bg-blue-100"
            />
            <div className="p-5">
              <div className="font-bold text-lg mb-2">{noti.titulo}</div>
              <div className="text-orange-600 font-bold text-sm mb-2">
                {formatearFecha(noti.fecha)}
              </div>
              <div className="text-gray-600 text-sm">{noti.subtitulo}</div>
            </div>
          </div>
        ))}
      </div>

      {noticiaSeleccionada && (
        <Noticias_elegida
          noticia={noticiaSeleccionada}
          onClose={() => setNoticiaSeleccionada(null)}
        />
      )}
    </>
  );
}
