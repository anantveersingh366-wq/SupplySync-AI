"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/inventory", label: "Inventory" },
  { href: "/orders", label: "Orders" },
  { href: "/insights", label: "AI Insights" },
];

export default function DashboardShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-slate-200 bg-slate-950 p-6 text-slate-200 md:block">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              SupplySync AI
            </p>
            <h1 className="mt-3 text-2xl font-bold text-white">Command Center</h1>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-sky-500/20 text-white ring-1 ring-sky-500/50"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-sky-400" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Resilience score</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-bold text-white">87</span>
              <span className="mb-1 text-sm text-emerald-400">+8.2%</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8">
          <header className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Operations</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">{title}</h2>
              <p className="text-sm text-slate-500">{subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                Export report
              </button>
              <button className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-600/20">
                New scenario
              </button>
            </div>
          </header>

          {children}
        </main>
      </div>
    </div>
  );
}
