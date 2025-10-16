import React from "react";
import { useNavigate } from "react-router-dom";
import { useInicio } from "../hooks/useInicio";

function Inicio_Modalidades() {
  const { inicioData, loading } = useInicio();
  const navigate = useNavigate();

  if (loading) return <p className="text-center py-20">Cargando...</p>;
  if (!inicioData) return <p className="text-center py-20">Error cargando modalidades.</p>;

  const { modalidad_1, modalidad_2 } = inicioData;

  return (
    <div
      className="relative h-[70vh] md:h-[85vh] w-full bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/src/assets/img/InicioModalidades.png')" }}
    >
      {/* Título */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 drop-shadow-lg">
        MODALIDADES
      </h1>

      {/* Cajas de modalidades (ya no son botones) */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 sm:mb-16 text-sm sm:text-base">
        <div className="bg-orange-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg select-none cursor-default">
          {modalidad_1}
        </div>
        <div className="bg-orange-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg select-none cursor-default">
          {modalidad_2}
        </div>
      </div>

      {/* Botón que lleva a Modalidades */}
      <button
        onClick={() => navigate("/modalidad")}
        className="border-2 border-white text-white px-6 py-2 rounded-md font-bold hover:bg-white hover:text-black transition"
      >
        MÁS INFORMACIÓN
      </button>
    </div>
  );
}

export default Inicio_Modalidades;
   