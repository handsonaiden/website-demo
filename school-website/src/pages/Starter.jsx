import { Link } from 'react-router-dom'

function Starter() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <div style={styles.header}>
        <h1 style={styles.title}>Starter Package</h1>
        <p style={styles.tagline}>&quot;Basic Presence&quot;</p>
        <p style={styles.description}>
          For small schools that just need a professional online presence.
        </p>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What&apos;s Included</h2>
          <ul style={styles.checklist}>
            {[
              'Up to 5 pages (Home, About, Admissions, Contact, Gallery)',
              'Mobile-responsive design',
              'School logo and branding integration',
              'Contact form',
              'Basic SEO setup (titles, meta descriptions)',
              '1 round of revisions',
              'Domain + hosting setup assistance (client pays hosting/domain fees)'
            ].map((item, i) => (
              <li key={i} style={styles.checkItem}>✓ {item}</li>
            ))}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Not Included</h2>
          <div style={styles.alertBox}>
            <p>CMS access, blog, custom features, ongoing maintenance</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Turnaround Time</h2>
          <p style={styles.infoBox}>~1-2 weeks</p>
        </section>

        <div style={styles.actionBox}>
          <Link to="/basic" style={styles.backLink}>← Back to Basic demo site</Link>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid var(--border)'
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--accent)',
    marginBottom: '0.5rem'
  },
  tagline: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: 'var(--muted-foreground)',
    marginBottom: '1rem'
  },
  description: {
    color: 'var(--muted-foreground)',
    fontSize: '1.1rem'
  },
  content: {
    background: '#fff',
    borderRadius: 'var(--radius)',
    padding: '2rem',
    boxShadow: 'var(--shadow-card)'
  },
  section: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: 'var(--foreground)',
    marginBottom: '1rem'
  },
  checklist: {
    listStyle: 'none'
  },
  checkItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid var(--surface)'
  },
  alertBox: {
    background: 'color-mix(in oklab, var(--gold) 18%, #fff)',
    border: '1px solid var(--gold)',
    padding: '1rem',
    borderRadius: 'calc(var(--radius) - 0.25rem)'
  },
  infoBox: {
    background: 'color-mix(in oklab, var(--accent) 16%, #fff)',
    padding: '1rem',
    borderRadius: 'calc(var(--radius) - 0.25rem)',
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'var(--primary-soft)'
  },
  actionBox: {
    marginTop: '2rem',
    textAlign: 'center'
  },
  backLink: {
    color: 'var(--accent)',
    fontSize: '1rem'
  }
}

export default Starter
