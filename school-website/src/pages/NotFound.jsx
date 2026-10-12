import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main style={styles.container} className="schoolweb-page">
      <p style={styles.code}>404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist or may have moved.</p>
      <Link to="/standard" style={styles.link}>Return to the school website</Link>
    </main>
  )
}

const styles = {
  container: { maxWidth: '760px', margin: '0 auto', padding: '6rem 1rem', textAlign: 'center' },
  code: { fontSize: '5rem', fontWeight: 800, margin: 0, color: 'var(--primary)' },
  link: { display: 'inline-block', marginTop: '1.5rem', color: 'var(--accent)', fontWeight: 600 }
}

export default NotFound
