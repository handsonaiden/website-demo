import { useState } from 'react'
import { Link } from 'react-router-dom'
import { buildContactMailto, CONTACT_EMAIL } from '../utils/contact'

function PremiumContact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    window.location.href = buildContactMailto({
      name: `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim(),
      email: data.get('email') || '',
      phone: data.get('phone') || '',
      subject: data.get('subject') || '',
      message: data.get('message') || '',
    })
  }

  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>Contact Us</h1>
        <p style={styles.pageSubtitle}>We&apos;d love to hear from you</p>
      </section>

      <div style={styles.contactGrid} className="schoolweb-contact-grid">
        <section style={styles.contactInfo}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>

          <div style={styles.infoItem} className="schoolweb-surface">
            <div style={styles.infoIcon}>📍</div>
            <div>
              <h3 style={styles.infoLabel}>Our Location</h3>
              <p style={styles.infoText}>
                Greenfield International School<br />
                123 Education Avenue<br />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div style={styles.infoItem} className="schoolweb-surface">
            <div style={styles.infoIcon}>📞</div>
            <div>
              <h3 style={styles.infoLabel}>Phone</h3>
              <p style={styles.infoText}>+254 700 123 456</p>
              <p style={styles.infoText}>+254 700 987 654</p>
            </div>
          </div>

          <div style={styles.infoItem} className="schoolweb-surface">
            <div style={styles.infoIcon}>✉️</div>
            <div>
              <h3 style={styles.infoLabel}>Email</h3>
              <a href={`mailto:${CONTACT_EMAIL}`} style={styles.infoLink}>{CONTACT_EMAIL}</a>
              <br />
              <a href="mailto:admissions@greenfield.academy" style={styles.infoLink}>admissions@greenfield.academy</a>
            </div>
          </div>

          <div style={styles.infoItem} className="schoolweb-surface">
            <div style={styles.infoIcon}>🕐</div>
            <div>
              <h3 style={styles.infoLabel}>Office Hours</h3>
              <p style={styles.infoText}>Monday - Friday: 7:30 AM - 5:00 PM</p>
              <p style={styles.infoText}>Saturday: 9:00 AM - 1:00 PM</p>
              <p style={{ ...styles.infoText, color: '#ef4444' }}>Sunday: Closed</p>
            </div>
          </div>

          <div style={styles.map}>
            <iframe
              title="School location map"
              src="https://www.google.com/maps?q=123+Education+Avenue,+Nairobi,+Kenya&output=embed"
              style={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section style={styles.contactForm}>
          <h2 style={styles.sectionTitle}>Send Us a Message</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formRow} className="schoolweb-form-row">
              <div style={styles.formGroup}>
                <label htmlFor="firstName" style={styles.label}>First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="First name" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="lastName" style={styles.label}>Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last name" style={styles.input} required />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email" name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="phone" style={styles.label}>Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+254 700 000 000" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="subject" style={styles.label}>Subject</label>
              <select id="subject" name="subject" value={form.subject} onChange={handleChange} style={styles.select}>
                <option value="">Select a subject</option>
                <option value="Admissions Inquiry">Admissions Inquiry</option>
                <option value="Academic Question">Academic Question</option>
                <option value="Fee & Payment Inquiry">Fee & Payment Inquiry</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message" name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                style={styles.textarea}
                required
              />
            </div>

            <button type="submit" style={styles.submitBtn}>Continue to Email App</button>

            <p style={styles.formNote}>
              We&apos;ll open a draft addressed to <a href={`mailto:${CONTACT_EMAIL}`} style={styles.infoLink}>{CONTACT_EMAIL}</a>. Review and send it in your email app; this site can&apos;t confirm delivery.
            </p>
          </form>
        </section>
      </div>

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
  contactGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' },
  contactInfo: { background: '#fff', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' },
  contactForm: { background: '#fff', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' },
  sectionTitle: { fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'center' },
  infoItem: { display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' },
  infoIcon: { fontSize: '1.75rem', flexShrink: 0 },
  infoLabel: { fontSize: '0.95rem', color: 'var(--accent)', marginBottom: '0.3rem' },
  infoText: { fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.6, margin: 0 },
  infoLink: { fontSize: '0.92rem', color: 'var(--accent)', textDecoration: 'none', lineHeight: 1.6 },
  map: { marginTop: '1.5rem', overflow: 'hidden', borderRadius: 'var(--radius)' },
  mapFrame: { width: '100%', minHeight: '240px', border: 0 },
  form: { display: 'flex', flexDirection: 'column' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  formGroup: { marginBottom: '1.25rem' },
  label: { display: 'block', fontSize: '0.9rem', color: 'var(--foreground)', marginBottom: '0.4rem', fontWeight: 500 },
  input: { width: '100%', padding: '0.7rem 0.9rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.95rem', outline: 'none' },
  select: { width: '100%', padding: '0.7rem 0.9rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.95rem', background: '#fff', outline: 'none' },
  textarea: { width: '100%', padding: '0.7rem 0.9rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.95rem', resize: 'vertical', outline: 'none' },
  submitBtn: { background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: '#fff', border: 'none', padding: '0.85rem 1.5rem', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', width: '100%' },
  formNote: { fontSize: '0.82rem', color: 'var(--muted-foreground)', textAlign: 'center', marginTop: '0.75rem' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumContact
