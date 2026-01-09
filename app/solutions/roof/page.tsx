"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { QuoteForm } from "@/components/quote-form"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
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
  AlertCircle,
} from "lucide-react"
import { RoofCustomerTypeModal } from "@/components/roof-customer-type-modal"

export default function RoofInspectionPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCustomerType, setSelectedCustomerType] = useState<string | null>(null)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
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
      {/* <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4">
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
      </div> */}

      {!mobileMenuOpen && <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onButtonClick={() => setShowQuoteModal(true)}
        activePage="/solutions/roof"
        buttonText="Book a Demo"
      />}

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
            </div>

            <div className="flex flex-col space-y-2 text-center">
              <span className="text-2xl font-medium text-gray-900">Who We Serve</span>
              <Link
                href="/who-we-serve/portfolio-owners"
                className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = "auto"
                }}
              >
                Building Portfolio Owners
              </Link>
              <Link
                href="/who-we-serve/insurance-underwriters"
                className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = "auto"
                }}
              >
                Insurance & Warranty Underwriters
              </Link>
              <Link
                href="/who-we-serve/roofing-contractors"
                className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = "auto"
                }}
              >
                Commercial Flat Roofing Contractors
              </Link>
            </div>

            <Link
              href="/partnerships/roofing"
              className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Channel Partners
            </Link>

            <Link
              href="/about"
              className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              About
            </Link>

            <div className="flex flex-col space-y-2 text-center">
              <span className="text-2xl font-medium text-gray-900">Resources</span>
              <Link href="/blogs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Blogs</Link>
              <Link href="/case-studies" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Case Studies</Link>
              <Link href="/sample-reports" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Sample Reports</Link>
              <Link href="/roofus-tech-specs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Roofus Tech Specs</Link>
            </div>

            <Link
              href="/faqs"
              className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              FAQs
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
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white -mt-16 whitespace-nowrap">
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
                <Link href="/sample-reports">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                  >
                    View Sample Reports
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 backdrop-blur-sm"
              >
                <span className="text-sm md:text-base text-white">
                  <strong>New Case Study:</strong> Multi-Site Faith-Based Portfolio - see how autonomous inspection
                  unlocked portfolio-wide roof intelligence for 65 roofs.
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
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 pb-2">
                Roof Inspections Haven't Changed in Decades -{" "}
                <span className="text-green-600">Until Now.</span>
              </h2>
              <p className="max-w-3xl text-gray-600 text-lg md:text-xl leading-relaxed">
                Most portfolios still rely on manual surveys that are slow, inconsistent, and costly to repeat. This
                gap between inspection and insight drives warranty disputes, reactive repairs, and capital waste.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Weeks of Delay",
                  description:
                    "Manual data collection creates bottlenecks that slow down decision-making and increase costs.",
                },
                {
                  icon: <AlertCircle className="h-8 w-8" />,
                  title: "Subjective Results",
                  description:
                    "Inconsistent findings that can't support warranty or insurance claims, leading to disputes.",
                },
                {
                  icon: <DollarSign className="h-8 w-8" />,
                  title: "Labour-Heavy Workflows",
                  description:
                    "Traditional methods inflate OPEX and limit your ability to scale inspections across portfolios.",
                },
              ].map((pain, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative overflow-hidden rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 mb-6 border border-green-300">
                    {pain.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{pain.title}</h3>
                  <p className="text-gray-600">{pain.description}</p>
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
              <Button
                onClick={() => scrollToSection("solution")}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg transition-colors duration-300"
              >
                Explore BDR's Roof Inspection as a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section id = "solution" className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
                Roof Inspection-as-a-Service
              </h2>
              <p className="text-xl text-gray-700">
                <strong>Roofus</strong>, BDR's autonomous inspection platform, captures precision data across thousands
                of square feet in minutes - turning roof inspection from a one-off task into a continuous stream of
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
                    src="/roofus1.jpg"
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
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Each inspection delivers:</h3>
                {[
                  {
                    icon: <Droplet className="h-5 w-5" />,
                    text: "Moisture & Thermal Maps: GPR + infrared overlays revealing hidden anomalies.",
                  },
                  {
                    icon: <Layers className="h-5 w-5" />,
                    text: "3D / AutoCAD Roof Plans: fully dimensioned, slope-accurate digital models.",
                  },
                  {
                    icon: <Activity className="h-5 w-5" />,
                    text: "Remaining Service Life Estimate (RSLE): AI-modeled longevity forecasts.",
                  },
                  {
                    icon: <FileText className="h-5 w-5" />,
                    text: "Repair Scope & Cost Summary (RSC): prioritized, cost-referenced actions.",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    text: "Warranty Compliance Log: time-stamped inspection proof for claims.",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5" />,
                    text: "Optional Portfolio Dashboard: multi-building benchmarking and trend insight.",
                  },
                ].map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 text-green-600">{deliverable.icon}</div>
                    <p className="text-xl text-gray-700">{deliverable.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Performance Benchmarks */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-gray pb-2">
                Performance Benchmarks
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {[
                { value: "< 48 hr", label: "Turnaround" },
                { value: "≥ 90%", label: "Accuracy Improvement" },
                { value: "50,000", label: "Sq ft/hr" },
                { value: "50–80%", label: "Cost reduction vs. manual" },
              ].map((benchmark, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 p-8 backdrop-blur-sm shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{benchmark.value}</div>
                  <div className="text-gray-600">{benchmark.label}</div>
                </div>
              ))}
            </motion.div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/roofus-tech-specs">
                  <Button
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg"
                  >
                    View Full Technical Specifications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/sample-reports">
                  <Button
                    variant="outline"
                    className="border-gray text-gray bg-white hover:bg-gray hover:text-white hover:border-gray transition-colors duration-300 rounded-full px-8 py-4"
                  >
                  View Sample Reports
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose{" "} 
                <span className="text-green-600">BDR</span>
              </h2>
              <p className="text-xl text-gray-700">
                See the difference in our{" "}
                <Link href="/sample-reports" className="text-green-600 hover:underline font-medium">
                  Sample Reports →
                </Link>
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-1 lg:grid-cols-5 gap-3 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Speed & Scale",
                  description: "24–48 hours turnaround, Up to 50 000 sq ft/hr coverage",
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
                  description: "Zero nuclear gauges,  Minimal on-roof labour",
                },
                {
                  icon: <Layers className="h-8 w-8" />,
                  title: "Integration-Ready",
                  description: "AutoCAD/BIM compatible, API-enabled",
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
                  <h3 className="text-xl font-bold mb-2 text-gray">{advantage.title}</h3>
                  <p className="text-gray-900 text-sm">{advantage.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-600/10 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 pb-2">
                <span className="text-green-600">BDR</span> vs <span className="text-gray">Business-as-Usual</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto overflow-x-auto"
            >
              <div className="min-w-[800px] rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left p-6 text-gray-700 font-medium">Category</th>
                      <th className="text-center p-6 bg-gradient-to-r from-green-50 to-green-100">
                        <span className="text-green-700 font-bold text-lg">BDR Roof Inspection-as-a-Service</span>
                      </th>
                      <th className="text-center bg-gradient-to-r from-gray-50 to-gray-200 p-6 text-gray-700 font-medium">
                        Business as Usual
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: "Method", bdr: "Autonomous · Repeatable · Digital", traditional: "Manual · Labour-heavy" },
                      { category: "Disruption", bdr: "Minimal · Off-hours possible", traditional: "High · Intrusive site work" },
                      { category: "Output", bdr: "AutoCAD/BIM-ready Reports", traditional: "Mark-ups & PDFs" },
                      { category: "Turnaround", bdr: "24–48 hrs", traditional: "Days – Weeks" },
                      { category: "Accuracy", bdr: "≥ 90% Improvement (AI-verified)", traditional: "Variable · Subjective" },
                      { category: "Cost", bdr: "$0.03 – $0.05 / sq ft", traditional: "$0.05 – $0.30 / sq ft" },
                      { category: "Safety", bdr: "Remote Operation", traditional: "On-roof Labour" },
                      { category: "Portfolio Insight", bdr: "Dashboards & Analytics", traditional: "Building-by-Building" },
                      { category: "Compliance", bdr: "Defensible Digital Record", traditional: "Inconsistent Paper Trail" },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-6 font-medium text-gray-900">{row.category}</td>
                        <td className="p-6 bg-gradient-to-r from-green-50/50 to-green-100/50 text-green-700 font-medium text-center">
                          {row.bdr}
                        </td>
                        <td className="p-6 bg-gradient-to-r from-gray-50/50 to-gray-200/50 text-gray-700 font-medium text-center">
                          {row.traditional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700">
                Explore detailed comparisons and integration guidance in our{" "}
                <Link href="/faqs" className="text-green-600 hover:underline font-medium">
                  FAQs →
                </Link>
              </p>
            </div>
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
                      <h3 className="text-xl font-bold mb-3 text-gray">{useCase.title}</h3>
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
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-600/10 blur-3xl rounded-full"></div>
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
                The <span className="text-green-600">Roofus</span> Technical Edge
              </h2>
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
                      <th className="text-left p-6 text-gray-700 font-medium">Category</th>
                      <th className="text-center p-6 bg-gradient-to-r from-green-50 to-green-100">
                        <span className="text-green-700 font-bold text-lg">Specifications</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: "Dimensions & Weight", spec: "18″ × 18″ × 12″ (≈ 11 kg)" },
                      { category: "Ingress Protection", spec: "IP63 - weather-resistant for light rain & dust" },
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
                      { category: "Accuracy", spec: "≥ 90% Improvement correlation to field benchmarks" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">{row.category}</td>
                        <td className="p-4 text-center bg-gradient-to-r from-green-50/50 to-green-100/50 text-green-700 font-medium">
                          {row.spec}
                        </td>
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
              <h3 className="text-2xl font-bold mb-6 text-center text-gray">
                Functional Highlights
              </h3>
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
                <Link href="/roofus-tech-specs">
                  <Button
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4"
                  >
                    View Full Technical Specifications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
              <div 
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/Roofus_Case_Study_1-Portfolio.pdf';
                  a.setAttribute('download', '');
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
                className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 p-8 backdrop-blur-sm shadow-lg group cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:underline">
                      Case Study: Multi-Site Faith-Based Portfolio
                    </h3>
                    <p className="text-gray-700">
                      Roofus delivered standardized roof assessments across 65 occupied churches and schools in New York City, giving facilities and finance a single, defensible portfolio view. 
                      The team got building-level reports plus a five-year repair-vs-replace roadmap, with critical roofs flagged and quick-win repairs identified to stretch limited capital.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-lg font-medium text-gray-900">Results included:</p>
                  <ul className="space-y-3">
                    {[
                      "65 roofs assessed across a complex, multi-site NYC faith-based portfolio",
                      "3 roofs flagged as critical, giving leadership a clear, defensible top priority list.",
                      "15 sites got quick-win repair actions, extending roof life and reducing near-term risk.",
                    ].map((result, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/Roofus_Case_Study_1-Portfolio.pdf" download onClick={(e) => e.stopPropagation()}>
                  <Button variant="outline" className="border-green-300 text-green-700 hover:bg-gray bg-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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
                  title: "City of New York",
                  result: "> 90 % data correlation",
                  icon: <CheckCircle className="h-6 w-6" />,
                },
                {
                  title: "IR Analyzers",
                  result: "2× faster coverage, zero radiation risk",
                  icon: <Zap className="h-6 w-6" />,
                },
              ].map((story, index) => (
                <motion.a
                  key={index}
                  variants={item}
                  href="/Roofus_Case_Study_1-Portfolio.pdf"
                  download
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm shadow-md group cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <Download className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                      {story.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:underline">{story.title}</h3>
                      <p className="text-gray font-medium">{story.result}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 inset z-10">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
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
                  <div className="text-2xl font-bold text-gray mb-2">{model.price}</div>
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
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4"
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
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gray-500 to-gray-400 font-bold text-white text-sm">
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
              <a href="https://app.usemotion.com/meet/bilal-is/looking-forward-to-meeting-you?d=25" target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4"
                >
                  Schedule a Meeting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/partnerships/roofing">
                <Button
                  variant="outline"
                  className="border-gray text-gray bg-white hover:bg-gray hover:text-white hover:border-gray transition-colors duration-300 rounded-full px-8 py-4"
                >
                  Channel Partner Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section
          id="whitepaper"
          className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
        >
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
                  title: "Whitepaper",
                  link: "Reimagining Building Diagnostics →",
                  href: "/GPR-Former_ROOFER360_Whitepaper_v1.pdf",
                  download: true,
                },
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Case Studies",
                  link: "City of New York & Others →",
                  href: "#case-studies",
                },
                {
                  icon: <Download className="h-8 w-8" />,
                  title: "Sample Reports",
                  link: "View Roof Inspection Deliverables →",
                  href: "/sample-reports",
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm hover:shadow-lg shadow-green-500/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white">
                      {resource.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{resource.title}</p>
                      {resource.download ? (
                        <a href={resource.href} download className="text-gray hover:underline font-medium whitespace-nowrap">
                          {resource.link}
                        </a>
                      ) : (
                        <Link href={resource.href} className="text-gray hover:underline font-medium whitespace-nowrap">
                          {resource.link}
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <p className="mt-8 text-center text-gray-500">
              Have questions? Visit our{" "}
              <Link href="/faqs" className="text-green-600 hover:underline font-medium ">
                FAQs →
              </Link>
            </p>
          </div>
        </section>
      </main>
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

      {selectedCustomerType && (
        <RoofCustomerTypeModal type={selectedCustomerType} onClose={() => setSelectedCustomerType(null)} />
      )}
    </div>
  )
}
