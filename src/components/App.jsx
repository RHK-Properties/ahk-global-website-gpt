
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Technology from '../pages/Technology'
import Careers from '../pages/Careers'
import Contact from '../pages/Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
