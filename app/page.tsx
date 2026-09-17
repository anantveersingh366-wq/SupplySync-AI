import SupplyDashboard from "@/components/supply-dashboard";
import {
  alertFeed,
  recommendationFeed,
  supplierHealth,
  supplyMetrics,
} from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <SupplyDashboard
        metrics={supplyMetrics}
        suppliers={supplierHealth}
        alerts={alertFeed}
        recommendations={recommendationFeed}
      />
    </main>
  );
}
