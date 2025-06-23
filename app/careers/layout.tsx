import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDR – Careers",
  icons: "/BDR.jpg",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}