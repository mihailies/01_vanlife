import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/_main.scss'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <div className="App">        
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
