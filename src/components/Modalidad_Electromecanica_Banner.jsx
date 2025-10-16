import React from "react";
import Logo from "../assets/img/EscudoEscuelaSinFondo.png"; // Ajusta la ruta según tu proyecto

function Modalidades_Electromecanica_Banner() {
  return (
    <div className="w-full bg-[#d28b4b] flex items-center mb-20 px-6 py-4 h-40">
      {/* Logo a la izquierda */}
      <img 
        src={Logo} 
        alt="Logo Electromecanica" 
        className="w-30 h-30 ml-35  object-contain mr-4" // tamaño ajustado y margen a la derecha
      />

      {/* Título a la derecha */}
      <h1 className="text-white text-2xl font-bold md:text-4xl ml-240">
        ELECTROMECANICA: <br /> FUERZA E INNOVACION
      </h1>
    </div>
  );
}

export default Modalidades_Electromecanica_Banner;
