import { Link } from 'react-router-dom'
import { unsplashPhotos } from '../data/unsplashPhotos'
import GoldMarquee from '../components/GoldMarquee'

const values = [
  { icon: '📖', title: 'Quality Learning', desc: 'A focused curriculum that builds strong foundations in every classroom.' },
  { icon: '🤝', title: 'Caring Community', desc: 'A welcoming, inclusive environment where every child is known and supported.' },
  { icon: '🌟', title: 'Character First', desc: 'We grow confident, kind and curious young people ready for what comes next.' },
]

function BasicHome() {
  return (
    <>
      <GoldMarquee />
      <div className="schoolweb-page">
      <section className="schoolweb-hero">
        <div style={styles.heroContent}>
          <span className="eyebrow">Est. 1985 · Nairobi, Kenya</span>
          <h1>Welcome to Greenfield International School</h1>
          <p>Empowering young minds for a brighter tomorrow through a warm, values-led education.</p>
          <div className="schoolweb-hero-actions" style={styles.heroButtons}>
            <Link className="btn-gold" to="/basic/about">Learn About Us</Link>
            <Link className="btn-ghost" to="/basic/contact">Contact Us</Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img
            src={unsplashPhotos.campus.src}
            onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/illustrations/campus.svg' }}
            alt="Students outside a school building"
            width="520"
            height="360"
            fetchPriority="high"
          />
          <a className="schoolweb-photo-credit" href={unsplashPhotos.campus.page} target="_blank" rel="noreferrer">
            Photo by {unsplashPhotos.campus.photographer} on Unsplash
          </a>
        </div>
      </section>

      <section className="schoolweb-feature-panel">
        <div style={styles.sectionContent}>
          <span className="eyebrow">About our school</span>
          <h2>A nurturing place to learn and grow</h2>
          <p className="body-large">
            Greenfield International School is a private K-12 institution committed to
            academic excellence, character development and inclusive learning.
          </p>
          <Link className="btn-outline" to="/basic/about">Learn More About Us</Link>
        </div>
      </section>

      <section>
        <div style={styles.sectionHead}>
          <span className="eyebrow eyebrow--center">What we stand for</span>
          <h2 style={styles.sectionTitle}>Our Promise to Families</h2>
        </div>
        <div style={styles.cardGrid}>
          {values.map(item => (
            <article className="schoolweb-surface" key={item.title} style={styles.card}>
              <div style={styles.cardIcon} aria-hidden="true">{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="schoolweb-cta">
        <span className="eyebrow eyebrow--center">Admissions open</span>
        <h2>Ready to Join Greenfield?</h2>
        <p>Admissions are now open for the upcoming academic year.</p>
        <Link className="schoolweb-button" to="/basic/contact">Get in Touch</Link>
      </section>
    </div>
    </>
  )
}

const styles = {
  heroContent: { flex: '1 1 380px' },
  heroButtons: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.9rem' },
  heroImage: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.55rem',
  },
  sectionContent: { maxWidth: '720px', margin: '0 auto', textAlign: 'center' },
  sectionHead: { textAlign: 'center', marginBottom: '2rem' },
  sectionTitle: { fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.35rem',
  },
  card: { textAlign: 'center' },
  cardIcon: { fontSize: '2.4rem', marginBottom: '0.6rem' },
  cardTitle: { fontSize: '1.2rem', marginBottom: '0.5rem' },
  cardDesc: { fontSize: '0.95rem', lineHeight: 1.65 },
}

export default BasicHome
