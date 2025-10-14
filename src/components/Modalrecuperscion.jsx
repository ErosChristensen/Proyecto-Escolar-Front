import React, { useState } from "react";

function Modalrecuperacion() {
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const res = await fetch("http://localhost:3000/formulario/recuperar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gmail: email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Correo de recuperación enviado.");
        setEmail("");
      } else {
        alert(data.error || "Error al enviar el correo.");
      }
    } catch (err) {
      console.error(err);
      alert("Hubo un error al intentar recuperar la contraseña.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">
        Recuperar contraseña
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Ingresá tu correo electrónico y te enviaremos las instrucciones para
        restablecer tu contraseña.
      </p>

      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="block text-left font-semibold text-gray-700 mb-2"
        >
          Correo electrónico:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 mb-4"
          placeholder="ejemplo@gmail.com"
        />

        <button
          type="submit"
          disabled={enviando}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            enviando
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {enviando ? "Enviando..." : "Enviar correo"}
        </button>
      </form>
    </div>
  );
}

export default Modalrecuperacion;
