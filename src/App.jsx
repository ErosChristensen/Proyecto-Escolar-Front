import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Header
import Header from './components/Header'

//Nav
import Nav from './components/Nav'

//Inicio
import Inicio_Principal from './components/Inicio_Principal'
import Inicio_Modalidades from './components/Inicio_Modalidades'
import Inicio_Talleres from './components/Inicio_Talleres'
import Inicio_Banner from './components/Inicio_Banner'  
import Inicio_Preguntas from './components/Inicio_Preguntas'

//Noticias
import Noticias_Inicio from './components/Noticias_Inicio'
import Noticias_Contenido from './components/Noticias_Contenido'
import Noticias_elegida from './components/Noticias_elegida'
import Ultimas_Novedades from './components/Inicio_Novedades' 

//Footer
import Footer from './components/Footer'

function App() {
  return (
    <>
    
    <div className=''>
      < Header/>
      <Inicio_Principal />
      <Ultimas_Novedades />
      <Inicio_Modalidades />
      <Inicio_Talleres />
      <Inicio_Banner />
      <Inicio_Preguntas />
      <Footer />
     </div>

     
    
    </>
  )
}

export default App
