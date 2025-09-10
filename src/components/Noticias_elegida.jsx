import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Noticias_elegida({ noticia, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limitar a máximo 5 elementos
  const media = noticia?.multimedia?.slice(0, 5) || [];

  const isVideo = (url) => url?.endsWith(".mp4") || url?.endsWith(".webm") || url?.endsWith(".ogg");

  const formatoFecha = (fecha) => {
    if (!fecha) return "";
    const d = new Date(fecha);
    return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
  };

  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? media.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === media.length - 1 ? 0 : currentIndex + 1);

  // Cerrar con ESC y navegar con flechas
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, media.length]);

  if (!noticia) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden text-left"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Carrusel */}
          <div className="relative w-full h-72 md:h-[26rem] bg-black">
            {media.length > 0 && (
              <>
                {isVideo(media[currentIndex]) ? (
                  <video src={media[currentIndex]} controls className="h-full w-full object-cover" />
                ) : (
                  <img src={media[currentIndex]} alt={`slide-${currentIndex + 1}`} className="h-full w-full object-cover" />
                )}

                {/* Botones prev/next */}
                <button
                  onClick={prevSlide}
                  disabled={media.length === 1}
                  className={`absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 ${
                    media.length === 1 ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={media.length === 1}
                  className={`absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 ${
                    media.length === 1 ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Indicador */}
                <div className="absolute bottom-3 left-4 text-xs px-2 py-1 rounded-full bg-black/55 text-white">
                  {currentIndex + 1} / {media.length}
                </div>
              </>
            )}
          </div>

          {/* Contenido de la noticia */}
          <div className="p-6 md:p-8 bg-gray-50">
            <div className="mb-2 text-sm text-gray-500">Publicado: {formatoFecha(noticia.fecha)}</div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{noticia.titulo}</h1>
            <p className="mt-4 text-gray-700">{noticia.descripcion.length > 500 ? noticia.descripcion.slice(0, 500) + "…" : noticia.descripcion}</p>

            {/* Botón Cerrar */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg shadow"
              >
                Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


