import { Link } from 'react-router-dom'

function Standard() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <div style={styles.header}>
        <h1 style={styles.title}>Standard Package</h1>
        <p style={styles.tagline}>&quot;Interactive School Site&quot;</p>
        <p style={styles.description}>
          For schools wanting a manageable, content-rich site they can update themselves.
        </p>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Everything in Starter, plus:</h2>
          <ul style={styles.checklist}>
            {[
              'Up to 10-12 pages (adds: Academics, Staff Directory, News/Blog, Events Calendar, Downloads/Resources)',
              'Content Management System (CMS) so staff can edit text/images',
              'Photo gallery with categories (events, facilities, activities)',
              'News/announcements section',
              'Basic SEO + Google Business/Maps integration',
              '2 rounds of revisions',
              '1 training session for staff on using the CMS',
              '3 months of free minor support (bug fixes, small text edits)'
            ].map((item, i) => (
              <li key={i} style={styles.checkItem}>✓ {item}</li>
            ))}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Not Included</h2>
          <div style={styles.alertBox}>
            <p>Custom application features (e.g. online admissions portal, fee payment), multi-language support</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Turnaround Time</h2>
          <p style={styles.infoBox}>~3-4 weeks</p>
        </section>

        <div style={styles.actionBox}>
          <Link to="/standard" style={styles.backLink}>← Back to Standard demo site</Link>
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

export default Standard
