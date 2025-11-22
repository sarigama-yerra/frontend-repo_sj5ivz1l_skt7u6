export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <Step n="1" title="Start a session" desc="Pick an activity, press start, and sink into focus. Pause anytime — we keep time for you." />
          <Step n="2" title="Tag as you go" desc="Add tags like Writing, Coding, or Meetings so your summary groups time meaningfully." />
          <Step n="3" title="Review your day" desc="Get a beautiful end‑of‑day report with totals, streaks, and insights you can act on." />
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 text-white grid place-items-center font-semibold">{n}</div>
      <h3 className="mt-4 text-white font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
    </div>
  );
}
