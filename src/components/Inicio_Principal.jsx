import React from "react";
import fondo from "../assets/img/FondoInicio.png";
import Nav from "./Nav";
// Importamos nuestro hook personalizado que trae los datos del backend
import { useInicio } from "../hooks/useInicio";

function Inicio_Principal() {
  // Usamos el hook para obtener los datos y el estado de carga
  const { inicioData, loading } = useInicio();

  // Mientras se cargan los datos mostramos un mensaje
  if (loading) return <p className="text-center py-20 text-white">Cargando...</p>;

  // Si hubo un error o los datos no existen mostramos un mensaje
  if (!inicioData) return <p className="text-center py-20 text-white">Error cargando datos.</p>;

  // Desestructuramos el título principal desde el JSON del backend
  const { titulo_principal } = inicioData;

  return (
    <div
      className="relative h-[80vh] md:h-[100vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }} // Fondo de la sección
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* Capa oscura */}
      <div className="relative z-10 flex flex-col h-full">
        <Nav /> {/* Navbar */}

        <div className="flex flex-1 items-center justify-start px-4 sm:px-12 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white max-w-3xl leading-snug drop-shadow-lg">
            {/* Si el título contiene "Y", hacemos un salto de línea para separar */}
            {titulo_principal.split("Y").map((line, idx, arr) =>
              idx < arr.length - 1 ? (
                <>
                  {line} <br />
                </>
              ) : (
                line
              )
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Inicio_Principal;
