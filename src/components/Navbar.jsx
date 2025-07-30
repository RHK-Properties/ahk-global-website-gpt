
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold">AHK Global Solutions</h1>
      <nav className="flex gap-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/technology">Technology & Innovation</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
