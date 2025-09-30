import React, { useState } from "react";

function Admin_Incio() {
  const [editando, setEditando] = useState(false);

  return (
    <div className="p-8">
      {!editando ? (
        // Pantalla inicial
        <div>
          <h2 className="text-2xl font-bold mb-6">INFORMACION DE INICIO</h2>
          <button
            onClick={() => setEditando(true)}
            className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
          >
            MODIFICAR
          </button>
        </div>
      ) : (
        // Pantalla de edición (perfil administrador)
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">INFORMACION DE INICIO</h2>

          {/* Botón Guardar */}
          <button
            onClick={() => setEditando(false)}
            className="px-6 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 transition"
          >
            GUARDAR
          </button>

          {/* Ejemplo de secciones con inputs */}
          <div className="space-y-4">
            <input
              type="text"
              defaultValue="TECNICOS EN EL CAMPO DE LA PROGRAMACION Y ELECTROMECANICA"
              className="w-full border-2 border-orange-400 rounded-full px-4 py-2"
            />

            <div className="flex flex-wrap gap-3">
              <input
                type="text"
                defaultValue="Electromecanica"
                className="border-2 border-orange-400 rounded-full px-4 py-2"
              />
              <input
                type="text"
                defaultValue="Programacion"
                className="border-2 border-orange-400 rounded-full px-4 py-2"
              />
              <div className="">
              <input
                type="text"
                defaultValue="Carpintería"
                className="border-2 border-orange-400 rounded-full px-4 py-2"
              />
              <input
                type="text"
                defaultValue="Herreria"
                className="border-2 border-orange-400 rounded-full px-4 py-2"
              />
               <input
                type="text"
                defaultValue="Electricidad"
                className="border-2 border-orange-400 rounded-full px-4 py-2"
              />
               <input
                type="text"
                defaultValue="Hojalateria"
                className="border-2 border-orange-400 rounded-full px-4 py-2"
              />
              </div>
            </div>
          </div>

          {/* Ejemplo de preguntas con textarea */}
          <div className="space-y-2">
            <h3 className="font-bold">¿La escuela tiene uniforme?</h3>
            <textarea
              defaultValue="Sí, los alumnos deben asistir con uniforme reglamentario."
              className="w-full border-2 border-orange-400 rounded-md p-3"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">¿Cuándo puedo iniciar la inscripción para mi hijo?</h3>
            <textarea
              defaultValue="Las inscripciones abren en septiembre de cada año."
              className="w-full border-2 border-orange-400 rounded-md p-3"
              rows={3}
            />
          </div>
        
          <div className="space-y-2">
            <h3 className="font-bold">¿Con qué tipo de título egresan los alumnos?</h3>
            <textarea
              defaultValue="Los alumnos egresan con título técnico de nivel secundario."
              className="w-full border-2 border-orange-400 rounded-md p-3"
              rows={3}
            />
          </div>
    
          <div className="space-y-2">
            <h3 className="font-bold">¿Es doble jornada?</h3>
            <textarea
              defaultValue="Sí, contamos con jornada completa en ambos turnos."
              className="w-full border-2 border-orange-400 rounded-md p-3"
              rows={3}
            />
          </div>

          {/* Datos de contacto */}
          <div className="flex flex-col gap-2">
            <input
              type="text"
              defaultValue="Link Facebook"
              className="border-2 border-orange-400 rounded-full px-4 py-2"
            />
            <input
              type="text"
              defaultValue="Link Instagram"
              className="border-2 border-orange-400 rounded-full px-4 py-2"
            />
            <input
              type="text"
              defaultValue="+54 2281 876349"
              className="border-2 border-orange-400 rounded-full px-4 py-2"
            />
            <input
              type="email"
              defaultValue="escuelatecnica@info.com"
              className="border-2 border-orange-400 rounded-full px-4 py-2"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin_Incio;
