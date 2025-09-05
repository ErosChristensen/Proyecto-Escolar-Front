import React from 'react';

function Inicio() {
    return(
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
    );
}

export default Inicio;