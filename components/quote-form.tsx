"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function QuoteForm({ onClose }: { onClose?: () => void }) {
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
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Thanks for your request!</h2>
        <p className="text-lg mb-6 text-gray-600">We've received your details and will be in touch soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          Back to form
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Free Quote</h3>
      <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        <input
          type="text"
          name="serviceType"
          placeholder="Service Type (Roof or Concrete Inspection)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="text"
          name="roofSize"
          placeholder="Approximate Structure Size (sq ft)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <textarea
          name="message"
          placeholder="Tell us about your project"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          rows={4}
        />
        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
        >
          {submitting ? "Sending..." : "Submit Request"}
        </Button>
      </form>
      <button
        onClick={onClose}
        className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
      >
        Close
      </button>
    </div>
  )
}
