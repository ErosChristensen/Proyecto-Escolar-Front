import React, { useState } from "react";

function Formulario_preg() {
  const [respuestas, setRespuestas] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRespuestas((prev) => {
      if (type === "checkbox") {
        const current = prev[name] || [];
        if (checked) {
          return { ...prev, [name]: [...current, value] };
        } else {
          return { ...prev, [name]: current.filter((v) => v !== value) };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const alumno = localStorage.getItem("nombre");
    const dni = localStorage.getItem("dni");
    const mail = localStorage.getItem("mail");
    const modalidad_elegida = respuestas.tecnicatura;

    try {
      const res = await fetch("http://localhost:3000/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dni,
          alumno,
          mail,
          respuestas_formulario: respuestas,
          modalidad_elegida,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Formulario enviado correctamente. Revisa tu correo.");
      } else {
        alert(data.mensaje);
      }
    } catch (err) {
      console.error(err);
      alert("Error enviando el formulario");
    }
  };

  const preguntas = [
    {
      label: 'Intereses y gustos (podés marcar más de una opción):',
      name: 'gustos',
      options: [
        'Me gusta trabajar con herramientas y piezas mecánicas.',
        'Me interesa entender cómo funcionan los motores, máquinas y sistemas.',
        'Me atrae programar y crear aplicaciones o videojuegos.',
        'Me interesa la electrónica (placas, sensores, circuitos).',
        'Disfruto resolver problemas lógicos y algoritmos.',
        'Prefiero trabajos manuales/presenciales antes que frente a la PC.'
      ]
    },
    {
      label: '¿Cuáles de los siguientes artefactos tenés en tu casa o usás regularmente?',
      name: 'artefactos',
      options: ['Celular', 'Netbook', 'Notebook', 'Tablet', 'Ninguno']
    },
    {
      label: '¿Cuál taller te gusta más en este año?',
      name: 'taller',
      options: ['Herrería', 'Carpintería', 'Electricidad', 'Dibujo técnico', 'Robótica']
    },
    {
      label: 'En 4to comienza el ciclo superior, debes elegir una orientación ¿Continuarás en esta escuela?',
      name: 'continuar',
      options: ['Sí', 'No']
    },
    {
      label: 'Si permanecés en esta escuela, podés optar por las siguientes tecnicaturas. ¿Cuál de estas elegirías?',
      name: 'tecnicatura',
      options: ['Programación', 'Electromecánica']
    },
    {
      label: '¿Por qué te interesa la orientación que elegiste?',
      name: 'motivacion',
      options: [
        'Me gusta construir y arreglar objetos',
        'Me interesa crear programas o aplicaciones',
        'Considero mejor salida laboral',
        'Me atrae la parte práctica del taller',
        'Me atrae la parte intelectual y creativa del código'
      ]
    },
    {
      label: '¿Te gustaría participar de una charla informativa para conocer mejor cada tecnicatura?',
      name: 'charla',
      options: ['Sí', 'No', 'Tal vez']
    }
  ];

  return (
    <div className="min-h-screen bg-orange-100 py-8 px-4 sm:px-6 md:px-12 lg:px-24">
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-10 rounded-xl w-full max-w-4xl mx-auto shadow-2xl">
        <h2 className="text-center mb-8 text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold">
          Formulario de Registro
        </h2>

        {preguntas.map((pregunta, i) => (
          <div key={i} className="mb-6">
            <label className="block mb-2 font-bold text-gray-800">{pregunta.label}</label>
            <div className="grid grid-cols-1 gap-2">
              {pregunta.options.map((opcion, j) => (
                <label key={j} className="flex items-center bg-gray-100 p-2 sm:p-3 rounded-lg border border-gray-200 hover:bg-gray-200 transition">
                  <input
                    type="checkbox"
                    name={pregunta.name}
                    value={opcion}
                    onChange={handleChange}
                    className="mr-2 scale-110"
                  />
                  {opcion}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className="bg-orange-600 text-white py-3 px-10 rounded-lg block mx-auto mt-6 hover:bg-orange-700 transition">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario_preg;
