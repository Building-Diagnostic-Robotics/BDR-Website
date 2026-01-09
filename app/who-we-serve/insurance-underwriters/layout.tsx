import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - Insurance Underwriters",
  description: "Roof Inspection-as-a-Service for insurance and warranty underwriters to verify building condition, detect hidden risks, and standardize risk assessment.",
}

export default function InsuranceUnderwritersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
