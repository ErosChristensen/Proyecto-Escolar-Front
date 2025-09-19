import React from "react";

function Inicio_Modalidades() {
  return (
    <div
      className="relative h-[70vh] md:h-[85vh] w-full bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/src/assets/img/InicioModalidades.png')" }}
    >

      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 drop-shadow-lg">
        MODALIDADES
      </h1>

    
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 sm:mb-16 text-sm sm:text-base">
        <button className="bg-orange-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-orange-600 transition">
          ELECTROMECÁNICA
        </button>
        <button className="bg-orange-400 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-orange-500 transition">
          PROGRAMACIÓN
        </button>
      </div>

  
      <button className="border-2 border-white text-white px-6 py-2 rounded-md font-bold hover:bg-white hover:text-black transition">
        + INFORMACIÓN
      </button>
    </div>
  );
}

export default Inicio_Modalidades;
