import React from "react";
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
    <section className="py-27 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 uppercase">ULTIMAS NOVEDADES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {noticias.map((item) => (
          <div key={item.id} className="text-left">
            <img
              src={item.img}
              alt={item.titulo}
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-orange-600 font-bold text-lg leading-snug">
              {item.titulo}
            </h3>
            <p className="mt-2 text-gray-700 font-semibold">{item.fecha}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow">
          VER TODAS LAS NOTICIAS
        </button>
      </div>
    </section>
  );
}

export default Ultimas_Novedades;
