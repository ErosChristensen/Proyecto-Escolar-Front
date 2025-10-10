import React, { useState } from "react";
import NavAdmin from "./NavAdmin.jsx";

function AdminInicio() {
  const [editando, setEditando] = useState(false);

  const botonGuardar =
    "px-5 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition w-full sm:w-auto";

  return (
    <>
      <NavAdmin />

      <div className="pt-28 flex justify-center items-start min-h-screen bg-gray-100 px-3 sm:px-6 py-10">
        {/* ---------- TARJETA PRINCIPAL ---------- */}
        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 w-full max-w-5xl border-4 border-orange-400 space-y-10">
          {/* ---------- INFORMACIÓN ---------- */}
          <div>
            {!editando ? (
              <div className="text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  INFORMACIÓN DE INICIO
                </h2>
                <button
                  onClick={() => setEditando(true)}
                  className="w-full sm:w-auto px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
                >
                  MODIFICAR
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
                  INFORMACIÓN DE INICIO
                </h2>

                <div className="flex justify-center">
                  <button
                    onClick={() => setEditando(false)}
                    className={botonGuardar}
                  >
                    GUARDAR
                  </button>
                </div>

                {/* ---------- Inputs adaptativos ---------- */}
                <div className="space-y-4">
                  <input
                    type="text"
                    defaultValue="TECNICOS EN EL CAMPO DE LA PROGRAMACION Y ELECTROMECANICA"
                    className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm sm:text-base"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      defaultValue="Electromecánica"
                      className="border border-gray-300 rounded-full px-4 py-2"
                    />
                    <input
                      type="text"
                      defaultValue="Programación"
                      className="border border-gray-300 rounded-full px-4 py-2"
                    />
                  </div>
              
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Carpintería", "Herrería", "Electricidad", "Hojalatería"].map(
                      (item) => (
                        <input
                          key={item}
                          type="text"
                          defaultValue={item}
                          className="border border-gray-300 rounded-full px-4 py-2 text-center"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* ---------- Textareas adaptativas ---------- */}
                <div className="space-y-4">
                  {[
                    {
                      titulo: "¿La escuela tiene uniforme?",
                      texto:
                        "Sí, la escuela posee un código de vestimenta basado en colores azul, blanco y negro.",
                    },
                    {
                      titulo: "¿Cuándo puedo iniciar la inscripción para mi hijo?",
                      texto: "Las inscripciones abren en septiembre de cada año.",
                    },
                    {
                      titulo: "¿Con qué tipo de título egresan los alumnos?",
                      texto:
                        "Los alumnos egresan con título técnico de nivel secundario.",
                    },
                    {
                      titulo: "¿Es doble jornada?",
                      texto:
                        "Sí, contamos con jornada completa en ambos turnos.",
                    },
                  ].map((item) => (
                    <div key={item.titulo}>
                      <h3 className="font-bold text-gray-700 text-sm sm:text-base">
                        {item.titulo}
                      </h3>
                      <textarea
                        defaultValue={item.texto}
                        className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base"
                        rows={3}
                      />
                    </div>
                  ))}
                </div>

                {/* ---------- Contacto ---------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Link Facebook",
                    "Link Instagram",
                    "+54 2281 876349",
                    "escuelatecnica@info.com",
                  ].map((val) => (
                    <input
                      key={val}
                      type="text"
                      defaultValue={val}
                      className="border border-gray-300 rounded-full px-4 py-2 text-sm sm:text-base"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ---------- DIVISOR ---------- */}
          <div className="border-t-2 border-orange-300 my-4 sm:my-6"></div>

          {/* ---------- REGISTROS ---------- */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              REGISTROS DE PRE-INSCRIPCIÓN
            </h2>

            <div className="flex justify-center mb-4 sm:mb-6">
              <button className={botonGuardar}>GUARDAR</button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm sm:text-base">
                <tbody>
                  {Array.from({ length: 10 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.from({ length: 5 }).map((_, colIndex) => (
                        <td
                          key={colIndex}
                          className="border border-gray-300 h-10 sm:h-12 w-24 sm:w-32 text-center"
                        ></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminInicio;
