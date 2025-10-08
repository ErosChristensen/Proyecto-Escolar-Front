import React, { useState } from "react";
import Nav from "../components/Nav.jsx";
import NavAdmin from "./NavAdmin.jsx";

function AdminNoticias() {
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [mostrarFormAgregar, setMostrarFormAgregar] = useState(false);

  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: "ALUMNOS PARTICIPARÁN EN OLIMPIADAS DE MATEMÁTICA",
      subtitulo: "Competencia internacional",
      fecha: "",
      descripcion: "",
      imagen: null,
      editando: false,
    },
  ]);

  const [nuevaNoticia, setNuevaNoticia] = useState({
    titulo: "",
    subtitulo: "",
    fecha: "",
    descripcion: "",
    imagen: null,
  });

  const toggleEditar = (id) => {
    setNoticias(
      noticias.map((n) => (n.id === id ? { ...n, editando: !n.editando } : n))
    );
  };

  const eliminarNoticia = (id) => {
    setNoticias(noticias.filter((n) => n.id !== id));
  };

  const handleChange = (id, field, value) => {
    setNoticias(
      noticias.map((n) => (n.id === id ? { ...n, [field]: value } : n))
    );
  };

  const handleImageChange = (id, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNoticias(
        noticias.map((n) => (n.id === id ? { ...n, imagen: reader.result } : n))
      );
    };
    if (file) reader.readAsDataURL(file);
  };

  const guardarNoticia = (id) => {
    setNoticias(
      noticias.map((n) => (n.id === id ? { ...n, editando: false } : n))
    );
  };

  const handleNuevaImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNuevaNoticia({ ...nuevaNoticia, imagen: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const agregarNoticia = () => {
    if (!nuevaNoticia.titulo) return;

    const nueva = {
      ...nuevaNoticia,
      id: noticias.length + 1,
      editando: false,
    };

    setNoticias([...noticias, nueva]);
    setNuevaNoticia({
      titulo: "",
      subtitulo: "",
      fecha: "",
      descripcion: "",
      imagen: null,
    });
    setMostrarFormAgregar(false);
  };

  return (
    <>
      <NavAdmin />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl border-2 border-orange-400 space-y-8">
          {/* Noticias publicadas */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              NOTICIAS PUBLICADAS
            </h2>

            {!mostrarNoticias ? (
              <div className="flex justify-center">
                <button
                  onClick={() => setMostrarNoticias(true)}
                  className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
                >
                  VER NOTICIAS
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {noticias.map((n) => (
                  <div
                    key={n.id}
                    className="border-2 border-orange-400 rounded-xl shadow-md p-6 bg-white"
                  >
                    {!n.editando ? (
                      <div>
                        <h3 className="font-bold text-lg">{n.titulo}</h3>
                        {n.subtitulo && (
                          <p className="text-gray-600 text-sm italic">
                            {n.subtitulo}
                          </p>
                        )}
                        {n.imagen && (
                          <img
                            src={n.imagen}
                            alt="Noticia"
                            className="mt-3 w-full max-h-60 object-cover rounded-lg"
                          />
                        )}
                        {n.fecha && (
                          <p className="text-gray-500 text-xs mt-2">
                            📅 {n.fecha}
                          </p>
                        )}
                        {n.descripcion && (
                          <p className="text-gray-700 mt-2">{n.descripcion}</p>
                        )}
                        <div className="flex justify-end gap-3 mt-4">
                          <button
                            onClick={() => toggleEditar(n.id)}
                            className="px-4 py-2 border-2 border-orange-400 rounded-full font-bold text-sm hover:bg-orange-400 hover:text-white transition"
                          >
                            MODIFICAR INFO
                          </button>
                          <button
                            onClick={() => eliminarNoticia(n.id)}
                            className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-full font-bold text-sm hover:bg-red-500 hover:text-white transition"
                          >
                            ELIMINAR
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Título"
                          value={n.titulo}
                          onChange={(e) =>
                            handleChange(n.id, "titulo", e.target.value)
                          }
                          className="w-full border-2 border-orange-400 rounded-full px-4 py-2 font-semibold text-lg"
                        />
                        <input
                          type="text"
                          placeholder="Subtítulo"
                          value={n.subtitulo}
                          onChange={(e) =>
                            handleChange(n.id, "subtitulo", e.target.value)
                          }
                          className="w-full border-2 border-orange-400 rounded-full px-4 py-2 text-base text-gray-700"
                        />
                        <input
                          type="date"
                          value={n.fecha}
                          onChange={(e) =>
                            handleChange(n.id, "fecha", e.target.value)
                          }
                          className="w-full border-2 border-orange-400 rounded-full px-4 py-2"
                        />
                        <textarea
                          placeholder="Descripción"
                          value={n.descripcion}
                          onChange={(e) =>
                            handleChange(n.id, "descripcion", e.target.value)
                          }
                          className="w-full border-2 border-orange-400 rounded-md p-3"
                          rows={3}
                        />
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">
                            Imagen
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageChange(n.id, e.target.files[0])
                            }
                            className="w-full border-2 border-orange-400 rounded-md p-3"
                          />
                          {n.imagen && (
                            <img
                              src={n.imagen}
                              alt="Preview"
                              className="mt-3 w-full max-h-60 object-cover rounded-lg"
                            />
                          )}
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => guardarNoticia(n.id)}
                            className="w-full px-6 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition"
                          >
                            GUARDAR NOTICIA
                          </button>
                          <button
                            onClick={() => toggleEditar(n.id)}
                            className="w-full px-6 py-2 border-2 border-gray-400 hover:bg-gray-400 hover:text-white font-bold rounded-full transition"
                          >
                            CANCELAR
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Agregar noticia nueva */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              AGREGAR NOTICIA NUEVA
            </h2>

            {!mostrarFormAgregar ? (
              <div className="flex justify-center">
                <button
                  onClick={() => setMostrarFormAgregar(true)}
                  className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
                >
                  AGREGAR
                </button>
              </div>
            ) : (
              <div className="border-2 border-orange-400 rounded-xl shadow-md p-6 bg-white space-y-4">
                <input
                  type="text"
                  placeholder="Título"
                  value={nuevaNoticia.titulo}
                  onChange={(e) =>
                    setNuevaNoticia({
                      ...nuevaNoticia,
                      titulo: e.target.value,
                    })
                  }
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2 font-semibold text-lg"
                />
                <input
                  type="text"
                  placeholder="Subtítulo"
                  value={nuevaNoticia.subtitulo}
                  onChange={(e) =>
                    setNuevaNoticia({
                      ...nuevaNoticia,
                      subtitulo: e.target.value,
                    })
                  }
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2 text-base text-gray-700"
                />
                <input
                  type="date"
                  value={nuevaNoticia.fecha}
                  onChange={(e) =>
                    setNuevaNoticia({ ...nuevaNoticia, fecha: e.target.value })
                  }
                  className="w-full border-2 border-orange-400 rounded-full px-4 py-2"
                />
                <textarea
                  placeholder="Descripción"
                  value={nuevaNoticia.descripcion}
                  onChange={(e) =>
                    setNuevaNoticia({
                      ...nuevaNoticia,
                      descripcion: e.target.value,
                    })
                  }
                  className="w-full border-2 border-orange-400 rounded-md p-3"
                  rows={3}
                />
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Imagen
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleNuevaImage(e.target.files[0])}
                    className="w-full border-2 border-orange-400 rounded-md p-3"
                  />
                  {nuevaNoticia.imagen && (
                    <img
                      src={nuevaNoticia.imagen}
                      alt="Preview"
                      className="mt-3 w-full max-h-60 object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={agregarNoticia}
                    className="w-full px-6 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition"
                  >
                    GUARDAR NOTICIA
                  </button>
                  <button
                    onClick={() => setMostrarFormAgregar(false)}
                    className="w-full px-6 py-2 border-2 border-gray-400 hover:bg-gray-400 hover:text-white font-bold rounded-full transition"
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNoticias;
