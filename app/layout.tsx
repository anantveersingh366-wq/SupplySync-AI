import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SupplySync AI",
  description: "AI-powered supply risk and operations dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
