import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BDR - Roofus Tech Specs",
  description: "Complete hardware, sensor, and operational specifications for the Roofus autonomous roof inspection robot with GPR, thermal, and LiDAR sensors.",
}

export default function RoofusTechSpecsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
