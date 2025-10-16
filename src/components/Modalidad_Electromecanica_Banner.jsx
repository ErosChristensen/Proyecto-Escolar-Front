import React from "react";
import Logo from "../assets/img/EscudoEscuelaSinFondo.png";

function Modalidades_Electromecanica_Banner() {
  return (
    <div className="w-full bg-[#d28b4b] flex flex-col md:flex-row items-center justify-center md:justify-between mb-20 px-6 sm:px-10 md:px-20 py-6 md:py-8 rounded-lg shadow-md">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo Electromecánica"
        className="w-24 sm:w-32 md:w-40 h-auto object-contain mb-4 md:mb-0"
      />

      {/* Texto */}
      <h1 className="text-white text-center md:text-right text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        ELECTROMECÁNICA: <br className="hidden sm:block" /> FUERZA E INNOVACIÓN
      </h1>
    </div>
  );
}

export default Modalidades_Electromecanica_Banner;
  