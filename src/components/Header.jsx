
import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <div className="container inner">
        <div className="brand">
          <img src={logo} alt="Yatra Desert Camp & Resort" />
          <strong>Yatra Desert Camp & Resort</strong>
        </div>
        <nav>
          <a href="#accommodation">Accommodation</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="#b2b">B2B</a>
        </nav>
        <a className="cta" href="#contact">Book Now</a>
      </div>
    </header>
  )
}
