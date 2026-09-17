import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-12 lg:px-12">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 font-bold text-white">
              S
            </div>
            <div>
              <div className="text-lg font-semibold">SupplySync AI</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500">
              Log in
            </Link>
            <Link href="/signup" className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400">
              Start free
            </Link>
          </div>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Built for resilient operations
            </div>
            <h1 className="max-w-xl text-5xl font-bold leading-tight text-white md:text-6xl">
              AI-powered supply chain visibility for modern operations teams.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Monitor supplier risk, anticipate inventory shortages, reduce lead-time stress, and turn operational chaos into predictable execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup" className="rounded-xl bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-400">
                Launch workspace
              </Link>
              <Link href="/login" className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-200 hover:border-slate-500">
                View demo
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl font-bold text-white">-41%</div>
                <div className="mt-1 text-sm text-slate-400">Risk exposure</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">87%</div>
                <div className="mt-1 text-sm text-slate-400">Inventory health</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">3.1x</div>
                <div className="mt-1 text-sm text-slate-400">Faster decisions</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-sky-950/30">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Coverage</p>
                  <h2 className="mt-2 text-xl font-bold text-white">Operational resilience</h2>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                  Healthy
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Supplier risk</span>
                    <span>41 / 100</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[41%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Inventory health</span>
                    <span>87%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[87%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Lead-time stress</span>
                    <span>18 days</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[72%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
