import React, { useState } from "react";
import Nav from '../components/Nav.jsx'

function AdminNoticias() {
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [noticias, setNoticias] = useState([
    { id: 1, titulo: "ALUMNOS PARTICIPARAN EN OLIMPIADAS DE MATEMATICA", fecha: "", descripcion: "", editando: false },
    { id: 2, titulo: "ALUMNOS PARTICIPARAN EN OLIMPIADAS DE MATEMATICA", fecha: "", descripcion: "", editando: false },
    { id: 3, titulo: "ALUMNOS PARTICIPARAN EN OLIMPIADAS DE MATEMATICA", fecha: "", descripcion: "", editando: false },
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

  const guardarNoticia = (id, nuevaData) => {
    setNoticias(
      noticias.map((n) =>
        n.id === id ? { ...n, ...nuevaData, editando: false } : n
      )
    );
  };

  return (
    <>
    <Nav/>
    <div className="p-8">
      {/* Noticias publicadas */}
      <h2 className="text-2xl font-bold mb-4">NOTICIAS PUBLICADAS</h2>
      {!mostrarNoticias ? (
        <button
          onClick={() => setMostrarNoticias(true)}
          className="border border-orange-400 px-6 py-2 rounded-full font-bold hover:bg-orange-400 hover:text-white transition"
        >
          VER NOTICIAS
        </button>
      ) : (
        <div className="space-y-4">
          {noticias.map((n) => (
            <div key={n.id} className="flex flex-col space-y-2 border-b pb-4">
              {!n.editando ? (
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{n.titulo}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleEditar(n.id)}
                      className="border border-orange-400 px-4 py-1 rounded-full text-sm hover:bg-orange-400 hover:text-white"
                    >
                      MODIFICAR INFO
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
                <div className="space-y-2">
                  <input
                    type="text"
                    defaultValue={n.titulo}
                    onChange={(e) =>
                      guardarNoticia(n.id, { titulo: e.target.value })
                    }
                    className="w-full border border-orange-400 rounded p-2"
                  />
                  <input
                    type="date"
                    defaultValue={n.fecha}
                    onChange={(e) =>
                      guardarNoticia(n.id, { fecha: e.target.value })
                    }
                    className="w-full border border-orange-400 rounded p-2"
                  />
                  <textarea
                    placeholder="DESCRIPCION"
                    defaultValue={n.descripcion}
                    onChange={(e) =>
                      guardarNoticia(n.id, { descripcion: e.target.value })
                    }
                    className="w-full border border-orange-400 rounded p-2"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleEditar(n.id)}
                      className="border border-orange-400 px-4 py-1 rounded-full text-sm hover:bg-green-500 hover:text-white"
                    >
                      GUARDAR INFO
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

      {/* Agregar noticia nueva */}
      <h2 className="text-2xl font-bold mt-8 mb-4">AGREGAR NOTICIA NUEVA</h2>
      <button className="border border-orange-400 px-6 py-2 rounded-full font-bold hover:bg-orange-400 hover:text-white transition">
        AGREGAR
      </button>
    </div>
    </>
  );
}

export default AdminNoticias;
