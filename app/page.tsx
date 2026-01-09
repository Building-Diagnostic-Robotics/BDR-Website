"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import type React from "react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  Droplet,
  FileText,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { ChatBot } from "@/components/chat-bot"
import { QuoteForm } from "@/components/quote-form"
import { ChevronDown } from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const lastShown = localStorage.getItem("exitPopupLastShown")
        const cooldownHours = 24

        const showAgain = !lastShown || Date.now() - Number.parseInt(lastShown) > cooldownHours * 60 * 60 * 1000

        const hasBeenSubmitted = sessionStorage.getItem("exitPopupSubmitted") === "true"

        if (showAgain && !hasBeenSubmitted) {
          setShowExitPopup(true)
        }
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden"
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const res = await fetch("/api/contactForm", {
      method: "POST",
      body: new FormData(form),
    })
    if (res.ok) {
      setSubmitted(true)
    } else {
      alert("Oops—something went wrong.")
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="p-8 bg-white/5 rounded-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Thanks for your request!</h1>
          <p className="text-lg mb-6">We've received your details and will be in touch soon.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded"
          >
            Back to form
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
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

        {/* Main Navbar */}
        <Navbar
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
          onButtonClick={() => setShowQuoteModal(true)}
          buttonText="Start My Inspection"
        />
            
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/aerial-roof-inspection.jpg"
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
                className="max-w-4xl mx-auto text-center space-y-10"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white -mt-16">
                  Inspections to Impact
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                  The new standard for roof diagnostics - fast, autonomous, and disruption-free.
                </p>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                  Digital inspection data that delivers measurable results in cost, time, and risk.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={() => setShowQuoteModal(true)}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg"
                  >
                    Start My Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Link href="/sample-reports">
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-gray/20 rounded-full px-8 py-6 text-lg transition-colors duration-300"
                    >
                      View Sample Reports
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
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

              <div className="mt-12 text-center">
                <Button
                  onClick={() => setShowReportModal(true)}
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg transition-colors duration-300"
                >
                  See How Automation Changes the Economics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          <section
            id="Solution"
            className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-green-600/10 blur-3xl rounded-full"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              >
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm backdrop-blur-sm mb-4">
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-gray-700">The BDR Solution</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 pb-2">
                  Roof Inspection-as-a-Service:
                </h2>
                
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-green-600 pb-2">
                  Faster, Safer, Fully Digital
                </h2>
                <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-relaxed">
                  BDR's <strong>Roofus</strong> platform uses ground-penetrating radar, LiDAR, and thermal imaging to capture millions of
                  data points per scan - producing AI-verified reports within 48 hours.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900">Each inspection delivers:</h3>
                  {[
                  {
                    icon: <Droplet className="h-5 w-5" />,
                    text: "Moisture & Thermal Maps",
                  },
                  {
                    icon: <Layers className="h-5 w-5" />,
                    text: "3D / AutoCAD Roof Plans",
                  },
                  {
                    icon: <Activity className="h-5 w-5" />,
                    text: "Remaining Service Life Estimate (RSLE)",
                  },
                  {
                    icon: <FileText className="h-5 w-5" />,
                    text: "Repair Scope & Cost Summary (RSC)",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    text: "Warranty Compliance Log",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5" />,
                    text: "Optional Portfolio Dashboard",
                  },
                ].map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 text-green-600">{deliverable.icon}</div>
                    <p className="text-xl text-gray-700">{deliverable.text}</p>
                  </div>
                ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
                    <img
                      src="/roofus1.jpg"
                      alt="BDR Roofus platform in action"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
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
                  { value: "50–80%", label: "Lower cost" },
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

          <section
            id="who-we-serve"
            className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
          >
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
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 pb-2">Who It's For</h2>
                <p className="max-w-3xl text-gray-600 text-lg">
                  Designed for every flat roof typology - from malls and schools to warehouses, big-box retail, and industrial sites.
                </p>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
              >
                {[
                  {
                    icon: <Building2 className="h-10 w-10" />,
                    title: "Portfolio Owners & Operators",
                    description: "Benchmark, prioritize, and plan at scale.",
                  },
                  {
                    icon: <Users className="h-10 w-10" />,
                    title: "Contractors & Consultants",
                    description: "Deliver faster, safer, data-driven bids.",
                  },
                  {
                    icon: <Shield className="h-10 w-10" />,
                    title: "Insurers & Adjusters",
                    description: "Access defensible, standardized documentation.",
                  },
                  {
                    icon: <BarChart3 className="h-10 w-10" />,
                    title: "Channel Partners",
                    description: "Embed BDR diagnostics into warranty or maintenance programs.",
                  },
                ].map((audience, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-6 text-white">
                      {audience.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray">{audience.title}</h3>
                    <p className="text-gray-600">{audience.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="results" className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
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
                  Measurable{" "}
                  <span className="text-green-600">Results,</span>{" "} 
                  Every Time.
                </h2>
                <p className="max-w-3xl text-gray-600 text-lg">
                  Results verified through live pilots with Bauder, Amrize, and the City of New York.
                </p>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
              >
                {[
                  {
                    icon: <DollarSign className="h-8 w-8" />,
                    metric: "Up to 65% lower cost",
                    description: "Than manual methods",
                  },
                  {
                    icon: <Zap className="h-8 w-8" />,
                    metric: "24–48 hr turnaround",
                    description: "From scan to report",
                  },
                  {
                    icon: <Shield className="h-8 w-8" />,
                    metric: "Minimal disruption",
                    description: "After-hours operation possible",
                  },
                  {
                    icon: <Target className="h-8 w-8" />,
                    metric: "90%+ accuracy improvement",
                    description: "Verified across 2M+ sq ft",
                  },
                  {
                    icon: <FileText className="h-8 w-8" />,
                    metric: "Ready-to-use reports",
                    description: "For warranty, insurance, capital planning",
                  },
                  {
                    icon: <CheckCircle className="h-8 w-8" />,
                    metric: "Proven in the field",
                    description: "Live pilots with major clients",
                  },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-4 text-white">
                      {result.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray mb-1">{result.metric}</div>
                    <div className="text-lg mb-2 text-gray-900">{result.description}</div>
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
                  The Contrast:{" "} 
                  <span className="text-green-600">BDR</span>{" "} vs {" "}
                  <span className="text-gray">Business-as-Usual</span>
                </h2>
                <p className="max-w-3xl text-gray-600 text-lg">
                  See how our Inspection-as-a-Service model compares to traditional methods.
                </p>
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
                        <th className="text-center bg-gradient-to-r from-gray-50 to-gray-200 p-6 text-gray-700 font-medium">Business as Usual</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          category: "Method",
                          bdr: "Autonomous · Repeatable · Digital",
                          traditional: "Manual · Labour-heavy",
                        },
                        {
                          category: "Disruption",
                          bdr: "Minimal · Off-hours possible",
                          traditional: "High · Intrusive site work",
                        },
                        { category: "Output", bdr: "AutoCAD/BIM-ready Reports", traditional: "Mark-ups & PDFs" },
                        { category: "Turnaround", bdr: "24–48 hrs", traditional: "Days – Weeks" },
                        { category: "Accuracy", bdr: "≥ 90% Improvement (AI-verified)", traditional: "Variable · Subjective" },
                        { category: "Cost", bdr: "$0.03 – $0.05 / sq ft", traditional: "$0.05 – $0.30 / sq ft" },
                        { category: "Safety", bdr: "Remote Operation", traditional: "On-roof Labour" },
                        {
                          category: "Portfolio Insight",
                          bdr: "Dashboards & Analytics",
                          traditional: "Building-by-Building",
                        },
                        {
                          category: "Compliance",
                          bdr: "Defensible Digital Record",
                          traditional: "Inconsistent Paper Trail",
                        },
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

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Compare full specs and workflow details in our FAQ</p>
                <Button
                  onClick={() => setShowReportModal(true)}
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg transition-colors duration-300"
                >
                  View Detailed Comparison
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              >
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm">
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-600"></span>
                  Case Studies
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 pb-2">
                  Trusted by{" "} 
                  <span className="text-green-600">Leaders</span>{" "}
                  Modernizing Roof Management.
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Left column: stacked case study cards */}
                <div className="space-y-8">
                  {/* Multi-Faith Portfolio Case Study (clickable download + read button) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => {
                      const a = document.createElement('a');
                      a.href = '/Roofus_Case_Study_1-Portfolio.pdf';
                      a.setAttribute('download', '');
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                    }}
                    className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg group cursor-pointer"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:underline">Multi-Site Faith-Based Portfolio: 65 Roofs, One Standardized Plan</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Out of 65 roofs, 3 were flagged as critical, while 15 sites received quick-win repair recommendations to extend roof life.
                      </p>
                        <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors">
                          <span className="mr-2">Read Case Study</span>
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                  </motion.div>

                  {/* Amrize card (clickable download with icon) */}
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    href="/Roofus_Case_Study_1-Portfolio.pdf"
                    download
                    className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm group cursor-pointer block"
                  >
                    <Download className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                    <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:underline">Amrize Warranty Intelligence Pilot</h4>
                    <p className="text-gray-600">
                      <span className="text-gray-500 font-bold">&gt; 90%</span> data correlation achieved
                    </p>
                  </motion.a>

                  {/* Bauder card (clickable download with icon) */}
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    href="/Roofus_Case_Study_1-Portfolio.pdf"
                    download
                    className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm group cursor-pointer block"
                  >
                    <Download className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                    <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:underline">Bauder UK Localization</h4>
                    <p className="text-gray-600">
                      <span className="text-gray-500 font-bold">2× coverage speed</span>, 0 radiation risk
                    </p>
                  </motion.a>
                </div>

                {/* Right column: Case Study GIF */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <video
                    src="/roofus.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
              <div className="mt-12 text-center">
                <Link href="/case-studies">
                  <Button
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg transition-colors duration-300"
                  >
                    View all Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section id="resources" className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
                  <span className="text-green-600">Proof,</span>{" "} 
                  Not Promises.
                </h2>
                <p className="max-w-3xl text-gray-600 text-lg">
                  Access our library of technical resources, case studies, and example deliverables.
                </p>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto"
              >
                {/* Whitepaper */}
                <motion.a
                  variants={item}
                  href="/GPR-Former_ROOFER360_Whitepaper_v1.pdf"
                  download
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-6 text-white">
                    <FileText className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray">Whitepaper</h3>
                  <p className="text-gray-900 mb-4">Reimagining Building Diagnostics</p>
                  <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors">
                    <span className="mr-2">Download Now</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>

                {/* Case Study */}
                <Link href="/case-studies">
                  <motion.div
                    variants={item}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-6 text-white">
                      <Building2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray">Case Study</h3>
                    <p className="text-gray-900 mb-4">City of New York & Archdiocese</p>
                    <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors">
                      <span className="mr-2">Read Case Study</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>

                {/* Sample Reports */}
                <Link href="/sample-reports">
                  <motion.div
                    variants={item}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-6 text-white">
                      <Download className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray">Sample Reports</h3>
                    <p className="text-gray-900 mb-4">View Inspection Deliverables</p>
                    <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors">
                      <span className="mr-2">View Reports</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </section>

          <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
              {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div> */}
              <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 pb-2">
                  Ready to Turn Inspection into Impact?
                </h2>

                <div className="grid md:grid-cols-3 gap-8 w-full mt-12">
                  {[
                    {
                      number: "1",
                      title: "Book a Project Review",
                      description: "Quick assessment of fit, ROI, timeline.",
                    },
                    {
                      number: "2",
                      title: "Get Your Inspection Plan",
                      description: "Roof-only or portfolio-wide.",
                    },
                    {
                      number: "3",
                      title: "Receive Results in 48 Hours",
                      description: "Digital, defensible, decision-ready.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="text-6xl font-bold text-gray-500/70 mb-4">{step.number}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                  <Button
                    onClick={() => setShowQuoteModal(true)}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg shadow-lg"
                  >
                    Start My Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Link href="/sample-reports">
                    <Button
                      variant="outline"
                      className="border-gray text-gray bg-white hover:bg-gray hover:text-white hover:border-gray transition-colors duration-300 rounded-full px-8 py-6 text-lg"
                    >
                      View Sample Reports
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <p className="text-gray-500 mt-8">
                  Not sure where to begin?{" "}
                  <button onClick={() => setShowReportModal(true)} className="text-green-600 hover:underline">
                    Download our Readiness Checklist →
                  </button>
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Exit Intent Popup */}
        {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}

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
                <QuoteForm onClose={() => setShowQuoteModal(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
