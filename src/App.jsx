import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/navbar'
import Skills from './components/skills'
import Project from './components/portfolio'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/skills'element={<Skills/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App