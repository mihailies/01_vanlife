import {
  BrowserRouter, Routes, Route,
  RouterProvider, createBrowserRouter, createRoutesFromElements, redirect
} from 'react-router-dom'
import './style/_main.scss'
import About from './pages/About'
import Home from './pages/Home'
import Vans, { loader as vansLoader } from './pages/vans/Vans'


import "./server"
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VandDetail'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/host/Dashboard'
import { Income } from './pages/host/Income'
import { Reviews } from './pages/host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanDetail, { loader as hostVandDetailsLoader } from './pages/host/HostVanDetail'
import Error from './components/Error'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import NotFound404 from './pages/NotFound404'
import { Login, loader as loginLoader, action as loginAction } from './pages/Login'
import { requireAuth } from './util'

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
        <Route path='vans' element={<Vans />}
          loader={vansLoader} />
        <Route path='vans/:id' element={<VanDetail />}
          loader={vanDetailLoader} />

        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route path='income' element={<Income />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route path='reviews' element={<Reviews />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route path='vans' element={<HostVans />}
            loader={hostVansLoader} />

          <Route path='vans/:id' element={<HostVanDetail />}
            loader={hostVandDetailsLoader} >
            <Route index element={<HostVanInfo />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route path="pricing" element={<HostVanPricing />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route path="photos" element={<HostVanPhotos />}
              loader={async ({ request }) => await requireAuth(request)}
            />
          </Route>
        </Route>
        <Route path='*' element={<NotFound404 />} />
      </Route>
    </Route>
  ));


  return <RouterProvider router={router} />;

}