import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaSchool } from "react-icons/fa";
import AccesoCampus from "./Acceso_Campus"; // 👈 Importa el modal

function Header() {
  const [openCampus, setOpenCampus] = useState(false); // 👈 Controla el modal

  return (
    <header className="bg-black text-white flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 w-full relative z-40">
      {/* Redes sociales a la izquierda */}
      <div className="flex space-x-5">
        <a
          href="https://www.facebook.com/eest1bj/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-gray-400 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/escuelatecnicabenitojuarez/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-400 transition"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Campus Virtual a la derecha */}
      <button
        onClick={() => setOpenCampus(true)}
        className="flex items-center space-x-2 hover:text-gray-400 transition"
      >
        <FaSchool size={22} />
        <span className="font-medium">Campus Virtual</span>
      </button>

      {/* Popup del Campus Virtual */}
      <AccesoCampus open={openCampus} onClose={() => setOpenCampus(false)} />
    </header>
  );
}

export default Header;
