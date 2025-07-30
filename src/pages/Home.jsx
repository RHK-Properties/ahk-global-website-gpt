
import React from 'react'

export default function Home() {
  return (
    <section className="text-center py-12 bg-gradient-to-r from-blue-100 to-blue-50">
      <h2 className="text-4xl font-extrabold">Your Global Back-Office Partner</h2>
      <p className="mt-4 text-xl text-gray-700">
        From Lahore to the world – empowering businesses with cutting-edge technology,
        creative excellence, and end-to-end operational support.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="/services" className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-600">Explore Our Services</a>
        <a href="/careers" className="px-6 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-100">Join Our Team</a>
      </div>
    </section>
  )
}
