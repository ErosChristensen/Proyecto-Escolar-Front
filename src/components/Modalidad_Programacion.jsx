import React, { useState } from "react";
import Modalidad_Programacion_Info from "./Modalidad_Programacion_Info.jsx";
import Modalidad_Programacion_Banner from "./Modalidad_Programacion_Banner.jsx";
import Modalidad_Programacion_Carrusel from "./Modalidad_Programacion_Carrusel.jsx";

function Modalidad_Programacion() {
  const [selected, setSelected] = useState("introduccion");

  const textos = {
    introduccion:
      "Se abre la inscripción para el nuevo taller de robótica, fomentando la creatividad y el trabajo en equipo con tecnología. Se abre la inscripción para el nuevo taller de robótica, fomentando la creatividad y el trabajo en equipo con tecnología. Se abre la inscripción para el nuevo taller de robótica, fomentando la creatividad y el trabajo en equipo con tecnología.",
    alcance:
      "El título permite desempeñarse en desarrollo de software, soporte técnico, mantenimiento de sistemas informáticos y más.",
    talleres:
      "Los talleres principales incluyen programación web, robótica, diseño de bases de datos y desarrollo de aplicaciones.",
    porque:
      "Elegir esta modalidad te prepara para el futuro digital, combinando creatividad, lógica y tecnología aplicada.",
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 px-6 h-130 ">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
          PROGRAMACIÓN
        </h1>

        <div className="flex flex-col md:flex-row gap-50 w-full max-w-5xl justify-center">
          {/* Botones laterales */}
          <div className="flex flex-col space-y-2 w-full md:w-1/3">
            <button
              onClick={() => setSelected("introduccion")}
              className={`py-3 px-4 font-bold rounded-md border-2 transition ${
                selected === "introduccion"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-500 border-green-600 hover:bg-gray-300"
              }`}
            >
              INTRODUCCIÓN
            </button>
            <button
              onClick={() => setSelected("alcance")}
              className={`py-3 px-4 font-bold rounded-md border-2 transition ${
                selected === "alcance"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-500 border-green-600 hover:bg-gray-300"
              }`}
            >
              ALCANCE DEL TITULO
            </button>
            <button
              onClick={() => setSelected("talleres")}
              className={`py-3 px-4 font-bold rounded-md border-2 transition ${
                selected === "talleres"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-500 border-green-600 hover:bg-gray-300"
              }`}
            >
              TALLERES PRINCIPALES
            </button>
            <button
              onClick={() => setSelected("porque")}
              className={`py-3 px-4 font-bold rounded-md border-2 transition ${
                selected === "porque"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-500 border-green-600 hover:bg-gray-300"
              }`}
            >
              ¿POR QUÉ ELEGIRLA?
            </button>
          </div>

          {/* Texto a la derecha */}
          <div className="w-full md:w-2/3 text-gray-500 leading-relaxed text-justify">
            {textos[selected]}
          </div>
        </div>
      </div>
        <div className="w-full">
                 <Modalidad_Programacion_Info />
                  <Modalidad_Programacion_Banner />
                  <Modalidad_Programacion_Carrusel />
              </div>
            
    </>
  );
}

export default Modalidad_Programacion;
