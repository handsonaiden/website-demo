import { useEffect, useRef, useState } from 'react'

/* =====================================================================
   SCHOOL CHATBOT
   Edit the SCHOOL block below with the real school details, then edit
   the answers in KB further down. Nothing else needs to change.
   ===================================================================== */
const SCHOOL = {
  name: 'Your School Name',
  botName: 'School Assistant',
  phone: '+254 700 000 000',
  whatsapp: '254700000000', // international format, no plus or spaces. Leave '' to hide WhatsApp.
  email: 'info@yourschool.example',
  address: 'Your town, Your county',
  hours: 'Monday to Friday, 8:00 AM to 5:00 PM',
  levels: 'Pre-Primary, Primary and Junior School',
  curriculum: 'the Competency Based Curriculum (CBC)',
  colors: { main: '#0b3d91', accent: '#f4b400' }, // chat colours
  // Optional: web address of a Claude chat function. Leave '' to use the built-in answers only.
  aiEndpoint: '',
}

/* Quick-reply buttons shown under the chat */
const QUICK = ['Admissions', 'Fees', 'Book a visit', 'School hours', 'Contact']

/* Buttons that jump to a section of your page. The id must exist on the page, otherwise the button hides itself. */
const LINKS = {
  admissions: { label: 'Admissions section', href: '#admissions' },
  contact: { label: 'Contact section', href: '#contact' },
  programmes: { label: 'Programmes', href: '#programmes' },
  news: { label: 'News and events', href: '#news' },
}

/* What the bot knows. Each entry: words that trigger it (k), the answer (a), optional link. */
const KB = [
  { k: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'habari', 'sasa'],
    a: () => `Hello and welcome to ${SCHOOL.name}! How can I help you today?` },

  { k: ['about', 'who are you', 'tell me about', 'your school', 'what is this school'],
    a: () => `${SCHOOL.name} is a caring learning community offering ${SCHOOL.levels}. We balance strong academics with character, sports and the arts.` },

  { k: ['admission', 'admissions', 'apply', 'application', 'enrol', 'enroll', 'join', 'register', 'new student', 'transfer'],
    a: () => 'Admissions are simple: enquire, submit the application form with the required documents, attend a short assessment and parent interview, then receive your offer letter and enrol.',
    link: 'admissions' },

  { k: ['document', 'documents', 'requirements', 'what do i need', 'birth certificate', 'report form', 'papers'],
    a: () => 'Please bring your child\'s birth certificate, recent report forms, passport photos and, for transfers, a transfer letter. The school office will confirm the full list.' },

  { k: ['fee', 'fees', 'cost', 'tuition', 'price', 'how much', 'payment', 'pay', 'mpesa', 'm-pesa', 'installment'],
    a: () => `Fees depend on the class level. Please contact the office on ${SCHOOL.phone} or ${SCHOOL.email} for the current fee structure and payment options.` },

  { k: ['visit', 'tour', 'open day', 'see the school', 'book', 'appointment', 'come and see'],
    a: () => `We would love to host you. Call ${SCHOOL.phone} or send a message on WhatsApp to book a school tour, or use the contact form on this page.`,
    link: 'contact' },

  { k: ['hour', 'hours', 'open', 'opening', 'closing', 'time', 'schedule', 'office'],
    a: () => `The school office is open ${SCHOOL.hours}.` },

  { k: ['contact', 'phone', 'call', 'email', 'whatsapp', 'reach', 'number', 'talk to someone', 'speak'],
    a: () => `You can reach us on ${SCHOOL.phone} or ${SCHOOL.email}.`,
    link: 'contact' },

  { k: ['where', 'location', 'address', 'directions', 'located', 'map', 'find you'],
    a: () => `We are located in ${SCHOOL.address}. Contact the office and we will send you a map pin and directions.` },

  { k: ['class', 'classes', 'grade', 'level', 'programme', 'program', 'age', 'pre-primary', 'nursery', 'primary', 'junior', 'secondary'],
    a: () => `We offer ${SCHOOL.levels}.`,
    link: 'programmes' },

  { k: ['curriculum', 'cbc', 'cbe', '8-4-4', '844', 'syllabus', 'subjects', 'learn', 'teach'],
    a: () => `We follow ${SCHOOL.curriculum}, with strong support in Languages, Mathematics, Science, ICT and the Arts.` },

  { k: ['board', 'boarding', 'dorm', 'hostel', 'residential', 'day school'],
    a: () => 'Please contact the office for details on day and boarding options, as they depend on the class level and available space.' },

  { k: ['transport', 'bus', 'school bus', 'pick up', 'pickup', 'drop'],
    a: () => 'Transport details and routes are available from the school office. Please ask them for the current routes and charges.' },

  { k: ['meal', 'meals', 'lunch', 'food', 'diet', 'snack', 'feeding'],
    a: () => 'Learners are provided with balanced meals at school. Please tell the office about any dietary needs when you enrol.' },

  { k: ['uniform', 'dress', 'books', 'stationery', 'what to buy'],
    a: () => 'Uniform and required items are shared on admission. The school office can advise on approved suppliers.' },

  { k: ['sport', 'sports', 'football', 'swim', 'swimming', 'club', 'clubs', 'music', 'drama', 'activity', 'activities', 'robotics', 'co-curricular'],
    a: () => 'Learners can join sports, music, drama, robotics, debate and other clubs. We believe every child has a talent to grow.' },

  { k: ['teacher', 'teachers', 'staff', 'qualified', 'class size', 'ratio'],
    a: () => 'Our teachers are qualified, caring and committed to knowing every learner. Please visit us to meet them.' },

  { k: ['safe', 'safety', 'security', 'discipline', 'bullying', 'welfare', 'counselling', 'counseling'],
    a: () => 'Learner safety and welfare come first. We have supervised grounds, clear discipline guidelines and staff who care for every child.' },

  { k: ['result', 'results', 'performance', 'kcpe', 'kcse', 'grades', 'ranking', 'exam', 'exams'],
    a: () => `Please contact the office for the school's latest academic results and performance reports.` },

  { k: ['scholarship', 'bursary', 'sponsor', 'discount', 'sibling'],
    a: () => 'Please ask the school office about bursaries, sponsorship and any sibling arrangements.' },

  { k: ['term', 'terms', 'calendar', 'holiday', 'holidays', 'opening date', 'closing date', 'event', 'events', 'news'],
    a: () => 'Term dates and upcoming events are shared by the school office and posted in our news section.',
    link: 'news' },

  { k: ['thank', 'thanks', 'asante', 'great', 'cool', 'nice'],
    a: () => 'You are welcome! Is there anything else I can help with?' },

  { k: ['bye', 'goodbye', 'see you', 'later'],
    a: () => `Goodbye, and thank you for your interest in ${SCHOOL.name}.` },
]

const FALLBACK = () =>
  `I am not sure about that one. Please call ${SCHOOL.phone}${SCHOOL.whatsapp ? ' or message us on WhatsApp' : ''} and the school office will help.`

/* ---------- logic ---------- */
function answer(text) {
  const s = text.toLowerCase()
  let best = null
  let bestScore = 0
  for (const e of KB) {
    // whole-word matching for short words, so "hi" does not match "this"
    const score = e.k.reduce((n, w) => {
      const hit = w.length <= 3 ? new RegExp('\\b' + w.replace(/[-]/g, '\\-') + '\\b').test(s) : s.includes(w)
      return n + (hit ? 1 : 0)
    }, 0)
    if (score > bestScore) { best = e; bestScore = score }
  }
  return best ? { text: best.a(), link: best.link } : { text: FALLBACK() }
}

async function askAi(history) {
  if (!SCHOOL.aiEndpoint) return null
  try {
    const messages = history.map((m) => ({ role: m.who === 'me' ? 'user' : 'assistant', content: m.text }))
    const r = await fetch(SCHOOL.aiEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages }) })
    if (!r.ok) return null
    const { reply } = await r.json()
    return reply ? { text: reply } : null
  } catch {
    return null
  }
}

/* ---------- component ---------- */
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([
    { who: 'bot', text: `Hi, I am the ${SCHOOL.botName} for ${SCHOOL.name}. Ask me about admissions, fees, school hours or booking a visit.` },
  ])
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ block: 'end' }) }, [msgs, typing, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  async function send(text) {
    const t = (text ?? input).trim()
    if (!t || typing) return
    const history = [...msgs, { who: 'me', text: t }]
    setMsgs(history)
    setInput('')
    setTyping(true)
    const started = Date.now()
    const reply = (await askAi(history)) || answer(t)
    setTimeout(() => {
      setMsgs((m) => [...m, { who: 'bot', ...reply }])
      setTyping(false)
    }, Math.max(0, 650 - (Date.now() - started)))
  }

  // only show a link button if that section really exists on the page
  const linkFor = (key) => {
    const l = LINKS[key]
    return l && document.querySelector(l.href) ? l : null
  }

  const wa = SCHOOL.whatsapp
    ? `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent('Hello, I would like to ask about ' + SCHOOL.name)}`
    : ''

  return (
    <div className="sb" style={{ '--sb-main': SCHOOL.colors.main, '--sb-accent': SCHOOL.colors.accent }}>
      <style>{CSS}</style>

      <button className="sb-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close chat' : `Chat with ${SCHOOL.botName}`} aria-expanded={open}>
        {open ? (
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>
        )}
      </button>

      {open && (
        <div className="sb-panel" role="dialog" aria-label={SCHOOL.botName}>
          <div className="sb-head">
            <div className="sb-av">{SCHOOL.name.charAt(0)}</div>
            <div>
              <b>{SCHOOL.botName}</b>
              <small>{SCHOOL.name}</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">&times;</button>
          </div>

          <div className="sb-msgs" aria-live="polite">
            {msgs.map((m, i) => {
              const l = m.link ? linkFor(m.link) : null
              return (
                <div key={i} className={'sb-m ' + (m.who === 'me' ? 'sb-me' : 'sb-bot')}>
                  {m.text}
                  {l && <a className="sb-link" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>}
                </div>
              )
            })}
            {typing && <div className="sb-m sb-bot sb-typing" aria-label="Typing"><i /><i /><i /></div>}
            <div ref={endRef} />
          </div>

          <div className="sb-quick">
            {QUICK.map((q) => <button key={q} onClick={() => send(q)}>{q}</button>)}
            {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="sb-wa">Talk to a person on WhatsApp</a>}
          </div>

          <form className="sb-in" onSubmit={(e) => { e.preventDefault(); send() }}>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your question" aria-label="Your question" />
            <button type="submit" disabled={typing}>Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

/* ---------- styles (inside this file so it is the only one you add) ---------- */
const CSS = `
.sb *{box-sizing:border-box}
.sb-btn{position:fixed;right:20px;bottom:20px;z-index:9999;width:60px;height:60px;border-radius:50%;border:0;background:var(--sb-main);cursor:pointer;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.3);transition:transform .15s}
.sb-btn:hover{transform:scale(1.07)}
.sb-btn svg{width:27px;height:27px;stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.sb-panel{position:fixed;right:20px;bottom:92px;z-index:9999;width:370px;max-width:calc(100vw - 24px);height:540px;max-height:calc(100vh - 120px);max-height:calc(100dvh - 120px);background:#fff;color:#1f2933;border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,.35);display:flex;flex-direction:column;overflow:hidden;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;animation:sbrise .25s ease both}
@keyframes sbrise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.sb-head{display:flex;gap:12px;align-items:center;padding:16px 18px;background:var(--sb-main);color:#fff}
.sb-av{width:40px;height:40px;border-radius:50%;background:var(--sb-accent);color:#1f2933;display:grid;place-items:center;font-weight:800;flex:none}
.sb-head b{display:block;font-size:1rem}
.sb-head small{display:block;opacity:.8;font-size:.8rem;margin-top:1px}
.sb-head button{margin-left:auto;background:none;border:0;color:#fff;font-size:1.7rem;line-height:1;cursor:pointer;padding:4px 8px}
.sb-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:#f3f5f9}
.sb-m{padding:10px 14px;border-radius:16px;max-width:88%;font-size:.95rem;line-height:1.5}
.sb-bot{background:#fff;align-self:flex-start;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.sb-me{background:var(--sb-main);color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
.sb-link{display:inline-block;margin-top:9px;padding:7px 14px;border-radius:999px;background:var(--sb-accent);color:#1f2933;font-weight:700;font-size:.85rem;text-decoration:none}
.sb-typing{display:flex;gap:5px;padding:14px}
.sb-typing i{width:7px;height:7px;border-radius:50%;background:#9aa5b1;animation:sbb 1s infinite}
.sb-typing i:nth-child(2){animation-delay:.15s}.sb-typing i:nth-child(3){animation-delay:.3s}
@keyframes sbb{50%{transform:translateY(-4px);background:var(--sb-main)}}
.sb-quick{display:flex;gap:7px;flex-wrap:wrap;padding:10px 14px 0;background:#fff}
.sb-quick button{background:#eaeef6;color:var(--sb-main);border:0;padding:6px 13px;border-radius:999px;font:600 .82rem system-ui,sans-serif;cursor:pointer}
.sb-quick button:hover{background:#dbe3f3}
.sb-wa{background:#25d366;color:#06361b;padding:6px 13px;border-radius:999px;font:700 .82rem system-ui,sans-serif;text-decoration:none}
.sb-in{display:flex;gap:8px;padding:12px 14px 14px;background:#fff}
.sb-in input{flex:1;min-width:0;padding:12px 16px;border:1.5px solid #d5dbe5;border-radius:999px;font:inherit;color:#1f2933;background:#fff}
.sb-in input:focus{outline:none;border-color:var(--sb-main)}
.sb-in button{background:var(--sb-main);color:#fff;border:0;border-radius:999px;padding:0 20px;font:700 .95rem system-ui,sans-serif;cursor:pointer}
.sb-in button:disabled{opacity:.5;cursor:default}
@media(max-width:480px){.sb-btn{right:14px;bottom:14px}.sb-panel{right:12px;bottom:84px;height:calc(100dvh - 108px)}}
@media(prefers-reduced-motion:reduce){.sb-panel,.sb-typing i{animation:none}}
`
