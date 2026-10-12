import { Link } from 'react-router-dom'
import { unsplashPhotos } from '../data/unsplashPhotos'
import PhotoCarousel from '../components/PhotoCarousel'
import GoldMarquee from '../components/GoldMarquee'

const heroPhotos = [
  { ...unsplashPhotos.campus, alt: 'Students outside a school building' },
  { ...unsplashPhotos.classroom, alt: 'A teacher presenting to students in a classroom' },
  { ...unsplashPhotos.field, alt: 'Students watching a soccer game on the school field' },
  { ...unsplashPhotos.library, alt: 'Students studying at tables in the library' },
]

const highlights = [
  {
    icon: '📚',
    title: 'Strong Academics',
    desc: 'An accredited curriculum delivered by experienced educators and modern teaching methods.',
  },
  {
    icon: '🔬',
    title: 'State-of-the-Art Facilities',
    desc: 'Science labs, computer suites, sports fields, a library and a modern auditorium.',
  },
  {
    icon: '🎨',
    title: 'Rich Extracurriculars',
    desc: 'Sports, music, drama, debate, robotics and community service programs.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Active Community',
    desc: 'A supportive parent-teacher association and regular community events.',
  },
]

function StandardHome() {
  return (
    <>
      <GoldMarquee />
      <div className="schoolweb-page">
      <section className="schoolweb-hero">
        <div style={styles.heroContent}>
          <span className="eyebrow">Est. 1985 · Nairobi, Kenya</span>
          <h1>Welcome to Greenfield International School</h1>
          <p>
            Empowering young minds for a brighter tomorrow through a world-class,
            values-led education for every student.
          </p>
          <div className="schoolweb-hero-actions" style={styles.heroButtons}>
            <Link className="btn-gold" to="/standard/academics">Explore Academics</Link>
            <Link className="btn-ghost" to="/standard/contact">Contact Us</Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <PhotoCarousel
            photos={heroPhotos}
            alt="Students around the Greenfield campus"
            fallback="/illustrations/campus.svg"
          />
        </div>
      </section>

      <section className="schoolweb-feature-panel">
        <div style={styles.sectionContent}>
          <span className="eyebrow">About our school</span>
          <h2>Nurturing curious, capable, compassionate learners</h2>
          <p className="body-large">
            Greenfield International School is a private K-12 institution committed to
            academic excellence, character development and inclusive learning. We offer a
            well-rounded curriculum, modern facilities and a supportive community that
            prepares students for success in life.
          </p>
          <Link className="btn-outline" to="/standard/about">Learn More About Us</Link>
        </div>
      </section>

      <section>
        <div style={styles.sectionHead}>
          <span className="eyebrow eyebrow--center">Why families choose us</span>
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        </div>
        <div style={styles.cardGrid}>
          {highlights.map(item => (
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
        <p>
          Admissions are now open for the upcoming academic year. Schedule a campus tour today.
        </p>
        <Link className="schoolweb-button" to="/standard/contact">Apply for Admission</Link>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '1.35rem',
  },
  card: { textAlign: 'center' },
  cardIcon: { fontSize: '2.4rem', marginBottom: '0.6rem' },
  cardTitle: { fontSize: '1.2rem', marginBottom: '0.5rem' },
  cardDesc: { fontSize: '0.95rem', lineHeight: 1.65 },
}

export default StandardHome
