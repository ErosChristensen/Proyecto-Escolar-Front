import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

//Inicio
import Inicio_Principal from './components/Inicio_Principal'
import Inicio_Novedades from './components/Inicio_Novedades'
import Inicio_Talleres from './components/Inicio_Talleres'
import Inicio_Banner from './components/Inicio_Banner'
import Inicio_Preguntas from './components/Inicio_Preguntas'

//Noticias
import Noticias_Inicio from './components/Noticias_Inicio'

//Modalidades
import Inicio_Modalidades from './components/Inicio_Modalidades'

//Institución
function Institucion() {
  return <div className="text-white p-10">Página de la Institución</div>;
}

function App() {
  return (
    <Router>
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
        
 
        <Route path="/modalidades" element={<Inicio_Modalidades />} />
        
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
