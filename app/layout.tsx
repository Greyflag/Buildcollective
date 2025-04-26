import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CustomCursor from "@/components/ui/custom-cursor"
import ParticleBackground from "@/components/ui/particle-background"
import { ThemeProvider } from "@/components/theme-provider"

// Font setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

export const metadata: Metadata = {
  title: "The Build Collective | Innovative Digital Solutions",
  description:
    "The Build Collective creates cutting-edge digital experiences, connecting innovators and pushing technological boundaries.",
  keywords: "build collective, digital innovation, web development, interactive design, portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Add CustomCursor and ParticleBackground to all pages */}
          <CustomCursor />
          <ParticleBackground />

          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
