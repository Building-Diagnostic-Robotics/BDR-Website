"use client"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, CheckCircle, FileText, Mail, MapPin, Menu, Phone, X, Zap, ChevronDown } from "lucide-react"
import Footer from "@/components/Footer"

export default function PartnershipsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs md:text-sm font-medium text-center md:text-left">
            Download our Whitepaper: The Future of Roof Inspection Technology
          </p>
          
          <a href="/sample-report.pdf" download>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 text-xs md:text-sm whitespace-nowrap"
            >
              Download Now <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </a>
          
        </div>
        </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-50">
            <div className="relative bg-gradient-to-br from-[#1f8a46] to-green-600 rounded-lg flex items-center justify-center w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f8a46] to-green-600 rounded-lg blur-lg opacity-50 z-0"></div>
              <img src="/BDR.jpg" alt="BDR Logo" className="h-16 w-16 rounded-lg z-10" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 ml-12">
            {/* Solutions dropdown */}
            <div className="relative group">
              <button className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group flex items-center">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#1f8a46] to-green-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                <Link href="/solutions/roof" className="block px-4 py-3 text-gray-900 hover:text-[#1f8a46] hover:bg-gray-50 transition-colors rounded-t-lg">Roof Inspections</Link>
                {/* <Link href="/solutions/concrete" className="block px-4 py-3 text-gray-900 hover:text-[#1f8a46] hover:bg-gray-50 transition-colors rounded-b-lg">Concrete Inspections</Link> */}
              </div>
            </div>
            {/* Channel Partners active */}
            <Link href="/partnerships/roofing" className="relative text-sm font-medium text-gray-900 transition-colors">
              Channel Partners
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#1f8a46] to-green-600" />
            </Link>
            {/* About */}
            <Link href="/about" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#1f8a46] to-green-600 transition-all duration-300 group-hover:w-full" />
            </Link>
            {/* Resources dropdown */}
            <div className="relative group">
              <button className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#1f8a46] to-green-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                <Link href="/blogs" className="block px-4 py-3 text-gray-700 hover:text-[#1f8a46] hover:bg-gray-50 transition-colors rounded-t-lg">Blogs</Link>
                <Link href="/case-studies" className="block px-4 py-3 text-gray-700 hover:text-[#1f8a46] hover:bg-gray-50 transition-colors">Case Studies</Link>
                <Link href="/sample-reports" className="block px-4 py-3 text-gray-700 hover:text-[#1f8a46] hover:bg-gray-50 transition-colors">Sample Reports</Link>
                <Link href="/tech-sheets" className="block px-4 py-3 text-gray-700 hover:text-[#1f8a46] hover:bg-gray-50 transition-colors rounded-b-lg">Tech Sheets</Link>
              </div>
            </div>
            {/* FAQs */}
            <Link href="/faqs" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
              FAQs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#1f8a46] to-green-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          <div className="flex items-center gap-4 z-50">
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex bg-gradient-to-r from-[#1f8a46] to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <button onClick={toggleMobileMenu} className="lg:hidden text-gray-900 p-2" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {/* Solutions Group */}
            <div className="flex flex-col space-y-2 text-center">
              <span className="text-2xl font-medium text-gray-900">Solutions</span>
              <Link href="/solutions/roof" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Roof Inspections</Link>
              {/* <Link href="/solutions/concrete" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Concrete Inspections</Link> */}
            </div>
            <Link href="/partnerships/roofing" className="text-2xl font-medium text-gray-900" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Channel Partners</Link>
            <Link href="/about" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>About</Link>
            <div className="flex flex-col space-y-2 text-center">
              <span className="text-2xl font-medium text-gray-900">Resources</span>
              <Link href="/blogs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Blogs</Link>
              <Link href="/case-studies" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Case Studies</Link>
              <Link href="/sample-reports" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Sample Reports</Link>
              <Link href="/tech-sheets" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Tech Sheets</Link>
            </div>
            <Link href="/faqs" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>FAQs</Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-8 bg-gradient-to-r from-[#1f8a46] to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-6 text-lg"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] flex items-center pt-20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#1f8a46]/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
          </div>

          <div className="container px-4 md:px-6 z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Channel Partner Program
                </h1>
                <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">
                  Deliver faster, smarter, and more profitable roof inspections — together.
                </p>
                <p className="max-w-[800px] text-gray-600 md:text-lg/relaxed">
                  BDR's autonomous Roofus platform helps partners transform how roofing systems are inspected,
                  benchmarked, and maintained. Each partnership tier expands your business opportunity—from streamlined
                  service delivery to new recurring-revenue streams through Inspection-as-a-Service (IaaS).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link href="https://app.usemotion.com/meet/bilal-is/1psfn3c" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-gradient-to-r from-[#1f8a46] to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-6 text-lg"
                  >
                    Book a Meeting to Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Who It's For</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  BDR creates value across the roofing ecosystem by digitizing and simplifying inspection workflows for
                  every stakeholder:
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Roofing & Building-Envelope Contractors",
                  description: "Win more bids with fast, defensible data that reduces rescans and risk.",
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Roofing Manufacturers & Distributors",
                  description: "Embed verified inspection data in your warranty and maintenance programs.",
                },
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Facility & Asset Managers",
                  description: "Standardize portfolio-wide inspection cycles and reduce downtime.",
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Insurance & Risk Firms",
                  description: "Access timestamped, standardized inspection data for underwriting and claims.",
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Energy & Retrofit Providers",
                  description: "Validate roof condition before solar, overlay, or insulation upgrades.",
                },
              ].map((audience, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 w-full md:w-1/2 lg:w-1/3 max-w-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1f8a46] to-green-600 text-white mb-6">
                    {audience.icon}
                  </div>
                  <h3 className="text-xl text-gray font-bold mb-3">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-[#1f8a46]/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-green-500/10 blur-3xl rounded-full"></div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Why Partner with BDR?</h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {[
                {
                  title: "Differentiate Your Offer",
                  description:
                    "Bring AI-powered, autonomous inspection to clients — cutting time and cost by up to 65%.",
                },
                {
                  title: "Simplify Operations",
                  description: "Replace manual site work with portable robotics and instant digital deliverables.",
                },
                {
                  title: "Earn Recurring Revenue",
                  description: "Resell or bundle Roof Inspection-as-a-Service subscriptions for predictable income.",
                },
                {
                  title: "Expand Your Reach",
                  description: "Complete more roofs per month and scale across regions without adding headcount.",
                },
                {
                  title: "Build Trust",
                  description:
                    "Provide defensible, timestamped data that supports warranty, insurance, and ESG documentation.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#1f8a46]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{benefit.title}:</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-6 text-center"
              >
                <p className="text-gray-600">
                  See how Roofus transformed portfolio inspections in our{" "}
                  <a href="/case-studies/" className="text-[#1f8a46] hover:underline font-medium">
                    City of New York & Archdiocese Case Study →
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partner Packages Section */}
        <section id="packages" className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Partner Packages</h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  tier: "Tier 1 — Authorized Partner",
                  subtitle:
                    "Who It's For: Contractors, consultants, or distributors completing their first BDR project or adding roof inspections to their service line.",
                  includes: [
                    "Preferred partner pricing (introductory discount)",
                    "One-day onboarding + virtual training",
                    "Access to BDR technical support and documentation",
                    'Use of "Authorized Partner" badge for proposals',
                    "Listing in the BDR Partner Directory",
                  ],
                  value:
                    "A frictionless entry point to deliver your first BDR roof inspection confidently, backed by full support from our field and analytics team.",
                },
                {
                  tier: "Tier 2 — Certified Partner",
                  subtitle:
                    "Who It's For: Experienced providers scaling roof-inspection services or integrating BDR's robotics and analytics platform into their workflows.",
                  includes: [
                    "Volume-based pricing + margin incentives (10–15%)",
                    "Co-branded sales / marketing assets",
                    "Shared project leads from BDR's pipeline",
                    "Rights to resell Roof Inspection-as-a-Service subscriptions (recurring-revenue share)",
                    "Dedicated Partner Manager for sales + marketing alignment",
                  ],
                  value:
                    "A growth tier for partners embedding autonomous roof inspection into their business model — unlocking recurring revenue, shared visibility, and portfolio expansion.",
                  featured: true,
                },
                {
                  tier: "Tier 3 — Strategic Alliance Partner",
                  subtitle:
                    "Who It's For: National suppliers, large contractors, insurers, or asset networks pursuing portfolio-scale inspection programs.",
                  includes: [
                    "Custom pricing and integration support",
                    "Early access to new Roofus analytics + dashboard features",
                    "Co-branded PR + industry visibility (NYSERDA, DOE, Scale for Climate Tech networks)",
                    "Dedicated technical-integration & project-design team",
                  ],
                  value:
                    "BDR's highest collaboration tier — reserved for long-term partners shaping the future of autonomous roof diagnostics and digital-asset management.",
                  invitation: true,
                },
              ].map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative overflow-hidden rounded-2xl border-2 ${
                    pkg.featured ? "border-[#1f8a46] shadow-xl scale-105" : "border-gray-200 shadow-sm"
                  } bg-white p-8`}
                >
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#1f8a46] to-green-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.tier}</h3>
                      <p className="text-gray-600 text-sm mb-4">{pkg.subtitle}</p>
                      {pkg.invitation && <p className="text-sm font-medium text-[#1f8a46] mb-4">(by invitation)</p>}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#1f8a46] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold mb-2">Value:</h4>
                      <p className="text-sm text-gray-600">{pkg.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Opportunities Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-[#1f8a46]/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-green-500/10 blur-3xl rounded-full"></div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Revenue & Margin Opportunities
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-x-auto"
            >
              <div className="min-w-[800px] rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#1f8a46] to-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Stream</th>
                      <th className="px-6 py-4 text-left font-semibold">Description</th>
                      <th className="px-6 py-4 text-left font-semibold">Partner Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        stream: "Inspection Margin",
                        description: "Volume-based IaaS pricing",
                        benefit: "10–25% markup range",
                      },
                      {
                        stream: "Operational Efficiency",
                        description: "Faster deployment · fewer rescans",
                        benefit: "3–5× more projects / quarter",
                      },
                      {
                        stream: "Subscription Upsell",
                        description: "Resell data + analytics subscriptions",
                        benefit: "Recurring annual revenue share",
                      },
                      {
                        stream: "Portfolio Repeatability",
                        description: "Repeatable workflows across multiple clients",
                        benefit: "Scalable growth · minimal retraining",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.stream}</td>
                        <td className="px-6 py-4 text-gray-600">{row.description}</td>
                        <td className="px-6 py-4 text-gray-600">{row.benefit}</td>
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
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600">
                Use our ROI calculator and pricing toolkit — available in the Partner Portal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enablement & Support Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Enablement & Support</h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {[
                {
                  title: "Training & Certification",
                  description: "Hands-on and virtual training for deployment, data review, and sales.",
                },
                {
                  title: "Sales Toolkit",
                  description: "BAU vs BDR charts, rate cards, ROI calculators, and demo assets.",
                },
                {
                  title: "Technical Support",
                  description: "Direct access to BDR's robotics engineers and analytics specialists.",
                },
                {
                  title: "Marketing Collateral",
                  description: "Co-branded case studies, presentations, and partner-portal assets.",
                },
                {
                  title: "Rebate & Incentive Guidance",
                  description: "Assistance with ESG alignment and compliance programs.",
                },
              ].map((support, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#1f8a46]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{support.title}:</h4>
                    <p className="text-gray-600">{support.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-6 text-center"
              >
                {/* Centered sentence */}
                <p className="text-gray-600">
                  Access proof tools and technical downloads in our Partner Resources:
                </p>

                {/* CTAs on next line, centered with spacing */}
                <div className="mt-3 flex flex-wrap justify-center gap-10">
                  <a href="/sample-report.pdf" download className="text-[#1f8a46] hover:underline font-medium">
                    Whitepaper →
                  </a>
                  <a href="/case-studies/" className="text-[#1f8a46] hover:underline font-medium">
                    Case Study →
                  </a>
                  <a href="/sample-reports/" className="text-[#1f8a46] hover:underline font-medium">
                    Sample Reports →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partner Journey Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-[#1f8a46]/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-green-500/10 blur-3xl rounded-full"></div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Partner Journey</h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  emoji: "1",
                  title: "Intro Meeting",
                  description: "Review territory, pipeline, and client fit.",
                },
                {
                  emoji: "2",
                  title: "Pilot Project",
                  description: "Complete your first autonomous roof inspection with BDR support.",
                },
                {
                  emoji: "3",
                  title: "Certification",
                  description: "Receive branding toolkit, credentials, and shared marketing visibility.",
                },
                {
                  emoji: "4",
                  title: "Growth Phase",
                  description: "Scale through shared leads, recurring subscriptions, and portfolio replication.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm h-full">
                    <div className="text-6xl font-bold text-green-500/70 mb-4">{step.emoji}</div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-[#1f8a46]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Step / CTA Section */}
        <section id="contact" className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Next Step</h2>
                <p className="text-gray-600 md:text-xl/relaxed pt-4">Ready to grow with BDR?</p>
                <p className="text-gray-600 md:text-lg/relaxed">
                  Book a 30-minute meeting to explore which Partner Package best fits your roofing business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://app.usemotion.com/meet/bilal-is/1psfn3c" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#1f8a46] to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-6 text-lg">
                    Book a Meeting
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="/sample-report.pdf" download>
                  <Button
                    variant="outline"
                    className="border-gray text-gray bg-white hover:bg-gray hover:text-white hover:border-gray transition-colors duration-300 rounded-full px-8 py-6 text-lg"
                  >
                    Download Program Overview (PDF)
                    <FileText className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
