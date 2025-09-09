import React from "react";
import logo from "../assets/img/EscudoEscuelaSinFondo.png";
import Nav from "../components/Nav.jsx";
function Noticias_Inicio() {
  return (
    <>
    <div className="bg-[#0a501a] h-50 w-full mb-90 pt-[px]">    
      <Nav/>
        <div className="bg-[#0a501a] w-full h-[350px] text-white text-center px-5 pt-[80px] pb-[20px] transform -skew-y-[3deg]">
        <h1 className="text-[48px] transform skew-y-[3deg]">NOTICIAS</h1>
      </div>
      </div>
    </>
  );
}

export default Noticias_Inicio;
