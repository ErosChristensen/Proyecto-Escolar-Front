import React, { useState, useEffect } from "react";
import Img1 from "../assets/img/InicioNovedades1.png"; 
import Img2 from "../assets/img/InicioNovedades2.png";
import Img3 from "../assets/img/InicioNovedades3.png";

function Modalidad_Electromecanica_Carrusel() {
  const images = [Img1, Img2, Img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-5xl mt-20 mb-20 mx-auto overflow-hidden flex flex-col items-center">
      {/* Imagen del carrusel */}
      <img
        src={images[index]}
        alt={`slide ${index}`}
        className="w-full h-[500px] object-cover transition-all duration-700"
      />

      {/* Puntos indicadores (idénticos al de programación) */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-green-600 scale-110" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Modalidad_Electromecanica_Carrusel;
