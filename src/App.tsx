import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/_main.scss'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/vans/Vans'


import "./server"
import VanDetails from './pages/vans/VandDetails'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/host/Dashboard'
import { Income } from './pages/host/Income'
import { Reviews } from './pages/host/Reviews'
import LayouHost from './components/LayoutHost'



export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path='host' element={<LayouHost />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}