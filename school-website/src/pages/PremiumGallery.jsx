import { useState } from 'react'
import { Link } from 'react-router-dom'
import { unsplashPhotos } from '../data/unsplashPhotos'

const categories = ['All', 'Events', 'Facilities', 'Students', 'Sports', 'Arts', 'STEM', 'Community']

const gallery = [
  { category: 'Events', title: 'Graduation Ceremony', image: "/illustrations/community-day.svg", photo: 'campus', color: 'var(--gold)' },
  { category: 'Facilities', title: 'New Science Laboratory', image: "/illustrations/science-lab.svg", photo: 'classroom', color: 'var(--accent)' },
  { category: 'Students', title: 'Classroom Activities', image: "/illustrations/classroom.svg", photo: 'classroom', color: 'var(--accent)' },
  { category: 'Sports', title: 'Football Practice', image: "/illustrations/sports-field.svg", photo: 'field', color: '#ef4444' },
  { category: 'Arts', title: 'Art Exhibition 2026', image: "/illustrations/arts-room.svg", photo: 'classroom', color: 'var(--accent)' },
  { category: 'Events', title: 'Parents\' Day Celebration', image: "/illustrations/community-day.svg", photo: 'campus', color: 'var(--gold)' },
  { category: 'Facilities', title: 'School Library', image: "/illustrations/library.svg", photo: 'library', color: 'var(--accent)' },
  { category: 'Students', title: 'Computer Lab Session', image: "/illustrations/classroom.svg", photo: 'classroom', color: 'var(--accent)' },
  { category: 'Sports', title: 'Basketball Match', image: "/illustrations/sports-field.svg", photo: 'basketball', color: '#ef4444' },
  { category: 'Arts', title: 'Drama Club Performance', image: "/illustrations/arts-room.svg", photo: 'classroom', color: 'var(--accent)' },
  { category: 'Events', title: 'STEM Fair', image: "/illustrations/science-lab.svg", photo: 'classroom', color: 'var(--gold)' },
  { category: 'Facilities', title: 'Playground', image: "/illustrations/sports-field.svg", photo: 'field', color: 'var(--accent)' },
  { category: 'STEM', title: 'Robotics Workshop', image: "/illustrations/science-lab.svg", photo: 'classroom', color: 'var(--sky)' },
  { category: 'STEM', title: '3D Printing Lab', image: "/illustrations/science-lab.svg", photo: 'classroom', color: 'var(--sky)' },
  { category: 'Community', title: 'Community Service Day', image: "/illustrations/community-day.svg", photo: 'campus', color: 'var(--accent)' },
  { category: 'Community', title: 'PTA Fundraiser', image: "/illustrations/community-day.svg", photo: 'campus', color: 'var(--accent)' },
  { category: 'Students', title: 'Science Project', image: "/illustrations/science-lab.svg", photo: 'classroom', color: 'var(--accent)' },
  { category: 'Sports', title: 'Athletics Day', image: "/illustrations/sports-field.svg", photo: 'field', color: '#ef4444' }
]

function PremiumGallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? gallery : gallery.filter(item => item.category === active)

  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>Photo Gallery</h1>
        <p style={styles.pageSubtitle}>A glimpse into life at Greenfield International School</p>
      </section>

      <section style={styles.filters}>
        <div style={styles.filterButtons}>
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              aria-pressed={active === cat}
              className="schoolweb-filter-button"
              onClick={() => setActive(cat)}
              style={{
                ...styles.filterBtn,
                ...(active === cat ? styles.filterBtnActive : {})
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section style={styles.grid} className="schoolweb-gallery-grid">
        {filtered.map(item => (
          <div key={item.title} style={styles.galleryCard}>
            <div style={{ ...styles.thumbnail, background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)` }}>
              <img src={unsplashPhotos[item.photo].src} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = item.image }} alt={item.title} loading="lazy" decoding="async" width="640" height="420" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={styles.caption}>{item.title}</p>
            <a className="schoolweb-photo-credit" href={unsplashPhotos[item.photo].page} target="_blank" rel="noreferrer">Photo by {unsplashPhotos[item.photo].photographer} on Unsplash</a>
            <span style={styles.categoryTag}>{item.category}</span>
          </div>
        ))}
      </section>

      <div style={styles.backNav}>
        <Link to="/premium" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  badge: { display: 'inline-block', background: 'var(--gold)', color: 'var(--primary)', padding: '0.25rem 0.7rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.75rem' },
  pageTitle: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: 'var(--muted-foreground)' },
  filters: { marginBottom: '2rem', textAlign: 'center' },
  filterButtons: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' },
  filterBtn: {
    padding: '0.5rem 1.25rem', border: '2px solid var(--border)', background: '#fff',
    borderRadius: 'var(--radius-pill)', fontSize: '0.9rem', cursor: 'pointer', color: 'var(--muted-foreground)'
  },
  filterBtnActive: { background: 'var(--accent)', border: '2px solid var(--accent)', color: '#fff' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' },
  galleryCard: { background: '#fff', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' },
  thumbnail: { height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  placeholderIcon: { fontSize: '2.5rem' },
  caption: { padding: '0.75rem 0.75rem 0.25rem', fontSize: '0.92rem', color: 'var(--foreground)', textAlign: 'center' },
  categoryTag: { display: 'block', textAlign: 'center', padding: '0 0.75rem 0.75rem', fontSize: '0.78rem', color: 'var(--muted-foreground)' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumGallery
