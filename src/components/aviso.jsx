import React from "react";

export default function Aviso() {
  const hoy = new Date();
  // Obtener el mes actual (0 = enero, 11 = diciembre)
  const mesActual = new Date().getMonth();

  // Mostrar solo de octubre (9) a diciembre (11)
  const mostrarAviso = mesActual >= 9 && mesActual <= 11;

  if (!mostrarAviso) return null; // No mostrar nada fuera del rango

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

        {/* Botón con link externo */}
        <a
          href="https://forms.gle/WLG4aL2cH5v5KJBZ7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">
            INGRESÁ E INSCRIBITE
          </button>
        </a>
      </div>
    </div>
  );
}
