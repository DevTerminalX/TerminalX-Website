import { Link } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Jul_18__2026_at_01_58_32_PM-removebg-preview-1.png"
import heroBg from "@/imports/Copilot_20260719_191310.png"

const features = [
  {
    title: "Clean Terminal Interface",
    body: "A streamlined UI inspired by command-line environments, built for readability and ease of use.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    title: "Professional Visual Design",
    body: "A refined dark theme with balanced spacing, clean typography, and a modern layout suitable for professional applications.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Manually Crafted Background",
    body: "A structured code background designed intentionally to add depth without overwhelming the page.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Lightweight Architecture",
    body: "Built using pure HTML, CSS, and JavaScript. No frameworks, no unnecessary dependencies, and optimized for fast loading.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Custom Command System",
    body: "TerminalX includes a growing set of custom commands that simulate terminal-style interactions in a controlled, web-friendly environment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Human-Built Experience",
    body: "Every part of TerminalX is crafted manually, ensuring a deliberate, high-quality design without templates or auto-generated components.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Responsive Layout",
    body: "Designed to scale smoothly across desktops, laptops, and mobile devices while maintaining a consistent professional appearance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Brand-Aligned Identity",
    body: "TerminalX presents a unified, polished identity with consistent styling, tone, and visual direction across all pages.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <div className="min-h-screen bg-black font-sans">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TerminalX logo" className="w-8 h-8 object-contain" />
            <span className="text-white text-base font-bold tracking-wide">TerminalX</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-white text-sm hover:text-gray-300 transition-colors">Features</Link>
            <Link to="/privacy" className="text-white text-sm hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <a href="https://github.com/DevTerminalX" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300 transition-colors">GitHub</a>
            <Link to="/download" className="text-white text-sm hover:text-gray-300 transition-colors">Download</Link>
          </div>
        </div>
      </nav>

      {/* Hero banner */}
      <section
        className="relative text-white text-center px-6 py-24 overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">What makes it different</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Features</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            A modern, minimal terminal-inspired interface designed with clarity, consistency, and a human-crafted approach.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-[#0a0a0a] px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {features.map(({ title, body, icon }) => (
            <div key={title} className="bg-[#0a0a0a] p-8 flex flex-col gap-4 hover:bg-[#111] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400">
                {icon}
              </div>
              <h3 className="text-white text-base font-semibold">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 px-8 md:px-20 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="TerminalX logo" className="w-10 h-10 object-contain" />
            <span className="text-white text-lg font-bold tracking-wide">TerminalX</span>
          </Link>
          <div className="flex items-center gap-8 text-gray-400 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/download" className="hover:text-white transition-colors">Download</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
