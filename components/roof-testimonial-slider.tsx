// app/components/roof-testimonial-slider.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "We have more than 4,000 buildings in the city. Roofus would help us bridge the gap that our department resources can't cover.",
    // author: "",
    // role: "",
  },
  {
    quote:
      "Existing technology doesn't allow my team to scan more than one building a day, and BDR's solution would allow me to do that",
    // author: "",
    // role: "",
  },
  {
    quote:
      "This technology would allow my team to significantly cut down mobilization costs for projects in distant areas such as Puerto Rico",
    // author: "",
    // role: "",
  },
]

export function RoofTestimonialSlider() {
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
                {/* <span className="font-bold">{testimonials[index].author}</span>
                <span className="text-white/70 text-sm">{testimonials[index].role}</span> */}
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
