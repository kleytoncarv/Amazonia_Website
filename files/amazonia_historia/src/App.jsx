import React from 'react'
import './App.css'
import Logo from './components/logo'
import Home from './pages/Home'
import Historia from './pages/Historia'
import Navegation from './components/navegation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 

  return (

    <Router>
          
      <Navegation />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/historia' element={<Historia />} />

        </Routes>
    </Router>

    
  )
}

export default App
