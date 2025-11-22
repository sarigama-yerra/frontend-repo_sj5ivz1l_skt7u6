import { Menu, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-950 grid place-items-center">
                  <CheckCircle2 className="h-5 w-5 text-teal-300" />
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">FocusFlow</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#cta" className="hover:text-white transition">Get started</a>
            </nav>

            <button onClick={() => setOpen(v => !v)} className="md:hidden text-slate-200 hover:text-white p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-2 text-slate-300">
              <a onClick={() => setOpen(false)} href="#features" className="block hover:text-white">Features</a>
              <a onClick={() => setOpen(false)} href="#how" className="block hover:text-white">How it works</a>
              <a onClick={() => setOpen(false)} href="#cta" className="block hover:text-white">Get started</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
