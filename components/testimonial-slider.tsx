"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "The moisture mapping identified issues our previous inspections completely missed. Saved us over $200,000 in potential water damage to our retail location in Manhattan.",
    author: "Michael T.",
    role: "Commercial Property Manager",
    location: "New York, NY",
  },
  {
    quote:
      "As a roofing contractor, BDR's technology helps us win more projects. The detailed moisture scans give our clients confidence in our repair recommendations and have increased our close rate by 40%.",
    author: "Sarah K.",
    role: "Roofing Company Owner",
    location: "Chicago, IL",
  },
  {
    quote:
      "We used BDR for our 120,000 sq ft warehouse roof inspection. They completed in one day what would have taken a week with traditional methods, and at less than half the cost.",
    author: "David L.",
    role: "Facilities Director",
    location: "Denver, CO",
  },
  {
    quote:
      "The detailed reports helped us prioritize repairs across our 15 properties. Their moisture mapping technology is far more accurate than any other method we've tried.",
    author: "Jennifer R.",
    role: "Real Estate Portfolio Manager",
    location: "Boston, MA",
  },
  {
    quote:
      "After a major storm, BDR helped us document all the damage for our insurance claim. The detailed imagery and moisture data made the claim process much smoother.",
    author: "Robert M.",
    role: "Building Owner",
    location: "Miami, FL",
  },
  {
    quote:
      "As an engineering consultant, I rely on BDR's precision data for my structural assessments. Their technology provides insights that traditional methods simply can't match.",
    author: "Thomas W.",
    role: "Structural Engineer",
    location: "Seattle, WA",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Calculate the indices for the 3 visible testimonials
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % testimonials.length,
    (currentIndex + 2) % testimonials.length,
  ]

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="grid gap-8 md:grid-cols-3">
        <AnimatePresence mode="wait">
          {visibleIndices.map((index, i) => (
            <motion.div
              key={`testimonial-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

              <div className="mb-4 text-4xl text-teal-500">"</div>
              <p className="text-white/90 mb-6 italic">{testimonials[index].quote}</p>
              <div className="flex flex-col">
                <span className="font-bold">{testimonials[index].author}</span>
                <span className="text-white/70 text-sm">{testimonials[index].role}</span>
                <span className="text-teal-400 text-sm">{testimonials[index].location}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-1">
          {testimonials.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => {
                setAutoplay(false)
                setCurrentIndex(index)
              }}
              className={`size-2 rounded-full transition-colors ${
                visibleIndices.includes(index) ? "bg-teal-500" : "bg-white/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

