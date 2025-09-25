import React from 'react';
import "../styles/Formulario_validacion.css";
import { Link } from "react-router-dom";

function Formulario_validacion() {
  return (
    <div className="page-cont">
      {/* Texto a la izquierda */}
      <div className="text-container">
        <h1>Bienvenido</h1>
        <p>
          Por favor complete sus datos personales para continuar con el
          registro.  
          Ingrese su nombre completo, DNI y correo electrónico para
          validar su identidad y acceder al siguiente paso.
        </p>
      </div>

      {/* Formulario a la derecha */}
      <div className="form-container">
        <form>
          <label htmlFor="nombre">Nombre completo:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="dni">DNI:</label>
          <input type="number" id="dni" name="dni" required />

          <label htmlFor="email">Gmail:</label>
          <input type="email" id="email" name="email" required />

          <div className="forgot-password">
            ¿Olvidaste tu contraseña?
          </div>

          <Link to="/formulario-preg">
            <button type="submit" className="continue-button">Continuar</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Formulario_validacion;

 