import React from "react";
import { Link } from "react-router-dom"; 
import InicioNovedades1 from "../assets/img/InicioNovedades1.png";
import InicioNovedades2 from "../assets/img/InicioNovedades2.png";
import InicioNovedades3 from "../assets/img/InicioNovedades3.png";

const noticias = [
  {
    id: 1,
    titulo: "REGRESO A CLASES LUEGO DE VACACIONES DE INVIERNO",
    fecha: "FEB 28-2025",
    img: InicioNovedades1,
  },
  {
    id: 2,
    titulo: "PARTICIPACION DE CHICOS DE PROGRAMACION EN OLIMPIADAS",
    fecha: "FEB 28-2025",
    img: InicioNovedades2,
  },
  {
    id: 3,
    titulo: "NUEVAS MAQUINARIAS PARA ELECTROMECANICA",
    fecha: "FEB 28-2025",
    img: InicioNovedades3,
  },
];

function Ultimas_Novedades() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 uppercase text-gray-800">
        ÚLTIMAS NOVEDADES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {noticias.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.titulo}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-orange-600 font-bold text-lg md:text-xl leading-snug">
                {item.titulo}
              </h3>
              <p className="mt-3 text-gray-600 font-medium text-sm sm:text-base">
                {item.fecha}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          to="/noticias" 
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
        >
          VER TODAS LAS NOTICIAS
        </Link>
      </div>
    </section>
  );
}

export default Ultimas_Novedades;
