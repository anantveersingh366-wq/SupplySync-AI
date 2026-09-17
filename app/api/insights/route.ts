import { NextResponse } from "next/server";
import { aiInsightCards, alertFeed, recommendationFeed, supplierHealth, supplyMetrics } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    summary: {
      riskIndex: "41 / 100",
      inventoryHealth: "87%",
      openDisruptions: 9,
      recommendations: recommendationFeed.length,
    },
    metrics: supplyMetrics,
    suppliers: supplierHealth,
    alerts: alertFeed,
    recommendations: recommendationFeed,
    insights: aiInsightCards,
  });
}
