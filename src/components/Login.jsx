import React, { useState } from "react";
import Nav from "./Nav";
import Modal from "../components/Modal";      
import Modalrecuperacion from "../components/Modalrecuperscion";

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

    try {
      const res = await fetch("http://localhost:3000/formulario/pedir-codigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gmail, contraseña }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Código enviado al mail");
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
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            ¡Bienvenido al perfil administrador!
          </h1>
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
            <label htmlFor="gmail" className="block mb-2 font-bold text-gray-800">
              Gmail:
            </label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            />

            <label
              htmlFor="contraseña"
              className="block mb-2 font-bold text-gray-800"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              required
              maxLength="20"
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
              <button
                type="button"
                onClick={() => setShowModal(true)}   // 👈 esto abre el modal
                className="text-orange-500 font-semibold hover:underline hover:text-orange-600 transition"
              >
                Recuperarla aquí
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Modal de recuperación */}
      {showModal && (                            // 👈 forma más segura de renderizarlo
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modalrecuperacion />
        </Modal>
      )}
    </>
  );
}

export default Login;
