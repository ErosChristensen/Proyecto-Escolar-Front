import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/EscudoEscuelaSinFondo.png';

function Nav() {
  return (
    <div className="flex justify-between items-center px-10 py-5 mb-2 text-xl">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-15 h-15" />
        <div className="text-white font-bold leading-tight">
          <p>EEST N1</p>
          <p>REPUBLICA DE MEXICO</p>
        </div>
      </div>

      <nav className="flex gap-8 text-white font-semibold">
        <Link to="/">Inicio</Link>
        <Link to="/noticias">Noticias</Link>
        <Link to="/modalidades">Modalidades</Link>
        <Link to="/institucion">Institución</Link>
      </nav>
    </div>
  )
}

export default Nav;
