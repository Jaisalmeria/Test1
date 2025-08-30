
import React from 'react'

// Import common area photos
const commonPhotos = import.meta.glob('../assets/photos/COMMON/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', { eager: true })

export default function CommonGallery() {
  const imageUrls = Object.values(commonPhotos).map(mod => mod.default)
  
  return (
    <section className="section" id="gallery" style={{background:'#f8f7f5'}}>
      <div className="container">
        <h2 style={{textAlign:'center', marginBottom:24}}>Camp Facilities & Common Areas</h2>
        <p style={{textAlign:'center', marginBottom:32, opacity:.85}}>
          Explore our beautiful common areas, dining spaces, and camp facilities
        </p>
        <div className="grid">
          {imageUrls.map((src, idx) => (
            <div key={idx} className="card">
              <img src={src} alt={`Camp facility ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
