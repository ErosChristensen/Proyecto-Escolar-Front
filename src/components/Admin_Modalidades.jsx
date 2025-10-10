import React, { useState } from "react";
import NavAdmin from "./NavAdmin.jsx";
import defaultFoto from "../assets/img/EscudoEscuelaSinFondo.png";

function ModalidadesAdmin() {
  const [mostrarProgramacion, setMostrarProgramacion] = useState(false);
  const [mostrarElectro, setMostrarElectro] = useState(false);

  const [fotoPerfil, setFotoPerfil] = useState(defaultFoto);
  const [fotosExtras, setFotosExtras] = useState([
    defaultFoto,
    defaultFoto,
    defaultFoto,
    defaultFoto,
  ]);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFotoPerfil(url);
    }
  };

  const handleFotoExtraChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFotosExtras((prev) =>
        prev.map((f, i) => (i === index ? url : f))
      );
    }
  };

  const [pildoras, setPildoras] = useState([
    { id: 0, titulo: "PROGRAMACIÓN", contenido: "" },
    { id: 1, titulo: "TECNICO/A EN PROGRAMACION E INFORMATICA", contenido: "" },
    { id: 2, titulo: "PROGRAMACIÓN: LÓGICA QUE TRANSFORMA", contenido: "" },
    {
      id: 3,
      titulo: "INTRODUCCIÓN",
      contenido:
        "Aquí va la descripción de la modalidad de programación. Este texto es editable.",
    },
    {
      id: 4,
      titulo: "ALCANCE DEL TÍTULO",
      contenido:
        "Descripción del alcance del título, editable por el administrador.",
    },
    {
      id: 5,
      titulo: "TALLERES PRINCIPALES",
      contenido:
        "Listado de talleres. Este contenido también se puede editar.",
    },
    {
      id: 6,
      titulo: "¿POR QUÉ ELEGIRLA?",
      contenido: "Motivos para elegir esta modalidad, modificables.",
    },
    {
      id: 7,
      titulo: "ELECCIÓN DE MODALIDAD",
      contenido:
        "Información sobre cómo elegir la modalidad. Editable por el administrador.",
    },
  ]);

  const handleChange = (id, field, value) => {
    setPildoras((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const toggleProgramacion = () => {
    setMostrarProgramacion(true);
    setMostrarElectro(false);
  };

  const toggleElectro = () => {
    setMostrarElectro(true);
    setMostrarProgramacion(false);
  };

  const botonPrincipalBase =
    "px-6 py-2 font-bold rounded-full transition w-full sm:w-auto border-2";

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
            <button
              onClick={toggleProgramacion}
              className={`${botonPrincipalBase} ${
                mostrarProgramacion
                  ? "bg-orange-400 text-white border-orange-400"
                  : "text-black border-orange-400 hover:bg-orange-400 hover:text-white"
              }`}
            >
              INFORMACIÓN DE PROGRAMACIÓN
            </button>

            <button
              onClick={toggleElectro}
              className={`${botonPrincipalBase} ${
                mostrarElectro
                  ? "bg-orange-400 text-white border-orange-400"
                  : "text-black border-orange-400 hover:bg-orange-400 hover:text-white"
              }`}
            >
              INFORMACIÓN DE ELECTROMECÁNICA
            </button>
          </div>

          {/* ---------- PROGRAMACIÓN ---------- */}
          {mostrarProgramacion && (
            <div className="border-2 border-orange-400 rounded-xl shadow-md p-6 bg-white space-y-6">
              {/* Botón Guardar arriba */}
              <div className="flex justify-center mb-6">
                <button className={botonGuardar}>GUARDAR</button>
              </div>

              {/* ---------- FOTO PERFIL ADMIN DENTRO DE PROGRAMACIÓN ---------- */}
              <div className="flex flex-col items-center space-y-3 mb-6">
                <div className="relative">
                  <img
                    src={fotoPerfil}
                    alt="Foto del administrador"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl border-4 border-gray-400 shadow-md"
                  />
                  <label
                    htmlFor="fotoPerfil"
                    className="absolute bottom-0 right-0 bg-orange-400 text-white p-2 rounded-full cursor-pointer hover:bg-orange-300 transition"
                    title="Cambiar foto"
                  >
                    📷
                  </label>
                  <input
                    type="file"
                    id="fotoPerfil"
                    accept="image/*"
                    onChange={handleFotoChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* ---------- TODAS LAS PÍLDORAS ---------- */}
              <div className="flex flex-col gap-4">
                {pildoras.map((p) => (
                  <div
                    key={p.id}
                    className="border border-gray-300 rounded-full px-6 py-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <input
                      type="text"
                      value={p.titulo}
                      onChange={(e) =>
                        handleChange(p.id, "titulo", e.target.value)
                      }
                      className="w-full text-center font-semibold text-base sm:text-lg bg-transparent border-none focus:outline-none"
                    />
                    {p.contenido && (
                      <textarea
                        value={p.contenido}
                        onChange={(e) =>
                          handleChange(p.id, "contenido", e.target.value)
                        }
                        rows="2"
                        className="w-full text-center text-sm sm:text-base bg-transparent mt-2 border-none focus:outline-none resize-none"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* ---------- FILA DE 4 FOTOS ADICIONALES ---------- */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {fotosExtras.map((foto, index) => (
                  <div key={index} className="relative">
                    <img
                      src={foto}
                      alt={`Extra ${index + 1}`}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-2xl border-4 border-gray-400 shadow-md"
                    />
                    <label
                      htmlFor={`fotoExtra${index}`}
                      className="absolute bottom-0 right-0 bg-orange-400 text-white p-2 rounded-full cursor-pointer hover:bg-orange-300 transition"
                      title="Cambiar foto"
                    >
                      📷
                    </label>
                    <input
                      type="file"
                      id={`fotoExtra${index}`}
                      accept="image/*"
                      onChange={(e) => handleFotoExtraChange(index, e)}
                      className="hidden"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---------- ELECTROMECÁNICA ---------- */}
          {mostrarElectro && (
            <div className="border-2 border-orange-400 rounded-xl shadow-md p-6 bg-white space-y-4">
              <div className="flex justify-center mb-6">
                <button className={botonGuardar}>MODIFICAR</button>
              </div>
              <div className="space-y-4 text-gray-700">
                <h4 className="font-bold mb-1">ELECTROMECÁNICA</h4>
                <p>
                  Aquí el administrador podrá editar los campos con borde
                  naranja, los títulos y descripciones no editables mantienen
                  solo texto normal.
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
