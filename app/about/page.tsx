"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
import {
  ArrowRight,
  Target,
  Zap,
  DollarSign,
  CheckCircle2,
  Building2,
  Users,
  FileCheck,
  Handshake,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const corePrinciples = [
    {
      icon: Target,
      title: "Accuracy",
      description: "Advanced robotics and AI delivering 90%+ precision.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "24–48-hour turnaround with minimal disruption.",
    },
    {
      icon: DollarSign,
      title: "Accessibility",
      description: "OPEX-friendly, portfolio-scale pricing that fits any budget.",
    },
    {
      icon: CheckCircle2,
      title: "Actionability",
      description: "Insights that drive prevention, not reaction.",
    },
  ]

  const howWeWork = [
    {
      number: "01",
      title: "Autonomous Scanning",
      description: "Robots capture roof and concrete data with zero disruption.",
    },
    {
      number: "02",
      title: "Fast Analysis",
      description: "AI converts results into insurance-ready digital reports.",
    },
    {
      number: "03",
      title: "Predictive Insights",
      description: "Prioritize repairs, extend lifecycles, and forecast capital needs.",
    },
    {
      number: "04",
      title: "Portfolio Integration",
      description: "Dashboards provide a single source of truth across assets.",
    },
  ]

  const whoWeServe = [
    {
      icon: Building2,
      title: "Portfolio Owners & Operators",
      description: "Seeking portfolio-level visibility and compliance readiness.",
    },
    {
      icon: Users,
      title: "Contractors & Consultants",
      description: "Who need fast, defensible data to quote, scope, and deliver.",
    },
    {
      icon: FileCheck,
      title: "Insurers & Adjusters",
      description: "Relying on standardized documentation to verify condition and risk.",
    },
    {
      icon: Handshake,
      title: "Channel Partners & Suppliers",
      description: "Embedding diagnostics into their warranty, maintenance, or materials programs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Tagline Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs md:text-sm font-medium text-center md:text-left">
            Reimagining Building Diagnostics - How BDR Is Making the Future of Asset Intelligence Real Today.
          </p>
            <a href="BDR_Technical_Whitepaper.pdf" download>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 text-xs md:text-sm whitespace-nowrap"
              >
                Download Now <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </a>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onButtonClick={() => setShowQuoteModal(true)}
        activePage="/about"
        buttonText="Start My Inspection"
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-gray-50"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Why BDR</h1>
            <p className="text-2xl md:text-3xl font-semibold text-green-600 mb-6">From Uncertainty to Insight</p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-pretty">
              BDR is redefining how building inspections are done - turning manual, disruptive, and inconsistent
              processes into fast, digital, and actionable intelligence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto text-pretty">
              We deliver autonomous roof inspections that help owners, contractors, and partners make
              smarter, safer decisions - all within 48 hours.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto text-pretty">
              Our platform transforms raw scan data into defensible, visual reports that empower better planning, faster
              repairs, and future-ready portfolios.
            </p>
            <Link href="/solutions/roof">
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full text-lg px-8 py-6">
                Explore Inspection-as-a-Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Why We Exist</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-pretty">
                Too many buildings still depend on outdated, reactive inspection methods that waste time, increase
                costs, and expose owners to hidden risks.
              </p>
              <p className="text-pretty">
                We founded BDR to eliminate that uncertainty - giving every stakeholder the clarity and confidence to
                act before problems become expensive.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl p-8 mt-8">
                <p className="text-xl font-semibold text-gray-900 mb-2">Our mission is simple:</p>
                <p className="text-lg text-gray-700 text-pretty">
                  Make reliable, data-driven inspections accessible, affordable, and effortless for every building.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">What We Believe</h2>
            <p className="text-xl text-gray-700 text-center mb-4 max-w-3xl mx-auto text-pretty">
              Technology should simplify decision-making, not complicate it.
            </p>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto text-pretty">
              We believe that insight is only valuable when it improves real-world outcomes - safer sites, smarter
              capital planning, fewer surprises.
            </p>
            <p className="text-lg text-gray-700 text-center mb-12 font-medium">
              That's why every BDR solution is built on four core principles:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {corePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
                        <principle.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/solutions/roof">
                <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full text-lg px-8 py-6">
                  Learn How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">How We Work</h2>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto text-pretty">
              Our Inspection-as-a-Service model makes digital diagnostics turnkey:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {howWeWork.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl p-8 text-center">
              <p className="text-lg text-gray-700 mb-8 text-pretty">
                From single-site projects to city-wide portfolios, BDR transforms inspection from a headache into a
                strategic advantage.
              </p>
              <Link href="/case-studies">
                <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full text-lg px-8 py-6">
                  Read the Latest Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Who We Serve</h2>
            <p className="text-xl text-gray-700 text-center mb-12">We partner with:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whoWeServe.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
                        <audience.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                      <p className="text-gray-600">{audience.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <p className="text-lg text-gray-700 mb-8 text-pretty">
                Our work is trusted across both public and private projects - supported by NYSERDA, U.S. Department of
                Energy, and Scale for Climate Tech.
              </p>
              <Link href="/partnerships/roofing">
                <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full text-lg px-8 py-6">
                  Explore Partner Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Promise</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p className="text-pretty">We are an analytical, empathetic, and outcome-driven partner.</p>
              <p className="text-pretty">
                We listen first, inspect with precision, and deliver clarity that empowers our clients to act
                confidently.
              </p>
              <p className="text-xl font-semibold text-gray-900 text-pretty">
                From uncertainty to insight, BDR makes every building decision faster, smarter, and safer.
              </p>
            </div>
            <a href="https://app.usemotion.com/meet/bilal-is/looking-forward-to-meeting-you?d=25" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full text-lg px-8 py-6">
                Get in Touch with Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />

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
    </div>
  )
}
