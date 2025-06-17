// app/solutions/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Eye, MapPin, Menu, Phone, X, ChevronDown } from "lucide-react"

export default function SolutionsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm md:text-base font-medium">
            Advanced robotic inspection services - Save 50% or more compared to traditional methods! Serving businesses
            nationwide.
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
                  href="/solutions/roof"
                  className="block px-4 py-3 text-white hover:text-teal-400 hover:bg-white/5 transition-colors rounded-t-lg"
                >
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
            <Link href="/#contact">
              <Button className="hidden md:flex bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

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
              href="/solutions/roof"
              className="text-xl font-medium text-white/60 hover:text-white transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Roof Inspections
            </Link>
            <Link
              href="/solutions/concrete"
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
          <Link href="/#contact">
            <Button
              className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => {
                setMobileMenuOpen(false)
                document.body.style.overflow = "auto"
              }}
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
                    Advanced Inspection Solutions
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                  >
                    Choose Your Inspection Solution
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="max-w-[600px] text-white/70 md:text-xl"
                  >
                    Select from our advanced robotic inspection services designed to save you time, money, and provide
                    unmatched accuracy for your specific needs.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center space-x-2 mt-2"
                  >
                    <Phone className="h-5 w-5 text-teal-500" />
                    <a
                      href="tel:5105149518"
                      className="text-xl font-bold text-white hover:text-teal-400 transition-colors"
                    >
                      (510) 514-9518
                    </a>
                  </motion.div>
                </div>
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
                    alt="Advanced robotic inspection technology in action"
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
                        <div className="text-xl font-bold">90%+</div>
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

        {/* Solutions Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
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
                  Our Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Advanced Inspection Services
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                  Choose from our cutting-edge robotic inspection solutions designed to save you time, money, and
                  provide unmatched accuracy.
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
              className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"
            >
              {/* Roof Inspection Card */}
              <motion.div
                variants={item}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col h-full p-8 backdrop-blur-sm">
                  <div className="rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 p-4 w-fit mb-6">
                    <Eye className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Roof Inspections</h3>
                  <p className="text-white/70 mb-6 flex-grow text-lg">
                    Advanced robotic systems detect moisture, damage, and structural issues in flat roofs with 90%
                    accuracy. Save 50-65% compared to traditional methods while getting detailed 3D mapping and
                    comprehensive reports.
                  </p>
                  <div className="space-y-6 flex flex-col justify-between h-full">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                        Moisture Detection
                      </span>
                      <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">3D Mapping</span>
                      <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                        Leak Prevention
                      </span>
                    </div>
                    <Link href="/solutions/roof">
                      <Button className="mt-4 w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-4 px-6 rounded-full text-lg group">
                        Learn More About Roof Inspections
                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Concrete Inspection Card */}
              <motion.div
                variants={item}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col h-full p-8 backdrop-blur-sm">
                  <div className="rounded-full bg-gradient-to-br from-slate-500 to-slate-600 p-4 w-fit mb-6">
                    <Building2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Concrete Inspections</h3>
                  <p className="text-white/70 mb-6 flex-grow text-lg">
                    Non-destructive structural assessment using Ground Penetrating Radar and advanced robotics. Identify
                    rebar corrosion, voids, and structural weaknesses without damaging your building.
                  </p>
                  <div className="space-y-6 flex flex-col justify-between h-full">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm">
                        Foundation
                      </span>
                      <span className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm">
                        Rebar Detection
                      </span>
                      <span className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm">
                        Non-Destructive
                      </span>
                    </div>
                    <Link href="/solutions/concrete">
                      <Button className="mt-4 w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-4 px-6 rounded-full text-lg group">
                        Learn More About Concrete Inspections
                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>

            <div className="mt-12 flex justify-center">
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg">
                  Get a Free Quote for Any Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
