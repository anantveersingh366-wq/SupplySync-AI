import DashboardShell from "@/components/dashboard-shell";
import { aiInsightCards } from "@/lib/mock-data";

export default function InsightsPage() {
  return (
    <DashboardShell title="AI Insights" subtitle="Actionable recommendations powered by operational data patterns.">
      <div className="grid gap-6 md:grid-cols-3">
        {aiInsightCards.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-600">{item.score}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
