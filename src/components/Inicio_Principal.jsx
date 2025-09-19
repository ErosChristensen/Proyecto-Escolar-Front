import React from "react";
import fondo from "../assets/img/FondoInicio.png";
import Nav from "./Nav";

function Inicio_Principal() {
  return (
    <div
      className="relative h-[80vh] md:h-[100vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >

      <div className="absolute inset-0 bg-black/40"></div>


      <div className="relative z-10 flex flex-col h-full">
   
        <Nav />

      
        <div className="flex flex-1 items-center justify-start px-4 sm:px-12 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white max-w-3xl leading-snug drop-shadow-lg">
            TÉCNICOS EN EL CAMPO DE LA <br className="hidden sm:block" /> 
            PROGRAMACIÓN Y ELECTROMECÁNICA
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Inicio_Principal;
