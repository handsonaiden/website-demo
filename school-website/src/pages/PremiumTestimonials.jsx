import { Link } from 'react-router-dom'

const testimonials = [
  {
    name: 'Sarah & David Okonkwo',
    role: 'Parents of two',
    quote: 'Greenfield has been a second home for our children. The teachers genuinely care, and our kids have thrived both academically and socially. We couldn\'t have asked for a better school.',
    rating: 5
  },
  {
    name: 'Dr. Amina Yusuf',
    role: 'Parent of Grade 8 student',
    quote: 'The STEM program here is outstanding. My daughter developed a passion for robotics that has opened up incredible opportunities. The facilities are world-class.',
    rating: 5
  },
  {
    name: 'James & Lydia Mwangi',
    role: 'Parents of Grade 5 student',
    quote: 'Moving to Greenfield was the best decision we made. The transition support was seamless, and our son went from being nervous to absolutely loving school within weeks.',
    rating: 5
  },
  {
    name: 'Grace Wanjiku',
    role: 'Alumni, Class of 2020',
    quote: 'Greenfield prepared me not just for university but for life. The values, the relationships, and the experiences I gained there continue to shape who I am today.',
    rating: 5
  },
  {
    name: 'Robert & Faith Njeri',
    role: 'Parents of three',
    quote: 'Having three kids at Greenfield, each with different strengths, I\'m impressed by how the school adapts to each child. The individual attention makes all the difference.',
    rating: 5
  },
  {
    name: 'Mr. Patrick Otieno',
    role: 'Parent of Grade 11 student',
    quote: 'The university counseling team guided our son through the entire application process. He received offers from three top universities — we are so grateful.',
    rating: 5
  }
]

const stats = [
  { number: '98%', label: 'Parent Satisfaction' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '500+', label: 'Alumni Worldwide' },
  { number: '95%', label: 'Would Recommend' }
]

function PremiumTestimonials() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>Testimonials</h1>
        <p style={styles.pageSubtitle}>Hear from our community of parents, students, and alumni</p>
      </section>

      <section style={styles.statsRow} className="schoolweb-responsive-4">
        {stats.map(stat => (
          <div key={stat.label} style={styles.statCard}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      <section style={styles.testimonials}>
        <div style={styles.testimonialGrid}>
          {testimonials.map(t => (
            <div key={t.name} style={styles.testimonialCard}>
              <div style={styles.quoteIcon}>&quot;</div>
              <p style={styles.quote}>{t.quote}</p>
              <div style={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={styles.star}>⭐</span>
                ))}
              </div>
              <div style={styles.author}>
                <div style={styles.avatar}>
                  {t.name.split(' ').filter(n => !['&'].includes(n)).map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h4 style={styles.authorName}>{t.name}</h4>
                  <p style={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.cta} className="schoolweb-cta">
        <h2 style={styles.ctaTitle}>Ready to Experience Greenfield?</h2>
        <p style={styles.ctaText}>
          Schedule a campus tour and see firsthand what makes our community so special.
        </p>
        <Link className="schoolweb-button" to="/premium/contact" style={styles.ctaButton}>Get in Touch</Link>
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
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' },
  statCard: { background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-card)' },
  statNumber: { fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--accent)' },
  statLabel: { fontSize: '0.85rem', color: 'var(--muted-foreground)', marginTop: '0.25rem' },
  testimonials: { marginBottom: '3rem' },
  testimonialGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' },
  testimonialCard: { background: '#fff', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', position: 'relative' },
  quoteIcon: { fontSize: '4rem', color: 'color-mix(in oklab, var(--accent) 14%, #fff)', position: 'absolute', top: '0.5rem', left: '1.5rem', lineHeight: 1, fontWeight: 'bold' },
  quote: { fontSize: '0.95rem', color: 'var(--foreground)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem', marginTop: '1.5rem', position: 'relative' },
  stars: { marginBottom: '1rem' },
  star: { fontSize: '0.85rem' },
  author: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  avatar: { width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold', flexShrink: 0 },
  authorName: { fontSize: '0.92rem', color: 'var(--primary)', marginBottom: '0.1rem' },
  authorRole: { fontSize: '0.8rem', color: 'var(--muted-foreground)' },
  cta: { background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary) 100%)', color: '#fff', padding: '3rem 2rem', borderRadius: 'var(--radius)', textAlign: 'center', marginBottom: '2rem' },
  ctaTitle: { fontSize: '2rem', marginBottom: '1rem' },
  ctaText: { fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' },
  ctaButton: { display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--gold)', color: 'var(--primary)', borderRadius: 'var(--radius)', fontWeight: 'bold', textDecoration: 'none' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumTestimonials
