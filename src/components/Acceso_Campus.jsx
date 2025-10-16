import React from "react";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function AccesoCampus({ open, onClose }) {
  if (!open) return null;

  return (
    // Fondo oscurecido y difuminado
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Ventana emergente */}
      <div className="relative bg-[#5b5b5b] text-white rounded-xl shadow-2xl w-[90%] max-w-4xl p-10 flex flex-col items-center text-center">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white text-2xl font-bold hover:text-gray-300 transition"
        >
          ×
        </button>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          ACCEDE A NUESTRO CAMPUS VIRTUAL
        </h2>

        {/* Texto descriptivo */}
        <p className="text-base md:text-lg leading-snug mb-2">
          Si sos alumno de nuestra institución, ingresá y descubrí todo lo que tenemos preparado para vos.
        </p>
        <p className="text-base md:text-lg font-semibold mb-10">
          ¡Descargá la app desde App Store o Play Store!
        </p>

        {/* Íconos con links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20">
          {/* Android */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-white rounded-full p-8 sm:p-10 shadow-lg mb-3 transition-transform duration-200 group-hover:scale-105">
              <FaAndroid className="text-[#78C257] text-6xl sm:text-7xl" />
            </div>
            <span className="font-bold text-lg sm:text-xl">ANDROID</span>
          </a>

          {/* Apple */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-white rounded-full p-8 sm:p-10 shadow-lg mb-3 transition-transform duration-200 group-hover:scale-105">
              <FaApple className="text-black text-6xl sm:text-7xl" />
            </div>
            <span className="font-bold text-lg sm:text-xl">APPLE</span>
          </a>
        </div>
      </div>
    </div>
  );
}

