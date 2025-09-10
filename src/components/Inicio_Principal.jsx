import React from "react";
import logo from "../assets/img/EscudoEscuelaSinFondo.png";
import fondo from "../assets/img/FondoInicio.png";
import Nav from "./Nav";

function Inicio_Principal() {
    return(
  <div
      className="relative h-210 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    
      <div className="relative z-10 flex flex-col">
 
<div>
   <Nav />
</div>
        <div className="flex flex-1 py-53 px-15 items-center justify-left text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl px-4 ">
            TECNICOS EN EL CAMPO DE LA <br /> PROGRAMACION Y ELECTROMECANICA
          </h1>
        </div>
      </div>
    </div>
    );
}

export default Inicio_Principal;