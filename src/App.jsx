
import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AccommodationCategories from './components/AccommodationCategories.jsx'
import CommonGallery from './components/CommonGallery.jsx'
import Footer from './components/Footer.jsx'
import { CustomerForm, B2BForm } from './components/Forms.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <section className="section" id="stay">
          <div className="container">
            <h2 style={{marginBottom:12}}>Plan Your Stay</h2>
            <p style={{marginBottom:18, opacity:.85}}>Tell us your dates and preferences — we'll get back with availability and the best rates.</p>
            <CustomerForm />
          </div>
        </section>
        
        <AccommodationCategories />
        <CommonGallery />
        
        <section className="section" id="b2b" style={{background:'#fff3e6'}}>
          <div className="container">
            <h2 style={{marginBottom:12}}>B2B Partnership Inquiries</h2>
            <B2BForm />
          </div>
        </section>
        <section className="section" id="contact">
          <div className="container">
            <h2 style={{marginBottom:12}}>Contact</h2>
            <p>Email: <a href="mailto:yatradesertcamp@gmail.com">yatradesertcamp@gmail.com</a></p>
            <p>Phone/WhatsApp: <a href="https://wa.me/917737657595" target="_blank" rel="noreferrer">+91 77376 57595</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
