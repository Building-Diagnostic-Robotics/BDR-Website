import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - Building Portfolio Owners",
  description: "Roof Inspection-as-a-Service for building portfolio owners seeking portfolio-level visibility, compliance readiness, and data-driven capital planning.",
}

export default function PortfolioOwnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
