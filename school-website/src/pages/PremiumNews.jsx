import { Link } from 'react-router-dom'

const posts = [
  {
    date: 'September 5, 2026',
    category: 'Events',
    title: 'Annual Sports Day 2026 — Save the Date',
    excerpt: 'Our annual Sports Day will be held on Saturday, 17 October at the main field. Families are warmly invited to cheer on our students.',
    featured: true
  },
  {
    date: 'August 28, 2026',
    category: 'Academics',
    title: 'New STEM Lab Officially Opened',
    excerpt: 'We are excited to announce the opening of our new STEM laboratory, equipped with robotics kits, 3D printers, and science workstations.',
    featured: true
  },
  {
    date: 'August 15, 2026',
    category: 'Admissions',
    title: 'Admissions Open for 2027 Academic Year',
    excerpt: 'Applications are now being accepted for Pre-K through Grade 12. Early applicants are encouraged to schedule a campus tour.'
  },
  {
    date: 'July 30, 2026',
    category: 'Community',
    title: 'Parent-Teacher Association Summer Fair',
    excerpt: 'Thank you to everyone who attended our Summer Fair! Special thanks to the PTA for another successful community event.'
  },
  {
    date: 'July 12, 2026',
    category: 'Achievements',
    title: 'Students Excel at Regional Debate Competition',
    excerpt: 'Our debate team brought home two awards at the regional inter-school competition. Congratulations to our outstanding speakers!'
  },
  {
    date: 'June 22, 2026',
    category: 'Academics',
    title: 'End-of-Term Academic Highlights',
    excerpt: 'A look back at another successful term — outstanding exam results, new extracurricular clubs, and student project showcases.'
  },
  {
    date: 'June 5, 2026',
    category: 'Technology',
    title: 'Digital Learning Platform Launched',
    excerpt: 'Students and parents can now access grades, assignments, and school communications through our new online portal.'
  },
  {
    date: 'May 18, 2026',
    category: 'Community',
    title: 'Community Service Day Recap',
    excerpt: 'Over 200 students participated in local community service projects, including park cleanups and elderly home visits.'
  }
]

function PremiumNews() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>News & Announcements</h1>
        <p style={styles.pageSubtitle}>Stay up to date with the latest from Greenfield International School</p>
      </section>

      <section style={styles.featured}>
        <h2 style={styles.sectionTitle}>Featured Posts</h2>
        <div style={styles.featuredGrid} className="schoolweb-responsive-2">
          {posts.filter(p => p.featured).map(post => (
            <article key={post.title} style={styles.featuredCard}>
              <div style={styles.postMeta}>
                <span style={styles.categoryBadge}>{post.category}</span>
                <span style={styles.postDate}>{post.date}</span>
              </div>
              <h2 style={styles.featuredTitle}>{post.title}</h2>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              <span style={styles.readMore}>Preview only</span>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.posts}>
        <h2 style={styles.sectionTitle}>All Posts</h2>
        <div style={styles.postGrid}>
          {posts.filter(p => !p.featured).map(post => (
            <article key={post.title} style={styles.postCard}>
              <div style={styles.postMeta}>
                <span style={styles.categoryBadge}>{post.category}</span>
                <span style={styles.postDate}>{post.date}</span>
              </div>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              <span style={styles.readMore}>Preview only</span>
            </article>
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
  featured: { marginBottom: '3rem' },
  sectionTitle: { fontSize: '1.75rem', color: 'var(--primary)', textAlign: 'center', marginBottom: '1.5rem' },
  featuredGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' },
  featuredCard: { background: '#fff', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)', borderLeft: '4px solid var(--gold)', display: 'flex', flexDirection: 'column' },
  posts: { marginBottom: '2rem' },
  postGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' },
  postCard: { background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' },
  postMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.82rem' },
  categoryBadge: { background: 'color-mix(in oklab, var(--accent) 14%, #fff)', color: 'var(--accent)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.75rem' },
  postDate: { color: 'var(--muted-foreground)' },
  featuredTitle: { fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem', lineHeight: 1.4 },
  postTitle: { fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.75rem', lineHeight: 1.4 },
  postExcerpt: { fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' },
  readMore: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', alignSelf: 'flex-start' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumNews
