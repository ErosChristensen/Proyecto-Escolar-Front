import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
{/*import Noticias_Inicio from './components/Noticias_Inicio'*/}
import Footer from './components/Footer'
import Header_Inicio from './components/Header_Inicio'



function App() {
  return (
    <>
    <div className=''>
    {/*   <Header_Inicio />*/}  
      <Noticias_Inicio /> 
      <Footer />
     
    </div>
    
    </>
  )
}

export default App
