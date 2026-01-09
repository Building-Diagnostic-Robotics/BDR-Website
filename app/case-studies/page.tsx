"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { QuoteForm } from "@/components/quote-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"

export default function CaseStudiesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)

  const caseStudies = [
    {
      id: 1,
      title: "Multi-Site Faith-Based Portfolio: 65 Roofs, One Standardized Plan",
      shortDescription: "Roofus delivered standardized roof assessments across 65 occupied churches and schools in New York City, giving facilities and finance a single, defensible portfolio view.",
      image: "/robotic-roof-inspection-technology.jpg",
      
    },
    {
      id: 2,
      title: "Smart Scanning for Complex Builds.",
      shortDescription:
        "This concept centers on BDR's collaboration with Truebeck, focusing on concrete scanning and digital mapping to streamline the retrofit and fit-out process for a major California life sciences project.",
      image: "/robotic-roof-inspection-technology.jpg",
      
    },
    {
      id: 3,
      title: "Reimagining Building Diagnostics",
      shortDescription:
        "This concept presents BDR's shift to a recurring, data-driven inspection-as-a-service (IaaS) model, detailing how clients (from municipal agencies to contractors) leverage ongoing, automated diagnostics for cost savings, operational clarity, and portfolio-wide asset management.",
      image: "/robotic-roof-inspection-technology.jpg",
      
    },
  ]


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
        onToggleMobileMenu={() => {
          setMobileMenuOpen(!mobileMenuOpen)
          document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto"
        }}
        onButtonClick={() => setShowQuoteModal(true)}
        activePage="case-studies"
        buttonText="Get Started"
      />

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
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-balance">{study.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{study.shortDescription}</p>
                    <a
                      href="/Roofus_Case_Study_1-Portfolio.pdf"
                      download
                      className="inline-flex items-center justify-center w-fit bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-md px-4 py-2"
                    >
                      View Full Case Study
                      <Download className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-balance">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-balance">
              Join industry leaders who are transforming their inspection processes with BDR's robotic technology
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link href="/solutions/roof">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg shadow-lg"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/partnerships/roofing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray text-gray bg-white hover:bg-gray hover:text-white hover:border-gray transition-colors duration-300 rounded-full px-8 py-6 text-lg"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
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

      <Footer />
    </div>
  )
}
