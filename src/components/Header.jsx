import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaSchool } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-black text-white flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 w-full">
      {/* Redes sociales a la izquierda */}
      <div className="flex space-x-5">
        <a
          href="https://www.facebook.com/eest1bj/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-gray-400"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/escuelatecnicabenitojuarez/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-400"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Campus Virtual a la derecha */}
      <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
        <FaSchool size={22} />
        <span className="font-medium">Campus Virtual</span>
      </div>
    </header>
  );
}

export default Header;
