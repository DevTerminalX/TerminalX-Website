import { Link } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Jul_18__2026_at_01_58_32_PM-removebg-preview-1.png"
import heroBg from "@/imports/Copilot_20260719_191310.png"

const options = [
  {
    title: "GitHub Releases",
    description: "Download the latest APK directly from the official GitHub releases page. Always up to date with the newest builds.",
    label: "Get on GitHub",
    href: "https://github.com/DevTerminalX/TerminalX-Download",
    primary: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    title: "Cloudzip",
    description: "Get TerminalX through Cloudzip — an alternative distribution platform for easy access and installation.",
    label: "Get on Cloudzip",
    href: "https://cloudzip.base44.app",
    primary: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.93V15H9l3-4 3 4h-2v1.93A8 8 0 0 1 4 12a7.93 7.93 0 0 1 .21-1.81L8 14V15a2 2 0 0 0 2 2zm6.79-2.19L14 10V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1l-4.79 3.81A8 8 0 0 1 20 12a7.93 7.93 0 0 1-.21 1.74z" />
      </svg>
    ),
  },
]

const steps = [
  { step: "01", title: "Download the APK", body: "Choose one of the download options above and grab the latest TerminalX APK." },
  { step: "02", title: "Allow Unknown Sources", body: "On your Android device, go to Settings → Security and enable installation from unknown sources." },
  { step: "03", title: "Install the APK", body: "Open the downloaded file and follow the on-screen prompts to install TerminalX." },
  { step: "04", title: "Launch & Explore", body: "Open TerminalX and start exploring your Alpine Linux shell directly on your device." },
]

export default function Download() {
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
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Free & open source</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Download TerminalX</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Get TerminalX on your Android device and start using a real Alpine Linux shell — no servers, no setup.
          </p>
        </div>
      </section>

      {/* Download options */}
      <section className="bg-[#0a0a0a] px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-10">Choose a Download Source</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-800">
            {options.map(({ title, description, label, href, primary, icon }) => (
              <div key={title} className="bg-[#0a0a0a] p-8 flex flex-col gap-5 hover:bg-[#111] transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400">
                  {icon}
                </div>
                <div>
                  <h3 className="text-white text-base font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors rounded-sm ${
                    primary
                      ? "bg-white text-black hover:bg-gray-200"
                      : "border border-white text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation steps */}
      <section className="bg-[#111] px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-10">How to Install</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-800">
            {steps.map(({ step, title, body }) => (
              <div key={step} className="bg-[#111] p-8 flex flex-col gap-3 hover:bg-[#161616] transition-colors">
                <span className="text-xs font-mono text-gray-600 tracking-widest">{step}</span>
                <h3 className="text-white text-base font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
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
          <div className="flex items-center gap-6">
            <a href="https://x.com/DevTerminalX" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-gray-400 hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a href="https://github.com/DevTerminalX" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
