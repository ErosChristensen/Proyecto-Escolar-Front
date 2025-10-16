import React from "react";
import FondoInfo from "../assets/img/FondoInfo.png";

function Modalidad_Electromecanica_Info() {
  return (
    
    <div
      className="relative w-full flex items-center justify-end text-white text-right"
      style={{
        backgroundImage: `url(${FondoInfo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >

      {/* Contenido alineado a la derecha */}
      <div className="relative z-10 max-w-3xl pr-10 md:pr-50">
        <p className="text-lg md:text-xl mb-3">
          En el ciclo superior podés titularte como:
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
          TECNICO/A <br /> ELECTROMECANICO
        </h1>
      </div>
    </div>
  );
}

export default Modalidad_Electromecanica_Info;
