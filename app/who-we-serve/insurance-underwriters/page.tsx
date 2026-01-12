"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
import { QuoteForm } from "@/components/quote-form"
import {
  ArrowRight,
  Zap,
  DollarSign,
  EyeOff,
  AlertTriangle,
  Timer,
  Users,
  FileTextIcon,
  FileCheck,
  Handshake,
  FileText,
  Shield,
  Layers,
  CheckCircle,
  TrendingUp,
  Droplet,
  Activity,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

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

export default function PortfolioOwnersPage() {
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

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onButtonClick={() => setShowQuoteModal(true)}
        activePage="insurance-underwriters"
        buttonText="Book a Demo"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/aerial_roof_2.jpg"
              alt="Aerial roof inspection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 via-gray-900/65 to-gray-900/80" />
          </div>

          <div className="container px-4 md:px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-green-400/40 bg-green-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-1">
                <span className="text-white/90">Who We Serve</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Insurance & Warranty Underwriters
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                BDR helps insurance and warranty underwriters replace inconsistent roof info with standardized, defensible condition data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-white rounded-full px-8 py-6 text-lg"
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
                  You're Pricing Roof Risk With Incomplete Data -{" "}
                  <span className="text-green-600">Until Now.</span>
                </h2>
                <p className="max-w-3xl text-gray-600 text-lg md:text-xl leading-relaxed">
                  Roof condition is often a black box. Data is inconsistent, and hard to verify letting hidden issues become costly claims.
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
                    icon: <EyeOff className="h-8 w-8" />,
                    title: "Black-Box Roof Condition",
                    description:
                      "Roof data is inconsistent, subjective, and hard to verify making true condition tough to see.",
                  },
                  {
                    icon: <AlertTriangle className="h-8 w-8" />,
                    title: "Uncertain Risk Pricing",
                    description:
                      "Risk is priced with uncertainty, so hidden issues slip through and turn into expensive claims.",
                  },
                  {
                    icon: <Timer className="h-8 w-8" />,
                    title: "Friction in Underwriting",
                    description:
                      "Slow, unclear roof data creates delays, rework, and friction in underwriting and coverage decisions.",
                  },
                ].map((pain, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="group relative overflow-hidden rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 mb-6 border border-green-300 text-gray-900">
                      {pain.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{pain.title}</h3>
                    <p className="text-gray-600">{pain.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-12 text-center">
                <Link href="#solution">
                  <Button
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg transition-colors duration-300"
                  >
                    Explore BDR's Roof Inspection as a Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              </div>
            </div>
          </section>

        <section id="solution" className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
                <span className="text-gray-700">Solution</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Roof Inspection-as-a-Service
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Standardized, digitized roof assessments for consistent, comparable risk visibility. 
                Quick repair recommendations that reduce preventable losses without slowing approvals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900">Each annual cycle delivers:</h3>
                {[
                  {
                    icon: <FileCheck className="h-5 w-5" />,
                    text: "Standardized, digitized roof assessments that give consistent, comparable risk visibility across portfolios.",
                  },
                  {
                    icon: <Activity className="h-5 w-5" />,
                    text: "Clear, prioritized repair recommendations to reduce preventable losses without slowing down approvals",
                  },
                  {
                    icon: <FileText className="h-5 w-5" />,
                    text: "Audit-ready documentation that supports underwriting decisions, coverage terms, and rate justifications.",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    text: "Warranty-friendly evidence trail to streamline claims and renewals.",
                  },
                ].map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 text-green-600">{deliverable.icon}</div>
                    <p className="text-lg text-gray-700 leading-relaxed">{deliverable.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
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
                  description: "24-48 hours turnaround, Up to 50 000 sq ft/hr coverage",
                },
                {
                  icon: <DollarSign className="h-8 w-8" />,
                  title: "Lower Cost",
                  description: "50-80 % below manual surveys",
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
    </div>
  )
}
