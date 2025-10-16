import React, { useState } from "react";
import VerificacionCodigoModal from "./Formulario_verificacionEmail";
import Nav from "./Nav";
import { toast, ToastContainer, Slide } from "react-toastify";

function FormularioValidacion() {
  const [showModal, setShowModal] = useState(false);

  const toastCustom = (mensaje, tipo = "info") => {
    toast(mensaje, {
      type: tipo,
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      className: "bg-white shadow-2xl border-l-8 p-6 rounded-xl text-lg font-semibold",
      bodyClassName:
        tipo === "success"
          ? "text-green-700"
          : tipo === "error"
          ? "text-red-600"
          : tipo === "warning"
          ? "text-yellow-600"
          : "text-gray-800",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dni = formData.get("dni");
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const mail = formData.get("email");

    localStorage.setItem("dni", dni);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("mail", mail);

    try {
      const res = await fetch("http://localhost:3000/formulario/pedir-codigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dni, mail, nombre, apellido }),
      });

      const data = await res.json();
      if (res.ok) {
        toastCustom("Código enviado al mail", "success");
        setShowModal(true);
      } else {
        toastCustom(data.error || "Error solicitando el código", "error");
      }
    } catch (err) {
      console.error(err);
      toastCustom("Error solicitando el código", "error");
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center mt-[-100px] px-10 sm:px-10 lg:px-20 py-10 gap-10">
        <div className="lg:w-1/2 max-w-md text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-orange-500 mb-4">¡Bienvenido!</h1>
          <h3 className="text-lg text-gray-700 mb-4">
            ¿Eres <strong>estudiante</strong> de nuestra institución y estás cursando tercer año?
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Ingresa tu nombre, apellido, DNI y correo electrónico para validar tu identidad y acceder al formulario de <strong>elección de modalidad.</strong>
          </p>
        </div>

        <div className="lg:w-1/2 max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <form onSubmit={handleSubmit}>
            {[
              { label: "Nombre completo", name: "nombre", type: "text" },
              { label: "Apellido completo", name: "apellido", type: "text" },
              { label: "DNI", name: "dni", type: "text", pattern: "\\d{7,8}", maxLength: 8 },
              { label: "Gmail", name: "email", type: "email" },
            ].map((field, i) => (
              <div key={i} className="mb-4">
                <label className="block mb-2 font-bold text-gray-800">{field.label}:</label>
                <input
                  type={field.type}
                  name={field.name}
                  pattern={field.pattern || undefined}
                  maxLength={field.maxLength || undefined}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-400 text-lg"
                />
              </div>
            ))}

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-3xl font-bold text-lg shadow-lg transition-all">
              Continuar
            </button>
          </form>
        </div>

        {showModal && <VerificacionCodigoModal onClose={() => setShowModal(false)} />}
      </div>
      <ToastContainer />
    </>
  );
}

export default FormularioValidacion;
