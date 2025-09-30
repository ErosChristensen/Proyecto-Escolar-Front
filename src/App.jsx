import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Scrollear_Ventana_Arriba from "./components/Window_Scroll";

//Inicio
import Inicio_Principal from './components/Inicio_Principal'
import Inicio_Novedades from './components/Inicio_Novedades'
import Inicio_Talleres from './components/Inicio_Talleres'
import Inicio_Banner from './components/Inicio_Banner'
import Inicio_Preguntas from './components/Inicio_Preguntas'

//Noticias
import Noticias_Inicio from './components/Noticias_Inicio'
import Formulario_validacion from './components/Formulario_validacion.jsx'
import Formulario_preg from './components/Formulario_preg.jsx'
import Formulario_verif from './components/Formulario_verificacionEmail.jsx'
//Modalidades
import Inicio_Modalidades from './components/Inicio_Modalidades'
<<<<<<< Updated upstream
=======
import Admin_Incio from "./components/Admin_Inicio";

//Institución
function Institucion() {
  return <div className="text-white p-10">Página de la Institución</div>;
}

>>>>>>> Stashed changes
function App() {
  return (
    <Router>
      <Scrollear_Ventana_Arriba />
      <Header />
      <Routes>
 
        <Route path="/" element={
          <>

            <Inicio_Principal />
            <Inicio_Novedades />
            <Inicio_Modalidades />
            <Inicio_Talleres />
            <Inicio_Banner />
            <Inicio_Preguntas />
          </>
        } />
 
        <Route path="/noticias" element={<Noticias_Inicio />} />
<<<<<<< Updated upstream
        <Route path="/formulario" element={<Formulario_validacion/>} />
        <Route path="/formulario-preg" element={<Formulario_preg />} />
        <Route path="/formulario-verif" element={<Formulario_verif />} />
=======
        
      <Route path="/admin" element={<Admin_Incio />} />
>>>>>>> Stashed changes
        <Route path="/modalidades" element={<Inicio_Modalidades />} />
        
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
