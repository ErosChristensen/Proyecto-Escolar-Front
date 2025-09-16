import React from "react";
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
                    <a href="#">Inicio</a>
                    <a href="">Noticias</a>
                    <a href="#">Modalidades</a>
                    <a href="#">Institución</a>
                  </nav>
                </div>
    )
}

export default Nav;