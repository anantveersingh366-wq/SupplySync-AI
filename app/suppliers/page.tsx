import DashboardShell from "@/components/dashboard-shell";
import { supplierHealth } from "@/lib/mock-data";

export default function SuppliersPage() {
  return (
    <DashboardShell title="Suppliers" subtitle="Track supplier performance, criticality, and risk exposure.">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <table className="min-w-full text-left">
          <thead className="border-b border-slate-200 text-sm text-slate-500">
            <tr>
              <th className="pb-3 font-medium">Supplier</th>
              <th className="pb-3 font-medium">Region</th>
              <th className="pb-3 font-medium">Health</th>
              <th className="pb-3 font-medium">Fill rate</th>
              <th className="pb-3 font-medium">On-time</th>
              <th className="pb-3 font-medium">Risk</th>
            </tr>
          </thead>
          <tbody>
            {supplierHealth.map((supplier) => (
              <tr key={supplier.id} className="border-b border-slate-100 last:border-none">
                <td className="py-4">
                  <div className="font-medium text-slate-800">{supplier.name}</div>
                  <div className="text-sm text-slate-500">{supplier.status}</div>
                </td>
                <td className="py-4 text-slate-600">{supplier.region}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-sky-500" style={{ width: `${supplier.health}%` }} />
                    </div>
                    <span className="text-sm text-slate-700">{supplier.health}%</span>
                  </div>
                </td>
                <td className="py-4 text-slate-600">{supplier.fillRate}%</td>
                <td className="py-4 text-slate-600">{supplier.onTimeDelivery}%</td>
                <td className="py-4">
                  <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${supplier.risk === "High" ? "bg-red-100 text-red-700" : supplier.risk === "Medium" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                    {supplier.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
