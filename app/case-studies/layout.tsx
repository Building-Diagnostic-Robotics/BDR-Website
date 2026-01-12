import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - Case Studies",
  description: "Real-world examples of how BDR's autonomous inspections transformed building diagnostics for portfolio owners, contractors, and municipalities.",
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
