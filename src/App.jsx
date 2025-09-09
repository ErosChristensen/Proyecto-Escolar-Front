import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Noticias_Inicio from './components/Noticias_Inicio'
import Noticias_Contenido from './components/Noticias_Contenido'
import './App.css'
import Footer from './components/Footer'
import Inicio_Principal from './components/Inicio_Principal'
import Header_Inicio from './components/Header_Inicio'
import Ultimas_Novedades from './components/Inicio_Novedades' 
import Inicio_Modalidades from './components/Inicio_Modalidades'
import Inicio_Talleres from './components/Inicio_Talleres'
import Inicio_Banner from './components/Inicio_Banner'  
import Inicio_Preguntas from './components/Inicio_Preguntas'
import Nav from './components/Nav'

function App() {
  return (
    <>
    <div className=''>
      <Inicio_Principal/> 
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
