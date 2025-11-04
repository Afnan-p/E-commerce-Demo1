import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Header } from './components/Header'
import Prodect from './components/Prodect' 
// import Cart from './components/Cart' 
import { Route , Routes } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Prodect/>}/> 
      {/* <Route path='/cart' element={<Cart/>}/>  */}

      
     </Routes>
    </>
  )
}

export default App
