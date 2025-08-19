// app/layout.tsx
import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"
import "katex/dist/katex.min.css"
import "./globals.css"  // keep one globals import

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BDR - Home Page",
  icons: "/BDR.jpg",
  description:
    "Advanced robotic roof inspections that save 50-65% compared to traditional methods. Serving businesses nationwide with 90% accurate moisture detection.",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* GTM first */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />

        {children}
        <Toaster position="bottom-center" />

        {/* temporary check – remove after verifying */}
        <Script id="gtm-check" strategy="afterInteractive">
          {`console.log('GTM ID at runtime:', '${process.env.NEXT_PUBLIC_GTM_ID || 'undefined'}')`}
        </Script>
      </body>
    </html>
  )
}