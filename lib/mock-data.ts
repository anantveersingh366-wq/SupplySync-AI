export type RiskLevel = "High" | "Medium" | "Low";

export type Supplier = {
  id: string;
  name: string;
  region: string;
  risk: RiskLevel;
  health: number;
  leadTime: number;
  fillRate: number;
  onTimeDelivery: number;
  status: string;
};

export type Metric = {
  title: string;
  value: string;
  delta: string;
  positive: boolean;
};

export type Alert = {
  id: string;
  title: string;
  detail: string;
  severity: "High" | "Medium" | "Low";
};

export type Recommendation = {
  id: string;
  title: string;
  summary: string;
  impact: string;
};

export const supplyMetrics: Metric[] = [
  { title: "Supply Risk Index", value: "41 / 100", delta: "-8.4%", positive: true },
  { title: "Inventory Health", value: "87%", delta: "+4.1%", positive: true },
  { title: "Avg. Lead Time", value: "18 days", delta: "+2.3 days", positive: false },
  { title: "Open Disruptions", value: "09", delta: "-3 since last week", positive: true },
];

export const supplierHealth: Supplier[] = [
  {
    id: "S-101",
    name: "Apex Components",
    region: "Mexico",
    risk: "High",
    health: 58,
    leadTime: 22,
    fillRate: 79,
    onTimeDelivery: 71,
    status: "At-risk",
  },
  {
    id: "S-102",
    name: "NorthStar Packaging",
    region: "US",
    risk: "Medium",
    health: 76,
    leadTime: 14,
    fillRate: 88,
    onTimeDelivery: 82,
    status: "Stable",
  },
  {
    id: "S-103",
    name: "BlueHarbor Logistics",
    region: "Vietnam",
    risk: "High",
    health: 62,
    leadTime: 26,
    fillRate: 73,
    onTimeDelivery: 68,
    status: "Watchlist",
  },
  {
    id: "S-104",
    name: "Cascade Materials",
    region: "Germany",
    risk: "Low",
    health: 92,
    leadTime: 11,
    fillRate: 96,
    onTimeDelivery: 94,
    status: "Healthy",
  },
];

export const alertFeed: Alert[] = [
  {
    id: "A-1",
    title: "Port congestion in Veracruz",
    detail: "Inbound shipment delays are affecting electronics components.",
    severity: "High",
  },
  {
    id: "A-2",
    title: "Supplier fill rate decline",
    detail: "Apex Components dropped below 80% fill rate for the second week.",
    severity: "Medium",
  },
  {
    id: "A-3",
    title: "Weather disruption risk",
    detail: "Storm activity may affect Southeast Asian freight routes this week.",
    severity: "Medium",
  },
];

export const recommendationFeed: Recommendation[] = [
  {
    id: "R-1",
    title: "Activate alternate source for OEM-17",
    summary: "Diversify 35% of volume from Apex Components to Cascade Materials.",
    impact: "Reduce disruption risk by 22%",
  },
  {
    id: "R-2",
    title: "Rebalance safety stock",
    summary: "Increase buffer stock for semiconductors in the East region by 2 weeks.",
    impact: "Protect 3 critical SKUs",
  },
  {
    id: "R-3",
    title: "Prioritize vendor recovery call",
    summary: "Escalate supplier performance with NorthStar Packaging to avoid downtime.",
    impact: "Improve on-time delivery to 90%",
  },
];
