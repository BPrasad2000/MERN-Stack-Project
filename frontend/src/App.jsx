import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contactus from './Components/pages/Contactus'
import Policy from './Components/pages/Policy'
import Pagenotfound from './Components/pages/Pagenotfound'


function App() {


  return (
    <>
     <React.Fragment>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path="/policy" element={<Policy/>}/>
      <Route path="*" element={<Pagenotfound/>}/>

    </Routes>
   </React.Fragment> 

    </>
  ) 
}

export default App
