import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lumina Tax & Advisory | Modern Tax Strategy for Tech Founders",
  description:
    "Cutting-edge tax optimization for tech founders and growth-focused businesses. Led by Marcus Chen, CPA. Direct access, strategic thinking, real results.",
  openGraph: {
    title: "Lumina Tax & Advisory | Modern Tax Strategy for Tech Founders",
    description:
      "Cutting-edge tax optimization for tech founders and growth-focused businesses. Led by Marcus Chen, CPA.",
    type: "website",
    locale: "en_US",
    siteName: "Lumina Tax & Advisory",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
