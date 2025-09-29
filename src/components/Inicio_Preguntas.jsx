import { useState } from "react";
import { ChevronDown } from "lucide-react";
// Importamos nuestro hook personalizado para traer los datos del inicio
import { useInicio } from "../hooks/useInicio";

function Inicio_Preguntas() {
  // Obtenemos los datos del backend y el estado de carga
  const { inicioData, loading } = useInicio();

  // Estado local para controlar cuál pregunta está abierta (acordeón)
  const [openIndex, setOpenIndex] = useState(null);

  // Mientras se cargan los datos mostramos un mensaje
  if (loading) return <p className="text-center py-20">Cargando...</p>;

  // Si hubo un error o no hay datos mostramos un mensaje de error
  if (!inicioData) return <p className="text-center py-20">Error cargando preguntas frecuentes.</p>;

  // Extraemos las preguntas frecuentes desde el JSON del backend
  const faqs = inicioData.preguntas_frecuentes;

  // Función para abrir/cerrar cada pregunta
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 m-30">
      {/* Título de la sección */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 text-center mb-10">
        PREGUNTAS FRECUENTES
      </h2>

      <div className="space-y-6">
        {/* Recorremos las preguntas frecuentes y las mostramos en un acordeón */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer transition-colors hover:bg-gray-50 rounded-md px-2 sm:px-4"
            onClick={() => toggleFAQ(index)} // Abrir/cerrar pregunta
          >
            <div className="flex justify-between items-center">
              {/* Pregunta */}
              <p className="font-semibold text-base sm:text-lg md:text-xl">{faq.pregunta}</p>
              {/* Flecha que rota cuando la pregunta está abierta */}
              <ChevronDown
                className={`h-5 w-5 text-green-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Respuesta: solo se muestra si esta pregunta está abierta */}
            {openIndex === index && (
              <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">{faq.respuesta}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio_Preguntas;
