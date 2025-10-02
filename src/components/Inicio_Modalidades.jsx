import React from "react";
// Importamos nuestro hook personalizado que trae los datos de inicio
import { useInicio } from "../hooks/useInicio";

function Inicio_Modalidades() {
  // Usamos el hook para obtener los datos y el estado de carga
  const { inicioData, loading } = useInicio();

  // Mientras se cargan los datos mostramos un mensaje de "Cargando..."
  if (loading) return <p className="text-center py-20">Cargando...</p>;

  // Si hubo un error o los datos no existen mostramos un mensaje de error
  if (!inicioData) return <p className="text-center py-20">Error cargando modalidades.</p>;

  // Desestructuramos las modalidades desde el JSON que viene del backend
  const { modalidad_1, modalidad_2 } = inicioData;

  return (
    <>
    <div
      className="relative h-[70vh] md:h-[85vh] w-full bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/src/assets/img/InicioModalidades.png')" }} // Fondo de la sección
    >
      {/* Título de la sección */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 drop-shadow-lg">
        MODALIDADES
      </h1>

      {/* Botones con las modalidades obtenidas desde el backend */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 sm:mb-16 text-sm sm:text-base">
        <button className="bg-orange-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-orange-600 transition">
          {modalidad_1} {/* Mostramos la primera modalidad */}
        </button>
        <button className="bg-orange-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-orange-600 transition">
          {modalidad_2} {/* Mostramos la segunda modalidad */}
        </button>
      </div>

      {/* Botón de información adicional (puede linkear a otra página o abrir modal) */}
      <button className="border-2 border-white text-white px-6 py-2 rounded-md font-bold hover:bg-white hover:text-black transition">
        MÁS INFORMACIÓN
      </button>
    </div>
    </>
  );
}

export default Inicio_Modalidades;
