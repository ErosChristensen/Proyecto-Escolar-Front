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
    <div className="relative w-full max-w-5xl mt-20 mb-20 mx-auto overflow-hidden rounded-xl mt-20 flex justify-center">
      <img
        src={images[index]}
        alt={`slide ${index}`}
        className="w-full h-[500px] object-cover transition-all duration-700"
      />
    </div>
  );
}

export default Modalidad_Electromecanica_Carrusel;
