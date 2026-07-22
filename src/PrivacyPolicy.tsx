import { Link } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Jul_18__2026_at_01_58_32_PM-removebg-preview-1.png"
import heroBg from "@/imports/Copilot_20260719_191310.png"

const sections = [
  {
    number: "1",
    title: "Overview",
    content: "TerminalX is a non‑commercial hobby project. It does not sell products, run ads, or collect personal data for business purposes.",
  },
  {
    number: "2",
    title: "Information We Collect",
    content: "TerminalX does not collect, store, or process any personal information. We do not use cookies, analytics, tracking scripts, advertising tools, or account systems.",
  },
  {
    number: "3",
    title: "App Downloads",
    content: "When you download the TerminalX APK or ZIP, no data is sent back to us. The app does not collect or transmit personal information and does not require an account.",
  },
  {
    number: "4",
    title: "Bug Reports",
    content: "Bug reports are submitted through a Google Form. Any information you enter is stored by Google Forms and used only to fix issues. We do not share or sell this information.",
  },
  {
    number: "5",
    title: "Third‑Party Services",
    content: "TerminalX may link to GitHub (for downloads) and Google Forms (for bug reports). These services have their own privacy policies.",
  },
  {
    number: "6",
    title: "Children's Privacy",
    content: "TerminalX is a hobby project and does not target children. We do not knowingly collect any data from minors.",
  },
  {
    number: "7",
    title: "Changes to This Policy",
    content: "If TerminalX ever adds accounts or new features, this policy may be updated. Because this is a non‑commercial hobby project, changes will remain simple and transparent.",
  },
  {
    number: "8",
    title: "Contact",
    email: "terminalx-development@outlook.com",
  },
]

export default function PrivacyPolicy() {
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
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Last updated: 20 July 2026 · Hobby / Non‑Commercial</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Privacy Policy</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            TerminalX respects your privacy. Here's exactly what we collect — and what we don't.
          </p>
        </div>
      </section>

      {/* Policy sections grid */}
      <section className="bg-[#0a0a0a] px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {sections.map(({ number, title, content, email }) => (
            <div key={number} className="bg-[#0a0a0a] p-8 flex flex-col gap-4 hover:bg-[#111] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 text-sm font-mono font-semibold">
                {number}
              </div>
              <h3 className="text-white text-base font-semibold">{title}</h3>
              {content && <p className="text-gray-400 text-sm leading-relaxed">{content}</p>}
              {email && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  For questions or issues, email:{" "}
                  <a href={`mailto:${email}`} className="text-white hover:text-gray-300 underline underline-offset-4 transition-colors">
                    {email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 px-8 md:px-20 py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="TerminalX logo" className="w-14 h-14 object-contain" />
            <span className="text-white text-xl font-bold tracking-wide">TerminalX</span>
          </div>
          <div className="flex items-center gap-8 text-gray-400 text-base">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/download" className="hover:text-white transition-colors">Download</Link>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://x.com/DevTerminalX" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-gray-400 hover:text-white transition-colors">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a href="https://github.com/DevTerminalX" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
