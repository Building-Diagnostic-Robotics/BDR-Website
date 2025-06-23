import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDR – Concrete Inspections",
  icons: "/BDR.jpg",
};

export default function ConcreteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}