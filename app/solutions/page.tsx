"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Cloud,
  Download,
  Eye,
  FileText,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Smartphone,
  Sun,
  Timer,
  X,
  ChevronDown,
} from "lucide-react"
import { CustomerTypeModal } from "@/components/customer-type-modal"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { ChatBot } from "@/components/chat-bot"
import { USMap } from "@/components/us-map"
import { TechnologyProcess } from "@/components/technology-process"
import { ConcreteTechnologyProcess } from "@/components/concrete-technology-process"

export default function SolutionsPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<"roof" | "concrete">("roof")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [selectedCustomerType, setSelectedCustomerType] = useState<string | null>(null)

  useEffect(() => {
    const tab = searchParams.get("tab") as "roof" | "concrete"
    if (tab && (tab === "roof" || tab === "concrete")) {
      setActiveTab(tab)
    }
  }, [searchParams])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  const openCustomerTypeModal = (type: string) => {
    setSelectedCustomerType(type)
  }

  const closeCustomerTypeModal = () => {
    setSelectedCustomerType(null)
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

  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const res = await fetch("/api/quoteForm", {
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
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm md:text-base font-medium">
            Save 50% or more and get results in 48 hours instead of weeks compared to traditional inspections! Serving
            businesses nationwide.
          </p>
          <a href="tel:5105149518" className="text-white font-bold hover:underline whitespace-nowrap">
            Call: (510) 514-9518
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-black/50 backdrop-blur-sm"
        }`}
      >
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-50">
            <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg blur-lg opacity-50 z-0"></div>
              <img src="/BDR.jpg" alt="BDR Logo" className="h-16 w-16 rounded-lg z-10" />
            </div>
          </Link>

          {/* Contact Points in Header */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a
              href="tel:5105149518"
              className="flex items-center space-x-1 text-white hover:text-teal-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(510) 514-9518</span>
            </a>
            <a
              href="https://maps.google.com/?q=19+Morris+Ave,+Brooklyn,+NY+11205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white hover:text-teal-400 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>Brooklyn, NY</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button className="relative text-sm font-medium text-white hover:text-teal-400 transition-colors group flex items-center">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 border border-white/10 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/solutions?tab=roof"
                  className="block px-4 py-3 text-white hover:text-teal-400 hover:bg-white/5 transition-colors rounded-t-lg"
                >
                  Roof Inspections
                </Link>
                <Link
                  href="/solutions?tab=concrete"
                  className="block px-4 py-3 text-white hover:text-teal-400 hover:bg-white/5 transition-colors rounded-b-lg"
                >
                  Concrete Inspections
                </Link>
              </div>
            </div>
            {["benefits", "coverage", "technology", "testimonials", "about"].map((item) => (
              <Link
                key={item}
                href={`/#${item}`}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/careers"
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              Careers
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/blogs"
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              Blogs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4 z-50">
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <button onClick={toggleMobileMenu} className="lg:hidden text-white p-2" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <a href="tel:5105149518" className="flex items-center space-x-2 text-white text-xl">
              <Phone className="h-5 w-5" />
              <span>(510) 514-9518</span>
            </a>
            <a
              href="https://maps.google.com/?q=19+Morris+Ave,+Brooklyn,+NY+11205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white text-xl"
            >
              <MapPin className="h-5 w-5" />
              <span>19 Morris Ave, Brooklyn, NY</span>
            </a>
          </div>

          <Link
            href="/"
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => {
              setMobileMenuOpen(false)
              document.body.style.overflow = "auto"
            }}
          >
            Home
          </Link>
          <div className="flex flex-col space-y-2 text-center">
            <span className="text-2xl font-medium text-white">Solutions</span>
            <Link
              href="/solutions?tab=roof"
              className="text-xl font-medium text-white/60 hover:text-white transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Roof Inspections
            </Link>
            <Link
              href="/solutions?tab=concrete"
              className="text-xl font-medium text-white/60 hover:text-white transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Concrete Inspections
            </Link>
          </div>
          {["benefits", "coverage", "technology", "about"].map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <Link
            href="/blogs"
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => {
              setMobileMenuOpen(false)
              document.body.style.overflow = "auto"
            }}
          >
            Blogs
          </Link>
          <Link
            href="/careers"
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => {
              setMobileMenuOpen(false)
              document.body.style.overflow = "auto"
            }}
          >
            Careers
          </Link>
          <Button
            onClick={() => scrollToSection("contact")}
            className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
          >
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-900/20 to-black/90"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>

          <div className="container px-4 md:px-6 z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                  <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                  Select the inspection service you need
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Advanced Inspection Solutions
                </h1>
                <p className="max-w-[600px] text-white/70 md:text-xl">
                  Choose between our cutting-edge roof and concrete inspection services, both powered by advanced
                  robotics and AI technology.
                </p>
              </motion.div>

              {/* Tab Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
              >
                <button
                  onClick={() => setActiveTab("roof")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "roof"
                      ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Roof Inspections
                </button>
                <button
                  onClick={() => setActiveTab("concrete")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "concrete"
                      ? "bg-gradient-to-r from-slate-500 to-slate-600 text-white shadow-lg"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Concrete Inspections
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === "roof" && (
          <>
            {/* Roof Solutions Section */}
            <section id="solutions" className="relative w-full py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
              </div>

              <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                      <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                      Roof Solutions
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Advanced Flat Roof Inspection Services
                    </h2>
                    <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                      Our robotic inspection systems find moisture and damage that traditional methods miss - at half
                      the cost.
                    </p>
                    <p className="text-lg font-medium text-teal-400">
                      Call us today at (510) 514-9518 for a free consultation
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                  {[
                    {
                      icon: <Eye className="h-8 w-8" />,
                      title: "Moisture Detection",
                      description:
                        "Identify hidden water damage and moisture with 90% accuracy before it causes expensive structural problems.",
                      gradient: "from-teal-500 to-cyan-400",
                      phone: "(510) 514-9518",
                    },
                    {
                      icon: <Layers className="h-8 w-8" />,
                      title: "Roof Mapping",
                      description:
                        "Create detailed 3D maps of your entire roof system using point cloud technology with precise measurements and condition reports.",
                      gradient: "from-cyan-500 to-teal-500",
                      phone: "(510) 514-9518",
                    },
                    {
                      icon: <Cloud className="h-8 w-8" />,
                      title: "Leak Prevention",
                      description:
                        "Detect potential leaks before they happen and extend your roof's lifespan by 5-20 years.",
                      gradient: "from-teal-600 to-cyan-600",
                      phone: "(510) 514-9518",
                    },
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1"
                    >
                      <div className="relative z-10 flex flex-col h-full p-6 backdrop-blur-sm">
                        <div className={`rounded-full bg-gradient-to-br ${solution.gradient} p-3 w-fit mb-6`}>
                          {solution.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                        <p className="text-white/70 mb-6 flex-grow">{solution.description}</p>
                        <div className="mt-auto space-y-3">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-teal-500" />
                            <a
                              href={`tel:${solution.phone.replace(/\D/g, "")}`}
                              className="text-white hover:text-teal-400 transition-colors"
                            >
                              {solution.phone}
                            </a>
                          </div>
                          <Button
                            onClick={() => scrollToSection("contact")}
                            variant="ghost"
                            className="group/btn px-0 text-white hover:bg-transparent"
                          >
                            <span className="mr-2">Get a Quote</span>
                            <span className="relative overflow-hidden inline-block">
                              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-full" />
                              <ArrowRight className="h-4 w-4 absolute top-0 -left-6 transform transition-transform duration-300 group-hover/btn:translate-x-6" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Roof Benefits Section */}
            <section id="benefits" className="relative w-full py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-950/30"></div>
                <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
              </div>

              <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                      <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                      Key Benefits
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Why Choose Our Robotic Inspection
                    </h2>
                    <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                      Our technology delivers measurable advantages over traditional roof inspection methods.
                    </p>
                    <p className="text-lg font-medium text-teal-400">Questions? Call (510) 514-9518</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {[
                    {
                      icon: <CheckCircle />,
                      title: "50-65% Cost Savings",
                      description:
                        "Cut your inspection costs by more than half compared to traditional methods while getting more detailed and accurate results.",
                    },
                    {
                      icon: <Shield />,
                      title: "Prevent Costly Damage",
                      description:
                        "Detect moisture issues before they cause $100,000+ in structural damage and extend your roof's lifespan by 5-20 years.",
                    },
                    {
                      icon: <Timer />,
                      title: "85% Faster Results",
                      description:
                        "Complete comprehensive roof inspections in hours instead of days or weeks, with detailed reports delivered within 24-48 hours.",
                    },
                    {
                      icon: <Sun />,
                      title: "Tax Incentives Available",
                      description:
                        "Access up to $5/sq.ft in tax credits and incentives for necessary repairs identified through our detailed inspection reports.",
                    },
                    {
                      icon: <FileText />,
                      title: "Comprehensive Reports",
                      description:
                        "Receive detailed digital reports with high-resolution imagery, moisture maps, and actionable recommendations.",
                    },
                    {
                      icon: <Smartphone />,
                      title: "Nationwide Service",
                      description:
                        "We serve businesses across the United States with our mobile inspection units and rapid deployment capabilities.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm hover:shadow-lg shadow-teal-500/5 transition-all duration-300"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Roof Technology Section */}
            <section id="technology" className="relative w-full py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-950/30"></div>
                <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
              </div>

              <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                      <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                      Our Technology
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-relaxed pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      How Our Inspection Technology Works
                    </h2>
                    <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                      Advanced robotics and AI combine to deliver unmatched precision in roof inspection
                    </p>
                  </div>
                </motion.div>

                <TechnologyProcess />
              </div>
            </section>
          </>
        )}

        {activeTab === "concrete" && (
          <>
            {/* Concrete Solutions Section */}
            <section id="solutions" className="relative w-full py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-600/10 blur-3xl rounded-full"></div>
              </div>

              <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                      <span className="mr-2 h-2 w-2 rounded-full bg-slate-500"></span>
                      Concrete Solutions
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Advanced Concrete Structure Inspection Services
                    </h2>
                    <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                      Our robotic inspection systems find structural issues that traditional methods miss - preventing
                      costly failures and ensuring safety.
                    </p>
                    <p className="text-lg font-medium text-slate-400">
                      Call us today at (510) 514-9518 for a free consultation
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                  {[
                    {
                      icon: <Building2 className="h-8 w-8" />,
                      title: "Foundation Inspection",
                      description:
                        "Detect settlement issues, cracks, and moisture problems in building foundations before they compromise structural integrity.",
                      gradient: "from-slate-500 to-slate-400",
                    },
                    {
                      icon: <Layers className="h-8 w-8" />,
                      title: "Parking Garage Assessment",
                      description:
                        "Identify rebar corrosion, concrete deterioration, and structural weaknesses that could lead to catastrophic collapse.",
                      gradient: "from-slate-600 to-slate-500",
                    },
                    {
                      icon: <Shield className="h-8 w-8" />,
                      title: "Bridge & Infrastructure",
                      description:
                        "Comprehensive structural health monitoring for bridges, tunnels, and critical infrastructure without traffic disruption.",
                      gradient: "from-slate-700 to-slate-600",
                    },
                    {
                      icon: <FileText className="h-8 w-8" />,
                      title: "Building Structure Analysis",
                      description:
                        "Complete structural assessment of concrete buildings, identifying load-bearing issues and maintenance needs.",
                      gradient: "from-slate-800 to-slate-700",
                    },
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1"
                    >
                      <div className="relative z-10 flex flex-col h-full p-6 backdrop-blur-sm">
                        <div className={`rounded-full bg-gradient-to-br ${solution.gradient} p-3 w-fit mb-6`}>
                          {solution.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                        <p className="text-white/70 mb-6 flex-grow">{solution.description}</p>
                        <div className="mt-auto space-y-3">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-slate-500" />
                            <a href="tel:5105149518" className="text-white hover:text-slate-400 transition-colors">
                              (510) 514-9518
                            </a>
                          </div>
                          <Button
                            onClick={() => scrollToSection("contact")}
                            variant="ghost"
                            className="group/btn px-0 text-white hover:bg-transparent"
                          >
                            <span className="mr-2">Get a Quote</span>
                            <span className="relative overflow-hidden inline-block">
                              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-full" />
                              <ArrowRight className="h-4 w-4 absolute top-0 -left-6 transform transition-transform duration-300 group-hover/btn:translate-x-6" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Concrete Benefits Section */}
            <section id="benefits" className="relative w-full py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950/30"></div>
                <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-slate-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-slate-600/10 blur-3xl rounded-full"></div>
              </div>

              <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                      <span className="mr-2 h-2 w-2 rounded-full bg-slate-500"></span>
                      Key Benefits
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Why Choose Our Robotic Concrete Inspection
                    </h2>
                    <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                      Our technology delivers measurable advantages over traditional concrete inspection methods.
                    </p>
                    <p className="text-lg font-medium text-slate-400">Questions? Call (510) 514-9518</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {[
                    {
                      icon: <div className="text-4xl font-bold">50%+</div>,
                      title: "Cost Savings",
                      description:
                        "Cut inspection costs by more than half compared to traditional drilling and coring methods while getting more accurate results.",
                    },
                    {
                      icon: <div className="text-4xl font-bold">0</div>,
                      title: "Destructive Testing",
                      description:
                        "No drilling, coring, or damage to your structure. Our non-invasive technology preserves building integrity.",
                    },
                    {
                      icon: <div className="text-4xl font-bold">99%</div>,
                      title: "Accuracy Rate",
                      description:
                        "Detect rebar location, corrosion, voids, and cracks with 99% accuracy using advanced Ground Penetrating Radar.",
                    },
                    {
                      icon: <div className="text-4xl font-bold">75%</div>,
                      title: "Faster Results",
                      description:
                        "Complete comprehensive structural assessments 75% faster than traditional methods with detailed reports in 24-48 hours.",
                    },
                    {
                      icon: <div className="text-4xl font-bold">$0</div>,
                      title: "Prevent Catastrophic Failures",
                      description:
                        "Identify structural issues before they become million-dollar liability problems or safety hazards.",
                    },
                    {
                      icon: <div className="text-4xl font-bold">50</div>,
                      title: "States Served",
                      description:
                        "Nationwide service with mobile inspection units and rapid deployment capabilities across all 50 states.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm hover:shadow-lg shadow-slate-500/5 transition-all duration-300"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 to-slate-600 mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Concrete Technology Section */}
            <section id="technology" className="relative w-full py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950/30"></div>
                <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-slate-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-slate-600/10 blur-3xl rounded-full"></div>
              </div>

              <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                      <span className="mr-2 h-2 w-2 rounded-full bg-slate-500"></span>
                      Our Technology
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-relaxed pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      How Our Concrete Inspection Technology Works
                    </h2>
                    <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                      Advanced robotics and AI combine to deliver unmatched precision in structural assessment without
                      damaging your building.
                    </p>
                  </div>
                </motion.div>

                <ConcreteTechnologyProcess />
              </div>
            </section>
          </>
        )}

        {/* Testimonials Section */}
        <section id="testimonials" className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-950/30"></div>
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                  <span
                    className={`mr-2 h-2 w-2 rounded-full ${activeTab === "roof" ? "bg-teal-500" : "bg-slate-500"}`}
                  ></span>
                  Client Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  What Our {activeTab === "roof" ? "Roof Inspection" : "Concrete Inspection"} Clients Say
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                  Real results from real clients who chose our{" "}
                  {activeTab === "roof" ? "robotic roof inspection" : "concrete assessment"} services.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {(activeTab === "roof"
                ? // Roof Testimonials
                  [
                    {
                      quote:
                        "BDR's robotic inspection saved us over $150,000 by detecting moisture issues before they became major structural problems. The detailed reports were incredibly thorough.",
                      author: "Sarah Johnson",
                      title: "Facilities Manager",
                      company: "Metro Shopping Center",
                      savings: "$150,000 saved",
                    },
                    {
                      quote:
                        "We were amazed by the speed and accuracy. What would have taken weeks with traditional methods was completed in just 2 days with much more detailed results.",
                      author: "Michael Chen",
                      title: "Property Director",
                      company: "Industrial Complex LLC",
                      savings: "75% faster results",
                    },
                    {
                      quote:
                        "The non-invasive inspection process meant no disruption to our business operations. The 3D mapping technology revealed issues we never knew existed.",
                      author: "Lisa Rodriguez",
                      title: "Building Owner",
                      company: "Downtown Office Plaza",
                      savings: "Zero downtime",
                    },
                  ]
                : // Concrete Testimonials (using same content for now as requested)
                  [
                    {
                      quote:
                        "BDR's concrete inspection technology identified critical structural issues in our parking garage that traditional methods completely missed. This prevented a potential catastrophic failure.",
                      author: "David Thompson",
                      title: "Structural Engineer",
                      company: "City Municipal Building",
                      savings: "Prevented major failure",
                    },
                    {
                      quote:
                        "The non-destructive testing approach was perfect for our historic building. We got comprehensive structural data without any damage to the original concrete.",
                      author: "Jennifer Walsh",
                      title: "Historic Preservation Director",
                      company: "Heritage Foundation",
                      savings: "No structural damage",
                    },
                    {
                      quote:
                        "The detailed rebar mapping and corrosion analysis helped us prioritize our maintenance budget effectively. The ROI was immediate and substantial.",
                      author: "Robert Kim",
                      title: "Facilities Director",
                      company: "University Campus",
                      savings: "Optimized maintenance budget",
                    },
                  ]
              ).map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm"
                >
                  <div className="space-y-4">
                    <div
                      className={`inline-flex items-center rounded-full ${
                        activeTab === "roof" ? "bg-teal-500/20 text-teal-400" : "bg-slate-500/20 text-slate-400"
                      } px-3 py-1 text-sm`}
                    >
                      {testimonial.savings}
                    </div>
                    <blockquote className="text-white/90 italic">"{testimonial.quote}"</blockquote>
                    <div className="border-t border-white/10 pt-4">
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/70">{testimonial.title}</div>
                      <div className="text-sm text-white/50">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Coverage Section */}
        <section id="coverage" className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                  <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                  Nationwide Coverage
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Serving Businesses Across America
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                  Our mobile inspection units are ready to deploy to your location, with specialized coverage on both
                  coasts.
                </p>
              </div>
            </motion.div>

            <USMap />

            <div className="mt-12 text-center">
              <p className="text-white/70 mb-4">
                Not seeing your state highlighted? Contact us anyway - we're rapidly expanding our coverage!
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
              >
                Check Availability in Your Area
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-950/30 to-black"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-20"></div>
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                  <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Save 50%+ on Your Next {activeTab === "roof" ? "Roof" : "Concrete"} Inspection
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                  Contact us today to schedule your inspection or request a free quote.
                </p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <Phone className="h-5 w-5 text-teal-500" />
                  <a
                    href="tel:5105149518"
                    className="text-xl font-bold text-white hover:text-teal-400 transition-colors"
                  >
                    (510) 514-9518
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative md:h-[600px] overflow-hidden rounded-2xl border border-white/10 flex flex-col">
                  <div className="relative w-full h-[400px] md:h-[450px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-73.97610232346314!3d40.69921837933205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bcf2b72b95b%3A0xb927a5e23dc32f56!2sBuilding%20128%2C%2019%20Morris%20Ave%2C%20Brooklyn%2C%20NY%2011205!5e0!3m2!1sen!2sus!4v1709764426536!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>

                  <div className="p-8 bg-black/90">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="size-2 rounded-full bg-green-500"></div>
                        <div className="text-sm text-white/70">Serving All 50 States</div>
                      </div>
                      <h3 className="text-2xl font-bold">Fast Response Guaranteed</h3>
                      <p className="text-white/70">
                        We typically respond to all inquiries within 2 hours during business hours.
                      </p>
                      <div className="flex items-center space-x-2 mt-4">
                        <Phone className="h-5 w-5 text-teal-500" />
                        <a
                          href="tel:5105149518"
                          className="text-xl font-bold text-white hover:text-teal-400 transition-colors"
                        >
                          (510) 514-9518
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-teal-500" />
                        <a
                          href="https://maps.google.com/?q=19+Morris+Ave,+Brooklyn,+NY+11205"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-teal-400 transition-colors"
                        >
                          19 Morris Ave, Brooklyn, NY 11205
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600">
                  <div className="bg-black rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>
                    <form onSubmit={onSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium text-white/70">
                            First name
                          </label>
                          <Input
                            id="first-name"
                            name="first-name"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500"
                            placeholder="Jane"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium text-white/70">
                            Last name
                          </label>
                          <Input
                            id="last-name"
                            name="last-name"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/70">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-white/70">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-white/70">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="inspection-type" className="text-sm font-medium text-white/70">
                          Inspection Type
                        </label>
                        <select
                          id="inspection-type"
                          name="inspection-type"
                          className="w-full rounded-md bg-white/5 border border-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
                          defaultValue={activeTab}
                        >
                          <option value="roof">Roof Inspection</option>
                          <option value="concrete">Concrete Inspection</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="property-address" className="text-sm font-medium text-white/70">
                          Property Address
                        </label>
                        <Input
                          id="property-address"
                          name="property-address"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500"
                          placeholder="123 Main St, City, State"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="structure-size" className="text-sm font-medium text-white/70">
                          Approximate Structure Size (sq ft)
                        </label>
                        <Input
                          id="structure-size"
                          name="structure-size"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500"
                          placeholder="e.g., 20,000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-white/70">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
                          placeholder="Tell us about your property and specific needs..."
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full py-6"
                      >
                        Get Your Free Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                    <p className="text-xs text-white/50 mt-4 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="#" className="text-teal-400 hover:underline">
                        Terms & Conditions
                      </Link>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-white/70">Send us an email and we'll respond within 2 business hours.</p>
                  <a href="mailto:info@bdx-robotics.com" className="text-teal-400 hover:underline">
                    info@bdx-robotics.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p className="text-white/70">Speak directly with our inspection specialists.</p>
                  <a href="tel:5105149518" className="text-teal-400 hover:underline">
                    (510) 514-9518
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Visit Us</h3>
                  <p className="text-white/70">Our headquarters in Brooklyn, NY.</p>
                  <address className="text-teal-400 not-italic">
                    19 Morris Ave
                    <br />
                    Brooklyn, NY 11205
                  </address>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6"
              >
                Schedule Inspection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 py-6 backdrop-blur-sm"
              >
                Download Brochure
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative w-full border-t border-white/10 py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-teal-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative size-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white absolute" />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg blur-lg opacity-50"></div>
                </div>
                <span className="font-bold text-lg">BDR</span>
              </Link>
              <p className="text-sm text-white/70">
                Building Diagnostic Robotics (BDR) provides advanced robotic inspection services that save clients 50%
                or more compared to traditional methods while delivering superior accuracy.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions?tab=roof" className="text-white/70 hover:text-white text-sm">
                    Roof Inspections
                  </Link>
                </li>
                <li>
                  <Link href="/solutions?tab=concrete" className="text-white/70 hover:text-white text-sm">
                    Concrete Inspections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
                    Moisture Detection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
                    Structural Analysis
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-white/70 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-white/70 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-white/70 hover:text-white text-sm">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-teal-500" />
                  <a href="tel:5105149518" className="text-white/70 hover:text-white text-sm">
                    (510) 514-9518
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-teal-500" />
                  <a href="mailto:info@bdx-robotics.com" className="text-white/70 hover:text-white text-sm">
                    info@bdx-robotics.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-teal-500" />
                  <a
                    href="https://maps.google.com/?q=19+Morris+Ave,+Brooklyn,+NY+11205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-sm"
                  >
                    19 Morris Ave, Brooklyn, NY
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Building Diagnostic Robotics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-white/50 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Customer Type Modals */}
      {selectedCustomerType && <CustomerTypeModal type={selectedCustomerType} onClose={closeCustomerTypeModal} />}

      {/* Exit Intent Popup */}
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}

      {/* Chat Bot */}
      <ChatBot />
    </div>
  )
}
