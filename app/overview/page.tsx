import DashboardShell from "@/components/dashboard-shell";
import SupplyDashboard from "@/components/supply-dashboard";
import { alertFeed, recommendationFeed, supplierHealth, supplyMetrics } from "@/lib/mock-data";

export default function OverviewPage() {
  return <DashboardShell title="Overview" subtitle="A live view of supplier risk, inventory posture, and operational exceptions."><SupplyDashboard metrics={supplyMetrics} suppliers={supplierHealth} alerts={alertFeed} recommendations={recommendationFeed} /></DashboardShell>;
}
