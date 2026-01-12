import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDR - Roof Inspections",
  icons: "/BDR.jpg",
};

export default function RoofLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}