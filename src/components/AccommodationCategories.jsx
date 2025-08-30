
import React from 'react'

// Import tent photos by category
const deluxePhotos = import.meta.glob('../assets/photos/DELUXE NON AC/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', { eager: true })
const luxuryPhotos = import.meta.glob('../assets/photos/LUXURY AC/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', { eager: true })
const bathtubPhotos = import.meta.glob('../assets/photos/LUXURY WITH BATH TUB/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', { eager: true })
const poolPhotos = import.meta.glob('../assets/photos/LUXURY WITH POOL/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', { eager: true })

function TentCategory({ title, description, features, photos }) {
  const imageUrls = Object.values(photos).map(mod => mod.default)
  
  return (
    <div className="tent-category">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="features">
        {features.map((feature, idx) => (
          <span key={idx} className="feature-tag">{feature}</span>
        ))}
      </div>
      <div className="grid">
        {imageUrls.map((src, idx) => (
          <div key={idx} className="card">
            <img src={src} alt={`${title} ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AccommodationCategories() {
  return (
    <section className="section" id="accommodation">
      <div className="container">
        <h2 style={{textAlign:'center', marginBottom:40}}>Accommodation</h2>
        
        <TentCategory
          title="Deluxe Non-AC Tents"
          description="Comfortable desert tents with traditional charm and modern amenities. Perfect for those who want to experience the authentic desert atmosphere."
          features={['Queen Bed', 'Private Bathroom', 'Desert View', 'Traditional Decor', 'Fan Cooling']}
          photos={deluxePhotos}
        />
        
        <TentCategory
          title="Luxury AC Tents"
          description="Premium air-conditioned tents offering maximum comfort in the desert. Ideal for guests seeking luxury without compromising on the desert experience."
          features={['King Bed', 'Air Conditioning', 'Private Bathroom', 'Desert View', 'Modern Amenities']}
          photos={luxuryPhotos}
        />
        
        <TentCategory
          title="Luxury Tents with Bath Tub"
          description="Indulge in ultimate luxury with these premium tents featuring private bath tubs. Perfect for a romantic desert getaway."
          features={['King Bed', 'Air Conditioning', 'Private Bath Tub', 'Premium Bathroom', 'Luxury Amenities']}
          photos={bathtubPhotos}
        />
        
        <TentCategory
          title="Luxury Tents with Pool"
          description="The ultimate desert luxury experience with private pools. These exclusive tents offer the perfect blend of desert adventure and resort-style comfort."
          features={['King Bed', 'Private Pool', 'Air Conditioning', 'Premium Bathroom', 'Exclusive Location']}
          photos={poolPhotos}
        />
      </div>
    </section>
  )
}
