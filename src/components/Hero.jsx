
import React from 'react'
import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Yatra Desert Camp" />
      <div className="overlay"></div>
      <div className="content">
        <h1>Yatra Desert Camp & Resort</h1>
        <p>Experience authentic Rajasthani hospitality under the starlit desert sky</p>
      </div>
    </section>
  )
}
