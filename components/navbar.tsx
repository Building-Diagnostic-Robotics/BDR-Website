"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

interface NavbarProps {
  isScrolled: boolean
  mobileMenuOpen: boolean
  onToggleMobileMenu: () => void
  onButtonClick?: () => void
  activePage?: string
  buttonText?: string
}

export default function Navbar({
  isScrolled,
  mobileMenuOpen,
  onToggleMobileMenu,
  onButtonClick,
  activePage,
  buttonText = "Start My Inspection",
}: NavbarProps) {
  const handleMobileMenuClose = () => {
    onToggleMobileMenu()
    document.body.style.overflow = "auto"
  }

  const isActiveLink = (path: string) => {
    return activePage === path
  }

  return (
    <>
      {/* Main Navbar */}
      {!mobileMenuOpen && (
        <header
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-white/50 backdrop-blur-sm"
          }`}
        >
          <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="z-50 shrink-0">
              <img
                src="/bdr_logo_name.png"
                alt="BDR Logo"
                className="h-20 xl:h-24 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6 2xl:space-x-8 mx-auto">
              {/* Solutions dropdown */}
              <div className="relative group">
                <button className={`relative text-xs xl:text-sm font-medium transition-colors group flex items-center whitespace-nowrap ${
                  isActiveLink("/solutions/roof")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  Solutions
                  <ChevronDown className="ml-1 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 ${
                    isActiveLink("/solutions/roof") ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <Link href="/solutions/roof" className={`block px-4 py-3 transition-colors rounded-t-lg ${
                    isActiveLink("/solutions/roof")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-900 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Roof Inspections
                  </Link>
                </div>
              </div>

              {/* Who We Serve dropdown */}
              <div className="relative group">
                <button className={`relative text-xs xl:text-sm font-medium transition-colors group flex items-center whitespace-nowrap ${
                  ["portfolio-owners", "insurance-underwriters", "roofing-contractors"].includes(activePage || "")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  Who We Serve
                  <ChevronDown className="ml-1 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 ${
                    ["portfolio-owners", "insurance-underwriters", "roofing-contractors"].includes(activePage || "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <Link href="/who-we-serve/roofing-contractors" className={`block px-4 py-3 transition-colors rounded-t-lg ${
                    isActiveLink("roofing-contractors")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-900 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Commercial Flat Roofing Contractors
                  </Link>
                  <Link href="/who-we-serve/portfolio-owners" className={`block px-4 py-3 transition-colors ${
                    isActiveLink("portfolio-owners")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-900 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Building Portfolio Owners
                  </Link>
                  <Link href="/who-we-serve/insurance-underwriters" className={`block px-4 py-3 transition-colors rounded-b-lg ${
                    isActiveLink("insurance-underwriters")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-900 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Insurance & Warranty Underwriters
                  </Link>
                </div>
              </div>

              {/* Channel Partners */}
              <Link href="/partnerships/roofing" className={`relative text-xs xl:text-sm font-medium transition-colors group whitespace-nowrap ${
                isActiveLink("/partnerships/roofing")
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
                Channel Partners
                <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 ${
                  isActiveLink("/partnerships/roofing") ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>

              {/* About */}
              <Link href="/about" className={`relative text-xs xl:text-sm font-medium transition-colors group whitespace-nowrap ${
                isActiveLink("/about")
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
                About
                <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 ${
                  isActiveLink("/about") ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>

              {/* Resources dropdown */}
              <div className="relative group">
                <button className={`relative text-xs xl:text-sm font-medium transition-colors group flex items-center whitespace-nowrap ${
                  ["blogs", "case-studies", "sample-reports", "roofus-tech-specs"].includes(activePage || "")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  Resources
                  <ChevronDown className="ml-1 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 ${
                    ["blogs", "case-studies", "sample-reports", "roofus-tech-specs"].includes(activePage || "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  {/* <Link href="/blogs" className={`block px-4 py-3 transition-colors rounded-t-lg ${
                    isActiveLink("blogs")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Blogs
                  </Link> */}
                  <Link href="/case-studies" className={`block px-4 py-3 transition-colors ${
                    isActiveLink("case-studies")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Case Studies
                  </Link>
                  <Link href="/sample-reports" className={`block px-4 py-3 transition-colors ${
                    isActiveLink("sample-reports")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Sample Reports
                  </Link>
                  <Link href="/roofus-tech-specs" className={`block px-4 py-3 transition-colors rounded-b-lg ${
                    isActiveLink("roofus-tech-specs")
                      ? "text-green-600 bg-gray-50 font-medium"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}>
                    Roofus Tech Specs
                  </Link>
                </div>
              </div>

              {/* FAQs */}
              <Link href="/faqs" className={`relative text-xs xl:text-sm font-medium transition-colors group whitespace-nowrap ${
                isActiveLink("/faqs")
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
                FAQs
                <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 ${
                  isActiveLink("/faqs") ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            </nav>

            <div className="flex items-center gap-2 xl:gap-4 z-50 shrink-0">
              <a
                href="https://bdrdashboard.netlify.app/projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="hidden md:inline-flex border-gray text-gray bg-white hover:bg-gray hover:text-white hover:border-gray transition-colors duration-300 rounded-full h-9 px-3 text-xs xl:h-10 xl:px-4 xl:text-sm whitespace-nowrap"
                >
                  Customer Portal
                </Button>
              </a>
              <Button
                onClick={onButtonClick}
                className="hidden md:flex bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full h-9 px-3 text-xs xl:h-10 xl:px-4 xl:text-sm whitespace-nowrap"
              >
                {buttonText}
              </Button>
              <button onClick={onToggleMobileMenu} className="lg:hidden text-gray-900 p-2" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-900 text-3xl z-50"
          onClick={handleMobileMenuClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8 pt-8 pb-8">
          <div className="flex flex-col space-y-2 text-center">
            <span className="text-2xl font-medium text-gray-900">Solutions</span>
            <Link
              href="/solutions/roof"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Roof Inspections
            </Link>
          </div>

          <div className="flex flex-col space-y-2 text-center">
            <span className="text-2xl font-medium text-gray-900">Who We Serve</span>
            <Link
              href="/who-we-serve/roofing-contractors"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Commercial Flat Roofing Contractors
            </Link>
            <Link
              href="/who-we-serve/portfolio-owners"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Building Portfolio Owners
            </Link>
            <Link
              href="/who-we-serve/insurance-underwriters"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Insurance & Warranty Underwriters
            </Link>
          </div>

          <Link
            href="/partnerships/roofing"
            className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={handleMobileMenuClose}
          >
            Channel Partners
          </Link>

          <Link
            href="/about"
            className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={handleMobileMenuClose}
          >
            About
          </Link>

          <div className="flex flex-col space-y-2 text-center">
            <span className="text-2xl font-medium text-gray-900">Resources</span>
            {/* <Link
              href="/blogs"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Blogs
            </Link> */}
            <Link
              href="/case-studies"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Case Studies
            </Link>
            <Link
              href="/sample-reports"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Sample Reports
            </Link>
            <Link
              href="/roofus-tech-specs"
              className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handleMobileMenuClose}
            >
              Roofus Tech Specs
            </Link>
          </div>

          <Link
            href="/faqs"
            className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={handleMobileMenuClose}
          >
            FAQs
          </Link>

          <a
            href="https://bdrdashboard.netlify.app/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-medium text-green-600 hover:text-green-700 transition-colors"
            onClick={handleMobileMenuClose}
          >
            Customer Portal
          </a>

          <Button
            onClick={() => {
              onButtonClick?.()
              handleMobileMenuClose()
            }}
            className="mt-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  )
}
