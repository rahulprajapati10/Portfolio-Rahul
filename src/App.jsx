import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Project from './Routes/Project'
import Contact from './Routes/Contact'
import Skills from './Routes/Skills'
import Scroll from './Routes/Scroll'




const App = () => {
  return (
    <>

      <BrowserRouter>
      <Scroll/>
       <Routes>
        <Route  path='/' element={<Home/>} ></Route>
        <Route  path='/home' element={<Home/>} ></Route>
        <Route  path='/project' element={<Project/>} ></Route>
        <Route  path='/about' element={<About/>} ></Route>
        <Route  path='/skills' element={<Skills/>} ></Route>
        <Route  path='/contact' element={<Contact/>} ></Route>

       </Routes>
      </BrowserRouter>

      {/* <h1>this is our </h1> */}
    </>
  )
}

export default App

