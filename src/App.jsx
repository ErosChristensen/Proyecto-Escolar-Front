import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Scrollear_Ventana_Arriba from "./components/Window_Scroll";

//Inicio
import Inicio_Principal from './components/Inicio_Principal'
import Inicio_Novedades from './components/Inicio_Novedades'
import Inicio_Talleres from './components/Inicio_Talleres'
import Inicio_Modalidades from './components/Inicio_Modalidades'
import Inicio_Banner from './components/Inicio_Banner'
import Inicio_Preguntas from './components/Inicio_Preguntas'
import Aviso from './components/aviso'

//Noticias
import Noticias_Inicio from './components/Noticias_Inicio'
import Formulario_validacion from './components/Formulario_validacion.jsx'
import Formulario_preg from './components/Formulario_preg.jsx'
import Formulario_verif from './components/Formulario_verificacionEmail.jsx'
//Modalidades
import Modalidad from './components/Modalidad.jsx'
//Institucion
import Institucion from './components/institucion'

import Login from './components/login.jsx'
import Admin_Incio from "./components/Admin_Inicio";
import Admin_Noticias from "./components/Admin_Noticias.jsx";
import Admin_Modalidades from "./components/Admin_Modalidades.jsx";
function App() {
  return (
    <Router>
      <Scrollear_Ventana_Arriba />
      <Header />
      <Routes>

        <Route path="/" element={
          <>

            <Inicio_Principal />
            <Aviso />
            <Inicio_Novedades />
            <Inicio_Modalidades />
            <Inicio_Talleres />
            <Inicio_Banner />
            <Inicio_Preguntas />
          </>
        } />

        <Route path="/noticias" element={<Noticias_Inicio />} />
        <Route path="/modalidad" element={<Modalidad />} />
        <Route path="/formulario" element={<Formulario_validacion />} />
        <Route path="/formulario-preg" element={<Formulario_preg />} />
        <Route path="/formulario-verif" element={<Formulario_verif />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/login" element={<Login />} />

        <Route path="/recuperar-contraseña" element={<Formulario_verif />} />
        <Route path="/admin-noticias" element={<Admin_Noticias />} />
        <Route path="/admin-inicio" element={<Admin_Incio />} />
        <Route path="/admin-modalidades" element={<Admin_Modalidades />} />
        <Route path="/aviso" element={<Aviso />} />
        <Route path="/modalidades" element={<Inicio_Modalidades />} />

      </Routes>

      <Footer />
    </Router>


  );
}

export default App;
