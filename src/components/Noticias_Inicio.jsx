import React from "react";
import "../styles/noticias.css"; 
import logo from "../assets/img/EscudoEscuelaSinFondo.png";
function Noticias_Inicio() {
 return <>


  <div class="top-bar">
    <div class="left-icons">
      <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook"/>
      <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram"/>
    </div>
    <div class="right-icons">
      <img src="https://img.icons8.com/ios-filled/24/ffffff/university.png" alt="Campus Virtual" />
      <span>Campus Virtual</span>
    </div>
  </div>

 
  <div class="main-header">
    <div class="logo">
      <img src={logo} alt="Logo Escuela"/>
      <div>
        <div><strong>EEST N1</strong></div>
        <div>REPUBLICA DE MEXICO</div>
      </div>
    </div>
    <nav class="nav-menu">
      <a href="#">Inicio</a>
      <a href="#" class="active">Noticias</a>
      <a href="#">Modalidades</a>
      <a href="#">Institucion</a>
    </nav>
  </div>


  <div class="noticias-section">
    <h1>NOTICIAS</h1>
  </div>



</>

    

}

export default Noticias_Inicio;
