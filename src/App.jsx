import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import CTA from './components/CTA.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_top,rgba(59,130,246,0.07),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} FocusFlow — built for makers who value focus
      </footer>
    </div>
  )
}

export default App