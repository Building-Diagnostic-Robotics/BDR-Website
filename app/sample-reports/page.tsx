"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import {
	ArrowRight,
	Menu,
	X,
	ChevronDown,
} from "lucide-react"

export default function SampleReportsPage() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen)
		if (!mobileMenuOpen) document.body.style.overflow = "hidden"
		else document.body.style.overflow = "auto"
	}

	const reports = [
		{
			title: "Roof Inspection Sample",
			description: "Moisture mapping, defects, and visual documentation for a commercial flat roof.",
			href: "/sample-report.pdf",
		},
		{
			title: "Concrete Inspection Sample",
			description: "Subsurface anomalies, delamination indicators, and repair prioritization guidance.",
			href: "/sample-report.pdf",
		},
		{
			title: "Sample Report 3",
			description: "Condensed, standardized and brief report format ready for adjusters and carriers.",
			href: "/sample-report.pdf",
		},
	]

	return (
		<div className="min-h-screen bg-gray-50">
			
			{/* Main Navbar */}
			{!mobileMenuOpen && (
				<header
					className={`sticky top-0 z-50 w-full transition-all duration-300 ${
						isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-white/50 backdrop-blur-sm"
					}`}
				>
					<div className="container flex h-20 items-center justify-between">
						<Link href="/" className="flex items-center space-x-2 z-50">
							<div className="relative bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center w-16 h-16">
								<div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-500 rounded-lg blur-lg opacity-50 z-0" />
								<img src="/BDR.jpg" alt="BDR Logo" className="h-16 w-16 rounded-lg z-10" />
							</div>
						</Link>

						<nav className="hidden lg:flex items-center space-x-8 ml-12">
							{/* Solutions dropdown */}
							<div className="relative group">
								<button className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group flex items-center">
									Solutions
									<ChevronDown className="ml-1 h-4 w-4" />
									<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
								</button>
								<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
									<Link href="/solutions/roof" className="block px-4 py-3 text-gray-900 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-t-lg">Roof Inspections</Link>
									{/* <Link href="/solutions/concrete" className="block px-4 py-3 text-gray-900 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-b-lg">Concrete Inspections</Link> */}
								</div>
							</div>

							{/* Channel Partners */}
							<Link href="/partnerships/roofing" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
								Channel Partners
								<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
							</Link>

							{/* About */}
							<Link href="/about" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
								About
								<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
							</Link>

							{/* Resources dropdown */}
							<div className="relative group">
								<button className="relative text-sm font-medium text-gray-900 hover:text-green-600 transition-colors group flex items-center">
									Resources
									<ChevronDown className="ml-1 h-4 w-4" />
									<span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-green-500" />
								</button>
								<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
									<Link href="/blogs" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-t-lg">Blogs</Link>
									<Link href="/case-studies" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Case Studies</Link>
									<Link href="/sample-reports" className="block px-4 py-3 text-green-600 bg-gray-50 font-medium">Sample Reports</Link>
									<Link href="/roofus-tech-specs" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors rounded-b-lg">Roofus Tech Specs</Link>
								</div>
							</div>

							{/* FAQs */}
							<Link href="/faqs" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
								FAQs
								<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full" />
							</Link>
						</nav>

						<div className="flex items-center gap-4 z-50">
							<Link href="/#contact">
								<Button className="hidden md:flex bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full">
									Start My Inspection
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<button onClick={toggleMobileMenu} className="lg:hidden text-gray-900 p-2" aria-label="Toggle menu">
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
					onClick={() => {
						setMobileMenuOpen(false)
						document.body.style.overflow = "auto"
					}}
				>
					&times;
				</button>
				<div className="flex flex-col items-center justify-center h-full space-y-8 px-8 pt-8 pb-8">
					<div className="flex flex-col space-y-2 text-center">
						<span className="text-2xl font-medium text-gray-900">Solutions</span>
						<Link href="/solutions/roof" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Roof Inspections</Link>
						{/* <Link href="/solutions/concrete" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Concrete Inspections</Link> */}
					</div>
					<Link href="/partnerships/roofing" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Channel Partners</Link>
					<Link href="/about" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>About</Link>
					<div className="flex flex-col space-y-2 text-center">
						<span className="text-2xl font-medium text-gray-900">Resources</span>
						<Link href="/blogs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Blogs</Link>
						<Link href="/case-studies" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Case Studies</Link>
						<Link href="/sample-reports" className="text-xl font-medium text-green-600" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Sample Reports</Link>
					<Link href="/roofus-tech-specs" className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>Roofus Tech Specs</Link>
					</div>
					<Link href="/faqs" className="text-2xl font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>FAQs</Link>
					<Link href="/#contact" className="mt-4" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>
						<Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg">
							Start My Inspection
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</Link>
				</div>
			</div>

			{/* Hero */}
			<section className="relative py-24 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-gray-50" />
				<div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />

				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto text-center"
					>
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Sample Reports</h1>
						<p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-pretty">
							Download example BDR reports to see how our diagnostics translate into clear, actionable insights.
						</p>
						<a href="#samples">
							<Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full text-lg px-8 py-6">
								Browse Samples
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</a>
					</motion.div>
				</div>
			</section>

			{/* Samples Grid */}
			<section id="samples" className="py-24 bg-white">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-6xl mx-auto"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Download Samples</h2>
						<p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto text-pretty">
							Each sample showcases the format, visuals, and level of detail you can expect from BDR inspections.
						</p>

						<div className="grid md:grid-cols-3 gap-6">
							{reports.map((report, idx) => (
								<motion.a
									key={report.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.05 }}
									href={report.href}
									download
									className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
								>
									<div>
										<h3 className="text-xl font-bold text-gray-900">{report.title}</h3>
										<p className="text-gray-600 mt-2">{report.description}</p>
									</div>
									<div className="mt-6 flex items-center text-green-600 group-hover:text-green-700 transition-colors">
										<span className="mr-2">Download Sample</span>
										<ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
									</div>
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	)
}

