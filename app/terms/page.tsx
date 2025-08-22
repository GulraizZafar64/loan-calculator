import { Calculator } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - Quick Update Daily",
  description:
    "Read Quick Update Daily's terms and conditions for using our free financial calculators and tools. Important legal information for users.",
  openGraph: {
    title: "Terms & Conditions - Quick Update Daily",
    description: "Read Quick Update Daily's terms and conditions for using our free financial calculators and tools.",
    url: "https://quickupdatedaily.fun/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <head>
        <link rel="canonical" href="https://quickupdatedaily.fun/terms" />
      </head>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Quick Update Daily</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/calculators" className="text-sm font-medium hover:text-primary transition-colors">
              Calculators
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Quick Update Daily, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily use Quick Update Daily for personal, non-commercial transitory
              viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The information and calculations provided by Quick Update Daily are for educational and informational
              purposes only. While we strive for accuracy, we make no warranties about the completeness, reliability,
              and accuracy of this information.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Results should be used as estimates only</li>
              <li>Always consult with qualified financial professionals for important decisions</li>
              <li>We are not responsible for any financial decisions made based on our calculations</li>
              <li>Actual loan terms, insurance rates, and other financial products may vary significantly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall Quick Update Daily or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Quick Update Daily's website, even if Quick Update Daily or a Quick
              Update Daily authorized representative has been notified orally or in writing of the possibility of such
              damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of
              liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Materials</h2>
            <p className="text-muted-foreground mb-4">
              The materials appearing on Quick Update Daily's website could include technical, typographical, or
              photographic errors. Quick Update Daily does not warrant that any of the materials on its website are
              accurate, complete, or current. Quick Update Daily may make changes to the materials contained on its
              website at any time without notice. However, Quick Update Daily does not make any commitment to update the
              materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <p className="text-muted-foreground mb-4">
              Quick Update Daily has not reviewed all of the sites linked to our website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by Quick Update
              Daily of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="text-muted-foreground mb-4">
              Quick Update Daily may revise these terms of service for its website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
              submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:support@quickupdatedaily.fun" className="text-primary hover:underline">
                support@quickupdatedaily.fun
              </a>{" "}
              or through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Quick Update Daily</span>
              </div>
              <p className="text-muted-foreground">Professional financial calculators for smart money decisions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Calculators</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/calculators/loan-emi" className="hover:text-primary">
                    Loan EMI
                  </Link>
                </li>
                <li>
                  <Link href="/calculators/car-insurance" className="hover:text-primary">
                    Car Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/calculators/mortgage" className="hover:text-primary">
                    Mortgage
                  </Link>
                </li>
                <li>
                  <Link href="/calculators/credit-card" className="hover:text-primary">
                    Credit Card
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/guides" className="hover:text-primary">
                    Financial Guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2025 Quick Update Daily. All rights reserved. Professional financial calculators for informed
              decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
