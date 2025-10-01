import React, { useState } from "react";
import Nav from '../components/Nav.jsx'
function AdminIncio() {
  const [editando, setEditando] = useState(false);

  return (
    <>
    <Nav />
    <div className="p-8">
      {!editando ? (
        <div className="w-full h-140">
          <h2 className="text-2xl font-bold mb-6">INFORMACION DE INICIO</h2>
          <button
            onClick={() => setEditando(true)}
            className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
          >
            MODIFICAR
          </button>
        </div>
      ) : (
          
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">INFORMACION DE INICIO</h2>

          <button
            onClick={() => setEditando(false)}
            className="px-6 py-2 border-orange-400 bg-orange-400 hover:bg-orange-300 hover:text-white transition text-white font-bold rounded-full"
          >
            GUARDAR
          </button>

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
            </div>

          
            <div className="flex flex-wrap gap-3">
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

          <div className="space-y-2">
            <h3 className="font-bold">¿La escuela tiene uniforme?</h3>
            <textarea
              defaultValue="Sí, la escuela posée un código de vestimenta. Este se basa en los colores azules, blancos, y negros. También ofrecemos la posibilidad de adquirir con la vestimenta oficial con el logo del establecimiento."
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

          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              defaultValue="Link Facebook"
              className="border-2 border-orange-400 rounded-full px-4 py-2 w-1/2"
            />
            <input
              type="text"
              defaultValue="Link Instagram"
              className="border-2 border-orange-400 rounded-full px-4 py-2 w-1/2"
            />
            <input
              type="text"
              defaultValue="+54 2281 876349"
              className="border-2 border-orange-400 rounded-full px-4 py-2 w-1/2"
            />
            <input
              type="email"
              defaultValue="escuelatecnica@info.com"
              className="border-2 border-orange-400 rounded-full px-4 py-2 w-1/2"
            />
          </div>
        </div>
      )}
    </div>
</>
  );

}

export default AdminIncio;
