"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QuoteForm } from "@/components/quote-form"
import { ArrowRight, Building2, CheckCircle, Phone, Mail, MapPin, Menu, X, Search, Filter, LocateIcon as LocationIcon, Briefcase, Clock, Users, ChevronDown } from 'lucide-react'

const jobCategories = [
  "Engineering",
  "Data Science",
  "Robotics",
  "Sales",
  "Marketing",
  "Operations",
  "Customer Support",
  "Leadership",
]

const locations = ["Brooklyn, NY", "Remote", "Chicago, IL", "Los Angeles, CA", "Miami, FL", "Seattle, WA"]

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"]

// Dummy job listings
const jobs = [
  {
    id: 1,
    title: "Robotics Engineer",
    department: "Engineering",
    location: "Brooklyn, NY",
    type: "Full-time",
    postedDate: "2 days ago",
    description: 
      "Join our robotics team to develop and enhance our roof inspection robots. You'll work on mechanical design, sensor integration, and control systems.",
    requirements: [
      "BS/MS in Robotics, Mechanical Engineering, or related field",
      "3+ years of experience in robotics design and development",
      "Experience with ROS, sensor integration, and motion control",
      "Strong programming skills in Python and C++"
    ]
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    postedDate: "1 week ago",
    description: 
      "Help us improve our AI algorithms for detecting moisture and structural issues in roofing systems using machine learning and computer vision.",
    requirements: [
      "MS/PhD in Computer Science, Machine Learning, or related field",
      "3+ years of experience in machine learning and computer vision",
      "Proficiency in PyTorch or TensorFlow",
      "Experience with image processing and object detection algorithms"
    ]
  },
  {
    id: 3,
    title: "Sales Representative",
    department: "Sales",
    location: "Chicago, IL",
    type: "Full-time",
    postedDate: "3 days ago",
    description: 
      "Drive business growth by selling our innovative roof inspection services to commercial building owners and property managers in the Midwest region.",
    requirements: [
      "Bachelor's degree in Business or related field",
      "2+ years of B2B sales experience, preferably in construction or property services",
      "Strong communication and negotiation skills",
      "Experience with CRM systems"
    ]
  },
  {
    id: 4,
    title: "Operations Manager",
    department: "Operations",
    location: "Los Angeles, CA",
    type: "Full-time",
    postedDate: "2 weeks ago",
    description: 
      "Oversee the day-to-day operations of our West Coast inspection teams, ensuring efficient scheduling, quality service delivery, and customer satisfaction.",
    requirements: [
      "Bachelor's degree in Business Management or related field",
      "5+ years of operations management experience",
      "Strong leadership and team management skills",
      "Experience in construction, property management, or related industries"
    ]
  },
  {
    id: 5,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    postedDate: "5 days ago",
    description: 
      "Create and execute digital marketing strategies to increase brand awareness and generate leads for our robotic roof inspection services.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "3+ years of B2B digital marketing experience",
      "Experience with content creation, SEO, and social media marketing",
      "Knowledge of marketing automation and analytics tools"
    ]
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Miami, FL",
    type: "Full-time",
    postedDate: "1 week ago",
    description: 
      "Ensure our clients achieve maximum value from our roof inspection services by providing post-inspection support, report interpretation, and maintenance recommendations.",
    requirements: [
      "Bachelor's degree in Business or related field",
      "3+ years of customer success or account management experience",
      "Strong communication and problem-solving skills",
      "Experience in construction, roofing, or property management a plus"
    ]
  },
  {
    id: 7,
    title: "Data Analyst Intern",
    department: "Data Science",
    location: "Brooklyn, NY",
    type: "Internship",
    postedDate: "3 days ago",
    description: 
      "Support our data science team in analyzing roof inspection data, creating visualizations, and developing insights to improve our services.",
    requirements: [
      "Currently pursuing a degree in Data Science, Statistics, or related field",
      "Strong analytical and problem-solving skills",
      "Proficiency in Python, SQL, and data visualization tools",
      "Familiarity with machine learning concepts"
    ]
  },
  {
    id: 8,
    title: "Field Operations Technician",
    department: "Operations",
    location: "Seattle, WA",
    type: "Full-time",
    postedDate: "4 days ago",
    description: 
      "Operate our robotic inspection equipment on-site, ensuring proper data collection and preliminary analysis of roof conditions.",
    requirements: [
      "Associate's degree in technical field or equivalent experience",
      "2+ years of field service or technical operations experience",
      "Comfort with working at heights and in various weather conditions",
      "Valid driver's license and clean driving record"
    ]
  },
]

export default function CareersPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  // Filter jobs based on search term and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = 
      searchTerm === "" || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === null || 
      job.department === selectedCategory;
    
    const matchesLocation = 
      selectedLocation === null || 
      job.location === selectedLocation;
    
    const matchesType = 
      selectedType === null || 
      job.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesType;
  });

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategory(null)
    setSelectedLocation(null)
    setSelectedType(null)
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

      {!mobileMenuOpen && (
        <header
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-black/50 backdrop-blur-sm"
          }`}
        >
        <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 z-50">
        <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center w-16 h-16">
          {/* The background blur with a lower z-index */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg blur-lg opacity-50 z-0"></div>
          
          {/* The image above the blur */}
          <img 
            src="/BDR.jpg"
            alt="Placeholder"
            className="h-16 w-16 rounded-lg z-10"
          />
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
            {/* <a
              href="mailto:info@bdx-robotics.com"
              className="flex items-center space-x-1 text-white hover:text-teal-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@bdx-robotics.com</span>
            </a> */}
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
            {/* Solutions dropdown moved to first */}
            <div className="relative group">
              <button className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group flex items-center">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
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
            <a
              href="/#contact"
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/#about"
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              href="/careers"
              className="relative text-sm font-medium text-white hover:text-white transition-colors group"
            >
              Careers
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600"></span>
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

      {/* Mobile menu */}
      {(() => {
        const [showMobileSolutions, setShowMobileSolutions] = useState(false);
        return (
          <div
            className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 lg:hidden ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative flex flex-col items-center justify-center h-full space-y-8 p-8">
              {/* Close button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = "auto"
                }}
                className="absolute top-4 right-4 z-50 text-white bg-white/10 hover:bg-white/20 rounded-full p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              <Link
                href="/"
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {/* Mobile Solutions dropdown*/}
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
              <a
                href="/#contact"
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="/#about"
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <Link
                href="/careers"
                className="text-2xl font-medium text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/blogs"
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Button
                onClick={() => {
                  setShowQuoteModal(true)
                  setMobileMenuOpen(false)
                }}
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        );
      })()}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-900/20 to-black/90"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-6">
                Join Our Mission to Transform Roof Inspections
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                At Building Diagnostic Robotics, we're combining cutting-edge technology with expert knowledge to revolutionize the building inspection industry. Join our talented team and help us shape the future.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button 
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
                  onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
                >
                  Learn About Our Culture
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { 
                    icon: <CheckCircle className="h-10 w-10 text-teal-500 mb-4" />, 
                    title: "Innovative Work", 
                    description: "Work on cutting-edge robotics and AI technology" 
                  },
                  { 
                    icon: <Users className="h-10 w-10 text-teal-500 mb-4" />, 
                    title: "Collaborative Team", 
                    description: "Join a diverse team of experts passionate about innovation" 
                  },
                  { 
                    icon: <Briefcase className="h-10 w-10 text-teal-500 mb-4" />, 
                    title: "Growth Opportunities", 
                    description: "Develop your skills and advance your career" 
                  },
                  { 
                    icon: <Clock className="h-10 w-10 text-teal-500 mb-4" />, 
                    title: "Work-Life Balance", 
                    description: "Flexible schedules and remote options available" 
                  },
                ].map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    {perk.icon}
                    <h3 className="text-lg font-semibold mb-2">{perk.title}</h3>
                    <p className="text-sm text-white/70">{perk.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section id="job-listings" className="relative w-full py-24 md:py-32 overflow-hidden bg-black">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-950/30"></div>
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-cyan-500/10 blur-3xl rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6"
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Open Positions
                  </h2>
                  <p className="text-white/70 mt-2">
                    Discover your next career opportunity with BDR
                  </p>
                </div>
              
                {/* Search input */}
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                  <Input
                    type="text"
                    placeholder="Search job titles or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500 rounded-full"
                  />
                </div>
              </motion.div>
              
              {/* Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <button 
                    onClick={() => setFiltersVisible(!filtersVisible)}
                    className="flex items-center gap-2 text-white/70 hover:text-white"
                  >
                    <Filter className="h-5 w-5" />
                    <span>Filters</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                      {selectedCategory || selectedLocation || selectedType ? 
                        `${[selectedCategory, selectedLocation, selectedType].filter(Boolean).length} active` : 
                        'None'}
                    </span>
                  </button>
                  
                  {(selectedCategory || selectedLocation || selectedType) && (
                    <button 
                      onClick={resetFilters}
                      className="text-sm text-teal-400 hover:text-teal-300"
                    >
                      Reset filters
                    </button>
                  )}
                </div>
                
                {filtersVisible && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm mb-6">
                    {/* Category filter */}
                    <div>
                      <h3 className="text-sm font-medium text-white/70 mb-3">Department</h3>
                      <div className="flex flex-wrap gap-2">
                        {jobCategories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                              selectedCategory === category
                                ? "bg-teal-500 text-white"
                                : "bg-white/10 text-white/70 hover:bg-white/20"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Location filter */}
                    <div>
                      <h3 className="text-sm font-medium text-white/70 mb-3">Location</h3>
                      <div className="flex flex-wrap gap-2">
                        {locations.map((location) => (
                          <button
                            key={location}
                            onClick={() => setSelectedLocation(selectedLocation === location ? null : location)}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                              selectedLocation === location
                                ? "bg-teal-500 text-white"
                                : "bg-white/10 text-white/70 hover:bg-white/20"
                            }`}
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Job type filter */}
                    <div>
                      <h3 className="text-sm font-medium text-white/70 mb-3">Job Type</h3>
                      <div className="flex flex-wrap gap-2">
                        {jobTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => setSelectedType(selectedType === type ? null : type)}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                              selectedType === type
                                ? "bg-teal-500 text-white"
                                : "bg-white/10 text-white/70 hover:bg-white/20"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
              
              {/* Job listings */}
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-500/20 text-teal-400">
                              <Briefcase className="mr-1 h-3 w-3" />
                              {job.department}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                              <LocationIcon className="mr-1 h-3 w-3" />
                              {job.location}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                              <Clock className="mr-1 h-3 w-3" />
                              {job.type}
                            </span>
                          </div>
                          <p className="text-white/70 mb-4">{job.description}</p>
                          
                          {/* Requirements */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold mb-2">Requirements</h4>
                            <ul className="space-y-1">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                                  <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col justify-between items-start md:items-end gap-4">
                          <span className="text-sm text-white/50">Posted {job.postedDate}</span>
                          <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-white/5 border border-white/10 rounded-xl">
                    <h3 className="text-xl font-bold mb-2">No jobs found</h3>
                    <p className="text-white/70 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                    <Button variant="outline" onClick={resetFilters} className="border-white/10 text-white">
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className="relative w-full py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-teal-950/30 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-cyan-600/10 p-1">
                <div className="bg-black rounded-xl p-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-4">
                      Don't See the Right Position?
                    </h2>
                    <p className="text-white/70 max-w-3xl mx-auto mb-8">
                      We're always looking for talented individuals to join our team. If you don't see a position that matches your skills but believe you could contribute to our mission, we'd still love to hear from you.
                    </p>
                    <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg">
                      Submit Your Resume
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative w-full border-t border-white/10 py-12 overflow-hidden">
        {/* Background elements */}
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
                Building Diagnostic Robotics (BDR) provides advanced robotic roof inspection services that save clients
                50% or more compared to traditional methods while delivering superior accuracy.
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
                  <a href="/#about" className="text-white/70 hover:text-white text-sm">
                    About Us
                  </a>
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
                  <a href="/#contact" className="text-white/70 hover:text-white text-sm">
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
    </div>
  )
}
