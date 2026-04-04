import { Route, Routes } from 'react-router-dom';
import './css/index.css'
import Home from './pages/Home';
import _404 from './pages/_404';
import Courses from './pages/Courses';
import Methods from './pages/Methods';
import Exams from './pages/Exams';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnoucementTicker from './components/AnnouncementTicker'
import methodologyCardsData from './data/methodologyCards.json';
import timetableData from './data/timetable.json';
import { useState } from 'react';

function App() {

  const [methodologyCards] = useState(methodologyCardsData);
  const [timetable] = useState(timetableData);

  return (
    <>
      <AnnoucementTicker></AnnoucementTicker>
      <Navbar></Navbar>

      <Routes>
        <Route path="*" element={<_404 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/metodologia" element={<Methods
          methodologyCards={methodologyCards}
          timetable={timetable} />} />
        <Route path="/exames" element={<Exams />} />
        <Route path="/contacto" element={<Contacts />} />
      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
