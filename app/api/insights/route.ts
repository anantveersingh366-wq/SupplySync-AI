import { NextResponse } from "next/server";
import { alertFeed, recommendationFeed, supplierHealth, supplyMetrics } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    summary: {
      riskIndex: "41 / 100",
      inventoryHealth: "87%",
      openDisruptions: 9,
    },
    metrics: supplyMetrics,
    suppliers: supplierHealth,
    alerts: alertFeed,
    recommendations: recommendationFeed,
  });
}
