import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CMS_API_BASE } from '../utils/cmsApi'

const posts = [
  {
    date: 'September 5, 2026',
    category: 'Events',
    title: 'Annual Sports Day 2026 — Save the Date',
    excerpt: 'Our annual Sports Day will be held on Saturday, 17 October at the main field. Families are warmly invited to cheer on our students.'
  },
  {
    date: 'August 28, 2026',
    category: 'Academics',
    title: 'New STEM Lab Officially Opened',
    excerpt: 'We are excited to announce the opening of our new STEM laboratory, equipped with robotics kits, 3D printers, and science workstations.'
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
  }
]

function StandardNews() {
  const [cmsPosts, setCmsPosts] = useState(null)

  useEffect(() => {
    if (!CMS_API_BASE) return undefined
    const controller = new AbortController()
    fetch(`${CMS_API_BASE}/api/news/`, { signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Could not load news')))
      .then(data => setCmsPosts(data.articles))
      .catch(error => {
        if (error.name !== 'AbortError') console.error('Could not load CMS news:', error)
      })
    return () => controller.abort()
  }, [])

  const displayedPosts = cmsPosts ?? posts

  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <h1 style={styles.pageTitle}>News & Announcements</h1>
        <p style={styles.pageSubtitle}>Stay up to date with the latest from Greenfield International School</p>
      </section>

      <section style={styles.posts}>
        <div style={styles.postGrid}>
          {displayedPosts.map(post => (
            <article key={post.id ?? post.title} style={styles.postCard}>
              <div style={styles.postMeta}>
                {post.category && <span style={styles.categoryBadge}>{post.category}</span>}
                <span style={styles.postDate}>{post.date ?? new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'Africa/Nairobi' }).format(new Date(post.published_on))}</span>
              </div>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              {post.image_url && <img src={post.image_url} alt="" style={styles.postImage} />}
              {post.body && <details className="schoolweb-news-details"><summary>Read article</summary><p>{post.body}</p></details>}
            </article>
          ))}
          {displayedPosts.length === 0 && <p className="schoolweb-empty-content">There are no news updates right now.</p>}
        </div>
      </section>

      <div style={styles.backNav}>
        <Link to="/standard" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  pageTitle: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: 'var(--muted-foreground)' },
  posts: { marginBottom: '2rem' },
  postGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' },
  postCard: { background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' },
  postMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.82rem' },
  categoryBadge: { background: 'color-mix(in oklab, var(--accent) 16%, #fff)', color: 'var(--accent)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.75rem' },
  postDate: { color: 'var(--muted-foreground)' },
  postTitle: { fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.75rem', lineHeight: 1.4 },
  postExcerpt: { fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' },
  postImage: { width: '100%', maxHeight: '220px', objectFit: 'cover', borderRadius: 'var(--radius)', marginBottom: '1rem' },
  readMore: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', alignSelf: 'flex-start' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default StandardNews
