// Vercel serverless function: POST /api/chat
// Keeps ANTHROPIC_API_KEY on the server so it is never exposed to visitors.
import { SYSTEM_PROMPT } from '../src/utils/chatKnowledge.js'

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
