import React, { useState, useEffect } from "react";
import NavAdmin from "./NavAdmin.jsx";
import axios from "axios";

function AdminHistoria() {
  const [editando, setEditando] = useState(false);
  const [historiaData, setHistoriaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const botonGuardar =
    "px-5 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition w-full sm:w-auto";

  useEffect(() => {
    fetchHistoria();
  }, []);

  const fetchHistoria = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/historia");
      setHistoriaData(res.data);
    } catch (err) {
      console.error("Error cargando historia.json:", err);
      setHistoriaData(null);
    }
  };

  const handleGuardarHistoria = async (e) => {
    e.preventDefault();
    if (!historiaData) {
      alert("No se cargaron los datos. Recargá la página e intentá de nuevo.");
      return;
    }
    if (!window.confirm("¿Guardar cambios en la información de la institución?")) return;

    setSaving(true);
    try {
      const form = document.getElementById("historiaForm");
      const fd = new FormData(form);

      // Empezamos con lo que ya existe para preservar otros campos
      const payload = { ...historiaData };

      // Campos planos
      const tPrincipal = fd.get("titulo_principal");
      payload.titulo_principal = tPrincipal !== null ? tPrincipal : (historiaData.titulo_principal || "");

      const desc1 = fd.get("descripcion_escuela_parrafo_1");
      payload.descripcion_escuela_parrafo_1 = desc1 !== null ? desc1 : (historiaData.descripcion_escuela_parrafo_1 || "");

      const desc2 = fd.get("descripcion_escuela_parrafo_2");
      payload.descripcion_escuela_parrafo_2 = desc2 !== null ? desc2 : (historiaData.descripcion_escuela_parrafo_2 || "");

      // Ubicación y horarios
      const ubic = fd.get("ubicacion");
      payload.ubicacion = ubic !== null ? ubic : (historiaData.ubicacion || "");
      const horarios = fd.get("horarios");
      payload.horarios = horarios !== null ? horarios : (historiaData.horarios || "");

      // Modalidades
      payload.modalidad_1 = fd.get("modalidad_1") !== null ? fd.get("modalidad_1") : (historiaData.modalidad_1 || "");
      payload.modalidad_2 = fd.get("modalidad_2") !== null ? fd.get("modalidad_2") : (historiaData.modalidad_2 || "");

      // Título sobre escuela y valores
      payload.titulo_sobre_escuela = fd.get("titulo_sobre_escuela") !== null ? fd.get("titulo_sobre_escuela") : (historiaData.titulo_sobre_escuela || "");
      payload.valor1 = fd.get("valor1") !== null ? fd.get("valor1") : (historiaData.valor1 || "");
      payload.valor2 = fd.get("valor2") !== null ? fd.get("valor2") : (historiaData.valor2 || "");
      payload.valor3 = fd.get("valor3") !== null ? fd.get("valor3") : (historiaData.valor3 || "");
      payload.valor4 = fd.get("valor4") !== null ? fd.get("valor4") : (historiaData.valor4 || "");

      // Autoridades (array) — hasta 4
      const autoridadesArr = [];
      const existingAutoridades = Array.isArray(historiaData.autoridades) ? historiaData.autoridades : [];
      for (let i = 0; i < 4; i++) {
        const nombre = fd.get(`autoridad_nombre_${i}`);
        const cargo = fd.get(`autoridad_cargo_${i}`);

        if ((nombre && nombre.trim() !== "") || (cargo && cargo.trim() !== "")) {
          autoridadesArr.push({
            nombre: nombre !== null ? nombre : (existingAutoridades[i]?.nombre ?? ""),
            cargo: cargo !== null ? cargo : (existingAutoridades[i]?.cargo ?? ""),
          });
        } else if (existingAutoridades[i]) {
          autoridadesArr.push(existingAutoridades[i]);
        }
      }
      if (autoridadesArr.length > 0) payload.autoridades = autoridadesArr;

      // Talleres (array) — hasta 4 (nombre + descripcion)
      const talleresArr = [];
      const existingTalleres = Array.isArray(historiaData.talleres) ? historiaData.talleres : [];
      for (let i = 0; i < 4; i++) {
        const nombre = fd.get(`taller_nombre_${i}`);
        const descripcion = fd.get(`taller_desc_${i}`);

        const finalNombre = nombre !== null ? nombre : (existingTalleres[i]?.nombre ?? "");
        const finalDesc = descripcion !== null ? descripcion : (existingTalleres[i]?.descripcion ?? "");

        talleresArr.push({
          nombre: finalNombre,
          descripcion: finalDesc,
        });
      }
      payload.talleres = talleresArr;

      // Guardar con PUT
      await axios.put("http://localhost:3000/api/historia", payload);

      setHistoriaData(payload);
      setEditando(false);
      alert("✅ Información de institución guardada correctamente");
    } catch (err) {
      console.error("Error guardando historia.json:", err);
      alert("❌ Error al guardar. Mirá la consola del navegador.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <NavAdmin />

      <div className="pt-28 flex justify-center items-start min-h-screen bg-gray-100 px-3 sm:px-6 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 w-full max-w-6xl border-4 border-orange-400 space-y-10">
          {/* ---------- INFORMACIÓN DE LA INSTITUCIÓN ---------- */}
          <div>
            {!editando ? (
              <div className="text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  INFORMACIÓN DE LA INSTITUCIÓN
                </h2>
                <button
                  onClick={() => setEditando(true)}
                  className="w-full sm:w-auto px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-black hover:bg-orange-400 hover:text-white transition"
                >
                  MODIFICAR
                </button>
              </div>
            ) : (
              <form id="historiaForm" onSubmit={handleGuardarHistoria} className="space-y-6">
                <div className="flex justify-center">
                  <button type="submit" className={botonGuardar} disabled={saving}>
                    {saving ? "Guardando..." : "GUARDAR"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditando(false);
                      fetchHistoria();
                    }}
                    className="ml-3 px-5 py-2 border border-gray-300 rounded-full"
                  >
                    CANCELAR
                  </button>
                </div>

                {/* título principal */}
                <div className="space-y-4">
                  <input
                    name="titulo_principal"
                    type="text"
                    defaultValue={(historiaData && historiaData.titulo_principal) || ""}
                    className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm sm:text-base"
                    placeholder="Título principal"
                  />
                </div>

                {/* descripciones */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-700 text-sm sm:text-base">Descripción 1</h3>
                    <textarea
                      name="descripcion_escuela_parrafo_1"
                      defaultValue={(historiaData && historiaData.descripcion_escuela_parrafo_1) || ""}
                      className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base"
                      rows={3}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 text-sm sm:text-base">Descripción 2</h3>
                    <textarea
                      name="descripcion_escuela_parrafo_2"
                      defaultValue={(historiaData && historiaData.descripcion_escuela_parrafo_2) || ""}
                      className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base"
                      rows={3}
                    />
                  </div>
                </div>

                {/* autoridades */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base">Autoridades</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex gap-2">
                        <input
                          name={`autoridad_nombre_${i}`}
                          defaultValue={(historiaData && historiaData.autoridades && historiaData.autoridades[i]?.nombre) || ""}
                          className="w-1/2 border border-gray-300 rounded-full px-4 py-2"
                          placeholder="Nombre"
                        />
                        <input
                          name={`autoridad_cargo_${i}`}
                          defaultValue={(historiaData && historiaData.autoridades && historiaData.autoridades[i]?.cargo) || ""}
                          className="w-1/2 border border-gray-300 rounded-full px-4 py-2"
                          placeholder="Cargo"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ubicacion y horarios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="ubicacion"
                    defaultValue={(historiaData && historiaData.ubicacion) || ""}
                    className="border border-gray-300 rounded-full px-4 py-2"
                    placeholder="Ubicación"
                  />
                  <input
                    name="horarios"
                    defaultValue={(historiaData && historiaData.horarios) || ""}
                    className="border border-gray-300 rounded-full px-4 py-2"
                    placeholder="Horarios"
                  />
                </div>

                {/* modalidades */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="modalidad_1"
                    defaultValue={(historiaData && historiaData.modalidad_1) || ""}
                    className="border border-gray-300 rounded-full px-4 py-2"
                    placeholder="Modalidad 1"
                  />
                  <input
                    name="modalidad_2"
                    defaultValue={(historiaData && historiaData.modalidad_2) || ""}
                    className="border border-gray-300 rounded-full px-4 py-2"
                    placeholder="Modalidad 2"
                  />
                </div>

                {/* titulo sobre escuela y valores */}
                <div className="space-y-4">
                  <input
                    name="titulo_sobre_escuela"
                    defaultValue={(historiaData && historiaData.titulo_sobre_escuela) || ""}
                    className="w-full border border-gray-300 rounded-full px-4 py-2"
                    placeholder="Título sobre la escuela"
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <input name="valor1" defaultValue={(historiaData && historiaData.valor1) || ""} className="border border-gray-300 rounded-full px-4 py-2 text-center" placeholder="Valor 1" />
                    <input name="valor2" defaultValue={(historiaData && historiaData.valor2) || ""} className="border border-gray-300 rounded-full px-4 py-2 text-center" placeholder="Valor 2" />
                    <input name="valor3" defaultValue={(historiaData && historiaData.valor3) || ""} className="border border-gray-300 rounded-full px-4 py-2 text-center" placeholder="Valor 3" />
                    <input name="valor4" defaultValue={(historiaData && historiaData.valor4) || ""} className="border border-gray-300 rounded-full px-4 py-2 text-center" placeholder="Valor 4" />
                  </div>
                </div>

                {/* Talleres (nombre + descripcion) */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base">Talleres</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i}>
                        <input
                          name={`taller_nombre_${i}`}
                          defaultValue={(historiaData && historiaData.talleres && historiaData.talleres[i]?.nombre) || ""}
                          className="w-full border border-gray-300 rounded-full px-4 py-2 mb-2"
                          placeholder="Nombre del taller"
                        />
                        <textarea
                          name={`taller_desc_${i}`}
                          defaultValue={(historiaData && historiaData.talleres && historiaData.talleres[i]?.descripcion) || ""}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          rows={3}
                          placeholder="Descripción del taller"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* DIVISOR */}
          <div className="border-t-2 border-orange-300 my-4 sm:my-6"></div>

          {/* (Puedes mantener aquí cualquier otra sección del admin; no toqué más) */}
          <div className="text-center text-md text-gray-500">
            Recuerde que los datos cargados en esta sección representan a la institución. Verifique su exactitud antes de publicar. Todo lo que se publique será visible para la comunidad educativa. 
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHistoria;
