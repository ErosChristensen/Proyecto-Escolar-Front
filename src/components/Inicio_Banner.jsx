import React from 'react';

function Inicio_Banner() {
  return (
    <div
      className="relative h-160 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('src/assets/InicioBanner.png')" }}
    >

      <div className="relative text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
          UNA COMUNIDAD EDUCATIVA QUE FORMA <br />
          TECNICOS CON IDENTIDAD Y COMPROMISO
        </h1>

  
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-lg md:text-xl font-semibold">
          <span className="border-r pr-4">Respeto</span>
          <span className="border-r pr-4">Disciplina</span>
          <span className="border-r pr-4">Responsabilidad</span>
          <span>Vocación</span>
        </div>
      </div>
    </div>
  );
}

export default Inicio_Banner;   