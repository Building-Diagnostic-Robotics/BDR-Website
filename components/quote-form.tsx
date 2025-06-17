"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/quoteForm", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        alert("Failed to submit. Please try again later.")
      }
    } catch (err) {
      alert("Something went wrong.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-8 bg-black/90 backdrop-blur-md rounded-2xl text-center border border-white/10 shadow-2xl shadow-black/50">
        <h2 className="text-2xl font-bold mb-4 text-white">Thanks for your request!</h2>
        <p className="text-lg mb-6 text-white/70">We've received your details and will be in touch soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          Back to form
        </button>
      </div>
    )
  }

  return (
    <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-2xl shadow-black/50">
      <div className="bg-black/90 backdrop-blur-md rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-white">Request a Free Quote</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
          />
          <input
            type="text"
            name="roofSize"
            placeholder="Approximate Structure Size (sq ft)"
            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
          />
          <textarea
            name="message"
            placeholder="Additional Information"
            className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black p-3 text-sm"
            rows={4}
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {submitting ? "Sending..." : "Get Your Free Quote"}
            {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </button>
        </form>
        <p className="text-xs text-white/50 mt-4 text-center">
          By submitting this form, you agree to our{" "}
          <a href="#" className="text-teal-400 hover:underline">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  )
}
