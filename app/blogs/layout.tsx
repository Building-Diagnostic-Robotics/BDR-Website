import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDR – Blogs",
  icons: "/BDR.jpg",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
