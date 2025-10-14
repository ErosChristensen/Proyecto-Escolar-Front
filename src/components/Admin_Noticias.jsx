import React, { useState, useEffect } from "react";
import NavAdmin from "./NavAdmin.jsx";

function AdminNoticias() {
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [mostrarFormAgregar, setMostrarFormAgregar] = useState(false);

  // estado para noticias (normalizamos la respuesta del servidor)
  const [noticias, setNoticias] = useState([]);

  const [nuevaNoticia, setNuevaNoticia] = useState({
    titulo: "",
    subtitulo: "",
    fecha: "",
    descripcion: "",
    imagen: null,      // preview (dataURL)
    imagenFile: null,  // File real para enviar
  });

  const PUBLIC_GET = "http://localhost:3000/api/noticias"; // listado público (GET)
  const ADMIN_BASE = "http://localhost:3000/api/admin/noticias"; // admin (POST/PUT/DELETE)

  // Carga inicial de noticias (GET /api/noticias)
  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const res = await fetch(PUBLIC_GET);
      const data = await res.json();
      // Normalize: many endpoints devuelven { ok:true, items: [...] }
      const items = Array.isArray(data) ? data : (data.items || data.rows || data.data || []);
      // mapear a la forma que usa el componente (agregar flags y previews)
      const mapped = (items || []).map((it) => ({
        // tu tabla usa id_noticias en backend
        id_noticias: it.id_noticias ?? it.id ?? it.id_noticias,
        titulo: it.titulo ?? "",
        subtitulo: it.subtitulo ?? it.subtitulo ?? "",
        fecha: it.fecha ?? it.fecha ?? "",
        descripcion: it.descripcion ?? "",
        // Default preview: si backend devuelve imagen1 como "/uploads/xxx"
        imagenUrl:
          it.imagen1 || it.imagen || it.imagen1 === null
            ? (it.imagen1 ? `http://localhost:3000${it.imagen1}` : null)
            : null,
        imagen: null, // preview dataURL si editan localmente
        imagenFile: null,
        editando: false,
      }));
      setNoticias(mapped);
    } catch (err) {
      console.error("Error cargando noticias:", err);
      // mantenemos estado viejo si existiera
    }
  };

  // Helpers para UI (NO cambian tu estructura ni tailwind)
  const toggleEditar = (id) => {
    setNoticias(noticias.map((n) => (n.id_noticias === id ? { ...n, editando: !n.editando } : n)));
  };

  const handleChange = (id, field, value) => {
    setNoticias(noticias.map((n) => (n.id_noticias === id ? { ...n, [field]: value } : n)));
  };

  const handleImageChange = (id, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setNoticias((prev) =>
        prev.map((n) =>
          n.id_noticias === id
            ? { ...n, imagen: reader.result, imagenFile: file } // preview + file real
            : n
        )
      );
    };
    reader.readAsDataURL(file);
  };

  const guardarNoticia = async (id) => {
    const target = noticias.find((n) => n.id_noticias === id);
    if (!target) return;

    // Preparar FormData para enviar texto + posible archivo
    const fd = new FormData();
    if (target.titulo !== undefined) fd.append("titulo", target.titulo);
    if (target.subtitulo !== undefined) fd.append("subtitulo", target.subtitulo);
    if (target.descripcion !== undefined) fd.append("descripcion", target.descripcion);
    if (target.fecha !== undefined) fd.append("fecha", target.fecha);

    // Si hay un File nuevo (imagenFile) lo anexamos
    if (target.imagenFile) {
      fd.append("imagenes", target.imagenFile); // backend acepta 'imagenes' array
    }

    try {
      const res = await fetch(`${ADMIN_BASE}/${id}`, {
        method: "PUT",
        body: fd,
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        // recargo lista para asegurar consistencia (imagenes urls, etc)
        await fetchNoticias();
        alert("✅ Noticia actualizada");
      } else {
        console.error("Error actualizar noticia:", json);
        alert("❌ Error al actualizar noticia: " + (json.error || JSON.stringify(json)));
      }
    } catch (err) {
      console.error("Error al actualizar noticia:", err);
      alert("❌ Error al actualizar noticia (ver consola).");
    }
  };

  const eliminarNoticia = async (id) => {
    if (!window.confirm("¿Seguro que querés eliminar esta noticia?")) return;
    try {
      const res = await fetch(`${ADMIN_BASE}/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (res.ok && json.ok) {
        setNoticias(noticias.filter((n) => n.id_noticias !== id));
        alert("🗑️ Noticia eliminada");
      } else {
        console.error("Error eliminar noticia:", json);
        alert("❌ Error al eliminar noticia: " + (json.error || JSON.stringify(json)));
      }
    } catch (err) {
      console.error("Error al eliminar noticia:", err);
      alert("❌ Error al eliminar noticia (ver consola).");
    }
  };

  // Nueva noticia: preview y archivo
  const handleNuevaImage = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setNuevaNoticia((prev) => ({ ...prev, imagen: reader.result, imagenFile: file }));
    };
    reader.readAsDataURL(file);
  };

  const agregarNoticia = async () => {
    if (!nuevaNoticia.titulo || !nuevaNoticia.descripcion || !nuevaNoticia.fecha || !nuevaNoticia.subtitulo) {
      alert("Los campos título, subtítulo, descripción y fecha son obligatorios.");
      return;
    }

    const fd = new FormData();
    fd.append("titulo", nuevaNoticia.titulo);
    fd.append("subtitulo", nuevaNoticia.subtitulo);
    fd.append("fecha", nuevaNoticia.fecha);
    fd.append("descripcion", nuevaNoticia.descripcion);
    if (nuevaNoticia.imagenFile) fd.append("imagenes", nuevaNoticia.imagenFile); // 'imagenes' acepta array

    try {
      const res = await fetch(ADMIN_BASE, {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        // backend responde { ok:true, item: {...} }
        const item = json.item;
        // normalizamos a nuestro formato y lo agregamos
        setNoticias((prev) => [
          ...prev,
          {
            id_noticias: item.id_noticias ?? item.id ?? item.id_noticias,
            titulo: item.titulo ?? "",
            subtitulo: item.subtitulo ?? "",
            fecha: item.fecha ?? "",
            descripcion: item.descripcion ?? "",
            imagenUrl: item.imagen1 ? `http://localhost:3000${item.imagen1}` : null,
            imagen: null,
            imagenFile: null,
            editando: false,
          },
        ]);
        setNuevaNoticia({ titulo: "", subtitulo: "", fecha: "", descripcion: "", imagen: null, imagenFile: null });
        setMostrarFormAgregar(false);
        alert("✅ Noticia creada");
      } else {
        console.error("Error creando noticia:", json);
        alert("❌ Error al crear noticia: " + (json.error || JSON.stringify(json)));
      }
    } catch (err) {
      console.error("Error creando noticia:", err);
      alert("❌ Error al crear noticia (ver consola).");
    }
  };

  const botonGuardar =
    "px-5 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition w-full sm:w-auto";

  // -------------------- RENDER --------------------
  return (
    <>
      <NavAdmin />
      <div className="pt-28 flex justify-center items-start min-h-screen bg-gray-100 px-3 sm:px-6 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 w-full max-w-5xl border-4 border-orange-400 space-y-10">
          {/* ---------- NOTICIAS PUBLICADAS ---------- */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
              NOTICIAS PUBLICADAS
            </h2>

            {!mostrarNoticias ? (
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setMostrarNoticias(true);
                    // si no hay noticias cargadas, intentar recargar
                    if (noticias.length === 0) fetchNoticias();
                  }}
                  className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition w-full sm:w-auto"
                >
                  VER NOTICIAS
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {noticias.map((n) => (
                  <div
                    key={n.id_noticias}
                    className="border border-gray-300 rounded-xl shadow-md p-6 bg-white"
                  >
                    {!n.editando ? (
                      <div>
                        <h3 className="font-bold text-lg">{n.titulo}</h3>
                        {n.subtitulo && (
                          <p className="text-gray-600 text-sm italic">{n.subtitulo}</p>
                        )}
                        {/* Mostrar preview local si existe, si no usar imagenUrl */}
                        {(n.imagen || n.imagenUrl) && (
                          <img
                            src={n.imagen || n.imagenUrl}
                            alt="Noticia"
                            className="mt-3 w-full max-h-60 object-cover rounded-lg"
                          />
                        )}
                        {n.fecha && (
                          <p className="text-gray-500 text-xs mt-2">📅 {n.fecha}</p>
                        )}
                        {n.descripcion && (
                          <p className="text-gray-700 mt-2">{n.descripcion}</p>
                        )}

                        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                          <button
                            onClick={() => toggleEditar(n.id_noticias)}
                            className={botonGuardar + " text-sm sm:text-base"}
                          >
                            MODIFICAR INFO
                          </button>
                          <button
                            onClick={() => eliminarNoticia(n.id_noticias)}
                            className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-full font-bold text-sm sm:text-base hover:bg-red-500 hover:text-white transition w-full sm:w-auto"
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
                          onChange={(e) => handleChange(n.id_noticias, "titulo", e.target.value)}
                          className="w-full border border-gray-300 rounded-full px-4 py-2 font-semibold text-lg"
                        />
                        <input
                          type="text"
                          placeholder="Subtítulo"
                          value={n.subtitulo}
                          onChange={(e) => handleChange(n.id_noticias, "subtitulo", e.target.value)}
                          className="w-full border border-gray-300 rounded-full px-4 py-2 text-base text-gray-700"
                        />
                        <input
                          type="date"
                          value={n.fecha}
                          onChange={(e) => handleChange(n.id_noticias, "fecha", e.target.value)}
                          className="w-full border border-gray-300 rounded-full px-4 py-2"
                        />
                        <textarea
                          placeholder="Descripción"
                          value={n.descripcion}
                          onChange={(e) => handleChange(n.id_noticias, "descripcion", e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-3"
                          rows={3}
                        />
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">
                            Imagen
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(n.id_noticias, e.target.files[0])}
                            className="w-full border border-gray-300 rounded-md p-3"
                          />
                          {(n.imagen || n.imagenUrl) && (
                            <img
                              src={n.imagen || n.imagenUrl}
                              alt="Preview"
                              className="mt-3 w-full max-h-60 object-cover rounded-lg"
                            />
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button onClick={() => guardarNoticia(n.id_noticias)} className={botonGuardar}>
                            GUARDAR NOTICIA
                          </button>
                          <button
                            onClick={() => toggleEditar(n.id_noticias)}
                            className="w-full sm:w-auto px-6 py-2 border-2 border-gray-400 hover:bg-gray-400 hover:text-white font-bold rounded-full transition"
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

          {/* ---------- AGREGAR NUEVA NOTICIA ---------- */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
              AGREGAR NOTICIA NUEVA
            </h2>

            {!mostrarFormAgregar ? (
              <div className="flex justify-center">
                <button
                  onClick={() => setMostrarFormAgregar(true)}
                  className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition w-full sm:w-auto"
                >
                  AGREGAR
                </button>
              </div>
            ) : (
              <div className="border border-gray-300 rounded-xl shadow-md p-6 bg-white space-y-4">
                <input
                  type="text"
                  placeholder="Título"
                  value={nuevaNoticia.titulo}
                  onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, titulo: e.target.value })}
                  className="w-full border border-gray-300 rounded-full px-4 py-2 font-semibold text-lg"
                />
                <input
                  type="text"
                  placeholder="Subtítulo"
                  value={nuevaNoticia.subtitulo}
                  onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, subtitulo: e.target.value })}
                  className="w-full border border-gray-300 rounded-full px-4 py-2 text-base text-gray-700"
                />
                <input
                  type="date"
                  value={nuevaNoticia.fecha}
                  onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, fecha: e.target.value })}
                  className="w-full border border-gray-300 rounded-full px-4 py-2"
                />
                <textarea
                  placeholder="Descripción"
                  value={nuevaNoticia.descripcion}
                  onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, descripcion: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-3"
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
                    className="w-full border border-gray-300 rounded-md p-3"
                  />
                  {nuevaNoticia.imagen && (
                    <img
                      src={nuevaNoticia.imagen}
                      alt="Preview"
                      className="mt-3 w-full max-h-60 object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={agregarNoticia} className={botonGuardar}>
                    GUARDAR NOTICIA
                  </button>
                  <button
                    onClick={() => {
                      setMostrarFormAgregar(false);
                      setNuevaNoticia({ titulo: "", subtitulo: "", fecha: "", descripcion: "", imagen: null, imagenFile: null });
                    }}
                    className="w-full sm:w-auto px-6 py-2 border-2 border-gray-400 hover:bg-gray-400 hover:text-white font-bold rounded-full transition"
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="text-center text-md text-gray-500">
            Recuerde que los datos cargados en esta sección representan a la institución. Verifique su exactitud antes de publicar. Todo lo que se publique será visible para la comunidad educativa.
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNoticias;
