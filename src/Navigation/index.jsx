import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Navigation() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/> 
        </Routes>
    </BrowserRouter>
  )
}
