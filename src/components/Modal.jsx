import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Fondo oscuro
    <div
      className="fixed inset-0 bg-orange-100 bg-opacity-100 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Contenedor del modal */}
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contenido dinámico */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
