import type React from "react"
import type { Metadata } from "next"
import { DotGothic16, Space_Grotesk } from "next/font/google"
import "./globals.css"

const dotGothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dotgothic",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Abhijit - Data Scientist & AI Engineer",
  description: "Portfolio of Abhijit - Transforming data into decisions through AI and machine learning.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dotGothic.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
