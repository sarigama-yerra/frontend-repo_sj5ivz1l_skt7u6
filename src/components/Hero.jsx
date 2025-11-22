import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-sky-500/10 to-teal-400/20 blur-3xl" />
        <div className="absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Track your day. Unlock your focus.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300"
            >
              FocusFlow captures your activities as you work and turns them into a clear daily summary — time spent, streaks, and insights to help you improve tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-900/20">
                Start tracking free
              </a>
              <a href="#features" className="text-slate-300 hover:text-white">See features</a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-teal-400/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Focus time" value="5h 12m" trend="+34%" />
                <Stat label="Tasks done" value="12" trend="+3" />
                <Stat label="Deep work" value="3 sessions" trend="+1" />
                <Stat label="Streak" value="7 days" trend="🔥" />
              </div>
              <div className="mt-6 rounded-xl bg-slate-800/60 p-4 border border-white/10">
                <p className="text-sm text-slate-400">Today’s summary</p>
                <p className="mt-1 text-slate-200">You focused for 5h 12m across 3 deep work sessions. Most productive between 10:00–12:00.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, trend }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/50 p-4">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
      <p className="text-xs text-teal-300">{trend}</p>
    </div>
  );
}
