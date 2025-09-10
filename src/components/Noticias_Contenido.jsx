import { useState } from "react";
import Noticias_elegida from "./Noticias_elegida";
import img1 from "../assets/img/InicioModalidades.png";
import img2 from "../assets/img/InicioNovedades2.png";
import img3 from "../assets/img/InicioNovedades3.png"
export default function Noticias_Contenido() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const noticias = [
    {
      titulo: "Alumnos participarán en Olimpiadas de Matemática",
      fecha: "2025-02-21",
      descripcion:
        "Representantes de nuestra institución competirán en la instancia regional de las Olimpiadas de Matemática, mostrando dedicación y talento.",
      multimedia: [img1, img2],
    },
    {
      titulo: "Nuevo equipamiento para el laboratorio de ciencias",
      fecha: "2025-02-20",
      descripcion:
        "Gracias al aporte de la cooperadora, se incorporó equipamiento moderno que permitirá mejorar las prácticas en física y química.",
      multimedia: [img2],
    },
    {
      titulo: "Taller de Robótica Educativa para estudiantes",
      fecha: "2025-02-20",
      descripcion:
        "Se abre la inscripción para el nuevo taller de robótica, fomentando la creatividad y el trabajo en equipo con tecnología.",
      multimedia: [img3],
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-24 mt-32">
        {noticias.map((noti, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md w-96 flex flex-col overflow-hidden cursor-pointer"
            onClick={() => setNoticiaSeleccionada(noti)}
          >
            <img
              src={noti.multimedia[0]}
              alt={noti.titulo}
              className="w-full h-44 object-cover bg-blue-100"
            />
            <div className="p-5">
              <div className="font-bold text-lg mb-2">{noti.titulo}</div>
              <div className="text-orange-600 font-bold text-sm mb-2">{noti.fecha}</div>
              <div className="text-gray-600 text-sm">{noti.descripcion}</div>
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
