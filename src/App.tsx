import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Jul_18__2026_at_01_58_32_PM-removebg-preview-1.png"
import phoneImg from "@/imports/image-7.png"
import heroBg from "@/imports/Copilot_20260719_191310.png"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black font-sans">

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <div className="flex items-center gap-2">
            <img src={logo} alt="TerminalX logo" className="w-8 h-8 object-contain" />
            <span className="text-white text-base font-bold tracking-wide">TerminalX</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-white text-sm hover:text-gray-300 transition-colors">Features</Link>
            <Link to="/privacy" className="text-white text-sm hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <a href="https://github.com/DevTerminalX" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300 transition-colors">GitHub</a>
            <Link to="/download" className="text-white text-sm hover:text-gray-300 transition-colors">Download</Link>
          </div>
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 relative"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
              style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-300"
              style={menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
              style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: menuOpen ? "240px" : "0px", opacity: menuOpen ? 1 : 0 }}
        >
          <div className="flex flex-col px-6 pb-4 pt-2 gap-1 border-t border-gray-800">
            {[
              { label: "Features", to: "/features" },
              { label: "Privacy Policy", to: "/privacy" },
              { label: "GitHub", to: "https://github.com/DevTerminalX" },
              { label: "Download", to: "/download" },
            ].map(({ label, to }, i) =>
              to.startsWith("/") ? (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-sm py-3 border-b border-gray-800 last:border-b-0 hover:text-gray-300"
                  style={{
                    animation: menuOpen ? `menuItemIn 300ms ease-in-out ${i * 50}ms both` : "none",
                    opacity: menuOpen ? undefined : 0,
                  }}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={to}
                  onClick={() => setMenuOpen(false)}
                  target={to.startsWith("http") ? "_blank" : undefined}
                  rel={to.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-white text-sm py-3 border-b border-gray-800 last:border-b-0 hover:text-gray-300"
                  style={{
                    animation: menuOpen ? `menuItemIn 300ms ease-in-out ${i * 50}ms both` : "none",
                    opacity: menuOpen ? undefined : 0,
                  }}
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative text-white text-center px-6 pt-28 pb-36 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">TerminalX</h1>
          <p className="text-gray-400 text-sm md:text-base mb-10 max-w-md mx-auto">
            TerminalX brings a fast, lightweight Alpine Linux shell to your Android device — fully local, no servers, just real Linux power.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/download" className="px-7 py-3 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors rounded-sm">
              Download TerminalX
            </Link>
            <a href="https://github.com/DevTerminalX" target="_blank" rel="noopener noreferrer" className="px-7 py-3 border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors rounded-sm">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features section — two column */}
      <section className="bg-[#111] px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Text left */}
          <div className="flex-1 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Lightweight Linux on Your Device</h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-400">
              TerminalX gives you a fast, lightweight Alpine Linux environment running directly on your device — no remote connections, no extra setup. Just open the app and you're inside a real Linux shell with apk packages, your choice of shells, and all the tools you need to script, build, and tinker. It's simple, portable, and designed for people who want real Linux power without the overhead.
            </p>
          </div>

          {/* Phone image right */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <img
              src={phoneImg}
              alt="TerminalX on Android"
              className="w-56 md:w-72 object-contain"
            />
          </div>

        </div>
      </section>

      {/* About TerminalX */}
      <section className="bg-[#111] px-6 md:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-800 pt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">About TerminalX</h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-3xl">
              TerminalX was created for people who want real Linux tools running directly on their device without relying on remote servers, heavy virtualization, or bloated systems. Alpine Linux provides a fast, minimal base that makes TerminalX feel instant and efficient, giving developers and tinkerers a simple environment they can trust. The goal was to build a terminal that stays lightweight, opens quickly, and gives you full control — a portable Linux workspace that works anywhere, anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Download Now */}
      <section className="bg-black px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Download Now</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-2xl mb-10">
            Download TerminalX and get a fast, lightweight Alpine Linux shell running directly on your device. No setup, no servers — just real Linux power instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://cloudzip.base44.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors rounded-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.93V15H9l3-4 3 4h-2v1.93A8 8 0 0 1 4 12a7.93 7.93 0 0 1 .21-1.81L8 14V15a2 2 0 0 0 2 2zm6.79-2.19L14 10V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1l-4.79 3.81A8 8 0 0 1 20 12a7.93 7.93 0 0 1-.21 1.74z"/>
              </svg>
              Get on Cloudzip
            </a>
            <a href="https://github.com/DevTerminalX/TerminalX-Download" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors rounded-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Get on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 px-8 md:px-20 py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Logo + name */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="TerminalX logo" className="w-14 h-14 object-contain" />
            <span className="text-white text-xl font-bold tracking-wide">TerminalX</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-8 text-gray-400 text-base">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/download" className="hover:text-white transition-colors">Download</Link>
          </div>

          {/* Social icons */}
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
