import { Link } from 'react-router-dom'

function BasicAbout() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <h1 style={styles.pageTitle}>About Us</h1>
        <p style={styles.pageSubtitle}>Our story, mission, and vision</p>
      </section>

      <section style={styles.intro}>
        <div style={styles.introContent}>
          <p style={styles.lead}>
            Greenfield International School was founded in 1985 with a simple belief:
            every child deserves access to a nurturing, world-class education. Over the
            decades, we have grown from a small local school into a vibrant community of
            learners representing diverse backgrounds.
          </p>
          <p style={styles.lead}>
            Our holistic approach goes beyond textbooks — we shape character, curiosity,
            and confidence in every student who walks through our doors.
          </p>
        </div>
      </section>

      <section style={styles.pillars}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.pillarGrid}>
          {[
            { icon: '🎓', title: 'Academic Excellence', desc: 'We maintain high standards through dedicated teaching and a rigorous curriculum.' },
            { icon: '🤝', title: 'Integrity & Respect', desc: 'We foster honesty, empathy, and mutual respect across our school community.' },
            { icon: '🌍', title: 'Global Citizenship', desc: 'We prepare students to understand and contribute to an interconnected world.' },
            { icon: '💪', title: 'Resilience & Growth', desc: 'We encourage a growth mindset — learning from challenges and striving to improve.' }
          ].map(pillar => (
            <div key={pillar.title} style={styles.pillarCard}>
              <div style={styles.pillarIcon}>{pillar.icon}</div>
              <h3 style={styles.pillarTitle}>{pillar.title}</h3>
              <p style={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.mission}>
        <h2 style={styles.sectionTitle}>Mission & Vision</h2>
        <div style={styles.missionGrid} className="schoolweb-responsive-2">
          <div style={styles.missionCard} className="schoolweb-surface">
            <h3 style={styles.missionLabel}>Our Mission</h3>
            <p style={styles.missionText}>
              To provide a safe, inclusive, and stimulating learning environment that
              equips every student with the knowledge, skills, and values needed to
              thrive in school, career, and life.
            </p>
          </div>
          <div style={styles.missionCard} className="schoolweb-surface">
            <h3 style={styles.missionLabel}>Our Vision</h3>
            <p style={styles.missionText}>
              To be a leading school known for producing thoughtful, capable, and
              compassionate citizens who make a positive difference in their communities.
            </p>
          </div>
        </div>
      </section>

      <div style={styles.backNav}>
        <Link to="/basic" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  pageTitle: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: 'var(--muted-foreground)' },
  intro: { background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius)', marginBottom: '2rem', boxShadow: 'var(--shadow-card)' },
  introContent: { maxWidth: '800px', margin: '0 auto' },
  lead: { fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--foreground)', marginBottom: '1rem' },
  pillars: { marginBottom: '2rem' },
  sectionTitle: { fontSize: '1.75rem', color: 'var(--primary)', textAlign: 'center', marginBottom: '1.5rem' },
  pillarGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' },
  pillarCard: { background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' },
  pillarIcon: { fontSize: '2.5rem', marginBottom: '0.75rem' },
  pillarTitle: { fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  pillarDesc: { fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.6 },
  mission: { marginBottom: '2rem' },
  missionGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' },
  missionCard: { background: '#fff', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' },
  missionLabel: { fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '1rem' },
  missionText: { fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted-foreground)' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default BasicAbout
