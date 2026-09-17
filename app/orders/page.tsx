import DashboardShell from "@/components/dashboard-shell";
import { orderFeed } from "@/lib/mock-data";

export default function OrdersPage() {
  return (
    <DashboardShell title="Orders" subtitle="Monitor inbound purchase orders, ETAs, and exceptions.">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <table className="min-w-full text-left">
          <thead className="border-b border-slate-200 text-sm text-slate-500">
            <tr>
              <th className="pb-3 font-medium">PO</th>
              <th className="pb-3 font-medium">Supplier</th>
              <th className="pb-3 font-medium">ETA</th>
              <th className="pb-3 font-medium">Value</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderFeed.map((order) => (
              <tr key={order.id} className="border-b border-slate-100 last:border-none">
                <td className="py-4 font-medium text-slate-800">{order.id}</td>
                <td className="py-4 text-slate-600">{order.supplier}</td>
                <td className="py-4 text-slate-600">{order.eta}</td>
                <td className="py-4 text-slate-600">{order.value}</td>
                <td className="py-4">
                  <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${order.status === "Delayed" ? "bg-red-100 text-red-700" : order.status === "In transit" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                    {order.status}
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
