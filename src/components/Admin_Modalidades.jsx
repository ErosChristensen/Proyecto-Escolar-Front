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

  const botonPrincipal =
    "px-6 py-2 border-2 border-orange-400 text-black font-bold rounded-full hover:bg-orange-400 hover:text-white transition w-full sm:w-auto";

  const botonGuardar =
    "px-5 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition w-full sm:w-auto";

  return (
    <>
      <NavAdmin />
      <div className="pt-28 flex justify-center items-start min-h-screen bg-gray-100 px-3 sm:px-6 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 w-full max-w-5xl border-4 border-orange-400 space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            MODALIDADES
          </h2>

          {/* ---------- BOTONES PRINCIPALES ---------- */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            <button onClick={toggleProgramacion} className={botonPrincipal}>
              INFORMACION DE PROGRAMACION
            </button>
            <button onClick={toggleElectro} className={botonPrincipal}>
              INFORMACION DE ELECTROMECANICA
            </button>
          </div>

          {/* ---------- PROGRAMACION ---------- */}
          {mostrarProgramacion && (
            <div className="border-2 border-orange-400 rounded-xl shadow-md p-6 bg-white space-y-6">
              <div className="flex justify-center mb-6">
                <button className={botonGuardar}>GUARDAR</button>
              </div>

              {/* PÍLDORAS INTERNAS (AHORA IGUALES) */}
              <div className="space-y-4">
                {[{ valor: titulo1, set: setTitulo1, edit: editandoTitulo1, setEdit: setEditandoTitulo1 },
                  { valor: titulo2, set: setTitulo2, edit: editandoTitulo2, setEdit: setEditandoTitulo2 }].map(
                  (item, index) =>
                    item.edit ? (
                      <input
                        key={index}
                        type="text"
                        value={item.valor}
                        onChange={(e) => item.set(e.target.value)}
                        onBlur={() => item.setEdit(false)}
                        autoFocus
                        className="w-full border border-gray-300 rounded-full px-4 py-2 text-center text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      />
                    ) : (
                      <div
                        key={index}
                        onClick={() => item.setEdit(true)}
                        className="w-full border border-gray-300 rounded-full px-4 py-2 text-center text-base text-gray-700 cursor-text"
                      >
                        {item.valor}
                      </div>
                    )
                )}
              </div>

              {/* CONTENIDO NO EDITABLE */}
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold mb-1">INTRODUCCIÓN</h4>
                  <p>
                    Aquí va la descripción de la modalidad de programación. Este texto no es editable.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">ALCANCE DEL TÍTULO</h4>
                  <p>Descripción del alcance del título, solo lectura.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">TALLERES PRINCIPALES</h4>
                  <p>Listado de talleres. Este contenido no se puede editar.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">¿POR QUÉ ELEGIRLA?</h4>
                  <p>Motivos para elegir esta modalidad, solo lectura.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">ELECCIÓN DE MODALIDAD</h4>
                  <p>Información sobre cómo elegir la modalidad. No editable.</p>
                </div>
              </div>
            </div>
          )}

          {/* ---------- ELECTROMECANICA ---------- */}
          {mostrarElectro && (
            <div className="border-2 border-orange-400 rounded-xl shadow-md p-6 bg-white space-y-4">
              <div className="flex justify-center mb-6">
                <button className={botonGuardar}>MODIFICAR</button>
              </div>
              <div className="space-y-4 text-gray-700">
                <h4 className="font-bold mb-1">ELECTROMECÁNICA</h4>
                <p>
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

