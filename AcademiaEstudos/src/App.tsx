import { Route, Routes } from 'react-router-dom';
//import { useState, useEffect } from 'react'
import './css/index.css'
import Home from './pages/Home';
import _404 from './pages/_404';
import Courses from './pages/Courses';
import Methods from './pages/Methods';
import Exams from './pages/Exams';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/footer';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>

      <Routes>
        <Route path="*" element={<_404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/metodologia" element={<Methods />} />
        <Route path="/exames" element={<Exams />} />
        <Route path="/contacto" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
