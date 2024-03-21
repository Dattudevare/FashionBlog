import React from 'react'
import Navabar from './Componenets/Navabar'
import Footer from './Componenets/Footer/Footer'
import Home from './Componenets/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detailss from './Componenets/Details/Detailss'



function App() {
  return (
    <div>

      <Navabar />

  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detailss' element={<Detailss />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  )
}

export default App