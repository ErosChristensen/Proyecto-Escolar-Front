import React from "react";
import { Link } from "react-router-dom";

export default function Aviso() {
  const hoy = new Date();

  // Definimos el rango: desde el 25 de octubre hasta el 7 de noviembre
  const inicio = new Date(hoy.getFullYear(), 9, 15); // mes 9 = octubre
  const fin = new Date(hoy.getFullYear(), 10, 7);   // mes 10 = noviembre

  // Mostrar solo si la fecha actual está entre esas fechas
  const mostrarAviso = hoy >= inicio && hoy <= fin;

  if (!mostrarAviso) return null; // No mostrar nada fuera del rango

  return (
    <div className="bg-green-700 rounded-2xl flex flex-col md:flex-row items-center justify-center p-8 gap-8 shadow-lg m-4">
      {/* Texto */}
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          ¡ELEGI TU MODALIDAD!
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-6">
          Si sos alumno de nuestra institucion y estas cursando 3° año
        </p>
          <Link to="/formulario" className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">INGRESÁ AQUÍ</Link>

      </div>
    </div>
  );
}
