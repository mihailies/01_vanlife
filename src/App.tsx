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
import HostVans from './pages/host/HostVans'
import HostVanInfo from './pages/host/HostVanInfo'
import LayoutHostVanDetails from './components/LayoutHostVanDetails'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'



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
            <Route path='reviews' element={<Reviews />} />

            <Route path='vans' element={<HostVans />} />

            <Route path='vans/:id' element={<LayoutHostVanDetails />} >
              <Route path="info" element={<HostVanInfo/>} />
              <Route path="pricing" element={<HostVanPricing/>} />
              <Route path="photos" element={<HostVanPhotos/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}