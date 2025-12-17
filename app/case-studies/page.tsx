"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle2, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { QuoteForm } from "@/components/quote-form"
import SampleReportModal from "@/components/sample-report-modal"

export default function CaseStudiesPage() {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)

  const caseStudies = [
    {
      id: 1,
      title: "Accelerating Asset Intelligence: BDR & Kingspan Pilot Partnership",
      shortDescription:
        "This concept explores BDR's collaboration with Kingspan to pilot the Rufus robotic diagnostics platform, highlighting how data-driven inspections create sales opportunities, improve maintenance efficiency, and deliver actionable reporting for the roofing and building materials provider.",
      image: "/robotic-roof-inspection-technology.jpg",
      outline: [
        {
          title: "Introduction",
          description: "Challenges faced by Kingspan and the need for modern diagnostic solutions",
        },
        {
          title: "Pilot Proposal",
          description: "How Rufus fits into Kingspan's product line and sales process",
        },
        {
          title: "Technology Deep Dive",
          description: "Autonomous scanning, digital reporting, and product-linked recommendations",
        },
        {
          title: "Client Perspective",
          description: "Kingspan's feedback on value, pilot rollout, and partnership potential (quotes from Kingspan)",
        },
        {
          title: "Outcomes",
          description: "Impact on sales enablement, contractor workflow, upsell opportunities",
        },
        {
          title: "Industry Implications",
          description: "Scalability, franchising, and white-label opportunities for suppliers",
        },
        {
          title: "Future Directions",
          description: "Expansion plans and lessons learned",
        },
      ],
    },
    {
      id: 2,
      title: "Smart Scanning for Complex Builds: BDR x Truebeck on Life Sciences Delivery",
      shortDescription:
        "This concept centers on BDR's collaboration with Truebeck, focusing on concrete scanning and digital mapping to streamline the retrofit and fit-out process for a major California life sciences project, highlighting problem-solving around embedded utilities and construction planning.",
      image: "/robotic-roof-inspection-technology.jpg",
      outline: [
        {
          title: "Background",
          description: "The complexity of post-tensioned concrete and risks for life science builds",
        },
        {
          title: "BDR Solution",
          description: "Sub-centimeter scanning, BIM/AutoCAD overlay deliverables, and cost-effective pricing",
        },
        {
          title: "Client Experience",
          description: "Truebeck's project goals, pain points, and interaction with BDR's team (quotes from Truebeck)",
        },
        {
          title: "Deliverable Impact",
          description: "Prevention of design errors, schedule gains, and safety improvements",
        },
        {
          title: "Comparison",
          description: "BDR's output vs. traditional manual scanning (cost, speed, rescan reduction)",
        },
        {
          title: "Industry Takeaway",
          description: "The future of robotic inspections and digital construction collaboration",
        },
      ],
    },
    {
      id: 3,
      title: "Reimagining Building Diagnostics: BDR's Inspection-as-a-Service Transformation",
      shortDescription:
        "This concept presents BDR's shift to a recurring, data-driven inspection-as-a-service (IaaS) model, detailing how clients (from municipal agencies to contractors) leverage ongoing, automated diagnostics for cost savings, operational clarity, and portfolio-wide asset management.",
      image: "/robotic-roof-inspection-technology.jpg",
      outline: [
        {
          title: "Introduction",
          description: "The evolution from transactional inspections to subscription-based diagnostics",
        },
        {
          title: "The BDR Approach",
          description: "Drop-and-play robotics, rapid turnaround, and comprehensive digital records",
        },
        {
          title: "Customer Voices",
          description: "Feedback and value perceived by clients (including Kingspan and Truebeck perspectives)",
        },
        {
          title: "Core Benefits",
          description: "Cost savings, project speed, preventative maintenance, and insurance advantages",
        },
        {
          title: "Deployment Models",
          description: "Transactional vs. subscription; channel/franchise partnerships",
        },
        {
          title: "Broader Perspective",
          description: "The strategic upside for building owners, managers, and suppliers",
        },
        {
          title: "Conclusion",
          description: "Market disruption and BDR's role as a trusted intelligence provider",
        },
      ],
    },
  ]

  const toggleStudy = (id: number) => {
    setExpandedStudy(expandedStudy === id ? null : id)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden"
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Top Tagline Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs md:text-sm font-medium text-center md:text-left">
            Reimagining Building Diagnostics — How BDR Is Making the Future of Asset Intelligence Real Today.
          </p>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 text-xs md:text-sm whitespace-nowrap"
            onClick={() => setShowReportModal(true)}
          >
            Download Now <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Main Navbar */}
      {!mobileMenuOpen && (
        <header
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-white/50 backdrop-blur-sm"
          }`}
        >
          <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <div className="relative bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-500 rounded-lg blur-lg opacity-50 z-0" />
                <img src="/BDR.jpg" alt="BDR Logo" className="h-16 w-16 rounded-lg z-10" />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8 ml-12">
              <div className="relative group">
                <button className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group flex items-center">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <Link href="/solutions/roof" className="block px-4 py-3 text-gray-900 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-t-lg">Roof Inspections</Link>
                  <Link href="/solutions/concrete" className="block px-4 py-3 text-gray-900 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-b-lg">Concrete Inspections</Link>
                </div>
              </div>

              <Link href="/partnerships/roofing" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
                Channel Partners
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="/about" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              <div className="relative group">
                <button className="relative text-sm font-medium text-gray-900 hover:text-green-600 transition-colors flex items-center">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-green-500" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <Link href="/blogs" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-t-lg">Blogs</Link>
                  <Link href="/case-studies" className="block px-4 py-3 text-green-600 bg-gray-50 font-medium rounded-md">Case Studies</Link>
                  <Link href="/sample-reports" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Sample Reports</Link>
                  <Link href="/tech-sheets" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-b-lg">Tech Sheets</Link>
                </div>
              </div>

              <Link href="/faqs" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
                FAQs
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            <div className="flex items-center gap-4 z-50">
              <Button
                onClick={() => setShowQuoteModal(true)}
                className="hidden md:flex bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full"
              >
                Start My Inspection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <button onClick={toggleMobileMenu} className="lg:hidden text-gray-900 p-2" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-900 text-3xl z-50"
          onClick={() => {
            setMobileMenuOpen(false)
            document.body.style.overflow = "auto"
          }}
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8 pt-8 pb-8">
          <div className="flex flex-col space-y-2 text-center">
            <span className="text-2xl font-medium text-gray-900">Solutions</span>
            <Link href="/solutions/roof" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Roof Inspections</Link>
            <Link href="/solutions/concrete" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Concrete Inspections</Link>
          </div>
          <Link href="/partnerships/roofing" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Channel Partners</Link>
          <Link href="/about" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>About</Link>
          <div className="flex flex-col space-y-2 text-center">
            <span className="text-2xl font-medium text-gray-900">Resources</span>
            <Link href="/blogs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Blogs</Link>
            <Link href="/case-studies" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Case Studies</Link>
            <Link href="/sample-reports" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Sample Reports</Link>
            <Link href="/tech-sheets" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Tech Sheets</Link>
          </div>
          <Link href="/faqs" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>FAQs</Link>
          <Button onClick={() => setShowQuoteModal(true)} className="mt-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg">
            Start My Inspection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-gray-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Case Studies</h1>
            <p className="text-xl text-gray-700 text-balance">
              Real-world examples of how BDR's robotic inspection technology is transforming building diagnostics across
              industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Case Study Header with Image */}
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-balance">{study.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{study.shortDescription}</p>
                    <Button
                      onClick={() => toggleStudy(study.id)}
                      className="w-fit bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
                    >
                      {expandedStudy === study.id ? (
                        <>
                          Hide Details
                          <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          View Full Case Study
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Expandable Outline Section */}
                {expandedStudy === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white"
                  >
                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-8">Case Study Outline</h3>
                      <div className="grid gap-6">
                        {study.outline.map((section, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white font-bold text-sm">
                                  {idx + 1}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                                  {section.title}
                                </h4>
                                <p className="text-gray-700">{section.description}</p>
                              </div>
                              <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-balance">
              Join industry leaders who are transforming their inspection processes with BDR's robotic technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions/roof">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 rounded-full text-lg px-8"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/partnerships/roofing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 rounded-full text-lg px-8 bg-transparent"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative max-w-lg w-full">
            <div className="relative">
              <button
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
                onClick={() => setShowQuoteModal(false)}
              >
                <X className="h-5 w-5" />
              </button>
              <QuoteForm />
            </div>
          </div>
        </div>
      )}

      {/* Report Modal */}
      {showReportModal && <SampleReportModal open={showReportModal} onClose={() => setShowReportModal(false)} />}
    </div>
  )
}
