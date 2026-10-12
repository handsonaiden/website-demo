import { Link } from 'react-router-dom'

const staff = [
  { name: 'Dr. Rebecca Otieno', role: 'Principal', email: 'principal@greenfield.academy', phone: '+254 700 123 456', dept: 'Administration' },
  { name: 'Mr. James Kamau', role: 'Deputy Principal', email: 'deputy@greenfield.academy', phone: '+254 700 234 567', dept: 'Administration' },
  { name: 'Mrs. Amina Hassan', role: 'Head of Early Years', email: 'earlyyears@greenfield.academy', phone: '+254 700 345 678', dept: 'Early Years' },
  { name: 'Mr. Brian Omondi', role: 'Head of Primary', email: 'primary@greenfield.academy', phone: '+254 700 456 789', dept: 'Primary' },
  { name: 'Ms. Grace Wanjiku', role: 'Head of Secondary', email: 'secondary@greenfield.academy', phone: '+254 700 567 890', dept: 'Secondary' },
  { name: 'Mr. Peter Maina', role: 'Mathematics Teacher', email: 'maths@greenfield.academy', phone: '+254 700 678 901', dept: 'Mathematics' },
  { name: 'Mrs. Susan Adhiambo', role: 'English Teacher', email: 'english@greenfield.academy', phone: '+254 700 789 012', dept: 'Languages' },
  { name: 'Mr. Daniel Kizza', role: 'Science Teacher', email: 'science@greenfield.academy', phone: '+254 700 890 123', dept: 'Science' },
  { name: 'Ms. Ruth Aketch', role: 'French Teacher', email: 'french@greenfield.academy', phone: '+254 700 901 234', dept: 'Languages' },
  { name: 'Mr. Caleb Mutua', role: 'PE & Sports Coach', email: 'sports@greenfield.academy', phone: '+254 700 012 345', dept: 'Sports' },
  { name: 'Mrs. Naomi Wambui', role: 'School Counselor', email: 'counseling@greenfield.academy', phone: '+254 700 123 999', dept: 'Student Support' },
  { name: 'Mr. Felix Ochieng', role: 'IT & Computer Studies', email: 'it@greenfield.academy', phone: '+254 700 234 888', dept: 'ICT' }
]

function StandardStaff() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <h1 style={styles.pageTitle}>Staff Directory</h1>
        <p style={styles.pageSubtitle}>Meet the dedicated team behind Greenfield International School</p>
      </section>

      <section style={styles.staffList}>
        <h2 style={styles.sectionTitle}>Our Team</h2>
        <div style={styles.staffGrid}>
          {staff.map(member => (
            <div key={member.email} style={styles.staffCard}>
              <div style={styles.staffAvatar}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={styles.staffName}>{member.name}</h3>
              <p style={styles.staffRole}>{member.role}</p>
              <p style={styles.staffDept}>{member.dept}</p>
              <div style={styles.contactRow}>
                <a href={`mailto:${member.email}`} style={styles.contactLink}>✉ {member.email}</a>
              </div>
              <div style={styles.contactRow}>
                <a href={`tel:${member.phone}`} style={styles.contactLink}>📞 {member.phone}</a>
              </div>
            </div>
          ))}
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
  staffList: { marginBottom: '2rem' },
  sectionTitle: { fontSize: '1.75rem', color: 'var(--primary)', textAlign: 'center', marginBottom: '1.5rem' },
  staffGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' },
  staffCard: { background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', textAlign: 'center' },
  staffAvatar: { width: '70px', height: '70px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1rem', letterSpacing: '2px' },
  staffName: { fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.25rem' },
  staffRole: { fontSize: '0.92rem', color: 'var(--accent)', marginBottom: '0.25rem' },
  staffDept: { fontSize: '0.82rem', color: 'var(--muted-foreground)', marginBottom: '1rem' },
  contactRow: { marginBottom: '0.3rem' },
  contactLink: { fontSize: '0.85rem', color: 'var(--muted-foreground)', textDecoration: 'none', wordBreak: 'break-all' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default StandardStaff
