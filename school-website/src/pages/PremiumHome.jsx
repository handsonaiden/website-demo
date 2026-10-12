import { Link } from 'react-router-dom'
import { unsplashPhotos } from '../data/unsplashPhotos'
import PhotoCarousel from '../components/PhotoCarousel'
import GoldMarquee from '../components/GoldMarquee'

const heroPhotos = [
  { ...unsplashPhotos.campus, alt: 'Students outside a school building' },
  { ...unsplashPhotos.classroom, alt: 'A teacher presenting to students in a classroom' },
  { ...unsplashPhotos.field, alt: 'Students watching a soccer game on the school field' },
  { ...unsplashPhotos.basketball, alt: 'Students practising on the school basketball court' },
  { ...unsplashPhotos.library, alt: 'Students studying at tables in the library' },
]

const stats = [
  { number: '800+', label: 'Students' },
  { number: '60+', label: 'Teachers' },
  { number: '40+', label: 'Years' },
  { number: '98%', label: 'Pass Rate' },
]

const highlights = [
  { icon: '📚', title: 'Strong Academics', desc: 'An accredited curriculum led by experienced educators and modern teaching methods.' },
  { icon: '🔬', title: 'State-of-the-Art Facilities', desc: 'Science labs, computer suites, sports fields, a library and a modern auditorium.' },
  { icon: '🎨', title: 'Rich Extracurriculars', desc: 'Sports, music, drama, debate, robotics and community service programs.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Active Community', desc: 'A supportive parent-teacher association and regular community events.' },
  { icon: '🌐', title: 'Multi-Language Support', desc: 'English, French and Swahili programs for genuine global preparedness.' },
  { icon: '💻', title: 'Digital Learning', desc: 'One-to-one device programs, an online portal and virtual classrooms.' },
]

const events = [
  { date: 'Oct 17', title: 'Annual Sports Day', time: '9:00 AM' },
  { date: 'Oct 24', title: 'Open Day & Campus Tour', time: '5:00 PM' },
  { date: 'Nov 7', title: 'STEM Fair 2026', time: '9:00 AM' },
]

function PremiumHome() {
  return (
    <>
      <GoldMarquee />
      <div className="schoolweb-page">
      <section className="schoolweb-hero">
        <div style={styles.heroContent}>
          <span className="eyebrow">Premium experience · Estate 1985</span>
          <h1>Welcome to Greenfield International School</h1>
          <p>
            A future-ready international education, blending academic excellence with
            character, creativity and global citizenship.
          </p>
          <div className="schoolweb-hero-actions" style={styles.heroButtons}>
            <Link className="btn-gold" to="/premium/academics">Explore Academics</Link>
            <Link className="btn-ghost" to="/premium/contact">Contact Us</Link>
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

      <section className="schoolweb-responsive-4" style={styles.stats}>
        {stats.map(stat => (
          <div className="schoolweb-surface" key={stat.label} style={styles.statCard}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="schoolweb-feature-panel">
        <div style={styles.sectionContent}>
          <span className="eyebrow">About our school</span>
          <h2>An education designed for a changing world</h2>
          <p className="body-large">
            Greenfield International School is a private K-12 institution committed to
            academic excellence, character development and inclusive learning. We offer a
            well-rounded curriculum, modern facilities and a supportive community that
            prepares students for success in life.
          </p>
          <Link className="btn-outline" to="/premium/about">Learn More About Us</Link>
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

      <section style={styles.events}>
        <div style={styles.sectionHead}>
          <span className="eyebrow eyebrow--center">Save the date</span>
          <h2 style={styles.sectionTitle}>Upcoming Events</h2>
        </div>
        <div style={styles.eventsList}>
          {events.map(event => (
            <div className="schoolweb-surface" key={event.title} style={styles.eventItem}>
              <div style={styles.eventDate}>{event.date}</div>
              <div>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventTime}>🕐 {event.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link className="btn-outline" to="/premium/events">View All Events</Link>
        </div>
      </section>

      <section className="schoolweb-cta">
        <span className="eyebrow eyebrow--center">Admissions open</span>
        <h2>Ready to Join Greenfield?</h2>
        <p>
          Admissions are now open for the upcoming academic year. Schedule a campus tour today.
        </p>
        <Link className="schoolweb-button" to="/premium/contact">Apply for Admission</Link>
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
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '1.25rem',
  },
  statCard: { textAlign: 'center', padding: '1.5rem 1rem' },
  statNumber: {
    fontFamily: 'var(--font-display)',
    fontSize: '2.1rem',
    fontWeight: 700,
    color: 'var(--primary)',
  },
  statLabel: { marginTop: '0.25rem', fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  sectionContent: { maxWidth: '720px', margin: '0 auto', textAlign: 'center' },
  sectionHead: { textAlign: 'center', marginBottom: '2rem' },
  sectionTitle: { fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.35rem',
  },
  card: { textAlign: 'center' },
  cardIcon: { fontSize: '2.4rem', marginBottom: '0.6rem' },
  cardTitle: { fontSize: '1.15rem', marginBottom: '0.5rem' },
  cardDesc: { fontSize: '0.95rem', lineHeight: 1.65 },
  events: {},
  eventsList: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  eventItem: { display: 'flex', alignItems: 'center', gap: '1.4rem', padding: '1.1rem 1.4rem' },
  eventDate: {
    padding: '0.5rem 0.9rem',
    borderRadius: 'var(--radius)',
    fontFamily: 'var(--font-button)',
    fontWeight: 600,
    fontSize: '0.85rem',
    color: 'var(--primary-foreground)',
    background: 'var(--primary)',
    minWidth: '72px',
    textAlign: 'center',
  },
  eventTitle: { fontSize: '1.05rem', marginBottom: '0.25rem' },
  eventTime: { fontSize: '0.85rem' },
}

export default PremiumHome
