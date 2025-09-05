import React from "react";
import logo from "../assets/img/EscudoEscuelaSinFondo.png";
import fondo from "../assets/img/FondoInicio.png";

function Inicio() {
    return(
  <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    
      <div className="relative z-10 flex flex-col">
 
        <header className="flex justify-between items-center px-10 py-5 text-lg">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-15 h-15" />
            <div className="text-white font-bold leading-tight">
              <p>EEST N1</p>
              <p>REPUBLICA DE MEXICO</p>
            </div>
          </div>

          <nav className="flex gap-8 text-white font-semibold">
            <a href="#" className="text-orange-400">Inicio</a>
            <a href="#">Noticias</a>
            <a href="#">Modalidades</a>
            <a href="#">Institución</a>
          </nav>
        </header>

        <div className="flex flex-1 py-53 px-15 items-center justify-left text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl px-4 ">
            TECNICOS EN EL CAMPO DE LA <br /> PROGRAMACION Y ELECTROMECANICA
          </h1>
        </div>
      </div>
    </div>
    );
}

export default Inicio;