import React, { useState } from "react";
import NavAdmin from "./NavAdmin.jsx";
function ModalidadesAdmin() {

  const [mostrarProgramacion, setMostrarProgramacion] = useState(false);
  const [mostrarElectro, setMostrarElectro] = useState(false);

  const [titulo1, setTitulo1] = useState("TECNICO/A EN PROGRAMACION E INFORMATICA");
  const [titulo2, setTitulo2] = useState("PROGRAMACION: LOGICA QUE TRANSFORMA");

  const [editandoTitulo1, setEditandoTitulo1] = useState(false);
  const [editandoTitulo2, setEditandoTitulo2] = useState(false);

  const toggleProgramacion = () => {
    setMostrarProgramacion(!mostrarProgramacion);
    setMostrarElectro(false);
  };

  const toggleElectro = () => {
    setMostrarElectro(!mostrarElectro);
    setMostrarProgramacion(false);
  };
   
  return (
      <>
        <NavAdmin /> 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-6">
      <div className="w-full max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          MODALIDADES
        </h2>

        <div className="flex justify-center gap-6">
          <button
            onClick={toggleProgramacion}
            className="px-6 py-2 border-2 border-orange-400 text-gray-900 font-semibold rounded-full hover:bg-orange-100 transition"
          >
            INFORMACION DE PROGRAMACION
          </button>
          <button
            onClick={toggleElectro}
            className="px-6 py-2 border-2 border-orange-400 text-gray-900 font-semibold rounded-full hover:bg-orange-100 transition"
          >
            INFORMACION DE ELECTROMECANICA
          </button>
        </div>

        {/* ---------- PROGRAMACION ---------- */}
        {mostrarProgramacion && (
          <div className="bg-white shadow-xl rounded-2xl p-8 border-2 border-orange-400">
            <div className="flex justify-center mb-6">
              <button
                className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
              >
                GUARDAR
              </button>
            </div>

            {/* Campos editables */}
            <div className="space-y-4">
              {editandoTitulo1 ? (
                <input
                  type="text"
                  value={titulo1}
                  onChange={(e) => setTitulo1(e.target.value)}
                  onBlur={() => setEditandoTitulo1(false)}
                  autoFocus
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2 font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              ) : (
                <div
                  onClick={() => setEditandoTitulo1(true)}
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2 font-bold text-center cursor-text hover:bg-orange-50 transition"
                >
                  {titulo1}
                </div>
              )}

              {editandoTitulo2 ? (
                <input
                  type="text"
                  value={titulo2}
                  onChange={(e) => setTitulo2(e.target.value)}
                  onBlur={() => setEditandoTitulo2(false)}
                  autoFocus
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2 font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              ) : (
                <div
                  onClick={() => setEditandoTitulo2(true)}
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2 font-bold text-center cursor-text hover:bg-orange-50 transition"
                >
                  {titulo2}
                </div>
              )}
            </div>

            {/* Campos no editables */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">INTRODUCCIÓN</h4>
                <p className="text-gray-700">
                  Aquí va la descripción de la modalidad de programación. Este texto no es editable.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">ALCANCE DEL TÍTULO</h4>
                <p className="text-gray-700">
                  Descripción del alcance del título, solo lectura.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">TALLERES PRINCIPALES</h4>
                <p className="text-gray-700">
                  Listado de talleres. Este contenido no se puede editar.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">¿POR QUÉ ELEGIRLA?</h4>
                <p className="text-gray-700">
                  Motivos para elegir esta modalidad, solo lectura.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">ELECCIÓN DE MODALIDAD</h4>
                <p className="text-gray-700">
                  Información sobre cómo elegir la modalidad. No editable.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ---------- ELECTROMECANICA ---------- */}
        {mostrarElectro && (
          <div className="bg-white shadow-xl rounded-2xl p-8 border-2 border-orange-400">
            <div className="flex justify-center mb-6">
              <button
                className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
              >
                MODIFICAR
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-gray-700 mb-2">ELECTROMECÁNICA</h4>
              <p className="text-gray-700">
                Aquí el administrador podrá editar los campos con borde naranja, los títulos y descripciones no editables mantienen solo texto normal.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  );
}

export default ModalidadesAdmin;
