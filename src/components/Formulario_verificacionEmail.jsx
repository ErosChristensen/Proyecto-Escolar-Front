import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VerificacionCodigoModal({ onClose }) {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, '');
    if (!value) return;

    const newCodigo = [...codigo];
    newCodigo[index] = value;
    setCodigo(newCodigo);

    if (index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !codigo[index] && index > 0) {
      const newCodigo = [...codigo];
      newCodigo[index - 1] = '';
      setCodigo(newCodigo);
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerificar = () => {
    const codigoFinal = codigo.join('');
    // Aquí podrías validar el código con tu backend si querés
    // Luego, navegar a Formulario_preg
    navigate('/formulario-preg'); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-75">
      <div className="relative bg-white  w-11/12 max-w-md p-6 rounded-xl shadow-xl animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-lg z-50"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          Verificación de correo
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Ingresa el código de 6 dígitos que te enviamos por correo.
        </p>

        <div className="flex justify-between mb-6">
          {codigo.map((num, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              value={num}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`w-12 h-12 text-center text-lg font-bold border rounded-lg focus:outline-none focus:ring-2 transition ${
                codigo[i] ? 'border-orange-500 ring-orange-300' : 'border-gray-300 focus:ring-orange-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleVerificar}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Verificar
        </button>
      </div>
    </div>
  );
}

export default VerificacionCodigoModal;
