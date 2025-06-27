// app/solutions/roof/page.tsx
"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { QuoteForm } from "@/components/quote-form"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Eye,
  FileText,
  Layers,
  MapPin,
  Menu,
  Phone,
  Shield,
  Smartphone,
  Sun,
  Timer,
  X,
  ChevronDown,
  Mail,
  Download,
  Building2,
  LifeBuoy,
  LifeBuoyIcon,
  Building2Icon,
  SquareActivityIcon,
  BuildingIcon,
  DropletIcon,
} from "lucide-react"
import SampleReportModal from "@/components/sample-report-modal"
import { RoofCustomerTypeModal } from "@/components/roof-customer-type-modal";
import { TechnologyProcess } from "@/components/technology-process"
import { RoofTestimonialSlider } from "@/components/roof-testimonial-slider"

export default function RoofInspectionPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [selectedCustomerType, setSelectedCustomerType] = useState<string | null>(null)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  // Add mounted state for mobile menu rendering
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Set mounted to true after mount for mobile menu transitions
    setMounted(true)
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
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-2 md:px-4">
        <div className="container flex justify-between items-center">
          <p className="text-[10px] md:text-base font-medium text-left pl-0 md:pl-0">
            <span className="md:hidden">Save 50%+ on Roof/Concrete Inspections</span>
            <span className="hidden md:inline">
              Save 50%+ and get results in 48 hours instead of weeks compared to traditional roof/concrete inspections!
              Serving businesses nationwide.
            </span>
          </p>
          <a href="tel:5105149518" className="text-[10px] md:text-base text-white font-medium hover:underline whitespace-nowrap text-right ml-auto pr-0 md:pr-0">
            Call: (510) 514-9518
          </a>
        </div>
      </div>

      {/* Header is hidden when mobileMenuOpen is true */}
      {!mobileMenuOpen && (
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
                  <Link href="/solutions/roof" className="block px-4 py-3 text-teal-400 bg-white/5 rounded-t-lg">
                    Roof Inspections
                  </Link>
                  <Link
                    href="/solutions/concrete"
                    className="block px-4 py-3 text-white hover:text-teal-400 hover:bg-white/5 transition-colors rounded-b-lg"
                  >
                    Concrete Inspections
                  </Link>
                </div>
              </div>
              {["benefits", "technology", "testimonials"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
              >
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
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
                onClick={() => setShowQuoteModal(true)}
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
      )}

      {/* Mobile menu: show only when mobileMenuOpen is true */}
      {mounted && mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 lg:hidden"
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => {
              setMobileMenuOpen(false);
              if (typeof window !== "undefined") {
                document.body.style.overflow = "auto";
              }
            }}
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8 pt-8 pb-8">
            <Link
              href="/"
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof window !== "undefined") {
                  document.body.style.overflow = "auto";
                }
              }}
            >
              Home
            </Link>
            <div className="flex flex-col space-y-2 text-center">
              <span className="text-2xl font-medium text-white">Solutions</span>
              <Link
                href="/solutions/roof"
                className="text-xl font-medium text-teal-400"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (typeof window !== "undefined") {
                    document.body.style.overflow = "auto";
                  }
                }}
              >
                Roof Inspections
              </Link>
              <Link
                href="/solutions/concrete"
                className="text-xl font-medium text-white/60 hover:text-white transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (typeof window !== "undefined") {
                    document.body.style.overflow = "auto";
                  }
                }}
              >
                Concrete Inspections
              </Link>
            </div>
            {["benefits", "technology", "testimonials"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (typeof window !== "undefined") {
                    document.body.style.overflow = "auto";
                  }
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                if (typeof window !== "undefined") {
                  document.body.style.overflow = "auto";
                }
              }}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            >
              Contact Us
            </button>

            <Link
              href="/careers"
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof window !== "undefined") {
                  document.body.style.overflow = "auto";
                }
              }}
            >
              Careers
            </Link>
            
            <Link
              href="/blogs"
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof window !== "undefined") {
                  document.body.style.overflow = "auto";
                }
              }}
            >
              Blogs
            </Link>
            
            <Button
              onClick={() => setShowQuoteModal(true)}
              className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm"
                  >
                    <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                    Advanced Roof Inspection Technology
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl md:text-6xl font-bold tracking-tight text-white"
                  >
                    Revolutionary Flat Roof Inspections That Save 50%+ in Costs
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-6 text-sm md:text-lg leading-6 md:leading-8 text-gray-300"
                  >
                    Our robotic inspection systems detect moisture, damage, and structural issues with 90% accuracy. Get
                    detailed 3D mapping, comprehensive reports, and prevent costly damage before it happens.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center space-x-2 mt-2"
                  >
                    <Phone className="h-5 w-5 text-teal-500" />
                    <span className="text-base md:text-xl font-bold text-white">
                      (510) 514-9518
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button
                    onClick={() => setShowQuoteModal(true)}
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-6 py-4 text-base md:px-8 md:py-6 md:text-lg"
                  >
                    Get a Free Roof Inspection Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => scrollToSection("benefits")}
                    variant="outline"
                    className="border-white/30 text-white hover:text-white hover:border-white text-base md:text-lg rounded-full px-6 py-4 md:px-8 md:py-6"
                  >
                    See Benefits
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-col space-y-4 mt-8"
                >
                  <p className="text-lg font-medium">I am a:</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => openCustomerTypeModal("building-owner")}
                      variant="outline"
                      className="border-white/10 bg-white/5 text-white hover:bg-teal-500/20 hover:border-teal-500/50 rounded-lg py-4 h-auto"
                    >
                      Building Owner
                    </Button>
                    <Button
                      onClick={() => openCustomerTypeModal("roofing-contractor")}
                      variant="outline"
                      className="border-white/10 bg-white/5 text-white hover:bg-teal-500/20 hover:border-teal-500/50 rounded-lg py-4 h-auto"
                    >
                      Roofing Contractor
                    </Button>
                    <Button
                      onClick={() => openCustomerTypeModal("general-contractor")}
                      variant="outline"
                      className="border-white/10 bg-white/5 text-white hover:bg-teal-500/20 hover:border-teal-500/50 rounded-lg py-4 h-auto"
                    >
                      General Contractor
                    </Button>
                    <Button
                      onClick={() => openCustomerTypeModal("engineering-consultant")}
                      variant="outline"
                      className="border-white/10 bg-white/5 text-white hover:bg-teal-500/20 hover:border-teal-500/50 rounded-lg py-4 h-auto"
                    >
                      Engineering Consultant
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="relative"
              >
                <div className="relative h-[400px] md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 mix-blend-overlay"></div>
                  <Image
                    src="/BDR_intro.gif?height=600&width=900"
                    alt="Roof inspection robot in action on a flat commercial roof"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Floating elements */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/70">Cost Savings</div>
                        <div className="text-xl font-bold">50-65%</div>
                      </div>
                      <div className="h-10 w-px bg-white/10"></div>
                      <div>
                        <div className="text-sm text-white/70">Accuracy</div>
                        <div className="text-xl font-bold">90%</div>
                      </div>
                      <div className="h-10 w-px bg-white/10"></div>
                      <div>
                        <div className="text-sm text-white/70">Time Saved</div>
                        <div className="text-xl font-bold">85%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 size-40 bg-teal-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 size-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

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
                  Our Roof Inspection Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-2">
                  Advanced Flat Roof Inspection Services
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <p className="max-w-[1000px] text-white/70 md:text-xl/relaxed">
                    Our robotic inspection systems find moisture and damage that traditional methods miss - at half the
                    cost.
                  </p>
                  <a
                    href="tel:5105149518"
                    className="text-lg font-medium text-teal-400 hover:underline"
                  >
                    Call us today at (510) 514-9518 for a free consultation
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center gap-8">
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
                    title: "Roof Estimation",
                    description:
                      "Get detailed estimates on the cost of renovating, replacing, or retrofitting your roof to improve capital efficiency by 30%",
                    gradient: "from-cyan-500 to-teal-500",
                    phone: "(510) 514-9518",
                  },
                  {
                    icon: <DropletIcon className="h-8 w-8" />,
                    title: "Leak Prevention",
                    description:
                      "Detect potential leaks before they happen and extend your roof's lifespan by 5-20 years.",
                    gradient: "from-teal-600 to-cyan-600",
                    phone: "(510) 514-9518",
                  },
                  {
                    icon: <BuildingIcon className="h-8 w-8" />,
                    title: "Roof As-built Generation",
                    description:
                      "Create detailed 3D maps and 2D CAD drawings of your entire roof system using patented BDR technology with precise measurements and condition reports.",
                    gradient: "from-cyan-500 to-teal-500",
                    phone: "(510) 514-9518",
                  },
                  {
                    icon: <SquareActivityIcon className="h-8 w-8" />,
                    title: "Roof's Remaining Life Prediction",
                    description:
                      "Understand the remaining roof life and the options to length roof life by another 20 years at as little as 25% of the cost of replacement",
                    gradient: "from-teal-600 to-cyan-600",
                    phone: "(510) 514-9518",
                  },
                ].map((solution, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-[300px] md:w-[30%] max-w-sm flex"
                  >
                    <motion.div
                      variants={item}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex flex-col h-full w-full"
                    >
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
                          onClick={() => setShowQuoteModal(true)}
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
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-cyan-600 group-hover:w-full transition-all duration-700"></div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-2">
                  Why Choose Our Robotic Roof Inspection
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                    Our technology delivers measurable advantages over traditional roof inspection methods.
                  </p>
                  <a
                    href="tel:5105149518"
                    className="text-lg font-medium text-teal-400 hover:underline"
                  >
                    Questions? Call (510) 514-9518 for a free consultation
                  </a>
                </div>
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
                  title: "50% Cost Savings",
                  description:
                    "Cut your inspection costs by 50%+ compared to traditional methods while getting more detailed and accurate results.",
                },
                {
                  icon: <Shield />,
                  title: "Prevent Costly Damage",
                  description:
                    "Detect moisture issues before they cause $100,000+ in structural damage and extend your roof's lifespan by 5-20 years.",
                },
                {
                  icon: <Timer />,
                  title: "75% Faster Results",
                  description:
                    "Complete comprehensive roof inspections in hours instead of days or weeks, with detailed reports delivered within 24-48 hours.",
                },
                {
                  icon: (
                    <span className="text-base font-bold text-white w-10 h-10 flex items-center justify-center">
                      90%
                    </span>
                  ),
                  title: "Accuracy Rate",
                  description:
                    "Detect rebar location, corrosion, voids, and cracks with 90% accuracy using advanced Ground Penetrating Radar.",
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
                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-cyan-600 group-hover:w-full transition-all duration-700"></div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 flex justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-6 py-4 text-base md:px-8 md:py-6 md:text-lg"
              >
                Schedule Your Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div> 
        </section>

        {/* Technology Section */}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-relaxed pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-2">
                  How Our Inspection Technology Works
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                    Advanced robotics and AI combine to deliver unmatched precision in roof inspection
                  </p>
                </div>
              </div>
            </motion.div>

            <TechnologyProcess />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
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
                  Client Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-2">
                  What Our Roof Inspection Clients Say
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                    Real results from real clients who chose our robotic roof inspection services.
                  </p>
                </div>
              </div>
            </motion.div>

            <RoofTestimonialSlider />

            <div className="mt-12 text-center">
              <p className="text-white/70 mb-4">Join our satisfied clients across the United States</p>
              <a
                href="tel:5105149518"
                className="text-lg font-medium text-teal-400 hover:underline"
              >
                Call us today at (510) 514-9518 for a free consultation
              </a>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-2">
                  Save 50%+ on Your Next Roof Inspection
                </h2>
                <div className="flex flex-col items-center space-y-4">
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
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* LEFT COLUMN: Map + Contact Info */}
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

              {/* RIGHT COLUMN: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600">
                  <div className="bg-black rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault()
                        const form = e.currentTarget
                        const res = await fetch("/api/contactForm", {
                          method: "POST",
                          body: new FormData(form),
                        })
                        if (res.ok) {
                          alert("Thank you! We'll be in touch soon.")
                          form.reset()
                        } else {
                          alert("Oops—something went wrong.")
                        }
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium text-white/70">
                            First Name
                          </label>
                          <input
                            id="first-name"
                            name="first-name"
                            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
                            placeholder="Jane"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium text-white/70">
                            Last Name
                          </label>
                          <input
                            id="last-name"
                            name="last-name"
                            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/70">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-white/70">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="additional-info" className="text-sm font-medium text-white/70">
                          Additional Information
                        </label>
                        <textarea
                          id="additional-info"
                          name="additional-info"
                          rows={3}
                          className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
                          placeholder="Tell us about your specific needs."
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full py-6"
                      >
                        Submit
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
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

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
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

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
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

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
                onClick={() => setShowReportModal(true)}
                className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 py-6 backdrop-blur-sm"
              >
                Download Sample Report
                <Download className="ml-2 h-4 w-4" />
              </Button>
              {showReportModal && (
                <SampleReportModal open={showReportModal} onClose={() => setShowReportModal(false)} />
              )}
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
                <img
                  src="/BDR.jpg"
                  alt="BDR Logo"
                  className="h-6 w-6 rounded-lg object-cover"
                />
                <span className="font-bold text-lg">BDR</span>
              </Link>
              <p className="text-sm text-white/70">
                Building Diagnostic Robotics (BDR) provides advanced robotic inspection services that save clients 50%
                or more compared to traditional methods while delivering superior accuracy.
              </p>
              <div className="flex space-x-4">
                {/* Linkedin */}
                <a href="https://www.linkedin.com/company/building-diagnostic-robotics/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
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
                {/* Twitter (X) */}
                {/* <a href="#" className="text-white/70 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.94 3h2.74l4.46 6.37L18.76 3H22l-6.92 9.46L22 21h-3.36l-4.86-6.9L8.16 21H4.98l7.2-9.8L4 3z"/>
                  </svg>
                </a> */}
                {/* Facebook */}
                <a href="https://www.facebook.com/people/BDR/61575974576898/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
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
                {/* Instagram */}
                <a href="https://www.instagram.com/buildingdiagnosticrobotics?igsh=MTVkeDEyN3VtMXpqbQ==" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
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
                {/* Spotify */}
                {/* <a href="#" className="text-white/70 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 168 168"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M84,0C37.7,0,0,37.7,0,84s37.7,84,84,84s84-37.7,84-84S130.3,0,84,0z M121.6,121.5c-1.5,2.5-4.8,3.3-7.3,1.9 c-20-12.2-45.2-14.9-75.2-8c-2.9,0.7-5.8-1.1-6.5-4c-0.7-2.9,1.1-5.8,4-6.5c33.6-7.5,62.2-4.3,85.4,9.6 C122.2,116.1,123.1,119,121.6,121.5z M132.4,102.2c-1.8,2.9-5.6,3.9-8.5,2.1c-22.9-14.1-57.9-18.2-84.9-9.9 c-3.2,1-6.6-0.8-7.6-4.1c-1-3.2,0.8-6.6,4.1-7.6c31.8-9.8,70.4-5.3,97.8,11.2C133.3,94.9,134.2,99.3,132.4,102.2z M134.6,82.2 c-27.2-16.2-72.3-17.6-98.2-9.6c-3.7,1.2-7.7-0.9-8.9-4.6c-1.2-3.7,0.9-7.7,4.6-8.9c30.6-9.8,80.5-8.2,112.3,11.3 c3.2,1.9,4.3,6.1,2.3,9.3C144.7,83.5,138.5,84.6,134.6,82.2z"/>
                  </svg>
                </a> */}
                {/* YouTube */}
                {/* <a href="#" className="text-white/70 hover:text-white">
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
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </a> */}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions/roof" className="text-white/70 hover:text-white text-sm">
                    Roof Inspections
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/concrete" className="text-white/70 hover:text-white text-sm">
                    Concrete Inspections
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
                  <a href="/#partners" className="text-white/70 hover:text-white text-sm">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white text-sm">
                    Contact Us
                  </a>
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
    {/* Customer Type Modal */}
    {selectedCustomerType && (
      <RoofCustomerTypeModal
        type={selectedCustomerType}
        onClose={closeCustomerTypeModal}
      />
    )}
  </div>
  )
}
