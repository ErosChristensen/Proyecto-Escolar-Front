import React, { useState } from "react";
import Fondo from "../assets/img/InicioModalidades.png";
import Logo from "../assets/img/Logo_Modalidades.png"; // tu logo subido
import Nav from "./Nav.jsx";

function Modalidad() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Nav />
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: '300px',
        }}
      >
        {/* Contenido centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-10 px-6">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            MODALIDADES
          </h1>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              className={`px-10 py-4 rounded-md text-lg font-bold shadow-md transition
                ${selected === "electromecanica" ? "bg-green-800" : "bg-green-600 hover:bg-green-700"}
              `}
              onClick={() => setSelected("electromecanica")}
            >
              ELECTROMECÁNICA
            </button>
            <button
              className={`px-10 py-4 rounded-md text-lg font-bold shadow-md transition
                ${selected === "programacion" ? "bg-green-800" : "bg-green-600 hover:bg-green-700"}
              `}
              onClick={() => setSelected("programacion")}
            >
              PROGRAMACIÓN
            </button>
          </div>
        </div>

        {/* Logo superpuesto debajo de los botones */}
        <div className="absolute bottom-[-40px] flex justify-center w-full z-20">
          <div className="w-40 h-40 rounded-full bg-white md:w-40 md:h-40">
            <img
              src={Logo}
              alt="Logo central"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modalidad;
