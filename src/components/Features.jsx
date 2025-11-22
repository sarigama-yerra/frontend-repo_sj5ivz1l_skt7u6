import { Clock, ListChecks, BarChart3, Brain } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Automatic time capture",
    desc: "Log sessions with one click and let FocusFlow handle the rest — start, pause, and resume effortlessly.",
  },
  {
    icon: ListChecks,
    title: "Activity tagging",
    desc: "Tag sessions by activity or project to see where your energy actually goes.",
  },
  {
    icon: BarChart3,
    title: "Daily summaries",
    desc: "Get a clean end‑of‑day report with totals, patterns, and highlights you can act on.",
  },
  {
    icon: Brain,
    title: "Smart insights",
    desc: "Identify your peak hours and distraction triggers to plan a better tomorrow.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to stay on track</h2>
          <p className="mt-3 text-slate-300">Simple controls, powerful clarity — designed for makers who value deep work.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-300 grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
