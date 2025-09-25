import React from 'react';
import "../styles/Formulario_preg.css";

function Formulario_preg() {
  return (
  <>
   <form class="formulario">
    <h2>Formulario de Registro</h2>

    <div class="campo">
      <label for="nombre">Nombre y Apellido:</label>
      <input type="text" id="nombre" name="nombre" required/>
    </div>

    <div class="campo">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required/>
    </div>

    <div class="campo">
      <label><strong>Intereses y gustos (podés marcar más de una opción):</strong></label>
      <div class="opciones">
        <label><input type="checkbox" name="gustos" value="herramientas"/> Me gusta trabajar con herramientas y piezas mecánicas.</label>
        <label><input type="checkbox" name="gustos" value="motores"/> Me interesa entender cómo funcionan los motores, máquinas y sistemas.</label>
        <label><input type="checkbox" name="gustos" value="programacion"/> Me atrae programar y crear aplicaciones o videojuegos.</label>
        <label><input type="checkbox" name="gustos" value="electronica"/> Me interesa la electrónica (placas, sensores, circuitos).</label>
        <label><input type="checkbox" name="gustos" value="logica"/> Disfruto resolver problemas lógicos y algoritmos.</label>
        <label><input type="checkbox" name="gustos" value="manual"/> Prefiero trabajos manuales/presenciales antes que frente a la PC.</label>
      </div>
    </div>

    <div class="campo">
      <label><strong>¿Cuales de los siguentes artefactos tenes en tu casa o usas regularmente?</strong></label>
      <div class="opciones">
        <label><input type="checkbox" name="intereses" value="tecnologia"/> Celular </label>
        <label><input type="checkbox" name="intereses" value="deporte"/> Netbook</label>
        <label><input type="checkbox" name="intereses" value="musica"/> Notebook</label>
        <label><input type="checkbox" name="intereses" value="viajes"/> Tablet</label>
        <label><input type="checkbox" name="intereses" value="viajes"/> Ninguno</label>

      </div>
    </div>

        <div class="campo">
      <label><strong>¿Cual taller te gusta mas en este año?</strong></label>
      <div class="opciones">
        <label><input type="checkbox" name="intereses" value="tecnologia"/> Herreria </label>
        <label><input type="checkbox" name="intereses" value="deporte"/> Carpinteria</label>
        <label><input type="checkbox" name="intereses" value="musica"/> Electricidad</label>
        <label><input type="checkbox" name="intereses" value="viajes"/> Dibujo tecnico </label>
        <label><input type="checkbox" name="intereses" value="viajes"/> Robotica</label>
      </div>
    </div>

  <div class="campo">
      <label><strong>¿En 4to comienza el ciclo superior, debes elegir una orientacion ¿Continuaras en esta escuela?</strong></label>
      <div class="opciones">
        <label><input type="checkbox" name="intereses" value="tecnologia"/> Si </label>
        <label><input type="checkbox" name="intereses" value="deporte"/> No</label>
      </div>
    </div>

      <div class="campo">
      <label><strong>Si permaneces en esta escuela, podes optar por las siguentes tecnicaturas, ¿Cual de estas eligirias?</strong></label>
      <div class="opciones">
        <label><input type="checkbox" name="intereses" value="tecnologia"/> Programacion </label>
        <label><input type="checkbox" name="intereses" value="deporte"/> Electromecanica</label>
      </div>
    </div>

    
        <div class="campo">
      <label><strong>¿Por que te interesa la orientacion que elegiste?</strong></label>
      <div class="opciones">
        <label><input type="checkbox" name="intereses" value="tecnologia"/> Me gusta construir y arreglar objetos </label>
        <label><input type="checkbox" name="intereses" value="deporte"/> Me interesa crear programas o aplicaciones</label>
        <label><input type="checkbox" name="intereses" value="musica"/> Considero mejor salida laboral</label>
        <label><input type="checkbox" name="intereses" value="viajes"/> Me atrae la parte practica del taller</label>
        <label><input type="checkbox" name="intereses" value="viajes"/> Me atrae la parte intelectual y creativa del codigo</label>
      </div>
    </div>

    
        <div class="campo">
      <label><strong>¿Te gustaria participar de una charla informativa para conocer mejor cada tecnicatura?</strong></label>
      <div class="opciones">
        <label><input type="checkbox" name="intereses" value="tecnologia"/> Si </label>
        <label><input type="checkbox" name="intereses" value="deporte"/> No</label>
        <label><input type="checkbox" name="intereses" value="musica"/> Tal vez</label>
     </div>
    </div>

    <button type="submit">Enviar</button>

  </form>
  </>
  
  );
};

export default Formulario_preg;


