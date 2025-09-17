import React from "react";
import Nav from "../components/Nav.jsx";

function Noticias_Inicio() {
  return (
    <>
      {/* Contenedor principal sin márgenes blancos */}
      <div className="bg-[#0a501a] w-full">
        <Nav />

        {/* Sección inclinada con texto */}
        <div className="relative w-full transform -skew-y-[3deg]">
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] bg-[#0a501a] text-white text-center px-4 sm:px-6 flex items-center justify-center pt-16 pb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold transform skew-y-[3deg]">
              NOTICIAS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noticias_Inicio;
