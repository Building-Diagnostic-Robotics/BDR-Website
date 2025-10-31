"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { QuoteForm } from "@/components/quote-form"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Layers,
  MapPin,
  Menu,
  Phone,
  Shield,
  X,
  ChevronDown,
  Mail,
  Download,
  Zap,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  Building2,
  Droplet,
  Activity,
} from "lucide-react"
import SampleReportModal from "@/components/sample-report-modal"
import { RoofCustomerTypeModal } from "@/components/roof-customer-type-modal"

export default function RoofInspectionPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCustomerType, setSelectedCustomerType] = useState<string | null>(null)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    setMounted(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden"
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs md:text-sm font-medium text-center md:text-left">
            <strong>New Case Study:</strong> City of New York & Archdiocese—see how autonomous inspection unlocked
            portfolio-wide roof intelligence.
          </p>
          <Link
            href="#case-studies"
            className="text-xs md:text-sm text-white font-bold hover:underline whitespace-nowrap"
          >
            Read Case Study →
          </Link>
        </div>
      </div>

      {!mobileMenuOpen && (
        <header
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-white/50 backdrop-blur-sm"
          }`}
        >
          <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <div className="relative bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-500 rounded-lg blur-lg opacity-50 z-0"></div>
                <img src="/BDR.jpg" alt="BDR Logo" className="h-16 w-16 rounded-lg z-10" />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a
                href="tel:5105149518"
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(510) 514-9518</span>
              </a>
              <a
                href="https://maps.google.com/?q=19+Morris+Ave,+Brooklyn,+NY+11205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>Brooklyn, NY</span>
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <button className="relative text-sm font-medium text-gray-900 hover:text-green-600 transition-colors flex items-center">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-green-500"></span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <Link
                    href="/solutions/roof"
                    className="block px-4 py-3 text-green-600 bg-gray-50 rounded-t-lg font-medium"
                  >
                    Roof Inspections
                  </Link>
                  <Link
                    href="/solutions/concrete"
                    className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-b-lg"
                  >
                    Concrete Inspections
                  </Link>
                </div>
              </div>
              <Link
                href="/careers"
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
              >
                Careers
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/blogs"
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
              >
                Blogs
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center gap-4 z-50">
              <Button
                onClick={() => setShowQuoteModal(true)}
                className="hidden md:flex bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <button onClick={toggleMobileMenu} className="lg:hidden text-gray-900 p-2" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </header>
      )}

      {mounted && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white backdrop-blur-lg transform transition-transform duration-300 lg:hidden">
          <button
            className="absolute top-4 right-4 text-gray-900 text-3xl z-50"
            onClick={() => {
              setMobileMenuOpen(false)
              document.body.style.overflow = "auto"
            }}
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            <Link
              href="/"
              className="text-2xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Home
            </Link>
            <div className="flex flex-col space-y-2 text-center">
              <span className="text-2xl font-medium text-gray-900">Solutions</span>
              <Link
                href="/solutions/roof"
                className="text-xl font-medium text-green-600"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = "auto"
                }}
              >
                Roof Inspections
              </Link>
              <Link
                href="/solutions/concrete"
                className="text-xl font-medium text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = "auto"
                }}
              >
                Concrete Inspections
              </Link>
            </div>
            <Link
              href="/careers"
              className="text-2xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Careers
            </Link>
            <Link
              href="/blogs"
              className="text-2xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Blogs
            </Link>
            <Button
              onClick={() => setShowQuoteModal(true)}
              className="mt-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      <main className="flex-1">
        <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/aerial-view-of-commercial-flat-roof-inspection.jpg"
              alt="Aerial roof inspection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80"></div>
          </div>

          <div className="container px-4 md:px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Roof Inspection-as-a-Service
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Autonomous, digital, and defensible roof diagnostics—built for warranty, compliance, and capital
                planning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => setShowReportModal(true)}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                >
                  Download Sample Report
                  <Download className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection("whitepaper")}
                  variant="ghost"
                  className="text-white hover:text-green-400 text-lg"
                >
                  Read Whitepaper →
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 backdrop-blur-sm"
              >
                <span className="text-sm md:text-base text-white">
                  <strong>New Case Study:</strong> City of New York & Archdiocese—see how autonomous inspection
                  unlocked portfolio-wide roof intelligence.
                </span>
                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="ml-3 text-green-400 hover:text-green-300 font-medium"
                >
                  Read Case Study →
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-500/5 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm backdrop-blur-sm mb-4">
                <AlertTriangle className="mr-2 h-4 w-4 text-orange-500" />
                <span className="text-gray-700">The Challenge</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Why Roofs Still Fail</h2>
              <p className="text-xl text-gray-700 mb-4">
                Even the most advanced roofing systems can fail when inspections lag or data stays siloed.
              </p>
              <p className="text-lg text-gray-600">Across portfolios, the same issues repeat:</p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Manual moisture surveys take weeks and disrupt operations.",
                },
                {
                  icon: <Activity className="h-8 w-8" />,
                  title: "Inconsistent or subjective results make warranty verification difficult.",
                },
                {
                  icon: <AlertTriangle className="h-8 w-8" />,
                  title: "Safety risks restrict access and increase labour cost.",
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Reactive inspections drive unplanned CAPEX and missed ESG targets.",
                },
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative overflow-hidden rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-orange-100 text-red-600">
                      {challenge.icon}
                    </div>
                    <p className="text-gray-800">{challenge.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-gray-700 font-medium">
                The outcome:{" "}
                <span className="text-red-600">high lifecycle cost, limited visibility, and preventable failures.</span>
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-green-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm backdrop-blur-sm mb-4">
                <Zap className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-gray-700">The Solution</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Autonomous Roof Inspection-as-a-Service
              </h2>
              <p className="text-xl text-gray-700">
                <strong>Roofus</strong>, BDR's autonomous inspection platform, captures precision data across thousands
                of square feet in minutes—turning roof inspection from a one-off task into a continuous stream of
                actionable intelligence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <Image
                    src="/robotic-roof-inspection-technology.jpg"
                    alt="Roofus autonomous inspection platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Each inspection delivers:</h3>
                {[
                  {
                    icon: <Droplet className="h-5 w-5" />,
                    text: "Moisture & Thermal Maps — GPR + infrared overlays revealing hidden anomalies.",
                  },
                  {
                    icon: <Layers className="h-5 w-5" />,
                    text: "3D / AutoCAD Roof Plans — fully dimensioned, slope-accurate digital models.",
                  },
                  {
                    icon: <Activity className="h-5 w-5" />,
                    text: "Remaining Service Life Estimate (RSLE) — AI-modeled longevity forecasts.",
                  },
                  {
                    icon: <FileText className="h-5 w-5" />,
                    text: "Repair Scope & Cost Summary (RSC) — prioritized, cost-referenced actions.",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    text: "Warranty Compliance Log — time-stamped inspection proof for claims.",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5" />,
                    text: "Optional Portfolio Dashboard — multi-building benchmarking and trend insight.",
                  },
                ].map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 text-green-600">{deliverable.icon}</div>
                    <p className="text-gray-700">{deliverable.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 p-8 backdrop-blur-sm shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Performance Benchmarks</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Turnaround", value: "< 48h" },
                    { label: "Accuracy", value: "≥ 90%" },
                    { label: "Coverage", value: "50K sq ft/hr" },
                    { label: "Cost Reduction", value: "50–80%" },
                  ].map((benchmark, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{benchmark.value}</div>
                      <div className="text-sm text-gray-600">{benchmark.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm backdrop-blur-sm mb-4">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-gray-700">Key Advantages</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose BDR</h2>
              <p className="text-xl text-gray-700">
                See the difference in our{" "}
                <button onClick={() => setShowReportModal(true)} className="text-green-600 hover:underline font-medium">
                  Example Reports →
                </button>
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Speed & Scale",
                  description: "24–48 h turnaround · Up to 50 000 sq ft/hr coverage",
                },
                {
                  icon: <DollarSign className="h-8 w-8" />,
                  title: "Lower Cost",
                  description: "50–80 % below manual surveys",
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Defensible Data",
                  description: "Timestamped, AI-verified, audit-ready",
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Safety",
                  description: "Zero nuclear gauges · Minimal on-roof labour",
                },
                {
                  icon: <Layers className="h-8 w-8" />,
                  title: "Integration-Ready",
                  description: "AutoCAD/BIM compatible · API-enabled",
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm hover:shadow-lg shadow-green-500/5 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-4 text-white">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Business as Usual vs BDR</h2>
              <p className="text-xl text-gray-700">
                Explore detailed comparisons and integration guidance in our{" "}
                <Link href="#faq" className="text-green-600 hover:underline font-medium">
                  FAQ →
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto overflow-x-auto"
            >
              <div className="rounded-2xl border border-gray-200 bg-white backdrop-blur-sm overflow-hidden shadow-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left p-4 font-bold text-gray-900">Category</th>
                      <th className="text-left p-4 font-bold text-green-600">BDR Roof Inspection-as-a-Service</th>
                      <th className="text-left p-4 font-bold text-gray-500">Business as Usual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: "Method", bdr: "Autonomous · repeatable · digital", bau: "Manual · labour-heavy" },
                      { category: "Disruption", bdr: "Minimal · off-hours possible", bau: "High · daytime-only" },
                      { category: "Output", bdr: "AutoCAD/BIM-ready digital reports", bau: "Mark-ups & static PDFs" },
                      { category: "Turnaround", bdr: "24–48 hrs", bau: "Days – weeks" },
                      { category: "Accuracy", bdr: "≥ 90 % (AI-verified)", bau: "Variable · subjective" },
                      { category: "Cost", bdr: "$0.03 – $0.05 / sq ft", bau: "$0.05 – $0.30 / sq ft" },
                      { category: "Safety", bdr: "Remote operation", bau: "On-roof labour" },
                      { category: "Portfolio Insight", bdr: "Dashboards & analytics", bau: "One building at a time" },
                      { category: "Compliance", bdr: "Defensible digital records", bau: "Inconsistent paper trail" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900">{row.category}</td>
                        <td className="p-4 text-green-600">{row.bdr}</td>
                        <td className="p-4 text-gray-500">{row.bau}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Applications / Use Cases</h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  title: "For Owners & Facility Managers",
                  items: [
                    "Verify warranty compliance with defensible logs.",
                    "Benchmark conditions across entire portfolios.",
                  ],
                  icon: <Building2 className="h-8 w-8" />,
                },
                {
                  title: "For Contractors & Consultants",
                  items: ["Deliver faster, safer, data-driven bids.", "Provide digital proof-of-performance."],
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  title: "For Insurers & Adjusters",
                  items: ["Access standardized, time-stamped evidence to reduce claims ambiguity."],
                  icon: <Shield className="h-8 w-8" />,
                },
                {
                  title: "For Solar & Retrofit Teams",
                  items: ["Assess moisture and load before PV or overlay installation."],
                  icon: <Zap className="h-8 w-8" />,
                },
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{useCase.title}</h3>
                      <ul className="space-y-2">
                        {useCase.items.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">The Roofus Technical Edge</h2>
              <p className="text-xl text-gray-700">Compact · Autonomous · Data-Secure.</p>
              <p className="text-lg text-gray-600 mt-2">
                Built for precision, portability, and performance in roofing diagnostics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto overflow-x-auto mb-12"
            >
              <div className="rounded-2xl border border-gray-200 bg-white backdrop-blur-sm overflow-hidden shadow-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left p-4 font-bold text-gray-900">Category</th>
                      <th className="text-left p-4 font-bold text-gray-900">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: "Dimensions & Weight", spec: "18″ × 18″ × 12″ (≈ 11 kg)" },
                      { category: "Ingress Protection", spec: "IP63 — weather-resistant for light rain & dust" },
                      { category: "Mobility & Control", spec: "Fully autonomous navigation + obstacle avoidance" },
                      { category: "Sensors", spec: "GPR · LiDAR · Thermal · Optical · GPS/IMU" },
                      {
                        category: "Processing Pipeline",
                        spec: "Onboard sensor fusion → secure cloud AI analysis → report",
                      },
                      {
                        category: "Output Deliverables",
                        spec: "Moisture Maps · AutoCAD Plans · RSLE · RSC · Warranty Log",
                      },
                      { category: "Operating Duration", spec: "≈ 2 hours per charge" },
                      { category: "Data Security", spec: "Encrypted upload (HTTPS/S3) · auditable version trail" },
                      { category: "Integration", spec: "AutoCAD (DWG/DXF) · Revit (RVT) · BIM 360 API-ready" },
                      { category: "Accuracy", spec: "≥ 90 % correlation to field benchmarks" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">{row.category}</td>
                        <td className="p-4 text-green-600">{row.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Functional Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Portable and mailable · no special transport required.",
                  "Non-disruptive · operates outside business hours.",
                  "Scalable for multi-roof portfolios.",
                  "Eliminates nuclear gauges · reduces on-roof risk.",
                  "Integrates with existing BIM & asset-management systems.",
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="border-gray-300 bg-white text-gray-900 hover:bg-gray-50 rounded-full px-8 py-6"
                >
                  View Full Technical Specifications →
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="case-studies" className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Proven Performance / Case Highlights
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto mb-12"
            >
              <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 p-8 backdrop-blur-sm shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Case Study: City of New York & Archdiocese of New York
                    </h3>
                    <p className="text-gray-700">
                      BDR deployed autonomous inspections across diverse roof types—from municipal facilities to
                      heritage structures—capturing 2 M+ sq ft in days.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-lg font-medium text-gray-900">Results included:</p>
                  <ul className="space-y-3">
                    {[
                      "Hidden leaks detected pre-handover (avoiding weeks of delay).",
                      "24–48 h digital reporting validated by facility teams.",
                      "Early data integration into capital-planning dashboards.",
                    ].map((result, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 bg-white">
                  Read Full Case Study →
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {[
                {
                  title: "Amrize Warranty Intelligence Pilot",
                  result: "> 90 % data correlation",
                  icon: <CheckCircle className="h-6 w-6" />,
                },
                {
                  title: "Bauder UK Localization Pilot",
                  result: "2× faster coverage, zero radiation risk",
                  icon: <Zap className="h-6 w-6" />,
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                      {story.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{story.title}</h3>
                      <p className="text-green-600 font-medium">{story.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Pricing & Engagement Models</h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {[
                {
                  title: "Transactional",
                  price: "$0.03 – $0.05 / sq ft",
                  description: "Single projects",
                  icon: <DollarSign className="h-6 w-6" />,
                },
                {
                  title: "Subscription",
                  price: "Annual or bi-annual",
                  description: "Portfolio programs",
                  icon: <TrendingUp className="h-6 w-6" />,
                },
                {
                  title: "Channel Partnerships",
                  price: "Custom",
                  description: "Co-branded inspection solutions for manufacturers & insurers",
                  icon: <Users className="h-6 w-6" />,
                },
              ].map((model, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm text-center shadow-md"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                      {model.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{model.title}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">{model.price}</div>
                  <p className="text-gray-600 text-sm">{model.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-gray-700 mb-4">Request a custom proposal or rate card</p>
              <Button
                onClick={() => setShowQuoteModal(true)}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6"
              >
                Contact BDR
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Are You Ready?</h2>
              <p className="text-xl text-gray-700">
                Five Quick Questions to see if your roofs are ready for autonomous inspection:
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-4 mb-12"
            >
              {[
                "Do you still rely on manual surveys?",
                "Are inspection delays affecting warranty cycles?",
                "Do you lack a digital baseline of your roofs?",
                "Would standardized data improve capital planning?",
                "Do you need a safer, faster inspection workflow?",
              ].map((question, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start space-x-4 p-4 rounded-xl border border-gray-200 bg-white backdrop-blur-sm shadow-sm"
                >
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 font-bold text-white text-sm">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-800">{question}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="outline"
                className="border-gray-300 bg-white text-gray-900 hover:bg-gray-50 rounded-full px-8 py-6"
              >
                Download Readiness Checklist →
                <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => setShowQuoteModal(true)}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6"
              >
                Take Quick Assessment →
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section
          id="whitepaper"
          className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Insights & Resources</h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Whitepaper:",
                  link: "Reimagining Building Diagnostics →",
                  href: "#",
                },
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Case Study:",
                  link: "City of New York & Archdiocese →",
                  href: "#case-studies",
                },
                {
                  icon: <Download className="h-8 w-8" />,
                  title: "Example Reports:",
                  link: "View Roof Inspection Deliverables →",
                  action: () => setShowReportModal(true),
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm hover:shadow-lg shadow-green-500/5 transition-all duration-300 cursor-pointer"
                  onClick={resource.action || (() => {})}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                      {resource.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{resource.title}</p>
                      {resource.href ? (
                        <Link href={resource.href} className="text-green-600 hover:underline font-medium">
                          {resource.link}
                        </Link>
                      ) : (
                        <button className="text-green-600 hover:underline font-medium">{resource.link}</button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-gray-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Smarter Roofs. Safer Futures.</h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg"
                >
                  Start My Inspection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => setShowReportModal(true)}
                  variant="ghost"
                  className="text-gray-700 hover:text-green-600 text-lg"
                >
                  Download Sample Report
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <p className="text-gray-600">
                Have questions? Visit our{" "}
                <Link href="#faq" className="text-green-600 hover:underline font-medium">
                  FAQ →
                </Link>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative w-full border-t border-gray-200 py-12 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-green-500/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/BDR.jpg" alt="BDR Logo" className="h-6 w-6 rounded-lg object-cover" />
                <span className="font-bold text-lg text-gray-900">BDR</span>
              </Link>
              <p className="text-sm text-gray-600">
                Building Diagnostic Robotics (BDR) provides advanced robotic inspection services that save clients 50%
                or more compared to traditional methods while delivering superior accuracy.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/building-diagnostic-robotics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/BDR/61575974576898/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/buildingdiagnosticrobotics?igsh=MTVkeDEyN3VtMXpqbQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/show/64ZFIlUZt4SrvRPkeX36wX?si=94f081623ab74bba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 168 168"
                    fill="currentColor"
                    className="lucide lucide-spotify"
                  >
                    <path d="M84,0C37.7,0,0,37.7,0,84s37.7,84,84,84s84-37.7,84-84S130.3,0,84,0z M121.6,121.5c-1.5,2.5-4.8,3.3-7.3,1.9 c-20-12.2-45.2-14.9-75.2-8c-2.9,0.7-5.8-1.1-6.5-4c-0.7-2.9,1.1-5.8,4-6.5c33.6-7.5,62.2-4.3,85.4,9.6 C122.2,116.1,123.1,119,121.6,121.5z M132.4,102.2c-1.8,2.9-5.6,3.9-8.5,2.1c-22.9-14.1-57.9-18.2-84.9-9.9 c-3.2,1-6.6-0.8-7.6-4.1c-1-3.2,0.8-6.6,4.1-7.6c31.8-9.8,70.4-5.3,97.8,11.2C133.3,94.9,134.2,99.3,132.4,102.2z M134.6,82.2 c-27.2-16.2-72.3-17.6-98.2-9.6c-3.7,1.2-7.7-0.9-8.9-4.6c-1.2-3.7,0.9-7.7,4.6-8.9c30.6-9.8,80.5-8.2,112.3,11.3 c3.2,1.9,4.3,6.1,2.3,9.3C144.7,83.5,138.5,84.6,134.6,82.2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions/roof" className="text-gray-600 hover:text-gray-900 text-sm">
                    Roof Inspections
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/concrete" className="text-gray-600 hover:text-gray-900 text-sm">
                    Concrete Inspections
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-gray-600 hover:text-gray-900 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-gray-600 hover:text-gray-900 text-sm">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <a href="tel:5105149518" className="text-gray-600 hover:text-gray-900 text-sm">
                    (510) 514-9518
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-600" />
                  <a href="mailto:info@bdx-robotics.com" className="text-gray-600 hover:text-gray-900 text-sm">
                    info@bdx-robotics.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <a
                    href="https://maps.google.com/?q=19+Morris+Ave,+Brooklyn,+NY+11205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    19 Morris Ave, Brooklyn, NY
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Building Diagnostic Robotics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

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

      {showReportModal && <SampleReportModal open={showReportModal} onClose={() => setShowReportModal(false)} />}

      {selectedCustomerType && (
        <RoofCustomerTypeModal type={selectedCustomerType} onClose={() => setSelectedCustomerType(null)} />
      )}
    </div>
  )
}
