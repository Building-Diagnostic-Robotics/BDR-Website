"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import {
	ArrowRight,
	Menu,
	X,
	ChevronDown,
	Gauge,
	ScanLine,
	Cpu,
	Shield,
	Map,
	Braces,
	FileText,
	Download,
} from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

export default function RoofusTechSpecsPage() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [showQuoteModal, setShowQuoteModal] = useState(false)

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

	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar
				isScrolled={isScrolled}
				mobileMenuOpen={mobileMenuOpen}
				onToggleMobileMenu={toggleMobileMenu}
				onButtonClick={() => setShowQuoteModal(true)}
				activePage="roofus-tech-specs"
				buttonText="Book a Demo"
			/>

			{/* Hero Section */}
			<section id="overview" className="relative py-24 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-gray-50" />
				<div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />

				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-7xl mx-auto"
					>
						<div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch lg:items-center">
							{/* Left: Content */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="lg:flex-1"
							>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
							<span className="text-green-600">Roofus</span>
							
							<span className="block text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">Roof Inspection Platform</span>
								</h1>

								<p className="mt-4 text-lg text-gray-700 max-w-2xl mb-8">
									Compact, autonomous robot paired with the BDR mission planner. Deterministic geometry → coverage swaths → route → waypoint export → execution → report.
								</p>

							<div className="mt-8 bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 border border-green-200 mb-8 font-sans">
								<div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm font-sans">
										<div>
											<div className="text-xs font-semibold text-green-600 mb-1">Mass</div>
											<div className="font-inter text-gray-900 text-lg">12 kg (26.5 lb)</div>
										</div>
										<div>
											<div className="text-xs font-semibold text-green-600 mb-1">Envelope</div>
											<div className="font-inter text-gray-900 text-lg">35×35×25 cm</div>
										</div>
										<div>
											<div className="text-xs font-semibold text-green-600 mb-1">Max Speed</div>
											<div className="font-inter text-gray-900 text-lg">0.5 m/s</div>
										</div>
										<div>
											<div className="text-xs font-semibold text-green-600 mb-1">Max Slope</div>
											<div className="font-inter text-gray-900 text-lg">20°</div>
										</div>
										<div>
											<div className="text-xs font-semibold text-green-600 mb-1">Battery</div>
											<div className="font-inter text-gray-900 text-lg">24V · 20 Ah</div>
										</div>
										<div>
											<div className="text-xs font-semibold text-green-600 mb-1">Charge Time</div>
											<div className="font-inter text-gray-900 text-lg">8 hours</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right: Robot Image */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="lg:flex-1"
							>
								<div className="relative rounded-3xl overflow-hidden border border-green-200 bg-white shadow-lg">
									<div className="p-4 border-b border-green-200 flex items-center justify-between">
										<span className="text-xs font-semibold text-green-700">Robot Preview</span>
									</div>
									<div className="bg-gradient-to-br from-green-50 to-gray-50 p-8 flex items-center justify-center min-h-[400px]">
										<img
											src="/Roofus(no_bg).png"
											alt="Roofus Robot"
											className="w-full max-w-md h-auto object-contain"
										/>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Scroll Indicator */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9, duration: 0.6 }}
							className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
						>
						<Link href="https://app.usemotion.com/meet/bilal-is/looking-forward-to-meeting-you?d=25" target="_blank" rel="noopener noreferrer">
							<Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-6 shadow-lg">
								Schedule a Meeting
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
						<a href="/Roofus_Product_sheet.pdf" download>
							<Button
								variant="outline"
								className="border-gray text-gray bg-white hover:bg-gray hover:text-white hover:border-gray transition-colors duration-300 rounded-full px-8 py-6"
							>
								Download Product Sheet
								<Download className="ml-2 h-4 w-4" />
							</Button>
						</a>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Tech Specs Section */}
			<section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
				<div className="absolute inset-0 z-0">
					<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-3xl rounded-full"></div>
					<div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-600/5 blur-3xl rounded-full"></div>
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
							Technical Specifications
						</h2>
						<p className="text-xl text-gray-700">
							Complete hardware, sensor, and operational specifications.
						</p>
					</motion.div>

					{/* Hardware Specs Table */}
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
										<th className="text-left p-6 text-gray-700 font-medium">Specification</th>
										<th className="text-center p-6 bg-gradient-to-r from-green-50 to-green-100">
											<span className="text-green-700 font-bold text-lg">Value</span>
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										{ category: "Mass", spec: "12 kg (26.5 lb)" },
										{ category: "Envelope", spec: "≈35 × 35 × 25 cm (~13.8 × 13.8 × 9.8 in)" },
										{ category: "Max Speed", spec: "0.5 m/s (1.64 ft/s)" },
										{ category: "Max Slope", spec: "20°" },
										{ category: "Battery", spec: "24 V · 20 Ah (~480 Wh)" },
										{ category: "Charge Time", spec: "8 h (full)" },
										{ category: "Operating Temperature", spec: "0–40 °C (32–104 °F)" },
										{ category: "Operating Surface", spec: "Commercial flat roofs and concrete surfaces" },
										{ category: "Failsafe", spec: "Stop on communication loss" },
										{ category: "Safety Constraints", spec: "Boundary + obstacle polygons (planner)" },
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

					{/* Modules & Systems Grid */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="max-w-5xl mx-auto mb-12"
					>
						<div className="grid md:grid-cols-3 gap-6">
							{/* Sensor Suite */}
							<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<ScanLine className="h-6 w-6 text-green-600" />
									<h3 className="text-lg font-bold text-gray-900">Sensor Suite</h3>
								</div>
								<ul className="space-y-2 text-gray-700">
									<li>• Ground-penetrating radar (GPR)</li>
									<li>• Thermal camera</li>
									<li>• 3D LiDAR</li>
									<li>• RGB cameras</li>
									<li>• Multimodal ML pipeline</li>
								</ul>
							</div>

							{/* Compute & Planning */}
							<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<Cpu className="h-6 w-6 text-green-600" />
									<h3 className="text-lg font-bold text-gray-900">Compute & Planning</h3>
								</div>
								<ul className="space-y-2 text-gray-700">
									<li>• Planner runs on laptop</li>
									<li>• Teleop exploration/mapping</li>
									<li>• Deterministic swath generation</li>
									<li>• CSV-friendly waypoint export</li>
								</ul>
							</div>

							{/* Operational Constraints */}
							<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<Shield className="h-6 w-6 text-green-600" />
									<h3 className="text-lg font-bold text-gray-900">Operational Constraints</h3>
								</div>
								<ul className="space-y-2 text-gray-700">
									<li>• Commercial flat roofs (primary)</li>
									<li>• Operator-set line spacing</li>
									<li>• Collision avoidance enabled</li>
									<li>• No-go zones supported</li>
								</ul>
							</div>
						</div>
					</motion.div>

					{/* Input/Output Contract */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.15 }}
						className="max-w-5xl mx-auto"
					>
						<div className="grid md:grid-cols-3 gap-6">
							{/* Inputs */}
							<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<Map className="h-6 w-6 text-green-600" />
									<h3 className="text-lg font-bold text-gray-900">Inputs</h3>
								</div>
								<ul className="space-y-2 text-gray-700">
									<li>• Map / roof geometry</li>
									<li>• Boundary polygon</li>
									<li>• No-go / obstacle polygons</li>
									<li>• Line spacing + overlap</li>
									<li>• Sensor capture profile</li>
								</ul>
							</div>

							{/* Outputs */}
							<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<Braces className="h-6 w-6 text-green-600" />
									<h3 className="text-lg font-bold text-gray-900">Outputs</h3>
								</div>
								<ul className="space-y-2 text-gray-700">
									<li>• Planned swaths + route</li>
									<li>• Waypoints.csv (x, y, yaw)</li>
									<li>• Swath_corners.csv</li>
									<li>• Execution trace</li>
									<li>• Timestamps & logs</li>
								</ul>
							</div>

							{/* Artifacts */}
							<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<FileText className="h-6 w-6 text-green-600" />
									<h3 className="text-lg font-bold text-gray-900">Artifacts</h3>
								</div>
								<ul className="space-y-2 text-gray-700">
									<li>• Audit trail (what/when/where)</li>
									<li>• Coverage metrics</li>
									<li>• Report package</li>
									<li>• Visualizations + tables</li>
									<li>• Compliance logs</li>
								</ul>
							</div>
						</div>
					</motion.div>

					{/* Download Button */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-center mt-12"
					>
						<a href="/Technical_Specs_Document.pdf" download>
							<Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg">
								Download Full Hardware Specs
								<Download className="ml-2 h-4 w-4" />
							</Button>
						</a>
					</motion.div>
				</div>
			</section>

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
