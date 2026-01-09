"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
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
			<Navbar
				isScrolled={isScrolled}
				mobileMenuOpen={mobileMenuOpen}
				onToggleMobileMenu={toggleMobileMenu}
				onButtonClick={() => { window.location.href = "/#contact" }}
				activePage="sample-reports"
				buttonText="Start My Inspection"
			/>

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

