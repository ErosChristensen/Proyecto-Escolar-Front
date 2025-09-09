import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿La escuela tiene uniforme?",
    answer: "Sí, los alumnos deben asistir con uniforme reglamentario."
  },
  {
    question: "¿Cuándo puedo iniciar la inscripción para mi hijo?",
    answer: "Las inscripciones abren en septiembre de cada año."
  },
  {
    question: "¿Con qué tipo de título egresan los alumnos?",
    answer: "Los alumnos egresan con título técnico de nivel secundario."
  },
  {
    question: "¿Es doble jornada?",
    answer: "Sí, contamos con jornada completa en ambos turnos."
  }
];

function Inicio_Preguntas() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 text-center mb-8">
        PREGUNTAS FRECUENTES
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">{faq.question}</p>
              <ChevronDown
                className={`h-5 w-5 text-green-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio_Preguntas;