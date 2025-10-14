import React, { useState } from "react";
import Fondo from "../assets/img/InicioModalidades.png";
import Logo from "../assets/img/Logo_Modalidades.png";
import Nav from "./Nav.jsx";

function Modalidad() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Nav />
      <div
        className="relative flex flex-col justify-center items-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh", // achica el alto del fondo
        }}
      >
        {/* Capa semitransparente para dar contraste */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-10 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            MODALIDADES
          </h1>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              className={`px-10 py-4 rounded-md text-lg font-bold shadow-md transition
                ${
                  selected === "electromecanica"
                    ? "bg-green-800"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              onClick={() => setSelected("electromecanica")}
            >
              ELECTROMECÁNICA
            </button>

            <button
              className={`px-10 py-4 rounded-md text-lg font-bold shadow-md transition
                ${
                  selected === "programacion"
                    ? "bg-green-800"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              onClick={() => setSelected("programacion")}
            >
              PROGRAMACIÓN
            </button>
          </div>
        </div>

        {/* Logo superpuesto */}
        <div className="absolute bottom-[-60px] flex justify-center w-full z-20">
          <div className="bg-white rounded-full flex items-center justify-center shadow-xl w-44 h-44 md:w-48 md:h-48 border-4 border-white">
            <img
              src={Logo}
              alt="Logo central"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modalidad;
