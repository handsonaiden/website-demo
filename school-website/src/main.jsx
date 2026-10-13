import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chatbot from './Chatbot.jsx'

// Enables scroll-reveal styling only when JavaScript is available, so the
// content stays fully visible for no-JS visitors and crawlers.
document.documentElement.classList.add('js-reveal')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chatbot />
  </StrictMode>,
)
