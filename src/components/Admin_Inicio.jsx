import React, { useState, useEffect } from "react";
import NavAdmin from "./NavAdmin.jsx";
import axios from "axios";

function AdminInicio() {
  const [editando, setEditando] = useState(false);
  const [preinscriptos, setPreinscriptos] = useState([]);
  const [loading, setLoading] = useState(false);

  // NUEVO: datos de inicio.json y flag de guardado
  const [inicioData, setInicioData] = useState(null);
  const [savingInicio, setSavingInicio] = useState(false);

  const botonGuardar =
    "px-5 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition w-full sm:w-auto";

  useEffect(() => {
    fetchPreinscriptos();
    fetchInicio();
  }, []);

  const fetchPreinscriptos = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/admin/registro/preinscripcion"
      );
      setPreinscriptos(res.data);
    } catch (error) {
      console.error("Error al cargar preinscriptos:", error);
    }
  };

  const fetchInicio = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/inicio");
      setInicioData(res.data);
    } catch (error) {
      console.error("Error cargando inicio.json:", error);
      setInicioData(null);
    }
  };

  const handleAlta = async (id) => {
    if (!window.confirm("¿Dar de alta este preinscripto?")) return;
    setLoading(true);
    try {
      await axios.post(`http://localhost:3000/api/admin/registro/alta/${id}`);
      alert("✅ Alumno dado de alta correctamente");
      fetchPreinscriptos();
    } catch (error) {
      console.error("Error al dar de alta:", error);
      alert("Error al dar de alta");
    } finally {
      setLoading(false);
    }
  };

  const handleBaja = async (id) => {
    if (!window.confirm("¿Eliminar este preinscripto?")) return;
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3000/api/admin/registro/baja/${id}`);
      alert("🗑️ Preinscripto eliminado");
      fetchPreinscriptos();
    } catch (error) {
      console.error("Error al dar de baja:", error);
      alert("Error al dar de baja");
    } finally {
      setLoading(false);
    }
  };

  // Guarda los cambios respetando TU esquema JSON (sin 'contactos')
  const handleGuardarInicio = async (e) => {
    e.preventDefault();
    if (!inicioData) {
      alert("No se cargaron los datos iniciales. Recargá la página e intentá de nuevo.");
      return;
    }
    if (!window.confirm("¿Guardar cambios en la página de inicio?")) return;

    setSavingInicio(true);
    try {
      const form = document.getElementById("inicioForm");
      const fd = new FormData(form);

      // Empezamos con lo que ya existe para preservar cualquier campo extra
      const payload = { ...inicioData };

      // Campos principales (coinciden con tu JSON)
      payload.titulo_principal =
        fd.get("titulo_principal") !== null ? fd.get("titulo_principal") : (inicioData.titulo_principal || "");

      payload.titulo_sobre_escuela =
        fd.get("titulo_sobre_escuela") !== null ? fd.get("titulo_sobre_escuela") : (inicioData.titulo_sobre_escuela || "");

      // Modalidades
      payload.modalidad_1 = fd.get("modalidad_1") !== null ? fd.get("modalidad_1") : (inicioData.modalidad_1 || "");
      payload.modalidad_2 = fd.get("modalidad_2") !== null ? fd.get("modalidad_2") : (inicioData.modalidad_2 || "");

      // Valores
      payload.valor1 = fd.get("valor1") !== null ? fd.get("valor1") : (inicioData.valor1 || "");
      payload.valor2 = fd.get("valor2") !== null ? fd.get("valor2") : (inicioData.valor2 || "");
      payload.valor3 = fd.get("valor3") !== null ? fd.get("valor3") : (inicioData.valor3 || "");
      payload.valor4 = fd.get("valor4") !== null ? fd.get("valor4") : (inicioData.valor4 || "");

      // Descripciones (evitamos mezclar ?? con || - usamos comprobación explícita)
      const d1 = fd.get("descripcion_escuela_parrafo_1");
      const d2 = fd.get("descripcion_escuela_parrafo_2");
      payload.descripcion_escuela_parrafo_1 =
        d1 !== null && d1 !== undefined ? d1 : (inicioData.descripcion_escuela_parrafo_1 || "");
      payload.descripcion_escuela_parrafo_2 =
        d2 !== null && d2 !== undefined ? d2 : (inicioData.descripcion_escuela_parrafo_2 || "");

      // Talleres individuales (taller_1..taller_4)
      payload.taller_1 = fd.get("taller_1") !== null ? fd.get("taller_1") : (inicioData.taller_1 || "");
      payload.taller_2 = fd.get("taller_2") !== null ? fd.get("taller_2") : (inicioData.taller_2 || "");
      payload.taller_3 = fd.get("taller_3") !== null ? fd.get("taller_3") : (inicioData.taller_3 || "");
      payload.taller_4 = fd.get("taller_4") !== null ? fd.get("taller_4") : (inicioData.taller_4 || "");

      // También actualizamos el array 'talleres' (nombre+descripcion), preservando descripciones si no se editan
      const talleresArr = [];
      const existingTalleres = Array.isArray(inicioData.talleres) ? inicioData.talleres : [];
      for (let i = 0; i < 4; i++) {
        const nombre =
          fd.get(`taller_nombre_${i}`) !== null
            ? fd.get(`taller_nombre_${i}`)
            : (existingTalleres[i]?.nombre ?? payload[`taller_${i + 1}`] ?? "");
        const descripcion =
          fd.get(`taller_desc_${i}`) !== null
            ? fd.get(`taller_desc_${i}`)
            : (existingTalleres[i]?.descripcion ?? "");
        talleresArr.push({ nombre, descripcion });
      }
      payload.talleres = talleresArr;

      // Preguntas frecuentes (hasta 4) — mantenemos numeración y preservamos existentes
      const faqs = [];
      const existingFaqs = Array.isArray(inicioData.preguntas_frecuentes) ? inicioData.preguntas_frecuentes : [];
      for (let i = 0; i < 4; i++) {
        const pregunta = fd.get(`faq_pregunta_${i}`);
        const respuesta = fd.get(`faq_respuesta_${i}`);

        if ((pregunta && pregunta.trim() !== "") || (respuesta && respuesta.trim() !== "")) {
          faqs.push({
            numero: String(i + 1),
            pregunta: pregunta !== null ? pregunta : (existingFaqs[i]?.pregunta ?? ""),
            respuesta: respuesta !== null ? respuesta : (existingFaqs[i]?.respuesta ?? ""),
          });
        } else if (existingFaqs[i]) {
          faqs.push(existingFaqs[i]);
        }
      }
      if (faqs.length > 0) payload.preguntas_frecuentes = faqs;

      // Guardamos con PUT (tu endpoint ya lo maneja)
      await axios.put("http://localhost:3000/api/inicio", payload);

      setInicioData(payload);
      setEditando(false);
      alert("✅ Cambios guardados correctamente");
    } catch (error) {
      console.error("Error guardando inicio.json:", error);
      alert("❌ Error al guardar. Mirá la consola del navegador.");
    } finally {
      setSavingInicio(false);
    }
  };

  return (
    <>
      <NavAdmin />

      <div className="pt-28 flex justify-center items-start min-h-screen bg-gray-100 px-3 sm:px-6 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 w-full max-w-6xl border-4 border-orange-400 space-y-10">
          {/* Información de inicio */}
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
              // FORMULARIO DE EDICIÓN (manteniendo estética original)
              <form id="inicioForm" onSubmit={handleGuardarInicio} className="space-y-6">
                <div className="flex justify-center">
                  <button type="submit" className={botonGuardar} disabled={savingInicio}>
                    {savingInicio ? "Guardando..." : "GUARDAR"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditando(false);
                      fetchInicio();
                    }}
                    className="ml-3 px-5 py-2 border border-gray-300 rounded-full"
                  >
                    CANCELAR
                  </button>
                </div>

                {/* Campos principales */}
                <div className="space-y-4">
                  <input
                    name="titulo_principal"
                    type="text"
                    defaultValue={(inicioData && inicioData.titulo_principal) || "TECNICOS EN EL CAMPO DE LA PROGRAMACION Y ELECTROMECANICO"}
                    className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm sm:text-base"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      name="modalidad_1"
                      type="text"
                      defaultValue={(inicioData && inicioData.modalidad_1) || "ELECTROMECANICA"}
                      className="border border-gray-300 rounded-full px-4 py-2"
                    />
                    <input
                      name="modalidad_2"
                      type="text"
                      defaultValue={(inicioData && inicioData.modalidad_2) || "PROGRAMACION"}
                      className="border border-gray-300 rounded-full px-4 py-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <input
                      name="taller_1"
                      defaultValue={(inicioData && inicioData.taller_1) || "CARPINTERIA"}
                      className="border border-gray-300 rounded-full px-4 py-2 text-center"
                    />
                    <input
                      name="taller_2"
                      defaultValue={(inicioData && inicioData.taller_2) || "HERRERIA"}
                      className="border border-gray-300 rounded-full px-4 py-2 text-center"
                    />
                    <input
                      name="taller_3"
                      defaultValue={(inicioData && inicioData.taller_3) || "ELECTRICIDAD"}
                      className="border border-gray-300 rounded-full px-4 py-2 text-center"
                    />
                    <input
                      name="taller_4"
                      defaultValue={(inicioData && inicioData.taller_4) || "HOJALATERIA"}
                      className="border border-gray-300 rounded-full px-4 py-2 text-center"
                    />
                  </div>
                </div>

                {/* Título sobre escuela y valores */}
                <div className="space-y-4">
                  <input
                    name="titulo_sobre_escuela"
                    type="text"
                    defaultValue={(inicioData && inicioData.titulo_sobre_escuela) || "UNA COMUNIDAD EDUCATIVA QUE FORMA TECNICOS CON IDENTIDAD Y COMPROMISO"}
                    className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm sm:text-base"
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <input name="valor1" defaultValue={(inicioData && inicioData.valor1) || "Respeto"} className="border border-gray-300 rounded-full px-4 py-2 text-center" />
                    <input name="valor2" defaultValue={(inicioData && inicioData.valor2) || "Disciplina"} className="border border-gray-300 rounded-full px-4 py-2 text-center" />
                    <input name="valor3" defaultValue={(inicioData && inicioData.valor3) || "Responsabilidad"} className="border border-gray-300 rounded-full px-4 py-2 text-center" />
                    <input name="valor4" defaultValue={(inicioData && inicioData.valor4) || "Vocacion"} className="border border-gray-300 rounded-full px-4 py-2 text-center" />
                  </div>
                </div>

                {/* Preguntas frecuentes (hasta 4) */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base">Preguntas Frecuentes</h3>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <input
                        name={`faq_pregunta_${i}`}
                        defaultValue={(inicioData && inicioData.preguntas_frecuentes && inicioData.preguntas_frecuentes[i]?.pregunta) || ""}
                        placeholder={`Pregunta ${i + 1}`}
                        className="w-full border border-gray-300 rounded-full px-4 py-2"
                      />
                      <textarea
                        name={`faq_respuesta_${i}`}
                        defaultValue={(inicioData && inicioData.preguntas_frecuentes && inicioData.preguntas_frecuentes[i]?.respuesta) || ""}
                        placeholder={`Respuesta ${i + 1}`}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        rows={2}
                      />
                    </div>
                  ))}
                </div>
              </form>
            )}
          </div>

          {/* Divisor */}
          <div className="border-t-2 border-orange-300 my-4 sm:my-6"></div>

          {/* Tabla de registros (NO modifiqué nada de esta sección) */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              REGISTROS DE PRE-INSCRIPCIÓN
            </h2>

            {loading && (
              <p className="text-center text-gray-500 mb-3">
                Procesando solicitud...
              </p>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm sm:text-base text-center">
                <thead className="bg-orange-100">
                  <tr>
                    {[
                      "Nombre Completo",
                      "DNI",
                      "Fecha de Nacimiento",
                      "Cuilts",
                      "Mail",
                      "Archivos varios",
                      "Dar de Alta",
                      "Dar de Baja",
                    ].map((header) => (
                      <th
                        key={header}
                        className="border border-gray-300 px-4 py-2 font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {preinscriptos.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center text-gray-500 py-4">
                        No hay registros
                      </td>
                    </tr>
                  ) : (
                    preinscriptos.map((p) => (
                      <tr key={p.id}>
                        <td className="border border-gray-300 px-2 py-1">
                          {p.nombre} {p.apellido}
                        </td>
                        <td className="border border-gray-300 px-2 py-1">{p.dni}</td>
                        <td className="border border-gray-300 px-2 py-1">
                          {p.fecha_nacimiento
                            ? new Date(p.fecha_nacimiento).toLocaleDateString("es-AR")
                            : ""}
                        </td>

                        {/* Cuilts (usa url_pdf1) */}
                        <td className="border border-gray-300 px-2 py-1">
                          {p.url_pdf1 ? (
                            <a
                              href={p.url_pdf1}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              Ver CUILs de nucleo familiar
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>

                        {/* Mail */}
                        <td className="border border-gray-300 px-2 py-1">{p.mail}</td>

                        {/* Archivos varios (usa url_pdf2) */}
                        <td className="border border-gray-300 px-2 py-1">
                          {p.url_pdf2 ? (
                            <a
                              href={p.url_pdf2}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              Ver PDFs adjuntos
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>

                        {/* Botones */}
                        <td className="border border-gray-300 px-2 py-1">
                          <button
                            onClick={() => handleAlta(p.id)}
                            className="bg-green-400 hover:bg-green-300 text-white px-3 py-1 rounded-full font-semibold transition"
                          >
                            ✓
                          </button>
                        </td>
                        <td className="border border-gray-300 px-2 py-1">
                          <button
                            onClick={() => handleBaja(p.id)}
                            className="bg-red-400 hover:bg-red-300 text-white px-3 py-1 rounded-full font-semibold transition"
                          >
                            ✗
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
                    <div className="text-center text-md text-gray-500">
            Recuerde que los datos cargados en esta sección representan a la institución. Verifique su exactitud antes de publicar. Todo lo que se publique será visible para la comunidad educativa. 
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminInicio;

