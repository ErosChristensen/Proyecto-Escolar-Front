import React from "react";
import Nav from "./Nav.jsx";
import fondo from "../assets/img/FondoInicio.png";
import herramientas from "../assets/img/herramientas.png";
import tuerca from "../assets/img/tuerca.png";
import herreria from "../assets/img/herreria.png";
import enchufe from "../assets/img/enchufe.png";
import { useHistoria } from "../hooks/useHistoria";

function Institucion() {
  const { historiaData, loading } = useHistoria();

  if (loading) return <p className="text-center py-20">Cargando...</p>;
  if (!historiaData)
    return <p className="text-center py-20">Error cargando datos de historia.</p>;

  const {
    titulo_principal,
    descripcion_escuela_parrafo_1,
    descripcion_escuela_parrafo_2,
    autoridades,
    ubicacion,
    horarios,
    modalidad_1,
    modalidad_2,
    talleres,
    titulo_sobre_escuela,
    valor1,
    valor2,
    valor3,
    valor4,
  } = historiaData;

  const iconos = [herramientas, tuerca, enchufe, herreria];

  return (
    <>
      {/* HERO */}
      <div
        className="relative w-full h-[80vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col h-full">
          <Nav />
          <div className="flex flex-1 items-center justify-start px-6 sm:px-12 lg:px-20">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl max-w-[90%] leading-tight">
              {titulo_principal}
            </h1>
          </div>
        </div>
      </div>

      {/* NUESTRA ESCUELA */}
      <section className="flex justify-center bg-white py-[60px] px-6 sm:px-10">
        <div className="max-w-[850px] text-center">
          <h2 className="text-[1.8rem] sm:text-[2rem] font-bold mb-[10px]">NUESTRA ESCUELA</h2>
          <div className="w-[120px] h-[3px] bg-[#e67e22] mx-auto mb-[30px]"></div>

          <div className="space-y-6 text-[#666] text-[1rem] leading-relaxed text-justify">
            <p>{descripcion_escuela_parrafo_1}</p>
            <p>{descripcion_escuela_parrafo_2}</p>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN ÚTIL */}
      <section
        className="relative text-white py-[100px] sm:py-[150px] px-6 sm:px-[40px] text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">INFORMACIÓN ÚTIL</h2>

          <div className="grid gap-[50px] md:gap-[70px] grid-cols-1 md:grid-cols-3 text-left">
            {/* AUTORIDADES */}
            <div>
              <h3 className="inline-block bg-[#2e7d32] text-white font-bold text-[1.1rem] px-[15px] py-[10px] rounded mb-[15px]">
                AUTORIDADES
              </h3>
              {autoridades.map((persona, index) => (
                <p key={index} className="text-[1rem] mb-[10px]">
                  {persona.cargo} - {persona.nombre}
                </p>
              ))}
            </div>

            {/* UBICACIÓN */}
            <div>
              <h3 className="inline-block bg-[#2e7d32] text-white font-bold text-[1.1rem] px-[15px] py-[10px] rounded mb-[15px]">
                UBICACIÓN
              </h3>
              <p>{ubicacion}</p>
            </div>

            {/* HORARIOS */}
            <div>
              <h3 className="inline-block bg-[#2e7d32] text-white font-bold text-[1.1rem] px-[15px] py-[10px] rounded mb-[15px]">
                HORARIOS DE ATENCIÓN
              </h3>
              <p>{horarios}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="text-center bg-white py-[50px] mt-[30px] px-6">
        <h2 className="font-extrabold text-black text-[1.5rem] sm:text-[2rem] mb-[10px]">
          NUESTRAS ESPECIALIDADES
        </h2>
        <hr className="w-[60%] mx-auto mb-[30px] border border-[#e99254]" />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] sm:gap-[40px] mb-[80px]">
          <button className="bg-[#e99254] text-white font-bold px-[30px] py-[15px] text-[16px] hover:bg-[#d87f42] transition w-[200px] sm:w-auto">
            {modalidad_1}
          </button>
          <button className="bg-[#e99254] text-white font-bold px-[30px] py-[15px] text-[16px] hover:bg-[#d87f42] transition w-[200px] sm:w-auto">
            {modalidad_2}
          </button>
        </div>

        {/* TALLERES */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-[60px] sm:gap-[100px]">
          {talleres.map((taller, index) => (
            <div
              key={index}
              className="w-full sm:w-[400px] lg:w-[550px] text-center flex flex-col items-center"
            >
              <div className="bg-[#2f7d32] w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] rounded-full flex items-center justify-center mb-[20px]">
                <img
                  src={iconos[index]}
                  alt={taller.nombre}
                  className="w-[60px] sm:w-[80px] h-auto"
                />
              </div>
              <h3 className="font-extrabold mb-[15px] text-lg">{taller.nombre}</h3>
              <p className="text-[#777] text-[15px] leading-relaxed text-justify px-4">
                {taller.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* BLOQUE DE VALORES */}
        <section
          className="relative bg-cover bg-center text-white text-center h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-[100px] mb-[50px] px-4"
          style={{ backgroundImage: "url('../assets/img/InicioBanner.png')" }}
        >
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="relative z-10 max-w-[900px] px-[10px]">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-extrabold mb-[30px] leading-tight">
              {titulo_sobre_escuela}
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-[15px] sm:gap-[25px]">
              <span className="font-bold text-[18px] sm:text-[22px] md:text-[24px]">{valor1}</span>
              <div className="hidden sm:block w-[2px] h-[25px] bg-white"></div>
              <span className="font-bold text-[18px] sm:text-[22px] md:text-[24px]">{valor2}</span>
              <div className="hidden sm:block w-[2px] h-[25px] bg-white"></div>
              <span className="font-bold text-[18px] sm:text-[22px] md:text-[24px]">{valor3}</span>
              <div className="hidden sm:block w-[2px] h-[25px] bg-white"></div>
              <span className="font-bold text-[18px] sm:text-[22px] md:text-[24px]">{valor4}</span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Institucion;

