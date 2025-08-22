import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import MainHeader from "@/components/ui/main-header"
import MainFooter from "@/components/ui/main-footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Quick Update Daily - Free Financial Calculators & Tools",
  description:
    "Calculate loan EMI, insurance premiums, and mortgage payments with Quick Update Daily's free online calculators. Professional financial tools for smart decisions.",
  generator: "Quick Update Daily",
  keywords:
    "loan calculator, EMI calculator, insurance calculator, mortgage calculator, financial tools, Quick Update Daily",
  authors: [{ name: "Quick Update Daily", url: "https://quickupdatedaily.fun" }],
  creator: "Quick Update Daily",
  publisher: "Quick Update Daily",
  robots: "index, follow",
  openGraph: {
    title: "Quick Update Daily - Free Financial Calculators & Tools",
    description: "Calculate loan EMI, insurance premiums, and mortgage payments with our free online calculators.",
    url: "https://quickupdatedaily.fun",
    siteName: "Quick Update Daily",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Update Daily - Free Financial Calculators & Tools",
    description: "Calculate loan EMI, insurance premiums, and mortgage payments with our free online calculators.",
  },
    icons: {
    icon: "/fav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://quickupdatedaily.fun" />
      </head>
      <body className="font-sans">
        <MainHeader/>
        {children}
        <MainFooter/>
        </body>

    </html>
  )
}
