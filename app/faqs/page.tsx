"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight, Phone, MapPin, Menu, X, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
import { QuoteForm } from "@/components/quote-form"

export default function FAQsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden"
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const faqSections = [
    {
      id: "basics",
      title: "Understanding BDR & Inspection-as-a-Service",
      faqs: [
        {
          id: "q1",
          question: "What is BDR?",
          answer:
            "BDR provides autonomous, AI-powered inspections for roofs and concrete structures. Our robots collect data with precision sensors, generating 3D digital reports that identify leaks, moisture, and hidden damage - delivered in 24–48 hours.",
        },
        {
          id: "q2",
          question: "How is this different from traditional inspection?",
          answer:
            "Traditional inspections are manual, disruptive, and depend on inconsistent field notes. BDR replaces that process with standardized robotic scans and digital reports - faster, safer, and far more accurate.",
        },
        {
          id: "q3",
          question: "Who is BDR designed for?",
          answer:
            "Building owners, facility managers, contractors, and insurers who need clear, defensible data for repairs, planning, or compliance. Perfect for portfolios where consistency and speed matter.",
        },
        {
          id: "q4",
          question: "Does BDR work on any building type?",
          answer:
            "Yes. Our systems are flexible enough for commercial, multifamily, institutional, and industrial assets - anywhere precision and minimal disruption are priorities.",
        },
      ],
    },
    {
      id: "operations",
      title: "How It Works & Operations",
      faqs: [
        {
          id: "q5",
          question: "How long does an inspection take?",
          answer:
            "Most scans are completed in a few hours, with digital results delivered in 24-48 hours. No shutdowns or tenant displacement needed.",
        },
        {
          id: "q6",
          question: "Does BDR require on-site supervision?",
          answer:
            "Minimal. After setup, our robots operate autonomously, even outside normal work hours. You can monitor progress remotely via our dashboard.",
        },
        {
          id: "q7",
          question: "What happens after the scan?",
          answer:
            "Our AI analyzes the data, producing visual reports with severity ratings, repair recommendations, and cost estimates - ready for insurance, maintenance, or capital planning.",
        },
        {
          id: "q8",
          question: "Can results integrate into my existing workflows?",
          answer:
            "Yes. Reports export directly into AutoCAD, Revit, or asset-management software for seamless use by design, maintenance, or finance teams.",
        },
      ],
    },
    {
      id: "accuracy",
      title: "Accuracy, Data & Performance",
      faqs: [
        {
          id: "q9",
          question: "How accurate is the technology?",
          answer:
            "Our sensors achieve over 90% accuracy in moisture and subsurface detection - validated on more than 2 million square feet of roofs and concrete. We'll gladly share sample reports from similar buildings.",
        },
        {
          id: "q10",
          question: "Is it safe for tenants and building operations?",
          answer:
            "Completely. BDR's process is non-invasive and quiet, performed from exterior access points or after hours. No drilling, dust, or downtime.",
        },
        {
          id: "q11",
          question: "Do I own the inspection data?",
          answer:
            "Yes - you own and control all scan results. BDR simply provides a secure cloud platform for access, sharing, and historical comparison.",
        },
      ],
    },
    {
      id: "cost",
      title: "Cost, ROI & Predictive Value",
      faqs: [
        {
          id: "q12",
          question: "How much does a BDR inspection cost?",
          answer:
            "Pricing depends on scope - roof area, number of floors, or portfolio size - but averages 50-65% less than traditional methods. We'll provide a detailed quote after a short discovery call.",
        },
        {
          id: "q13",
          question: "What's the payback?",
          answer:
            "Most clients recover costs within their first maintenance cycle through reduced callbacks, avoided rescans, and accelerated project approvals.",
        },
        {
          id: "q14",
          question: "Can BDR be scheduled on a recurring basis?",
          answer:
            "Yes. Many partners subscribe annually or biannually, turning inspections into proactive portfolio management rather than emergency response.",
        },
      ],
    },
    {
      id: "compliance",
      title: "Compliance, Insurance & Decarbonization",
      faqs: [
        {
          id: "q15",
          question: "Are BDR reports accepted by insurers or regulators?",
          answer:
            "Yes - our digital documentation is insurance-ready and aligns with common compliance frameworks, providing defensible, timestamped evidence.",
        },
        {
          id: "q16",
          question: "Does this support ESG or decarbonization goals?",
          answer:
            "Indirectly - BDR's data helps owners plan maintenance that extends building life and reduces embodied carbon from unnecessary replacements.",
        },
        {
          id: "q17",
          question: "Can results be used for rebate or risk-reduction programs?",
          answer:
            "In many jurisdictions, yes. Our team can connect your inspection data to local energy-efficiency or resilience incentive programs.",
        },
      ],
    },
    {
      id: "partnerships",
      title: "Partnerships & Support",
      faqs: [
        {
          id: "q18",
          question: "Who does BDR partner with?",
          answer:
            "We collaborate with contractors, distributors, and portfolio owners - supported by organizations such as NYSERDA, U.S. DOE, and Scale for Climate Tech.",
        },
        {
          id: "q19",
          question: "How do channel partnerships work?",
          answer:
            "Partners receive training, co-marketing, and revenue-share options through BDR's Channel Partner Program, helping them add Inspection-as-a-Service to their offerings.",
        },
        {
          id: "q20",
          question: "How do I get started?",
          answer:
            "Schedule a quick project review. We'll confirm fit, outline costs, and deliver a custom inspection plan - no commitment required.",
        },
      ],
    },
  ]

  const stats = [
    { label: "Average report delivery", value: "24-48 hours" },
    { label: "Typical cost reduction", value: "50-65% vs manual inspections" },
    { label: "Accuracy rate", value: "90%+ across 2M sq ft scanned" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Top Tagline Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs md:text-sm font-medium text-center md:text-left">
            Reimagining Building Diagnostics - How BDR Is Making the Future of Asset Intelligence Real Today.
          </p>
          <a href="/GPR-Former_ROOFER360_Whitepaper_v1.pdf" download>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 text-xs md:text-sm whitespace-nowrap"
            >
              Download Now <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </a>
        </div>
      </div>

      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onButtonClick={() => setShowQuoteModal(true)}
        activePage="/faqs"
        buttonText="Start My Inspection"
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 text-balance">
              Everything you need to know about BDR's autonomous inspection technology, pricing, and partnership
              opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.id} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 mb-8"
              >
                {section.title}
              </motion.h2>

              <div className="space-y-4">
                {section.faqs.map((faq, faqIndex) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-green-500 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex-1">{faq.question}</h3>
                        <ChevronDown
                          className={`h-5 w-5 text-green-600 transition-transform duration-300 flex-shrink-0 ${expandedFaq === faq.id ? "rotate-180" : ""}`}
                        />
                      </div>
                      <AnimatePresence>
                        {expandedFaq === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Callout boxes after sections 2 and 4
              {(sectionIndex === 1 || sectionIndex === 3) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Did you know?</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">{stat.label}:</p>
                          <p className="text-lg font-bold text-green-600">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )} */}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Still have questions?</h2>
            <p className="text-xl text-gray-600 mb-8 text-balance">
              Book a free project review and get personalized answers from our team.
            </p>
            <Link href="https://app.usemotion.com/meet/bilal-is/looking-forward-to-meeting-you?d=25" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg shadow-lg"
              >
                Book a Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 backdrop-blur-sm p-4">
          <div className="relative max-w-lg w-full">
            <button
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full p-2 transition-colors"
              onClick={() => setShowQuoteModal(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <QuoteForm />
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
