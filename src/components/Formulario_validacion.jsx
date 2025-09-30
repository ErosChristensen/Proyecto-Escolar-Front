import React, { useState } from 'react';
import VerificacionCodigoModal from './Formulario_verificacionEmail';
import Nav from './Nav';
function FormularioValidacion() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar datos al backend si querés
    setShowModal(true); // Mostrar modal al hacer click en Continuar
  };

  return (
    <>
    <Nav/>
    <div className="min-h-screen flex flex-col lg:flex-row items-center pb-50 justify-center px-5 sm:px-10 lg:px-20 py-10 gap-10">
      
      {/* Texto a la izquierda */}
      <div className="lg:w-1/2 max-w-md text-center lg:text-left">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">¡Bienvenido!</h1>
        <h3 className="text-lg text-gray-700 mb-4">
          ¿Eres <strong>estudiante</strong> de nuestra institución y estás cursando tercer año?
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          Ingresa tu nombre completo, DNI y correo electrónico para validar tu identidad y acceder al formulario de <strong>elección de modalidad.</strong>
        </p>
      </div>

      {/* Formulario a la derecha */}
      <div className="lg:w-1/2 max-w-md w-full bg-white rounded-xl shadow-xl p-6 sm:p-8">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="block mb-2 font-bold text-gray-800">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <label htmlFor="dni" className="block mb-2 font-bold text-gray-800">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            required
            pattern="\d{7,8}" 
            maxLength="8"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <label htmlFor="email" className="block mb-2 font-bold text-gray-800">Gmail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Continuar
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && <VerificacionCodigoModal onClose={() => setShowModal(false)} />}
    </div>
    </>

  );
}

export default FormularioValidacion;
