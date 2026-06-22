import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AddCourse from './components/AddCourse'
import ShowCourse from './components/ShowCourse'
import EditCourse from './components/EditCourse'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<AddCourse/>} />
        <Route path='/:id' element={<ShowCourse/>} />
        <Route path='/edit/:id' element={<EditCourse/>} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
