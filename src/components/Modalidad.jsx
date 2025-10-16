import React, { useState } from "react";
import Fondo from "../assets/img/InicioModalidades.png";
import Nav from "./Nav.jsx";
import Modalidad_Programacion from "./Modalidad_Programacion.jsx";
import Modalidad_Electromecanica from "./Modalidad_Electromecanica.jsx";

function Modalidad() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Nav />

      {/* Fondo principal */}
      <div
        className="relative w-full min-h-screen md:min-h-[110vh] flex flex-col justify-center items-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Capa de oscurecimiento */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido centrado */}
<div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 sm:py-24 md:py-32 max-w-5xl transform -translate-y-6 sm:-translate-y-10 md:-translate-y-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-10 md:mb-16 leading-tight">
            MODALIDADES
          </h1>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full sm:w-auto justify-center">
            <button
              className={`w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-md text-base sm:text-lg md:text-xl font-bold shadow-md transition-all duration-300 ${
                selected === "electromecanica"
                  ? "bg-green-800 scale-105"
                  : "bg-green-600 hover:bg-green-700 hover:scale-105"
              }`}
              onClick={() => setSelected("electromecanica")}
            >
              ELECTROMECÁNICA
            </button>

            <button
              className={`w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-md text-base sm:text-lg md:text-xl font-bold shadow-md transition-all duration-300 ${
                selected === "programacion"
                  ? "bg-green-800 scale-105"
                  : "bg-green-600 hover:bg-green-700 hover:scale-105"
              }`}
              onClick={() => setSelected("programacion")}
            >
              PROGRAMACIÓN
            </button>
          </div>
        </div>
      </div>

      {/* Secciones dinámicas */}
      <div className="w-full">
        {selected === "programacion" && <Modalidad_Programacion />}
        {selected === "electromecanica" && <Modalidad_Electromecanica />}
      </div>
    </>
  );
}

export default Modalidad;
