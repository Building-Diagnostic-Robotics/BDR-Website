"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
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
import SampleReportModal from "@/components/sample-report-modal"

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)

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
              {/* Solutions dropdown */}
              <div className="relative group">
                <button className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group flex items-center">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <Link href="/solutions/roof" className="block px-4 py-3 text-gray-900 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-t-lg">Roof Inspections</Link>
                  {/* <Link href="/solutions/concrete" className="block px-4 py-3 text-gray-900 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-b-lg">Concrete Inspections</Link> */}
                </div>
              </div>

              {/* Channel Partners */}
              <Link href="/partnerships/roofing" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
                Channel Partners
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* About active */}
              <Link href="/about" className="relative text-sm font-medium text-gray-900 transition-colors">
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-green-500" />
              </Link>

              {/* Resources dropdown */}
              <div className="relative group">
                <button className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group flex items-center">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <Link href="/blogs" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-t-lg">Blogs</Link>
                  <Link href="/case-studies" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Case Studies</Link>
                  <Link href="/sample-reports" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Sample Reports</Link>
                  <Link href="/roofus-tech-specs" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-b-lg">Roofus Tech Specs</Link>
                </div>
              </div>

              {/* FAQs */}
              <Link href="/faqs" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
                FAQs
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            <div className="flex items-center gap-4 z-50">
              <Link href="/#contact">
                <Button className="hidden md:flex bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full">
                  Start My Inspection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <button onClick={toggleMobileMenu} className="lg:hidden text-gray-900 p-2" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Menu */}
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
            {/* <Link href="/solutions/concrete" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Concrete Inspections</Link> */}
          </div>
          <Link href="/partnerships/roofing" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Channel Partners</Link>
          <Link href="/about" className="text-2xl font-medium text-green-600" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>About</Link>
          <div className="flex flex-col space-y-2 text-center">
            <span className="text-2xl font-medium text-gray-900">Resources</span>
            <Link href="/blogs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Blogs</Link>
            <Link href="/case-studies" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Case Studies</Link>
            <Link href="/sample-reports" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Sample Reports</Link>
            <Link href="/roofus-tech-specs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Roofus Tech Specs</Link>
          </div>
          <Link href="/faqs" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>FAQs</Link>
          <Link href="/#contact" className="mt-4" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>
            <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg">
              Start My Inspection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

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
              BDR is redefining how building inspections are done — turning manual, disruptive, and inconsistent
              processes into fast, digital, and actionable intelligence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto text-pretty">
              We deliver autonomous roof and concrete inspections that help owners, contractors, and partners make
              smarter, safer decisions — all within 48 hours.
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
                We founded BDR to eliminate that uncertainty — giving every stakeholder the clarity and confidence to
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
              We believe that insight is only valuable when it improves real-world outcomes — safer sites, smarter
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
              <Link href="/solutions/roof">
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
                Our work is trusted across both public and private projects — supported by NYSERDA, U.S. Department of
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
            <Link href="/#contact">
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full text-lg px-8 py-6">
                Get in Touch with Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
