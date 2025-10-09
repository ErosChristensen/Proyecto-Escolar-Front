import React from "react";
import Nav from "../components/Nav.jsx";
import Noticias_Contenido from "./Noticias_Contenido.jsx";

function Noticias_Inicio() {
  return (
    <>
      <div className="w-full relative">
        {/* Nav arriba */}
        <div className="relative z-50">
          <Nav />
        </div>

        {/* HERO: comienza justo debajo del Nav -> ajusta mt-[64px] si tu Nav es otra altura */}
        <section className="relative bg-[#0a501a] text-white overflow-visible">
          {/* Contenido centrado dentro del bloque verde.
              Cambia h-[460px] para hacer el bloque más/menos alto. */}
          <div className="flex items-center justify-center h-[460px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              NOTICIAS
            </h1>
          </div>

          {/* SVG en el borde inferior que crea el corte diagonal.
              Cambia h-[200px] para la altura del corte y modifica 'L100,25' en el path
              para hacer la inclinación más/menos pronunciada. */}
          <svg
            className="absolute left-0 bottom-0 w-full h-[200px]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M0,78 L100,25 L100,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </section>
      </div>

      {/* separador: quité estilos inline. -mt-8 mantiene la superposición suave */}
      <div className="-mt-8">
        <Noticias_Contenido />
      </div>
    </>
  );
}

export default Noticias_Inicio;
