import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - About",
  description: "Learn about BDR's mission to redefine building diagnostics with autonomous, AI-powered roof and concrete inspections.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
