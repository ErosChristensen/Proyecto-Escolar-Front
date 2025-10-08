import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/EscudoEscuelaSinFondo.png";

function NavAdmin() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-4 sm:px-8 py-3 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
          <div className="font-bold leading-tight text-xs sm:text-base">
            <p>EEST N°1</p>
            <p>ADMINISTRADOR</p>
          </div>
        </div>

        {/* Links escritorio */}
        <nav className="hidden md:flex gap-8 font-semibold text-base sm:text-lg">
          <NavLink
            to="/admin/inicio"
            className={({ isActive }) =>
              `hover:text-gray-400 ${
                isActive ? "text-orange-400" : "text-white"
              }`
            }
          >
            Inicio / Pre-inscripción
          </NavLink>

          <NavLink
            to="/admin/noticias"
            className={({ isActive }) =>
              `hover:text-gray-400 ${
                isActive ? "text-orange-400" : "text-white"
              }`
            }
          >
            Noticias
          </NavLink>

          <NavLink
            to="/admin/modalidades"
            className={({ isActive }) =>
              `hover:text-gray-400 ${
                isActive ? "text-orange-400" : "text-white"
              }`
            }
          >
            Modalidades
          </NavLink>
        </nav>

        {/* Menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4 md:hidden font-semibold text-base bg-black p-4 rounded-lg">
          <NavLink
            to="/admin/inicio"
            className="hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            Inicio / Pre-inscripción
          </NavLink>
          <NavLink
            to="/admin/noticias"
            className="hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            Noticias
          </NavLink>
          <NavLink
            to="/admin/modalidades"
            className="hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            Modalidades
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default NavAdmin;
