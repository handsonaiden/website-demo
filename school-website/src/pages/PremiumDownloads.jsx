import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../utils/contact'

const downloadPath = name => name === 'Academic Calendar 2026'
  ? '/downloads/Academic%20Calendar%202026.pdf'
  : null

const resources = [
  {
    category: 'Admissions',
    items: [
      { name: 'Admission Form (PDF)', size: '245 KB' },
      { name: 'Parent Handbook 2026', size: '1.2 MB' },
      { name: 'Fee Structure 2026-2027', size: '312 KB' },
      { name: 'Transfer Certificate Request', size: '180 KB' },
      { name: 'Scholarship Application Form', size: '210 KB' }
    ]
  },
  {
    category: 'Academic Resources',
    items: [
      { name: 'Academic Calendar 2026', size: '420 KB' },
      { name: 'Homework Policy Guidelines', size: '275 KB' },
      { name: 'Recommended Reading List', size: '210 KB' },
      { name: 'Exam Revision Timetable', size: '155 KB' },
      { name: 'STEM Program Guide', size: '380 KB' },
      { name: 'Language Program Overview', size: '290 KB' }
    ]
  },
  {
    category: 'Forms & Documents',
    items: [
      { name: 'Medical Information Form', size: '190 KB' },
      { name: 'Emergency Contact Form', size: '165 KB' },
      { name: 'Leave Application Form', size: '170 KB' },
      { name: 'Uniform Order Form', size: '200 KB' },
      { name: 'Device & Internet Agreement', size: '155 KB' },
      { name: 'Photo/Video Consent Form', size: '140 KB' }
    ]
  },
  {
    category: 'Community',
    items: [
      { name: 'PTA Meeting Minutes Archive', size: '540 KB' },
      { name: 'Volunteer Registration', size: '185 KB' },
      { name: 'School Newsletter Archive', size: '2.3 MB' },
      { name: 'Community Events Poster Template', size: '1.1 MB' },
      { name: 'Alumni Network Registration', size: '160 KB' }
    ]
  },
  {
    category: 'Digital Resources',
    items: [
      { name: 'Parent Portal User Guide', size: '850 KB' },
      { name: 'Student Device Setup Guide', size: '620 KB' },
      { name: 'Online Library Access Instructions', size: '340 KB' },
      { name: 'Virtual Classroom Guide', size: '480 KB' }
    ]
  }
]

function PremiumDownloads() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>Downloads & Resources</h1>
        <p style={styles.pageSubtitle}>Useful forms, documents, and resources for students, parents, and staff</p>
      </section>

      <section style={styles.resources}>
        {resources.map(section => (
          <div key={section.category} style={styles.sectionCard}>
            <h2 style={styles.categoryTitle}>{section.category}</h2>
            <div style={styles.itemList}>
              {section.items.map(item => (
                <div key={item.name} style={styles.downloadItem} className="schoolweb-download-item">
                  <div style={styles.downloadIcon}>📄</div>
                  <div style={styles.downloadInfo} className="schoolweb-download-info">
                    <p style={styles.downloadName}>{item.name}</p>
                    <p style={styles.downloadSize}>{item.size}</p>
                  </div>
                  {downloadPath(item.name) ? (
                    <a href={downloadPath(item.name)} className="schoolweb-download-link" style={styles.downloadLink} download>
                      Download
                    </a>
                  ) : (
                    <span className="schoolweb-download-link" style={{ ...styles.downloadLink, background: "var(--muted-foreground)" }} aria-label="This document is not available in the demo">Unavailable</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div style={styles.note}>
        <p>
          For any questions about these resources, please contact the school office at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} style={styles.noteLink}>{CONTACT_EMAIL}</a>
          {' '}or call <strong>+254 700 123 456</strong>.
        </p>
      </div>

      <div style={styles.backNav}>
        <Link to="/premium" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  badge: { display: 'inline-block', background: 'var(--gold)', color: 'var(--primary)', padding: '0.25rem 0.7rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.75rem' },
  pageTitle: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: 'var(--muted-foreground)' },
  resources: { marginBottom: '2rem' },
  sectionCard: { background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', marginBottom: '1.5rem', overflow: 'hidden' },
  categoryTitle: { background: 'linear-gradient(135deg, var(--primary), var(--primary-soft))', color: '#fff', padding: '1rem 1.5rem', fontSize: '1.1rem' },
  itemList: { padding: '0.5rem 0' },
  downloadItem: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1.5rem', borderBottom: '1px solid var(--surface)' },
  downloadIcon: { fontSize: '1.5rem', flexShrink: 0 },
  downloadInfo: { flex: 1 },
  downloadName: { fontSize: '0.92rem', color: 'var(--foreground)', fontWeight: 500, marginBottom: '0.15rem' },
  downloadSize: { fontSize: '0.78rem', color: 'var(--muted-foreground)' },
  downloadLink: { background: 'var(--accent)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: 'calc(var(--radius) - 0.25rem)', fontSize: '0.82rem', fontWeight: 'bold', textDecoration: 'none' },
  note: { background: 'var(--surface)', padding: '1.25rem', borderRadius: 'var(--radius)', marginBottom: '2rem', fontSize: '0.92rem', color: 'var(--foreground)', lineHeight: 1.6 },
  noteLink: { color: 'var(--accent)', wordBreak: 'break-all' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumDownloads
