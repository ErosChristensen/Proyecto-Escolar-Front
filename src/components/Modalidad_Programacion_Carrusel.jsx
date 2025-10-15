import React, { useState } from "react";
import Img1 from "../assets/img/InicioNovedades1.png"; // reemplaza con tus imágenes reales
import Img2 from "../assets/img/InicioNovedades2.png";
import Img3 from "../assets/img/InicioNovedades3.png";

function Modalidad_Programacion_Carrusel() {
  const images = [Img1, Img2, Img3,];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Imagen activa */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-orange-600 text-white rounded-full p-2 hover:bg-orange-700"
      >
        &#10094;
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-orange-600 text-white rounded-full p-2 hover:bg-orange-700"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Modalidad_Programacion_Carrusel;
