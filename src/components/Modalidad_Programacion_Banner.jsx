import React from "react";
import Logo from "../assets/img/EscudoEscuelaSinFondo.png";

function Modalidades_Programacion_Banner() {
  return (
    <div className="w-full bg-[#d28b4b] flex flex-col md:flex-row items-center justify-between gap-6 px-6 sm:px-10 md:px-20 py-8 md:py-12 mt-16 mb-20">
      {/* Logo a la izquierda */}
      <img
        src={Logo}
        alt="Logo Programación"
        className="w-24 sm:w-28 md:w-36 lg:w-40 h-auto object-contain"
      />

      {/* Texto a la derecha */}
      <h1 className="text-white text-center md:text-right text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug md:max-w-[60%]">
        PROGRAMACIÓN: <br className="hidden sm:block" /> LÓGICA QUE TRANSFORMA
      </h1>
    </div>
  );
}

export default Modalidades_Programacion_Banner;
  