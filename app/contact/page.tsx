import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Quick Update Daily",
  description:
    "Get in touch with Quick Update Daily for questions about our financial calculators or support. We're here to help with your financial planning needs.",
  alternates: {
    canonical: "https://quickupdatedaily.fun/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
