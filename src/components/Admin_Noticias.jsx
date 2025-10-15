import React, { useState, useEffect } from "react";
import NavAdmin from "./NavAdmin.jsx";

function AdminNoticias() {
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [mostrarFormAgregar, setMostrarFormAgregar] = useState(false);

  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);

  const [nuevaNoticia, setNuevaNoticia] = useState({
    titulo: "",
    subtitulo: "",
    fecha: "",
    descripcion: "",
    imagenesPreview: [], // dataURLs
    imagenesFiles: [],   // File[]
  });

  const PUBLIC_GET = "http://localhost:3000/api/noticias"; // GET público
  const ADMIN_BASE = "http://localhost:3000/api/admin/noticias"; // admin (POST/PUT/DELETE)

  useEffect(() => {
    // no pre-cargamos automáticamente: se carga al pedir VER NOTICIAS
  }, []);

  // ---------- Helpers para fechas ----------
  // Mostrar como DD/MM/YYYY (usa UTC para evitar desfasajes de zona horaria)
  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      const day = String(d.getUTCDate()).padStart(2, "0");
      const month = String(d.getUTCMonth() + 1).padStart(2, "0");
      const year = d.getUTCFullYear();
      return `${day}/${month}/${year}`;
    } catch {
      return dateStr;
    }
  };

  // Formato para input type="date" -> YYYY-MM-DD (usa UTC)
  const formatDateForInput = (dateStr) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      const day = String(d.getUTCDate()).padStart(2, "0");
      const month = String(d.getUTCMonth() + 1).padStart(2, "0");
      const year = d.getUTCFullYear();
      return `${year}-${month}-${day}`;
    } catch {
      return dateStr;
    }
  };
  // -----------------------------------------

  const fetchNoticias = async () => {
    setLoading(true);
    try {
      const res = await fetch(PUBLIC_GET);
      const data = await res.json();
      const items = Array.isArray(data) ? data : data.items || data.rows || data.data || [];
      const mapped = (items || []).map((it) => ({
        id_noticias: it.id_noticias ?? it.id,
        titulo: it.titulo ?? "",
        subtitulo: it.subtitulo ?? "",
        fecha: it.fecha ?? it.fecha, // puede venir ISO o YYYY-MM-DD
        descripcion: it.descripcion ?? "",
        imagenesPreview: [
          it.imagen1 ? `http://localhost:3000${it.imagen1}` : null,
          it.imagen2 ? `http://localhost:3000${it.imagen2}` : null,
          it.imagen3 ? `http://localhost:3000${it.imagen3}` : null,
          it.imagen4 ? `http://localhost:3000${it.imagen4}` : null,
        ].filter(Boolean),
        imagenesFiles: [],
        editando: false,
      }));
      setNoticias(mapped);
    } catch (err) {
      console.error("Error cargando noticias:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleEditar = (id) => {
    setNoticias(noticias.map((n) => (n.id_noticias === id ? { ...n, editando: !n.editando } : n)));
  };

  const handleChange = (id, field, value) => {
    setNoticias(noticias.map((n) => (n.id_noticias === id ? { ...n, [field]: value } : n)));
  };

  // Manejo de archivos para edición (hasta 4)
  const handleImageChange = (id, fileList) => {
    if (!fileList) return;
    const files = Array.from(fileList).slice(0, 4);
    const readers = files.map((file) =>
      new Promise((resolve) => {
        const r = new FileReader();
        r.onloadend = () => resolve(r.result);
        r.readAsDataURL(file);
      })
    );
    Promise.all(readers).then((dataUrls) => {
      setNoticias((prev) =>
        prev.map((n) =>
          n.id_noticias === id ? { ...n, imagenesPreview: dataUrls, imagenesFiles: files } : n
        )
      );
    });
  };

  // Guardar noticia (PUT)
  const guardarNoticia = async (id) => {
    const target = noticias.find((n) => n.id_noticias === id);
    if (!target) return;

    const fd = new FormData();
    if (target.titulo !== undefined) fd.append("titulo", target.titulo);
    if (target.subtitulo !== undefined) fd.append("subtitulo", target.subtitulo);
    if (target.descripcion !== undefined) fd.append("descripcion", target.descripcion);
    // fecha: si el campo proviene del date input será YYYY-MM-DD ya.
    if (target.fecha !== undefined) fd.append("fecha", target.fecha);

    if (target.imagenesFiles && target.imagenesFiles.length > 0) {
      target.imagenesFiles.slice(0, 4).forEach((f) => fd.append("imagenes", f));
    }

    try {
      const res = await fetch(`${ADMIN_BASE}/${id}`, {
        method: "PUT",
        body: fd,
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        alert("✅ Noticia actualizada");
        await fetchNoticias();
      } else {
        console.error("Error al actualizar noticia:", json);
        alert("❌ Error al actualizar noticia: " + (json.error || JSON.stringify(json)));
      }
    } catch (err) {
      console.error("Error al actualizar noticia:", err);
      alert("❌ Error al actualizar noticia (ver consola)");
    }
  };

  // DELETE
  const eliminarNoticia = async (id) => {
    if (!window.confirm("¿Seguro que querés eliminar esta noticia?")) return;
    try {
      const res = await fetch(`${ADMIN_BASE}/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (res.ok && json.ok) {
        setNoticias(noticias.filter((n) => n.id_noticias !== id));
        alert("🗑️ Noticia eliminada");
      } else {
        console.error("Error al eliminar noticia:", json);
        alert("❌ Error al eliminar noticia: " + (json.error || JSON.stringify(json)));
      }
    } catch (err) {
      console.error("Error al eliminar noticia:", err);
      alert("❌ Error al eliminar noticia (ver consola)");
    }
  };

  // Nueva noticia: handle multiple up to 4
  const handleNuevaImages = (fileList) => {
    if (!fileList) return;
    const files = Array.from(fileList).slice(0, 4);
    const readers = files.map((file) =>
      new Promise((resolve) => {
        const r = new FileReader();
        r.onloadend = () => resolve(r.result);
        r.readAsDataURL(file);
      })
    );
    Promise.all(readers).then((dataUrls) => {
      setNuevaNoticia((prev) => ({ ...prev, imagenesPreview: dataUrls, imagenesFiles: files }));
    });
  };

  // POST
  const agregarNoticia = async () => {
    if (!nuevaNoticia.titulo || !nuevaNoticia.subtitulo || !nuevaNoticia.fecha || !nuevaNoticia.descripcion) {
      alert("Los campos título, subtítulo, fecha y descripción son obligatorios.");
      return;
    }

    const fd = new FormData();
    fd.append("titulo", nuevaNoticia.titulo);
    fd.append("subtitulo", nuevaNoticia.subtitulo);
    fd.append("fecha", nuevaNoticia.fecha);
    fd.append("descripcion", nuevaNoticia.descripcion);
    if (nuevaNoticia.imagenesFiles && nuevaNoticia.imagenesFiles.length > 0) {
      nuevaNoticia.imagenesFiles.slice(0, 4).forEach((f) => fd.append("imagenes", f));
    }

    try {
      const res = await fetch(ADMIN_BASE, { method: "POST", body: fd });
      const json = await res.json();
      if (res.ok && json.ok) {
        const item = json.item;
        const newItem = {
          id_noticias: item.id_noticias,
          titulo: item.titulo,
          subtitulo: item.subtitulo,
          fecha: item.fecha,
          descripcion: item.descripcion,
          imagenesPreview: [
            item.imagen1 ? `http://localhost:3000${item.imagen1}` : null,
            item.imagen2 ? `http://localhost:3000${item.imagen2}` : null,
            item.imagen3 ? `http://localhost:3000${item.imagen3}` : null,
            item.imagen4 ? `http://localhost:3000${item.imagen4}` : null,
          ].filter(Boolean),
          imagenesFiles: [],
          editando: false,
        };
        setNoticias((prev) => [...prev, newItem]);
        setNuevaNoticia({ titulo: "", subtitulo: "", fecha: "", descripcion: "", imagenesPreview: [], imagenesFiles: [] });
        setMostrarFormAgregar(false);
        alert("✅ Noticia creada");
      } else {
        console.error("Error creando noticia:", json);
        alert("❌ Error al crear noticia: " + (json.error || JSON.stringify(json)));
      }
    } catch (err) {
      console.error("Error creando noticia:", err);
      alert("❌ Error al crear noticia (ver consola)");
    }
  };

  const botonGuardar =
    "px-5 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition w-full sm:w-auto";

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
                    if (noticias.length === 0) fetchNoticias();
                  }}
                  className="px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition w-full sm:w-auto"
                >
                  VER NOTICIAS
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {loading && <p className="text-center py-4">Cargando noticias...</p>}
                {noticias.map((n) => (
                  <div
                    key={n.id_noticias}
                    className="border border-gray-300 rounded-xl shadow-md p-6 bg-white"
                  >
                    {!n.editando ? (
                      <div>
                        <h3 className="font-bold text-lg">{n.titulo}</h3>
                        {n.subtitulo && <p className="text-gray-600 text-sm italic">{n.subtitulo}</p>}
                        {(n.imagenesPreview && n.imagenesPreview.length > 0) && (
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
                            {n.imagenesPreview.map((src, i) => (
                              <img key={i} src={src} alt={`Noticia ${i}`} className="w-full max-h-40 object-cover rounded-lg" />
                            ))}
                          </div>
                        )}
                        {n.fecha && <p className="text-gray-500 text-xs mt-2">📅 {formatDateDisplay(n.fecha)}</p>}
                        {n.descripcion && (
                          <p className="text-gray-700 mt-2 whitespace-pre-wrap break-words">
                            {n.descripcion}
                          </p>
                        )}

                        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                          <button onClick={() => toggleEditar(n.id_noticias)} className={botonGuardar + " text-sm sm:text-base"}>
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
                          value={n.fecha ? formatDateForInput(n.fecha) : ""}
                          onChange={(e) => handleChange(n.id_noticias, "fecha", e.target.value)}
                          className="w-full border border-gray-300 rounded-full px-4 py-2"
                        />
                        <textarea
                          placeholder="Descripción"
                          value={n.descripcion}
                          onChange={(e) => handleChange(n.id_noticias, "descripcion", e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-3 whitespace-pre-wrap break-words"
                          rows={3}
                        />
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">Imagenes (max 4)</label>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => handleImageChange(n.id_noticias, e.target.files)}
                            className="w-full border border-gray-300 rounded-md p-3"
                          />
                          {(n.imagenesPreview && n.imagenesPreview.length > 0) && (
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
                              {n.imagenesPreview.map((src, i) => (
                                <img key={i} src={src} alt={`Preview ${i}`} className="w-full max-h-40 object-cover rounded-lg" />
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button onClick={() => guardarNoticia(n.id_noticias)} className={botonGuardar}>GUARDAR NOTICIA</button>
                          <button onClick={() => toggleEditar(n.id_noticias)} className="w-full sm:w-auto px-6 py-2 border-2 border-gray-400 hover:bg-gray-400 hover:text-white font-bold rounded-full transition">
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
                <input type="text" placeholder="Título" value={nuevaNoticia.titulo} onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, titulo: e.target.value })} className="w-full border border-gray-300 rounded-full px-4 py-2 font-semibold text-lg" />
                <input type="text" placeholder="Subtítulo" value={nuevaNoticia.subtitulo} onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, subtitulo: e.target.value })} className="w-full border border-gray-300 rounded-full px-4 py-2 text-base text-gray-700" />
                <input type="date" value={nuevaNoticia.fecha} onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, fecha: e.target.value })} className="w-full border border-gray-300 rounded-full px-4 py-2" />
                <textarea placeholder="Descripción" value={nuevaNoticia.descripcion} onChange={(e) => setNuevaNoticia({ ...nuevaNoticia, descripcion: e.target.value })} className="w-full border border-gray-300 rounded-md p-3 whitespace-pre-wrap break-words" rows={3} />
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Imagenes (max 4)</label>
                  <input type="file" accept="image/*" multiple onChange={(e) => handleNuevaImages(e.target.files)} className="w-full border border-gray-300 rounded-md p-3" />
                  {(nuevaNoticia.imagenesPreview && nuevaNoticia.imagenesPreview.length > 0) && (
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
                      {nuevaNoticia.imagenesPreview.map((src, i) => (
                        <img key={i} src={src} alt={`Preview ${i}`} className="w-full max-h-40 object-cover rounded-lg" />
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={agregarNoticia} className={botonGuardar}>GUARDAR NOTICIA</button>
                  <button onClick={() => { setMostrarFormAgregar(false); setNuevaNoticia({ titulo: "", subtitulo: "", fecha: "", descripcion: "", imagenesPreview: [], imagenesFiles: [] }); }} className="w-full sm:w-auto px-6 py-2 border-2 border-gray-400 hover:bg-gray-400 hover:text-white font-bold rounded-full transition">
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
