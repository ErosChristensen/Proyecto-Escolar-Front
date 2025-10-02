import React, { useState } from "react";
import Nav from "../components/Nav.jsx";

function AdminNoticias() {
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: "ALUMNOS PARTICIPARAN EN OLIMPIADAS DE MATEMATICA",
      subtitulo: "Competencia internacional",
      fecha: "",
      descripcion: "",
      imagen: null,
      editando: false,
    },
  ]);

  const toggleEditar = (id) => {
    setNoticias(
      noticias.map((n) =>
        n.id === id ? { ...n, editando: !n.editando } : n
      )
    );
  };

  const eliminarNoticia = (id) => {
    setNoticias(noticias.filter((n) => n.id !== id));
  };

  const handleChange = (id, field, value) => {
    setNoticias(
      noticias.map((n) =>
        n.id === id ? { ...n, [field]: value } : n
      )
    );
  };

  const handleImageChange = (id, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNoticias(
        noticias.map((n) =>
          n.id === id ? { ...n, imagen: reader.result } : n
        )
      );
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const guardarNoticia = (id) => {
    setNoticias(
      noticias.map((n) =>
        n.id === id ? { ...n, editando: false } : n
      )
    );
  };

  return (
    <>
      <Nav />
      <div className="p-8 flex flex-col items-center">
        {/* Noticias publicadas */}
        <h2 className="text-2xl font-bold mb-6">NOTICIAS PUBLICADAS</h2>

        {!mostrarNoticias ? (
          <button
            onClick={() => setMostrarNoticias(true)}
            className="border border-orange-400 px-6 py-2 rounded-full font-bold hover:bg-orange-400 hover:text-white transition"
          >
            VER NOTICIAS
          </button>
        ) : (
          <div className="space-y-6 w-full flex flex-col items-center">
            {noticias.map((n) => (
              <div
                key={n.id}
                className="w-full max-w-2xl flex flex-col space-y-4 border border-orange-400 rounded-xl shadow-md p-6 bg-white"
              >
                {!n.editando ? (
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{n.titulo}</h3>
                      {n.subtitulo && (
                        <p className="text-gray-600 text-sm italic">{n.subtitulo}</p>
                      )}
                      {n.imagen && (
                        <img
                          src={n.imagen}
                          alt="Noticia"
                          className="mt-3 w-full max-h-60 object-cover rounded-lg"
                        />
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleEditar(n.id)}
                        className="border border-orange-400 px-4 py-1 rounded-full text-sm hover:bg-orange-400 hover:text-white"
                      >
                        MODIFICAR
                      </button>
                      <button
                        onClick={() => eliminarNoticia(n.id)}
                        className="border border-orange-400 px-4 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white"
                      >
                        ELIMINAR NOTICIA
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Título"
                      value={n.titulo}
                      onChange={(e) => handleChange(n.id, "titulo", e.target.value)}
                      className="w-full border border-orange-400 rounded-lg p-2 font-semibold text-lg"
                    />
                    <input
                      type="text"
                      placeholder="Subtítulo"
                      value={n.subtitulo}
                      onChange={(e) => handleChange(n.id, "subtitulo", e.target.value)}
                      className="w-full border border-orange-400 rounded-lg p-2 text-base text-gray-700"
                    />
                    <input
                      type="date"
                      value={n.fecha}
                      onChange={(e) => handleChange(n.id, "fecha", e.target.value)}
                      className="w-full border border-orange-400 rounded-lg p-2"
                    />
                    <textarea
                      placeholder="Descripción"
                      value={n.descripcion}
                      onChange={(e) => handleChange(n.id, "descripcion", e.target.value)}
                      className="w-full border border-orange-400 rounded-lg p-2"
                    />

                    {/* Subir imagen */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Imagen
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageChange(n.id, e.target.files[0])
                        }
                        className="w-full border border-orange-400 rounded-lg p-2"
                      />
                      {n.imagen && (
                        <img
                          src={n.imagen}
                          alt="Preview"
                          className="mt-3 w-full max-h-60 object-cover rounded-lg"
                        />
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => guardarNoticia(n.id)}
                        className="border border-orange-400 px-4 py-1 rounded-full text-sm hover:bg-green-500 hover:text-white"
                      >
                        GUARDAR
                      </button>
                      <button
                        onClick={() => eliminarNoticia(n.id)}
                        className="border border-orange-400 px-4 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white"
                      >
                        ELIMINAR NOTICIA
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AdminNoticias;
