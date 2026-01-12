import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - Sample Reports",
  description: "Download example BDR inspection reports to see how our diagnostics translate into clear, actionable insights for building decisions.",
}

export default function SampleReportsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
