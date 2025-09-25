import React from 'react';

function Formulario_preg() {
  return (
    <div className="min-h-screen bg-orange-100 py-8 px-4 sm:px-6 md:px-12 lg:px-24">
      <form className="bg-white p-6 sm:p-8 md:p-10 rounded-xl w-full max-w-4xl mx-auto shadow-2xl">
        <h2 className="text-center mb-8 text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold">
          Formulario de Registro
        </h2>

        {/* Nombre y Apellido */}
        <div className="mb-6">
          <label htmlFor="nombre" className="block mb-2 font-bold text-gray-800 text-sm sm:text-base">
            Nombre y Apellido:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Correo Electrónico */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-800 text-sm sm:text-base">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Preguntas con checkboxes */}
        {[
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
        ].map((pregunta, i) => (
          <div key={i} className="mb-6">
            <label className="block mb-2 font-bold text-gray-800 text-sm sm:text-base">
              {pregunta.label}
            </label>
            <div className="grid grid-cols-1 gap-2"> {/* siempre 1 columna */}
              {pregunta.options.map((opcion, j) => (
                <label
                  key={j}
                  className="flex items-center bg-gray-100 p-2 sm:p-3 rounded-lg border border-gray-300 hover:bg-gray-200 transition text-sm sm:text-base"
                >
                  <input
                    type="checkbox"
                    name={pregunta.name}
                    value={opcion.toLowerCase().replace(/ /g, '_')}
                    className="mr-2 scale-110"
                  />
                  {opcion}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Botón de enviar */}
        <button
          type="submit"
          className="bg-orange-600 text-white py-2 sm:py-3 px-10 sm:px-16 text-sm sm:text-base rounded-lg cursor-pointer block mx-auto mt-6 shadow-xl hover:bg-orange-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario_preg;
