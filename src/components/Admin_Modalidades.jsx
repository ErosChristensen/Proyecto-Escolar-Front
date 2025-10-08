  import React from "react";
import Nav from "../components/Nav.jsx";

function Admin_Modalidades() {
  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-6">
      {/* Contenedor principal */}
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-3xl text-center">
        {/* Título */}
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
          MODALIDADES
        </h2>

        {/* Botones de modalidades */}
        <div className="flex justify-center gap-6 mb-10">
          <button className="px-6 py-2 border-2 border-orange-400 text-gray-900 font-semibold rounded-full hover:bg-orange-100 transition">
            PROGRAMACION
          </button>
          <button className="px-6 py-2 border-2 border-orange-400 text-gray-900 font-semibold rounded-full hover:bg-orange-100 transition">
            ELECTROMECANICA
          </button>
        </div>

        {/* Sección programación */}
        <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            INFORMACION DE PROGRAMACION
          </h3>
          <button className="px-6 py-2 border-2 border-orange-400 text-gray-900 font-semibold rounded-full hover:bg-orange-100 transition">
            MODIFICAR
          </button>
        </div>

        {/* Sección electromecánica */}
        <div className="bg-gray-50 rounded-xl shadow-sm p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            INFORMACION DE ELECTROMECANICA
          </h3>
          <button className="px-6 py-2 border-2 border-orange-400 text-gray-900 font-semibold rounded-full hover:bg-orange-100 transition">
            MODIFICAR
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Admin_Modalidades;
