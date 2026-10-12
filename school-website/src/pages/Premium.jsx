import { Link } from 'react-router-dom'

function Premium() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <div style={styles.header}>
        <h1 style={styles.title}>Premium Package</h1>
        <p style={styles.tagline}>&quot;Full-Service School Platform&quot;</p>
        <p style={styles.description}>
          For schools that want a comprehensive digital presence with functional tools, not just information.
        </p>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Everything in Standard, plus:</h2>
          <ul style={styles.checklist}>
            {[
              'Unlimited core pages',
              'Online admissions/enquiry form with document upload',
              'Staff/parent portal login (basic — announcements, downloads)',
              'Events calendar with RSVP or registration',
              'Multi-language support (if needed)',
              'Custom design (not template-based)',
              'Advanced SEO (structured data, sitemap, analytics setup)',
              '3 rounds of revisions',
              'Priority support',
              '6–12 months of maintenance and hosting management included'
            ].map((item, i) => (
              <li key={i} style={styles.checkItem}>✓ {item}</li>
            ))}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Turnaround Time</h2>
          <p style={styles.infoBox}>~6-8 weeks</p>
        </section>

        <div style={styles.actionBox}>
          <Link to="/premium" style={styles.backLink}>← Back to Premium demo site</Link>
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
  infoBox: {
    background: 'color-mix(in oklab, var(--accent) 14%, #fff)',
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

export default Premium
