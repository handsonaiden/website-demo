import { Link } from 'react-router-dom'

function PremiumAcademics() {
  const levels = [
    {
      name: 'Early Years (Pre-K to Grade 2)',
      desc: 'A play-based and structured program that builds foundational literacy, numeracy, socialization, and curiosity. Classes are small to give each child individual attention.',
      features: ['Language & phonics', 'Number sense & basic math', 'Storytelling & reading', 'Art, music & movement', 'Outdoor play & field trips', 'Montessori-inspired activities']
    },
    {
      name: 'Primary (Grades 3 to 6)',
      desc: 'Students build strong core skills in reading, writing, and mathematics while exploring science, social studies, and creative subjects. Critical thinking and teamwork are introduced.',
      features: ['English language arts', 'Mathematics', 'Science & discovery', 'Social studies & geography', 'Computer literacy', 'Physical education & sports', 'French language introduction']
    },
    {
      name: 'Middle School (Grades 7 to 9)',
      desc: 'A transition into subject-specialist teaching, with emphasis on independent study habits, project-based learning, and personal development.',
      features: ['Advanced mathematics', 'Integrated sciences (biology, chemistry, physics)', 'Humanities & history', 'Second language options', 'Creative arts & design', 'Electives & clubs', 'Leadership development program']
    },
    {
      name: 'High School (Grades 10 to 12)',
      desc: 'College- and career-ready programs with a broad subject selection, exam preparation, and guidance counseling. Students can focus on streams aligned with their goals.',
      features: ['Sciences (biology, chemistry, physics)', 'Commerce & business studies', 'Humanities & literature', 'Advanced mathematics', 'ICT & digital skills', 'Career guidance & university prep', 'Internship & mentorship program']
    }
  ]

  const programs = [
    { name: 'STEM Program', desc: 'Robotics, coding, science clubs, and hands-on lab work to inspire future innovators.', icon: '🔬' },
    { name: 'Languages', desc: 'English as primary medium. French and Swahili as second languages with native speakers.', icon: '🌐' },
    { name: 'Arts & Culture', desc: 'Music, drama, visual arts, and cultural events that celebrate creativity and diversity.', icon: '🎨' },
    { name: 'Sports & PE', desc: 'Regular physical education plus competitive teams in football, basketball, and athletics.', icon: '⚽' },
    { name: 'Special Support', desc: 'Learning support and counseling for students who need extra help or enrichment.', icon: '💡' },
    { name: 'Digital Learning', desc: 'One-to-one device program, online learning portal, and virtual classroom capabilities.', icon: '💻' }
  ]

  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>Academics</h1>
        <p style={styles.pageSubtitle}>A well-rounded education from Early Years to High School</p>
      </section>

      <section style={styles.levels}>
        <h2 style={styles.sectionTitle}>Academic Levels</h2>
        <div style={styles.levelGrid}>
          {levels.map(level => (
            <div key={level.name} style={styles.levelCard}>
              <h3 style={styles.levelName}>{level.name}</h3>
              <p style={styles.levelDesc}>{level.desc}</p>
              <ul style={styles.featureList}>
                {level.features.map(feat => (
                  <li key={feat} style={styles.featureItem}>✓ {feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.programs}>
        <h2 style={styles.sectionTitle}>Special Programs</h2>
        <div style={styles.programGrid}>
          {programs.map(prog => (
            <div key={prog.name} style={styles.programCard}>
              <div style={styles.programIcon}>{prog.icon}</div>
              <h3 style={styles.programName}>{prog.name}</h3>
              <p style={styles.programDesc}>{prog.desc}</p>
            </div>
          ))}
        </div>
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
  levels: { marginBottom: '2.5rem' },
  sectionTitle: { fontSize: '1.75rem', color: 'var(--primary)', textAlign: 'center', marginBottom: '1.5rem' },
  levelGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' },
  levelCard: { background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' },
  levelName: { fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 600 },
  levelDesc: { fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '1rem' },
  featureList: { listStyle: 'none', padding: 0, margin: 0 },
  featureItem: { fontSize: '0.88rem', color: 'var(--foreground)', padding: '0.2rem 0', borderBottom: '1px solid var(--surface)' },
  programs: { marginBottom: '2.5rem' },
  programGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' },
  programCard: { background: 'var(--surface)', padding: '1.25rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent)' },
  programIcon: { fontSize: '1.5rem', marginBottom: '0.5rem' },
  programName: { fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  programDesc: { fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.6 },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumAcademics
