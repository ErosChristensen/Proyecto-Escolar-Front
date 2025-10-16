import React from "react";
import FondoInfo from "../assets/img/FondoInfo.png";

function Modalidad_Electromecanica_Info() {
  return (
    <div
      className="relative w-full flex items-center justify-center md:justify-end text-white text-center md:text-right"
      style={{
        backgroundImage: `url(${FondoInfo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      {/* Capa de oscurecimiento para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido alineado a la derecha en notebook */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-10 md:pr-24">
        <p className="text-base sm:text-lg md:text-xl mb-3">
          En el ciclo superior podés titularte como:
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          TÉCNICO/A <br /> ELECTROMECÁNICO/A
        </h1>
      </div>
    </div>
  );
}

export default Modalidad_Electromecanica_Info;
