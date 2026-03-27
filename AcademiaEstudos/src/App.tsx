import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import _404 from './pages/_404';
import Courses from './pages/Courses';
import Methods from './pages/Methods';
import Exams from './pages/Exams';
import Contacts from './pages/Contacts';

function App() {




  

  return (
    <>
      <Routes>
        <Route path="*" element={<_404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
