import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import Features from './Features'
import PrivacyPolicy from './PrivacyPolicy'
import Download from './Download'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

declare global { interface Window { __reactRoot?: ReturnType<typeof ReactDOM.createRoot> } }

const container = document.getElementById('root')!
if (!window.__reactRoot) {
  window.__reactRoot = ReactDOM.createRoot(container)
}

window.__reactRoot.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/features" element={<Features />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  </BrowserRouter>,
)
