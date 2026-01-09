import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - Commercial Flat Roofing Contractors",
  description: "Roof Inspection-as-a-Service for commercial contractors to stabilize revenue, strengthen client relationships, and differentiate with premium diagnostics.",
}

export default function RoofingContractorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
