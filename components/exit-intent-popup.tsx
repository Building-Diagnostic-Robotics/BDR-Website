"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, ArrowRight, Phone } from "lucide-react"

type ExitIntentPopupProps = {
  onClose: () => void
}

export function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasPopupBeenShown = sessionStorage.getItem("exitPopupShown")

    // If popup has been shown in the last 24 hours, don't show it again
    const lastShownTime = localStorage.getItem("exitPopupLastShown")
    const cooldownHours = 24 // Show popup once every 24 hours at most

    const showAgain = !lastShownTime || Date.now() - Number.parseInt(lastShownTime) > cooldownHours * 60 * 60 * 1000

    if (hasPopupBeenShown && !showAgain) {
      onClose() // Close the popup if it's been shown recently
    } else {
      // Mark that the popup has been shown in this session
      sessionStorage.setItem("exitPopupShown", "true")
      // Store the timestamp of when the popup was last shown
      localStorage.setItem("exitPopupLastShown", Date.now().toString())
    }
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission

    // Set a longer cooldown after form submission
    localStorage.setItem("exitPopupLastShown", Date.now().toString())
    sessionStorage.setItem("exitPopupSubmitted", "true")

    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black p-1">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 bg-gradient-to-br from-black to-black/95 rounded-xl">
          <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            Wait! Save 50% on Your Next Roof Inspection
          </h2>

          <p className="text-white/70 mb-4">
            Get an immediate quote for your flat roof inspection and see how much you can save.
          </p>

          <div className="flex items-center space-x-2 mb-4">
            <Phone className="h-5 w-5 text-teal-500" />
            <a href="tel:5105149518" className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
              (510) 514-9518
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="exit-email" className="text-sm font-medium text-white/70">
                Email for Immediate Quote
              </label>
              <Input
                id="exit-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-orange-500"
                placeholder="name@example.com"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full py-5"
            >
              Get My Free Quote
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

