import React from 'react';

function Inicio_Modalidades() {
  return (
    <div
      className="relative h-170 w-full bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('src/assets/img/InicioModalidades.png')" }}
    >
        
      <h1 className="text-white text-5xl md:text-5xl font-bold mb-40 drop-shadow-lg">
        MODALIDADES
      </h1>
     
      <div className="flex gap-30 mb-20 text-md">
        <button className="bg-orange-500 text-white font-bold px-8 py-4 rounded-md shadow-lg hover:bg-orange-600 transition">
          ELECTROMECANICA
        </button>
        <button className="bg-orange-400 text-white font-bold px-8 py-4 rounded-md shadow-lg hover:bg-orange-500 transition">
          PROGRAMACION
        </button>
      </div>
    
      <button className="border-2 border-white text-white px-6 py-2 rounded-md font-bold hover:bg-white hover:text-black transition">
        + INFORMACION
      </button>
    </div>
  );
}

export default Inicio_Modalidades;
