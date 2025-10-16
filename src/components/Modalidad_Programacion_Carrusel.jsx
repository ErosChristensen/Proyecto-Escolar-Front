import React, { useState, useEffect } from "react";
import Img1 from "../assets/img/InicioNovedades1.png";
import Img2 from "../assets/img/InicioNovedades2.png";
import Img3 from "../assets/img/InicioNovedades3.png";

function Modalidad_Programacion_Carrusel() {
  const images = [Img1, Img2, Img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full mt-16 mb-16 flex justify-center items-center overflow-hidden">
      {/* Contenedor del carrusel */}
      <div className="w-full max-w-6xl shadow-lg overflow-hidden">
        <img
          src={images[index]}
          alt={`slide ${index}`}
          className="w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] object-cover transition-all duration-700 ease-in-out"
        />

        {/* Indicadores inferiores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-green-600 scale-110" : "bg-white/60"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modalidad_Programacion_Carrusel;
