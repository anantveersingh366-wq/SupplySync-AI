"use client";

import { Alert, Metric, Recommendation, Supplier } from "@/lib/mock-data";

type SupplyDashboardProps = {
  metrics: Metric[];
  suppliers: Supplier[];
  alerts: Alert[];
  recommendations: Recommendation[];
};

const riskStyles: Record<Supplier["risk"], string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-emerald-100 text-emerald-700",
};

export default function SupplyDashboard({
  metrics,
  suppliers,
  alerts,
  recommendations,
}: SupplyDashboardProps) {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-slate-500">{metric.title}</div>
              <span
                className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                  metric.positive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                }`}
              >
                {metric.delta}
              </span>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{metric.value}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Supplier health</h3>
            <span className="text-sm text-slate-500">Updated 12 min ago</span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-slate-200">
                <tr className="text-sm text-slate-500">
                  <th className="pb-3 font-medium">Supplier</th>
                  <th className="pb-3 font-medium">Region</th>
                  <th className="pb-3 font-medium">Risk</th>
                  <th className="pb-3 font-medium">Health</th>
                  <th className="pb-3 font-medium">Lead time</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier) => (
                  <tr key={supplier.id} className="border-b border-slate-100 last:border-none">
                    <td className="py-4">
                      <div className="font-medium text-slate-800">{supplier.name}</div>
                      <div className="text-sm text-slate-500">{supplier.status}</div>
                    </td>
                    <td className="py-4 text-slate-600">{supplier.region}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${riskStyles[supplier.risk]}`}>
                        {supplier.risk}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-28 rounded-full bg-slate-200">
                          <div className="h-2 rounded-full bg-sky-500" style={{ width: `${supplier.health}%` }} />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{supplier.health}%</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-600">{supplier.leadTime} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">AI alerts</h3>
            <div className="mt-5 space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-medium text-slate-800">{alert.title}</h4>
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                        alert.severity === "High"
                          ? "bg-red-100 text-red-700"
                          : alert.severity === "Medium"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{alert.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">Recommendations</h3>
            <div className="mt-5 space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                  <h4 className="font-medium text-slate-800">{rec.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{rec.summary}</p>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-700">
                    Impact: {rec.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
