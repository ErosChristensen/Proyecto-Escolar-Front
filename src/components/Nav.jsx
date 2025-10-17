import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/EscudoEscuelaSinFondo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-6 sm:px-12 lg:px-20 py-4">
      <div className="flex justify-between items-center">
   
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <div className="font-bold leading-tight text-sm sm:text-base">
            <p>EEST N1</p>
            <p>REPÚBLICA DE MÉXICO</p>
          </div>
        </div>


        <nav className="hidden md:flex gap-8 font-semibold text-lg">
          <Link to="/" className="hover:text-gray-400">Inicio</Link>
          <Link to="/noticias" className="hover:text-gray-400">Noticias</Link>
          <Link to="/modalidad" className="hover:text-gray-400">Modalidades</Link>
          <Link to="/institucion" className="hover:text-gray-400">Institución</Link>
        </nav>


        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4 md:hidden font-semibold text-lg">
          <Link to="/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/noticias" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Noticias</Link>
          <Link to="/modalidad" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Modalidades</Link>
          <Link to="/institucion" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Institución</Link>
        </nav>
      )}
    </header>
  );
}

export default Nav;
