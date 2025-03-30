
import React from 'react'
import './App.css'
import Home from './Components/Home'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './Components/login'  
import Signup from './Components/signup'



function App() {


  return (
  <>
      <Router>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        
          </Routes>
      </Router>
      </>
  )
}

export default App
