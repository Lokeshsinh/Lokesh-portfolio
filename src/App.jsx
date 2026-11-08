import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Cursor from './Cursor'

function App() {
  return (
    <>
      <BrowserRouter>
        <Cursor />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
