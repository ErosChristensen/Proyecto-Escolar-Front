import React from "react";

export default function aviso() {
  return (
    <div className="bg-[#d28b4b] rounded-2xl flex flex-col md:flex-row items-center justify-center p-8 gap-8 shadow-lg m-4">
      {/* Texto */}
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          ¡INSCRIPCIONES 2026!
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-6">
          Ya está habilitado el formulario de inscripción para 1º año
        </p>

        {/* Botón */}
        <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">
          INGRESÁ E INSCRIBITE
        </button>
      </div>
    </div>
  );
}
