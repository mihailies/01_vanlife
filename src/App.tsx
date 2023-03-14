import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/_main.scss'
import About from './pages/About'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Vans from './pages/Vans'
import React from 'react'

import "./server"



export default function App() {





  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}