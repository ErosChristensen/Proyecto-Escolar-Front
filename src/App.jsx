import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Noticias_Inicio from './components/Noticias_Inicio'
import Noticias_Contenido from './components/Noticias_Contenido'
import './App.css'

function App() {
  return (
    <>
    <div className=''>
      <Noticias_Inicio />
      <Noticias_Contenido />
    </div>
    </>
  )
}

export default App
