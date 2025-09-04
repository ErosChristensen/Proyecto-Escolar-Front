import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Noticias_Inicio from './components/Noticias_Inicio'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div>
      <Noticias_Inicio />
      <Footer />
    </div>
    </>
  )
}

export default App
