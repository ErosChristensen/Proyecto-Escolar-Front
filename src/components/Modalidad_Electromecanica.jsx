import React, { useState } from "react";
import Modalidad_Electromecanica_Info from "./Modalidad_Electromecanica_Info.jsx";
import Modalidad_Electromecanica_Banner from "./Modalidad_Electromecanica_Banner.jsx";
import Modalidad_Electromecanica_Carrusel from "./Modalidad_Electromecanica_Carrusel.jsx";

function Modalidad_Electromecanica() {
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
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 lg:py-24 bg-gray-50 text-gray-800">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-green-700">
          ELECTROMECÁNICA
        </h1>

        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Botones laterales */}
          <div className="flex flex-col w-full md:w-1/3 space-y-3 sm:space-y-4">
            <button
              onClick={() => setSelected("introduccion")}
              className={`py-3 sm:py-4 px-4 font-bold rounded-md border-2 transition text-sm sm:text-base md:text-lg ${
                selected === "introduccion"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-600 border-green-600 hover:bg-gray-300"
              }`}
            >
              INTRODUCCIÓN
            </button>

            <button
              onClick={() => setSelected("alcance")}
              className={`py-3 sm:py-4 px-4 font-bold rounded-md border-2 transition text-sm sm:text-base md:text-lg ${
                selected === "alcance"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-600 border-green-600 hover:bg-gray-300"
              }`}
            >
              ALCANCE DEL TÍTULO
            </button>

            <button
              onClick={() => setSelected("talleres")}
              className={`py-3 sm:py-4 px-4 font-bold rounded-md border-2 transition text-sm sm:text-base md:text-lg ${
                selected === "talleres"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-600 border-green-600 hover:bg-gray-300"
              }`}
            >
              TALLERES PRINCIPALES
            </button>

            <button
              onClick={() => setSelected("porque")}
              className={`py-3 sm:py-4 px-4 font-bold rounded-md border-2 transition text-sm sm:text-base md:text-lg ${
                selected === "porque"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-200 text-gray-600 border-green-600 hover:bg-gray-300"
              }`}
            >
              ¿POR QUÉ ELEGIRLA?
            </button>
          </div>

          {/* Texto descriptivo */}
          <div className="w-full md:w-2/3 text-gray-700 leading-relaxed text-justify text-sm sm:text-base md:text-lg bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
            {textos[selected]}
          </div>
        </div>
      </div>

      {/* Otras secciones */}
      <div className="w-full">
        <Modalidad_Electromecanica_Info />
        <Modalidad_Electromecanica_Carrusel />
        <Modalidad_Electromecanica_Banner />
      </div>
    </>
  );
}

export default Modalidad_Electromecanica;
