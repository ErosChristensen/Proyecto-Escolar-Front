import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";

function Login() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const gmail = formData.get("gmail");
    const contraseña = formData.get("contraseña");
  

    // guardar en localStorage
    localStorage.setItem("gmail", gmail);
    localStorage.setItem("contraseña", contraseña);
   

    // pedir código al backend
    try {
      const res = await fetch("http://localhost:3000/formulario/pedir-codigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dni, mail, alumno: nombre })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Código enviado al mail");
        setShowModal(true);
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error solicitando el código");
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center mt-[-100px] px-10 sm:px-10 lg:px-20 py-10 gap-10">
        
        {/* Texto a la izquierda */}
        <div className="lg:w-1/2 max-w-md text-center lg:text-left">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">¡Bienvenido al perfil administrador!</h1>
          <h3 className="text-lg text-gray-700 mb-4">
            Desde acá podrás modificar la <strong>información de la web</strong>.
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Ingresa tu correo y tu contraseña para poder continuar.  
          </p>
        </div>

        {/* Formulario a la derecha */}
        <div className="lg:w-1/2 max-w-md w-full bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre" className="block mb-2 font-bold text-gray-800">Gmail:</label>
            <input
              type="text"
              id="gmail"
              pasword="contraseña"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            />

            <label htmlFor="dni" className="block mb-2 font-bold text-gray-800">Contraseña:</label>
            <input
              type="password"
              id="gmail"
        
              required
              maxLength="8"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Continuar
            </button>

            {/* Párrafo de “¿Olvidaste tu contraseña?” */}
            <p className="text-center text-gray-600 mt-4">
              ¿Olvidaste tu contraseña?{" "}
              <a
                href="/recuperar-contraseña"
                className="text-orange-500 font-semibold hover:underline hover:text-orange-600 transition"
              >
                Recuperarla aquí
              </a>
            </p>
          </form>
        </div>

      </div>
    </>
  );
}

export default Login;

