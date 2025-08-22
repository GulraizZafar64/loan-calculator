import HomePageClient from "./HomePageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quick Update Daily - Free Financial Calculators & Tools",
  description:
    "Calculate loan EMI, insurance premiums, and mortgage payments with Quick Update Daily's free online calculators. Professional financial tools for smart decisions.",
  openGraph: {
    title: "Quick Update Daily - Free Financial Calculators & Tools",
    description: "Calculate loan EMI, insurance premiums, and mortgage payments with our free online calculators.",
    url: "https://quickupdatedaily.fun",
  },
  alternates: {
    canonical: "https://quickupdatedaily.fun",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
