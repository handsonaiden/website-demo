import { Link } from 'react-router-dom'

const staff = [
  { name: 'Dr. Rebecca Otieno', role: 'Principal', email: 'principal@greenfield.academy', phone: '+254 700 123 456', dept: 'Administration', bio: 'PhD in Education Leadership with 20+ years experience.' },
  { name: 'Mr. James Kamau', role: 'Deputy Principal', email: 'deputy@greenfield.academy', phone: '+254 700 234 567', dept: 'Administration', bio: 'Masters in Educational Administration, curriculum specialist.' },
  { name: 'Mrs. Amina Hassan', role: 'Head of Early Years', email: 'earlyyears@greenfield.academy', phone: '+254 700 345 678', dept: 'Early Years', bio: 'Certified Montessori educator with a passion for early childhood development.' },
  { name: 'Mr. Brian Omondi', role: 'Head of Primary', email: 'primary@greenfield.academy', phone: '+254 700 456 789', dept: 'Primary', bio: 'Specializes in primary curriculum design and student engagement.' },
  { name: 'Ms. Grace Wanjiku', role: 'Head of Secondary', email: 'secondary@greenfield.academy', phone: '+254 700 567 890', dept: 'Secondary', bio: 'Expert in secondary education and exam preparation strategies.' },
  { name: 'Mr. Peter Maina', role: 'Mathematics Teacher', email: 'maths@greenfield.academy', phone: '+254 700 678 901', dept: 'Mathematics', bio: 'Award-winning math teacher with innovative teaching methods.' },
  { name: 'Mrs. Susan Adhiambo', role: 'English Teacher', email: 'english@greenfield.academy', phone: '+254 700 789 012', dept: 'Languages', bio: 'Published author and creative writing enthusiast.' },
  { name: 'Mr. Daniel Kizza', role: 'Science Teacher', email: 'science@greenfield.academy', phone: '+254 700 890 123', dept: 'Science', bio: 'Former research scientist turned educator, STEM program lead.' },
  { name: 'Ms. Ruth Aketch', role: 'French Teacher', email: 'french@greenfield.academy', phone: '+254 700 901 234', dept: 'Languages', bio: 'Native French speaker with international teaching experience.' },
  { name: 'Mr. Caleb Mutua', role: 'PE & Sports Coach', email: 'sports@greenfield.academy', phone: '+254 700 012 345', dept: 'Sports', bio: 'Former national athletics coach, specializes in youth sports development.' },
  { name: 'Mrs. Naomi Wambui', role: 'School Counselor', email: 'counseling@greenfield.academy', phone: '+254 700 123 999', dept: 'Student Support', bio: 'Licensed counselor specializing in adolescent mental health.' },
  { name: 'Mr. Felix Ochieng', role: 'IT & Computer Studies', email: 'it@greenfield.academy', phone: '+254 700 234 888', dept: 'ICT', bio: 'Tech entrepreneur turned educator, leads digital literacy programs.' }
]

function PremiumStaff() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
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
              <p style={styles.staffBio}>{member.bio}</p>
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
  staffList: { marginBottom: '2rem' },
  sectionTitle: { fontSize: '1.75rem', color: 'var(--primary)', textAlign: 'center', marginBottom: '1.5rem' },
  staffGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' },
  staffCard: { background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', textAlign: 'center' },
  staffAvatar: { width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1rem', letterSpacing: '2px' },
  staffName: { fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.25rem' },
  staffRole: { fontSize: '0.92rem', color: 'var(--accent)', marginBottom: '0.25rem' },
  staffDept: { fontSize: '0.82rem', color: 'var(--muted-foreground)', marginBottom: '0.5rem' },
  staffBio: { fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.5, marginBottom: '1rem', fontStyle: 'italic' },
  contactRow: { marginBottom: '0.3rem' },
  contactLink: { fontSize: '0.85rem', color: 'var(--muted-foreground)', textDecoration: 'none', wordBreak: 'break-all' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumStaff
