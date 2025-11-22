export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-600/30 via-sky-500/20 to-teal-400/30 p-10 backdrop-blur relative overflow-hidden">
          <div className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />

          <div className="relative">
            <h3 className="text-white text-2xl sm:text-3xl font-bold">Be ready for a clearer tomorrow</h3>
            <p className="mt-2 text-slate-200 max-w-2xl">Join the waitlist to get early access. We’ll send you a simple demo so you can preview your daily summary in minutes.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input type="email" required placeholder="you@work.com" className="flex-1 rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50" />
              <button className="inline-flex items-center justify-center rounded-xl bg-white/90 hover:bg-white text-slate-900 font-medium px-5 py-3 transition">Join waitlist</button>
            </form>

            <p className="mt-3 text-xs text-slate-300">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
