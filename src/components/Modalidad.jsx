import React, { useState } from "react";
import Fondo from "../assets/img/InicioModalidades.png";
import Logo from "../assets/img/Logo_Modalidades.png";
import Nav from "./Nav.jsx";
import Modalidad_Programacion from "./Modalidad_Programacion.jsx";
import Modalidad_Electromecanica from "./Modalidad_Electromecanica.jsx";

function Modalidad() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Nav />

      {/* Fondo principal */}
      <div className="relative h-[70vh] md:h-[85vh] w-full flex flex-col justify-center items-center text-white overflow-hidden">
        <div
          className="w-full flex flex-col justify-center items-center relative"
          style={{
            backgroundImage: `url(${Fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
           
          }}
        >
          {/* Contenido centrado */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-10 px-6">
            <h1 className="text-4xl md:text-5xl mb-20 font-extrabold text-center">
              MODALIDADES
            </h1>

            <div className="flex flex-col sm:flex-row gap-10">
              <button
                className={`px-10 py-4 rounded-md text-lg font-bold shadow-md transition ${
                  selected === "electromecanica"
                    ? "bg-green-800"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                onClick={() => setSelected("electromecanica")}
              >
                ELECTROMECÁNICA
              </button>

              <button
                className={`px-10 py-4 rounded-md text-lg font-bold shadow-md transition ${
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
        </div>
      </div>
      {selected === "programacion" && (
        <div className="w-full">
          <Modalidad_Programacion />
        </div>
      )}

      {selected === "electromecanica" && (
        <div className="w-full">
          <Modalidad_Electromecanica />
        </div>
      )}
    </>
  );
}

export default Modalidad;
