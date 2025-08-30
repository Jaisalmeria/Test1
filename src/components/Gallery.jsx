
// Import all photos (handles upper/lower case) as URL strings
const modules = import.meta.glob(
  '../assets/photos/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
  { eager: true, as: 'url' }
)
const images = Object.values(modules).sort()

export default function Gallery() {
  if (!images.length) return null
  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 style={{marginBottom:12}}>Gallery</h2>
        <div className="grid">
          {images.map((src, i) => (
            <div key={i} className="card">
              <img src={src} alt={`Yatra Desert Camp photo ${i+1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
