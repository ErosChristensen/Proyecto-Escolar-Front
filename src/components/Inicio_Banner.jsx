import React from "react";
// Importamos nuestro hook personalizado que trae los datos de inicio
import { useInicio } from "../hooks/useInicio";

function Inicio_Banner() {
  // Usamos el hook para obtener los datos y el estado de carga
  const { inicioData, loading } = useInicio();

  // Mientras se cargan los datos mostramos un mensaje de "Cargando..."
  if (loading) return <p className="text-center py-20">Cargando...</p>;

  // Si hubo un error o los datos no existen mostramos un mensaje de error
  if (!inicioData) return <p className="text-center py-20">Error cargando datos.</p>;

  // Desestructuramos los campos que necesitamos del JSON del backend
  // Esto viene directamente de content/inicio.json a través del backend
  const { titulo_sobre_escuela, valor1, valor2, valor3, valor4 } = inicioData;

  return (
    <div
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/img/InicioBanner.png')" }}
    >
      <div className="relative text-center text-white px-4 max-w-4xl">
        {/* Mostramos el título que viene del backend */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug drop-shadow-md">
          {titulo_sobre_escuela}
        </h1>

        {/* Mostramos los valores de la escuela, también traídos desde el JSON */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-sm sm:text-lg md:text-xl font-semibold">
          <span className="border-r border-gray-300 pr-4 last:border-none">{valor1}</span>
          <span className="border-r border-gray-300 pr-4 last:border-none">{valor2}</span>
          <span className="border-r border-gray-300 pr-4 last:border-none">{valor3}</span>
          <span>{valor4}</span>
        </div>
      </div>
    </div>
  );
}

export default Inicio_Banner;

