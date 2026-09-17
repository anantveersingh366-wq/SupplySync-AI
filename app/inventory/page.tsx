import DashboardShell from "@/components/dashboard-shell";
import { inventoryItems } from "@/lib/mock-data";

export default function InventoryPage() {
  return (
    <DashboardShell title="Inventory" subtitle="Monitor buffer stock, reorder thresholds, and critical SKUs.">
      <div className="grid gap-6 lg:grid-cols-2">
        {inventoryItems.map((item) => (
          <div key={item.sku} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.sku}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.product}</h3>
              </div>
              <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${item.status === "Critical" ? "bg-red-100 text-red-700" : item.status === "Watch" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                {item.status}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div>
                <div className="text-slate-400">Warehouse</div>
                <div className="mt-1 font-medium text-slate-800">{item.warehouse}</div>
              </div>
              <div>
                <div className="text-slate-400">On hand</div>
                <div className="mt-1 font-medium text-slate-800">{item.onHand}</div>
              </div>
              <div>
                <div className="text-slate-400">Reorder</div>
                <div className="mt-1 font-medium text-slate-800">{item.reorderPoint}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
