//app/layout.tsx
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import 'katex/dist/katex.min.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BDR - Home Page",
  icons: '/BDR.jpg',
  description:
    "Advanced robotic roof inspections that save 50-65% compared to traditional methods. Serving businesses nationwide with 90% accurate moisture detection.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}

import './globals.css'