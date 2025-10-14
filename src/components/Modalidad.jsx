import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import agregado
import Fondo from "../assets/img/InicioModalidades.png";
import Logo from "../assets/img/Logo_Modalidades.png";
import Nav from "./Nav.jsx";

function Modalidad() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate(); // 👈 hook para navegar

  return (
    <>
      <Nav />
      <div className="relative w-full flex flex-col justify-center items-center text-white overflow-hidden">
        <div
          className="w-full flex flex-col justify-center items-center relative"
          style={{
            backgroundImage: `url(${Fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
          }}
        >
          {/* Contenido centrado */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-10 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center">
              MODALIDADES
            </h1>

            <div className="flex flex-col sm:flex-row gap-6">
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

              {/* ✅ ESTE ES EL BOTÓN QUE NAVEGA */}
              <button
                className={`px-10 py-4 rounded-md text-lg font-bold shadow-md transition ${
                  selected === "programacion"
                    ? "bg-green-800"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                onClick={() => navigate("/modalidad-prog")} // 👈 navega a la ruta
              >
                PROGRAMACIÓN
              </button>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Modalidad;
