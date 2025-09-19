import React from "react";

function Inicio_Banner() {
  return (
    <div
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/img/InicioBanner.png')" }}
    >
      <div className="relative text-center text-white px-4 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug drop-shadow-md">
          UNA COMUNIDAD EDUCATIVA QUE FORMA <br className="hidden sm:block" />
          TÉCNICOS CON IDENTIDAD Y COMPROMISO
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-sm sm:text-lg md:text-xl font-semibold">
          <span className="border-r border-gray-300 pr-4 last:border-none">Respeto</span>
          <span className="border-r border-gray-300 pr-4 last:border-none">Disciplina</span>
          <span className="border-r border-gray-300 pr-4 last:border-none">Responsabilidad</span>
          <span>Vocación</span>
        </div>
      </div>
    </div>
  );
}

export default Inicio_Banner;
