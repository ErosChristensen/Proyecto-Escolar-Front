import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿La escuela tiene uniforme?",
    answer: "Sí, los alumnos deben asistir con uniforme reglamentario.",
  },
  {
    question: "¿Cuándo puedo iniciar la inscripción para mi hijo?",
    answer: "Las inscripciones abren en septiembre de cada año.",
  },
  {
    question: "¿Con qué tipo de título egresan los alumnos?",
    answer: "Los alumnos egresan con título técnico de nivel secundario.",
  },
  {
    question: "¿Es doble jornada?",
    answer: "Sí, contamos con jornada completa en ambos turnos.",
  },
];

function Inicio_Preguntas() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 m-30">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 text-center mb-10">
        PREGUNTAS FRECUENTES
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer transition-colors hover:bg-gray-50 rounded-md px-2 sm:px-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base sm:text-lg md:text-xl">
                {faq.question}
              </p>
              <ChevronDown
                className={`h-5 w-5 text-green-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio_Preguntas;
