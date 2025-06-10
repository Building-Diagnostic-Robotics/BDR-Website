"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, ArrowRight, Phone } from "lucide-react"

type CustomerTypeModalProps = {
  type: string
  onClose: () => void
}

export function CustomerTypeModal({ type, onClose }: CustomerTypeModalProps) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const modalContent = {
    "building-owner": {
      title: "Building Owners: Prevent Costly Water Damage & Save 50%+",
      benefits: [
        "Detect moisture issues before they cause $100,000+ in structural damage",
        "Save 50-65% compared to traditional inspection methods",
        "Extend your roof's lifespan by 5-20 years by identifying problems early",
        "Access up to $5/sq.ft in tax credits and incentives for necessary repairs",
        "Get comprehensive repair estimates within 24-48 hours for budgeting and planning",
        "Reduce energy costs by up to 30% by addressing hidden moisture issues",
        "Complete inspections for 100,000+ sq.ft in a single day",
      ],
      cta: "Protect Your Investment",
    },
    "roofing-contractor": {
      title: "Roofing Contractors: Close 40% More Deals with Precise Data",
      benefits: [
        "Win 2-3x more projects with detailed moisture mapping and visual evidence",
        "Provide clients with meter-by-meter analysis of roof conditions with 99% accuracy",
        "Complete inspections in 10 hours vs. industry average of 75+ hours (85% time savings)",
        "Increase profit margins by 15-25% by accurately scoping projects",
        "Identify 30% more problem areas than traditional methods",
        "Cut inspection costs by over 50% with our advanced robotics",
        "Survey up to 100,000 sq.ft in just 3-4 hours of scanning time",
      ],
      cta: "Partner With Us",
    },
    "general-contractor": {
      title: "General Contractors: 35% Better Project Planning & Pricing",
      benefits: [
        "Get accurate roof condition assessments in 24 hours before bidding projects",
        "Avoid unexpected scope changes that typically add 20-40% to project costs",
        "Provide clients with comprehensive building condition reports within 48 hours",
        "Reduce inspection time by 85% and costs by 50% or more",
        "Back your proposals with detailed visual and moisture data accurate to within 1-2%",
        "Identify 100% of moisture-compromised areas before beginning work",
        "Cut project timelines by 2-3 weeks with faster assessment turnaround",
      ],
      cta: "Improve Your Estimates",
    },
    "engineering-consultant": {
      title: "Engineering Consultants: Enhance Analysis with 99% Precision Data",
      benefits: [
        "Access meter-by-meter moisture mapping with 99% accuracy across entire roof systems",
        "Supplement your reports with 100+ high-resolution images per inspection",
        "Reduce field time by 85% while increasing data quality by 40%",
        "Provide clients with quantitative analysis of roof conditions within 24-48 hours",
        "Leverage AI and robotics to detect 3x more potential failure points",
        "Cut inspection costs by $2-5 per square foot compared to traditional methods",
        "Offer 10-20 year lifespan predictions based on quantifiable data",
      ],
      cta: "Elevate Your Consulting Services",
    },
  }

  const content = modalContent[type as keyof typeof modalContent]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-2xl border border-white/10 bg-black p-1">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 bg-gradient-to-br from-black to-black/95 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            {content.title}
          </h2>

          <div className="mb-6">
            <ul className="space-y-3">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <Phone className="h-5 w-5 text-teal-500" />
            <a href="tel:5105149518" className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
              (510) 514-9518
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-orange-500"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/70">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-orange-500"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full py-6"
            >
              {content.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-white/50 mt-4 text-center">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-teal-400 hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

