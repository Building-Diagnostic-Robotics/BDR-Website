"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  Menu,
  Phone,
  Search,
  User,
  X,
} from "lucide-react"

// Import blog metadata
import { allBlogs } from "./content"

// Categories for filtering
const categories = ["All", "trends", "case_study", "owners", "technology"]

export default function BlogsPage() {
  const blogs = allBlogs
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = searchTerm === "" || blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory.toLowerCase() === "all" || blog.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm md:text-base font-medium">
            Save 50% or more compared to traditional roof inspections! Serving businesses nationwide.
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
            {["solutions", "benefits", "coverage", "technology", "about"].map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
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
              className="relative text-sm font-medium text-white hover:text-white transition-colors group"
            >
              Blogs
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4 z-50">
            <Button
              onClick={() => (window.location.href = "/#contact")}
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

          {["solutions", "benefits", "coverage", "technology", "about"].map((item) => (
            <a
              key={item}
              href={`/#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <Link
            href="/careers"
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/blogs"
            className="text-2xl font-medium text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          <Button
            onClick={() => {
              window.location.href = "/#contact"
              setMobileMenuOpen(false)
            }}
            className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
          >
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 overflow-visible">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-900/20 to-black/90"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="pt-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-6 leading-snug leading-relaxed pb-2 break-words">
                BDR Insights: The Latest in Roof Inspection Technology
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                Stay informed with our expert articles on building diagnostics, robotic technology, and industry best
                practices.
              </p>

              <div className="max-w-2xl mx-auto relative mb-12">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500 rounded-full"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {category === "case_study"
                      ? "Case Study"
                      : category === "technology"
                        ? "Technology"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="relative w-full py-3 md:py-6 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            {filteredBlogs.length > 0 ? (
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={`${blog.category}-${blog.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={blog.image || "/placeholder.svg?height=240&width=400"}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-500/80 text-white backdrop-blur-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow p-6">
                      <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4" />
                        <span>{blog.readTime}</span>
                      </div>

                      <h2 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h2>
                      <p className="text-white/70 mb-4 line-clamp-3">{blog.excerpt}</p>

                      <div className="flex items-center gap-3 mt-auto">
                        <div className="size-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                          <User className="h-5 w-5 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{blog.author}</p>
                          <p className="text-xs text-white/60">{blog.authorRole}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blogs/${blog.category}/${blog.slug}`}
                        className="mt-6 inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        Read Article
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-white/70 mb-6">Try adjusting your search or category filter.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/10"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative w-full py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-teal-950/30 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-cyan-600/10 p-1">
                <div className="bg-black rounded-xl p-8 md:p-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-4">
                      Stay Updated with BDR Insights
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-8">
                      Subscribe to our newsletter to receive the latest articles, case studies, and industry insights
                      directly to your inbox.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500 py-6"
                      />
                      <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6">
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-xs text-white/50 mt-4">
                      By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                Building Diagnostic Robotics (BDR) provides advanced robotic roof inspection services that save clients
                50% or more compared to traditional methods while delivering superior accuracy.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
                    Moisture Detection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
                    Roof Mapping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
                    Leak Prevention
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
                    Flat Roof Inspections
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white text-sm">
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
                    Blog
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
    </div>
  )
}
