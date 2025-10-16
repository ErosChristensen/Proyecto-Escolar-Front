import React, { useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Formulario_preg() {
  const [respuestas, setRespuestas] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRespuestas((prev) => {
      if (type === "checkbox") {
        const current = prev[name] || [];
        if (checked) return { ...prev, [name]: [...current, value] };
        else return { ...prev, [name]: current.filter((v) => v !== value) };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const toastCustom = (mensaje, tipo = "info") => {
    toast(mensaje, {
      type: tipo,
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      className: "bg-white text-gray-800 shadow-2xl border-l-8 p-6 text-lg font-bold rounded-2xl",
      bodyClassName:
        tipo === "success"
          ? "text-green-700"
          : tipo === "error"
          ? "text-red-600"
          : tipo === "warning"
          ? "text-yellow-600"
          : "text-gray-800",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = localStorage.getItem("nombre");
    const apellido = localStorage.getItem("apellido");
    const dni = localStorage.getItem("dni");
    const mail = localStorage.getItem("mail");
    const modalidad_elegida = respuestas.tecnicatura;

    if (!nombre || !apellido || !dni || !mail) {
      toastCustom("Faltan datos del alumno. Volvé a iniciar sesión o validar DNI.", "error");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dni, nombre, apellido, mail, respuestas_formulario: respuestas, modalidad_elegida }),
      });

      const data = await res.json();

      if (res.ok) toastCustom("Formulario enviado correctamente. Revisa tu correo.", "success");
      else toastCustom(data.mensaje || "Hubo un problema enviando el formulario.", "warning");
    } catch (err) {
      console.error(err);
      toastCustom("Error enviando el formulario", "error");
    }
  };

  const preguntas = [
    {
      label: "Intereses y gustos (podés marcar más de una opción):",
      name: "gustos",
      type: "checkbox",
      options: [
        "Me gusta trabajar con herramientas y piezas mecánicas.",
        "Me interesa entender cómo funcionan los motores, máquinas y sistemas.",
        "Me atrae programar y crear aplicaciones o videojuegos.",
        "Me interesa la electrónica (placas, sensores, circuitos).",
        "Disfruto resolver problemas lógicos y algoritmos.",
        "Prefiero trabajos manuales/presenciales antes que frente a la PC.",
      ],
    },
    {
      label: "¿Cuáles de los siguientes artefactos tenés en tu casa o usás regularmente?",
      name: "artefactos",
      type: "checkbox",
      options: ["Celular", "Netbook", "Notebook", "Tablet", "Ninguno"],
    },
    {
      label: "¿Cuál taller te gusta más en este año?",
      name: "taller",
      type: "radio",
      options: ["Herrería", "Carpintería", "Electricidad", "Dibujo técnico", "Robótica"],
    },
    {
      label: "En 4to comienza el ciclo superior, debes elegir una orientación ¿Continuarás en esta escuela?",
      name: "continuar",
      type: "radio",
      options: ["Sí", "No"],
    },
    {
      label: "Si permanecés en esta escuela, podés optar por las siguientes tecnicaturas. ¿Cuál de estas elegirías?",
      name: "tecnicatura",
      type: "radio",
      options: ["Programación", "Electromecánica"],
    },
    {
      label: "¿Por qué te interesa la orientación que elegiste?",
      name: "motivacion",
      type: "checkbox",
      options: [
        "Me gusta construir y arreglar objetos",
        "Me interesa crear programas o aplicaciones",
        "Considero mejor salida laboral",
        "Me atrae la parte práctica del taller",
        "Me atrae la parte intelectual y creativa del código",
      ],
    },
    {
      label: "¿Te gustaría participar de una charla informativa para conocer mejor cada tecnicatura?",
      name: "charla",
      type: "radio",
      options: ["Sí", "No", "Tal vez"],
    },
  ];

  return (
    <div className="min-h-screen bg-orange-100 py-8 px-4 sm:px-6 md:px-12 lg:px-24">
      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl w-full max-w-4xl mx-auto shadow-2xl">
        <h2 className="text-center mb-10 text-gray-800 text-3xl font-extrabold">
          Formulario de Registro
        </h2>

        {preguntas.map((pregunta, i) => (
          <div key={i} className="mb-8">
            <label className="block mb-3 font-bold text-gray-800 text-lg">{pregunta.label}</label>
            <div className="grid grid-cols-1 gap-3">
              {pregunta.options.map((opcion, j) => (
                <label key={j} className="flex items-center bg-gray-100 p-3 rounded-xl border border-gray-200 hover:bg-gray-200 transition text-lg">
                  <input
                    type={pregunta.type}
                    name={pregunta.name}
                    value={opcion}
                    onChange={handleChange}
                    className="mr-3 scale-125"
                  />
                  {opcion}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button className="bg-orange-600 text-white py-4 px-12 rounded-2xl block mx-auto mt-6 text-xl font-bold hover:bg-orange-700 transition-all shadow-lg">
          Enviar
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Formulario_preg;
