import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - FAQs",
  description: "Frequently asked questions about BDR's autonomous inspection technology, pricing, operations, and partnerships.",
}

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
