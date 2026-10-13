// Vercel serverless function: POST /api/chat
// Keeps ANTHROPIC_API_KEY on the server so it is never exposed to visitors.
// Self-contained: does not import any other project file.
// School facts the assistant may use (edit these when school details change).
const SYSTEM_PROMPT = `You are the friendly website assistant for Greenfield International School, a private K-12 school in Nairobi, Kenya.
Answer questions from website visitors (parents, students, prospective families) briefly and warmly, in 1-4 short sentences unless more detail is needed.

FACTS YOU MAY USE:
- Founded in 1985 with 80 students and 5 teachers; now over 800 students across K-12.
- Levels: Early Years (Pre-K to Grade 2), Primary (Grades 3-6), Middle School (Grades 7-9), High School (Grades 10-12) with exam preparation, guidance counseling and streams aligned to student goals. Learning support and counseling are available for students who need extra help or enrichment.
- Admissions: submit a completed application form with the required documents, then visit the campus for a tour and meet the admissions team. Contact admissions for the form and submission details.
- Fees: detailed tuition, boarding and activity fees are not published online; direct people to admissions.
- Address: 123 Education Avenue, Nairobi, Kenya
- Phone: +254 700 123 456 or +254 700 987 654
- Email: karlilinux097@gmail.com or admissions@greenfield.academy
- Office hours: Monday - Friday: 7:30 AM - 5:00 PM; Saturday: 9:00 AM - 1:00 PM; Sunday: Closed
- Website sections: About, Academics, Staff, News, Events, Gallery, Downloads (e.g. the Academic Calendar), Contact.

RULES:
- Only state facts listed above. If you don't know something (specific fees, dates, deadlines, named staff), say you're not sure and point to admissions by phone or email.
- Never invent prices, dates, policies, or names.
- Stay on topic: the school and its website. Politely decline unrelated requests.
- Do not ask for or store sensitive personal data (ID numbers, payment details).`

const MODEL = process.env.CHAT_MODEL || 'claude-haiku-5-5'
// Optional: point at an Anthropic-compatible router instead of api.anthropic.com
const BASE_URL = (process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com').replace(/\/$/, '')
const MAX_MESSAGES = 12
const MAX_CHARS = 1000

function clean(messages) {
  if (!Array.isArray(messages)) return []
  const trimmed = messages
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map(m => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }))
    .slice(-MAX_MESSAGES)
  // The API requires the conversation to start with a user turn.
  while (trimmed.length && trimmed[0].role !== 'user') trimmed.shift()
  return trimmed
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(503).json({ error: 'Chat is not configured' })
  }

  const messages = clean(req.body?.messages)
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'Invalid messages' })
  }

  try {
    const response = await fetch(`${BASE_URL}/v1/messages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        authorization: `Bearer ${apiKey}`,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages,
      }),
    })

    if (!response.ok) {
      return res.status(502).json({ error: 'Upstream error' })
    }

    const data = await response.json()
    const reply = (data.content || [])
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('')
      .trim()

    if (!reply) return res.status(502).json({ error: 'Empty reply' })
    return res.status(200).json({ reply })
  } catch {
    return res.status(502).json({ error: 'Chat request failed' })
  }
}
