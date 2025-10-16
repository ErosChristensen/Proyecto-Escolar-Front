import React from "react";
import FondoInfo from "../assets/img/FondoInfo.png";

function Modalidad_Programacion_Info() {
  return (
    <div
      className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end text-white text-center md:text-right overflow-hidden"
      style={{
        backgroundImage: `url(${FondoInfo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "70vh",
      }}
    >
      {/* Capa de oscurecimiento para contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-10 md:pr-20 py-16 sm:py-24">
        <p className="text-base sm:text-lg md:text-xl mb-3 text-gray-200">
          En el ciclo superior podés titularte como:
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug">
          TÉCNICO/A EN PROGRAMACIÓN <br className="hidden sm:block" /> E INFORMÁTICA
        </h1>
      </div>
    </div>
  );
}

export default Modalidad_Programacion_Info;
  