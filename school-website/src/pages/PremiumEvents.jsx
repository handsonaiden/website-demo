import { Link } from 'react-router-dom'
import { buildCalendarHref, eventDateParts } from '../utils/events'
import { buildContactMailto } from '../utils/contact'

const events = [
  {
    date: 'October 17, 2026',
    time: '9:00 AM - 3:00 PM',
    title: 'Annual Sports Day',
    desc: 'Inter-house sports competitions, relay races, and family-friendly activities for all grades.',
    location: 'Main School Field',
    featured: true
  },
  {
    date: 'October 24, 2026',
    time: '5:00 PM - 7:00 PM',
    title: 'Open Day & Campus Tour',
    desc: 'Prospective families are invited to tour the campus, meet teachers, and learn about our programs.',
    location: 'School Auditorium',
    featured: true
  },
  {
    date: 'November 7, 2026',
    time: '9:00 AM - 12:00 PM',
    title: 'STEM Fair 2026',
    desc: 'Students showcase science projects, robotics demonstrations, and innovation booths.',
    location: 'School Hall & Science Labs',
    featured: true
  },
  {
    date: 'November 14, 2026',
    time: '6:00 PM - 8:00 PM',
    title: 'PTA General Meeting',
    desc: 'Join our Parent-Teacher Association meeting to discuss upcoming events and volunteer opportunities.',
    location: 'Staff Room'
  },
  {
    date: 'November 21, 2026',
    time: '4:00 PM - 6:00 PM',
    title: 'Cultural Heritage Day',
    desc: 'Students and families share food, music, and traditions from their diverse cultural backgrounds.',
    location: 'School Grounds'
  },
  {
    date: 'December 12, 2026',
    time: '5:00 PM - 9:00 PM',
    title: 'End-of-Year Christmas Gala',
    desc: 'An evening of carols, drama performances, dinner, and celebration for the whole school community.',
    location: 'School Auditorium'
  },
  {
    date: 'January 15, 2027',
    time: '10:00 AM - 12:00 PM',
    title: 'New Year Welcome Assembly',
    desc: 'Kick off the new term with student performances, awards, and an overview of the year ahead.',
    location: 'School Auditorium'
  },
  {
    date: 'February 14, 2027',
    time: '9:00 AM - 2:00 PM',
    title: 'Science & Innovation Expo',
    desc: 'A showcase of student research projects, tech prototypes, and creative experiments.',
    location: 'School Hall'
  }
]

const featured = events.filter(e => e.featured)
const more = events.filter(e => !e.featured)

function PremiumEvents() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>Events Calendar</h1>
        <p style={styles.pageSubtitle}>Save the date for our upcoming school events</p>
      </section>

      <section style={styles.upcoming}>
        <h2 style={styles.sectionTitle}>Featured Events</h2>
        <div style={styles.eventList}>
          {featured.map(event => (
            <div key={event.title} style={styles.eventCard} className="schoolweb-event-card">
              <div style={styles.eventDate} className="schoolweb-event-date">
                <div style={styles.eventMonth}>
                  {eventDateParts(event.date).month}
                </div>
                <div style={styles.eventDay}>
                  {eventDateParts(event.date).day}
                </div>
              </div>
              <div style={styles.eventDetails}>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventTime}>🕐 {event.time}</p>
                <p style={styles.eventLocation}>📍 {event.location}</p>
                <p style={styles.eventDesc}>{event.desc}</p>
                <div style={styles.eventAction} className="schoolweb-event-actions">
                  <a className="schoolweb-button" href={buildCalendarHref(event)} download={`${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`} style={styles.rsvpButton}>📅 Add to Calendar</a>
                  <a className="schoolweb-button" href={buildContactMailto({ name: '', email: '', subject: `RSVP: ${event.title}`, message: `I would like to RSVP for ${event.title} on ${event.date}.` })} style={styles.registerButton}>✋ RSVP</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.more}>
        <h2 style={styles.sectionTitle}>More Events</h2>
        <div style={styles.eventList}>
          {more.map(event => (
            <div key={event.title} style={styles.eventCardLite}>
              <div style={styles.eventDate} className="schoolweb-event-date">
                <div style={styles.eventMonth}>
                  {eventDateParts(event.date).month}
                </div>
                <div style={styles.eventDay}>
                  {eventDateParts(event.date).day}
                </div>
              </div>
              <div style={styles.eventDetailsLite}>
                <h3 style={styles.eventTitleLite}>{event.title}</h3>
                <p style={styles.eventTimeLite}>🕐 {event.time}</p>
                <p style={styles.eventLocationLite}>📍 {event.location}</p>
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
  container: { maxWidth: '900px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  badge: { display: 'inline-block', background: 'var(--gold)', color: 'var(--primary)', padding: '0.25rem 0.7rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.75rem' },
  pageTitle: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: 'var(--muted-foreground)' },
  upcoming: { marginBottom: '2.5rem' },
  sectionTitle: { fontSize: '1.75rem', color: 'var(--primary)', textAlign: 'center', marginBottom: '1.5rem' },
  eventList: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  eventCard: { background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', display: 'flex' },
  eventDate: { background: 'var(--primary)', color: '#fff', width: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  eventMonth: { fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px' },
  eventDay: { fontSize: '2.2rem', fontWeight: 'bold', lineHeight: 1 },
  eventDetails: { padding: '1.5rem', flex: 1 },
  eventTitle: { fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' },
  eventTime: { fontSize: '0.88rem', color: 'var(--muted-foreground)', marginBottom: '0.25rem' },
  eventLocation: { fontSize: '0.88rem', color: 'var(--muted-foreground)', marginBottom: '0.75rem' },
  eventDesc: { fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.5, marginBottom: '1rem' },
  eventAction: { display: 'flex', gap: '0.5rem' },
  rsvpButton: { background: 'var(--gold)', color: 'var(--primary)', padding: '0.35rem 0.85rem', borderRadius: 'calc(var(--radius) - 0.25rem)', fontSize: '0.82rem', fontWeight: 'bold' },
  registerButton: { background: 'var(--accent)', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 'calc(var(--radius) - 0.25rem)', fontSize: '0.82rem', fontWeight: 'bold' },
  more: { marginBottom: '2rem' },
  eventCardLite: { background: '#fff', padding: '1.25rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--gold)', display: 'flex', boxShadow: 'var(--shadow-card)' },
  eventDetailsLite: { flex: 1, paddingLeft: '1rem' },
  eventTitleLite: { fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.25rem' },
  eventTimeLite: { fontSize: '0.82rem', color: 'var(--muted-foreground)', marginBottom: '0.25rem' },
  eventLocationLite: { fontSize: '0.82rem', color: 'var(--muted-foreground)' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumEvents
