import React, { useState } from "react";
import Nav from "../components/Nav.jsx";

function AdminInicio() {
  const [editando, setEditando] = useState(false);

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl border-2 border-orange-400">
          {!editando ? (
            // Vista inicial
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                INFORMACIÓN DE INICIO
              </h2>
              <button
                onClick={() => setEditando(true)}
                className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
              >
                MODIFICAR
              </button>
            </div>
          ) : (
            // Vista edición
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-gray-800">
                INFORMACIÓN DE INICIO
              </h2>

              {/* Botón Guardar */}
              <div className="flex justify-center">
                <button
                  onClick={() => setEditando(false)}
                  className="px-6 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition"
                >
                  GUARDAR
                </button>
              </div>

              {/* Inputs principales */}
              <div className="space-y-4">
                <input
                  type="text"
                  defaultValue="TECNICOS EN EL CAMPO DE LA PROGRAMACION Y ELECTROMECANICA"
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2"
                />

                <div className="flex flex-wrap gap-3">
                  <input
                    type="text"
                    defaultValue="Electromecánica"
                    className="flex-1 border-2 border-orange-400 rounded-full px-4 py-2"
                  />
                  <input
                    type="text"
                    defaultValue="Programación"
                    className="flex-1 border-2 border-orange-400 rounded-full px-4 py-2"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Carpintería", "Herrería", "Electricidad", "Hojalatería"].map(
                    (item) => (
                      <input
                        key={item}
                        type="text"
                        defaultValue={item}
                        className="flex-1 border-2 border-orange-400 rounded-full px-4 py-2"
                      />
                    )
                  )}
                </div>
              </div>

              {/* Preguntas y respuestas */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-700">
                    ¿La escuela tiene uniforme?
                  </h3>
                  <textarea
                    defaultValue="Sí, la escuela posee un código de vestimenta basado en colores azul, blanco y negro. También se puede adquirir la vestimenta oficial con el logo del establecimiento."
                    className="w-full border-2 border-orange-400 rounded-md p-3"
                    rows={3}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-gray-700">
                    ¿Cuándo puedo iniciar la inscripción para mi hijo?
                  </h3>
                  <textarea
                    defaultValue="Las inscripciones abren en septiembre de cada año."
                    className="w-full border-2 border-orange-400 rounded-md p-3"
                    rows={3}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-gray-700">
                    ¿Con qué tipo de título egresan los alumnos?
                  </h3>
                  <textarea
                    defaultValue="Los alumnos egresan con título técnico de nivel secundario."
                    className="w-full border-2 border-orange-400 rounded-md p-3"
                    rows={3}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-gray-700">¿Es doble jornada?</h3>
                  <textarea
                    defaultValue="Sí, contamos con jornada completa en ambos turnos."
                    className="w-full border-2 border-orange-400 rounded-md p-3"
                    rows={3}
                  />
                </div>
              </div>

              {/* Redes y contactos */}
              <div className="flex flex-wrap gap-3">
                <input
                  type="text"
                  defaultValue="Link Facebook"
                  className="flex-1 border-2 border-orange-400 rounded-full px-4 py-2"
                />
                <input
                  type="text"
                  defaultValue="Link Instagram"
                  className="flex-1 border-2 border-orange-400 rounded-full px-4 py-2"
                />
                <input
                  type="text"
                  defaultValue="+54 2281 876349"
                  className="flex-1 border-2 border-orange-400 rounded-full px-4 py-2"
                />
                <input
                  type="email"
                  defaultValue="escuelatecnica@info.com"
                  className="flex-1 border-2 border-orange-400 rounded-full px-4 py-2"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminInicio;
