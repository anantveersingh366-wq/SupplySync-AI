import SupplyDashboard from "@/components/supply-dashboard";
import DashboardShell from "@/components/dashboard-shell";
import { alertFeed, recommendationFeed, supplierHealth, supplyMetrics } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <DashboardShell title="Overview" subtitle="End-to-end visibility across sourcing, logistics, and inventory risk.">
      <SupplyDashboard
        metrics={supplyMetrics}
        suppliers={supplierHealth}
        alerts={alertFeed}
        recommendations={recommendationFeed}
      />
    </DashboardShell>
  );
}
