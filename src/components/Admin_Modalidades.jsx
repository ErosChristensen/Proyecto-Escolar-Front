import React, { useState, useEffect } from "react";
import NavAdmin from "./NavAdmin.jsx";
import defaultFoto from "../assets/img/EscudoEscuelaSinFondo.png";

// Pildora memoizada con estado local para evitar pérdida de cursor
const Pildora = React.memo(({ p, persistChange }) => {
  const [titulo, setTitulo] = useState(p.titulo ?? "");
  const [contenido, setContenido] = useState(p.contenido ?? "");

  // Si el parent actualiza la pildora por fuera, sincronizamos localmente
  useEffect(() => setTitulo(p.titulo ?? ""), [p.titulo]);
  useEffect(() => setContenido(p.contenido ?? ""), [p.contenido]);

  // Persistir cambios en el parent (se usa onBlur para no romper el cursor)
  const handleBlurTitulo = () => {
    if (titulo !== (p.titulo ?? "")) persistChange(p.id, "titulo", titulo);
  };
  const handleBlurContenido = () => {
    if (contenido !== (p.contenido ?? "")) persistChange(p.id, "contenido", contenido);
  };

  return (
    <div className="border border-gray-300 rounded-xl sm:rounded-full px-3 py-2 sm:px-5 sm:py-3">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        onBlur={handleBlurTitulo}
        className="w-full font-semibold text-sm sm:text-base bg-transparent border-none focus:outline-none text-left"
      />
      {/* Mostramos textarea siempre (si antes tenías condicionales, lo podés ajustar) */}
      <textarea
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        onBlur={handleBlurContenido}
        rows={2}
        className="w-full text-xs sm:text-sm bg-transparent mt-1 border-none focus:outline-none resize-none text-left"
      />
    </div>
  );
});

function ModalidadesAdmin() {
  const [mostrarProgramacion, setMostrarProgramacion] = useState(false);
  const [mostrarElectro, setMostrarElectro] = useState(false);

  // ---------- ESTADOS DE FOTOS ----------
  const [fotoPerfil, setFotoPerfil] = useState(defaultFoto);
  const [fotosExtras, setFotosExtras] = useState([
    defaultFoto,
    defaultFoto,
    defaultFoto,
    defaultFoto,
  ]);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setFotoPerfil(URL.createObjectURL(file));
  };

  const handleFotoExtraChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFotosExtras((prev) => prev.map((f, i) => (i === index ? url : f)));
    }
  };

  // ---------- PÍLDORAS BASE ----------
  const basePildorasProg = [
    { id: 0, titulo: "PROGRAMACIÓN", contenido: "" },
    { id: 1, titulo: "TÉCNICO/A EN PROGRAMACIÓN E INFORMÁTICA", contenido: "" },
    { id: 2, titulo: "PROGRAMACIÓN: LÓGICA QUE TRANSFORMA", contenido: "" },
    { id: 3, titulo: "INTRODUCCIÓN", contenido: "Aquí va la descripción de la modalidad de Programación. Este texto es editable." },
    { id: 4, titulo: "ALCANCE DEL TÍTULO", contenido: "Descripción del alcance del título en Programación, editable por el administrador." },
    { id: 5, titulo: "TALLERES PRINCIPALES", contenido: "Listado de talleres principales de la modalidad Programación." },
    { id: 6, titulo: "¿POR QUÉ ELEGIRLA?", contenido: "Motivos para elegir la modalidad de Programación." },
    { id: 7, titulo: "ELECCIÓN DE MODALIDAD", contenido: "Información sobre cómo elegir la modalidad de Programación." },
  ];

  const basePildorasElectro = [
    { id: 0, titulo: "ELECTROMECÁNICA", contenido: "" },
    { id: 1, titulo: "TÉCNICO/A ELECTROMECÁNICO", contenido: "" },
    { id: 2, titulo: "ELECTROMECÁNICA: FUERZA E INNOVACIÓN", contenido: "" },
    { id: 3, titulo: "INTRODUCCIÓN", contenido: "Aquí va la descripción de la modalidad de Electromecánica. Este texto es editable." },
    { id: 4, titulo: "ALCANCE DEL TÍTULO", contenido: "Descripción del alcance del título en Electromecánica, editable por el administrador." },
    { id: 5, titulo: "TALLERES PRINCIPALES", contenido: "Listado de talleres principales de la modalidad Electromecánica." },
    { id: 6, titulo: "¿POR QUÉ ELEGIRLA?", contenido: "Motivos para elegir la modalidad de Electromecánica." },
    { id: 7, titulo: "ELECCIÓN DE MODALIDAD", contenido: "Información sobre cómo elegir la modalidad de Electromecánica." },
  ];

  const [pildorasProg, setPildorasProg] = useState(basePildorasProg);
  const [pildorasElectro, setPildorasElectro] = useState(basePildorasElectro);

  // Persistir cambio (llamado desde Pildora)
  const persistChangeProg = (id, field, value) => {
    setPildorasProg((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };
  const persistChangeElectro = (id, field, value) => {
    setPildorasElectro((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const toggleProgramacion = () => {
    setMostrarProgramacion(true);
    setMostrarElectro(false);
  };

  const toggleElectro = () => {
    setMostrarElectro(true);
    setMostrarProgramacion(false);
  };

  const botonPrincipalBase = "px-6 py-2 font-bold rounded-full transition w-full sm:w-auto border-2 text-center text-sm sm:text-base";
  const botonGuardar = "px-5 py-2 bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full transition w-full sm:w-auto text-sm sm:text-base";

  // Bloque reutilizable (pasa la función persistChange apropiada)
  const BloqueModalidad = ({ pildoras, persistChange }) => (
    <div className="border-2 border-orange-400 rounded-xl shadow-md p-4 sm:p-6 bg-white space-y-4">
      <div className="flex justify-center mb-4 sm:mb-6">
        <button className={botonGuardar}>GUARDAR</button>
      </div>

      <div className="flex flex-col items-center space-y-3 mb-6">
        <div className="relative">
          <img src={fotoPerfil} alt="Foto del administrador" className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 object-cover rounded-2xl border-4 border-gray-400 shadow-md" />
          <label htmlFor="fotoPerfil" className="absolute bottom-0 right-0 bg-orange-400 text-white p-2 rounded-full cursor-pointer hover:bg-orange-300 transition text-sm sm:text-base" title="Cambiar foto">📷</label>
          <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} className="hidden" />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {pildoras.map((p) => (
          <Pildora key={p.id} p={p} persistChange={persistChange} />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-3 mt-4">
        {fotosExtras.map((foto, index) => (
          <div key={index} className="relative">
            <img src={foto} alt={`Extra ${index + 1}`} className="w-20 h-20 xs:w-24 xs:h-24 object-cover rounded-2xl border-4 border-gray-400 shadow-md" />
            <label htmlFor={`fotoExtra${index}`} className="absolute bottom-0 right-0 bg-orange-400 text-white p-2 rounded-full cursor-pointer hover:bg-orange-300 transition text-sm sm:text-base" title="Cambiar foto">📷</label>
            <input type="file" id={`fotoExtra${index}`} accept="image/*" onChange={(e) => handleFotoExtraChange(index, e)} className="hidden" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <NavAdmin />
      <div className="pt-28 flex justify-center items-start min-h-screen bg-gray-100 px-3 sm:px-6 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 w-full max-w-5xl border-4 border-orange-400 space-y-6">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">MODALIDADES</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
            <button onClick={toggleProgramacion} className={`${botonPrincipalBase} ${mostrarProgramacion ? "bg-orange-400 text-white border-orange-400" : "text-black border-orange-400 hover:bg-orange-400 hover:text-white"}`}>INFORMACIÓN DE PROGRAMACIÓN</button>
            <button onClick={toggleElectro} className={`${botonPrincipalBase} ${mostrarElectro ? "bg-orange-400 text-white border-orange-400" : "text-black border-orange-400 hover:bg-orange-400 hover:text-white"}`}>INFORMACIÓN DE ELECTROMECÁNICA</button>
          </div>

          {mostrarProgramacion && <BloqueModalidad pildoras={pildorasProg} persistChange={persistChangeProg} />}
          {mostrarElectro && <BloqueModalidad pildoras={pildorasElectro} persistChange={persistChangeElectro} />}
                    <div className="text-center text-md text-gray-500">
            Recuerde que los datos cargados en esta sección representan a la institución. Verifique su exactitud antes de publicar. Todo lo que se publique será visible para la comunidad educativa. 
          </div>
        </div>
        
      </div>
    </>
  );
}

export default ModalidadesAdmin;
