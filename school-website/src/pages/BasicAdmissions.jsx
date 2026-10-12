import { Link } from 'react-router-dom'

function BasicAdmissions() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <h1 style={styles.pageTitle}>Admissions</h1>
        <p style={styles.pageSubtitle}>Join the Greenfield International School family</p>
      </section>

      <section style={styles.intro}>
        <div style={styles.introContent}>
          <p style={styles.lead}>
            We welcome applications from families who share our commitment to academic
            excellence and character development. Our admissions process is designed to
            be straightforward and supportive.
          </p>
        </div>
      </section>

      <section style={styles.process}>
        <h2 style={styles.sectionTitle}>How to Apply</h2>
        <div style={styles.steps}>
          {[
            { step: '1', title: 'Submit Application', desc: 'Complete and submit an application form with the required documents. Contact admissions for the form and submission details.' },
            { step: '2', title: 'Schedule a Visit', desc: 'We invite families to tour our campus and meet with our admissions team.' },
            { step: '3', title: 'Assessment', desc: 'Students complete a brief age-appropriate assessment to help us understand their needs.' },
            { step: '4', title: 'Enrollment', desc: 'Successful applicants receive an offer letter and can complete the enrollment process.' }
          ].map(item => (
            <div key={item.step} style={styles.stepCard}>
              <div style={styles.stepNumber}>{item.step}</div>
              <div style={styles.stepInfo}>
                <h3 style={styles.stepTitle}>{item.title}</h3>
                <p style={styles.stepDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.requirements}>
        <h2 style={styles.sectionTitle}>Required Documents</h2>
        <ul style={styles.checklist}>
          {[
            'Completed application form',
            'Birth certificate (copy)',
            'Previous school report cards (if applicable)',
            'Passport-size photographs (2)',
            'Parent/Guardian ID (copy)',
            'Medical records (if applicable)'
          ].map((item, i) => (
            <li key={i} style={styles.checkItem}>✓ {item}</li>
          ))}
        </ul>
      </section>

      <section style={styles.fees}>
        <h2 style={styles.sectionTitle}>Fee Structure</h2>
        <div style={styles.feeBox}>
          <p style={styles.feeNote}>
            For detailed fee information including tuition, boarding, and activity fees,
            please contact our admissions office.
          </p>
          <Link to="/basic/contact" style={styles.feeLink}>Contact Admissions →</Link>
        </div>
      </section>

      <div style={styles.backNav}>
        <Link to="/basic" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  pageTitle: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: 'var(--muted-foreground)' },
  intro: { background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius)', marginBottom: '2rem', boxShadow: 'var(--shadow-card)' },
  introContent: { maxWidth: '800px', margin: '0 auto' },
  lead: { fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--foreground)' },
  process: { marginBottom: '2rem' },
  sectionTitle: { fontSize: '1.75rem', color: 'var(--primary)', textAlign: 'center', marginBottom: '1.5rem' },
  steps: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  stepCard: { display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' },
  stepNumber: { width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 },
  stepInfo: { flex: 1 },
  stepTitle: { fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.3rem' },
  stepDesc: { fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.6 },
  requirements: { marginBottom: '2rem' },
  checklist: { listStyle: 'none', background: '#fff', padding: '1.5rem 2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' },
  checkItem: { padding: '0.5rem 0', borderBottom: '1px solid var(--surface)', fontSize: '0.95rem', color: 'var(--foreground)' },
  fees: { marginBottom: '2rem' },
  feeBox: { background: 'color-mix(in oklab, var(--accent) 16%, #fff)', padding: '1.5rem', borderRadius: 'var(--radius)', textAlign: 'center' },
  feeNote: { fontSize: '0.95rem', color: 'var(--foreground)', lineHeight: 1.6, marginBottom: '1rem' },
  feeLink: { color: 'var(--accent)', fontWeight: 'bold', textDecoration: 'none' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default BasicAdmissions
