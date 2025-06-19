"use client"

import { useState } from "react"

export function SampleReportForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch("/api/sampleReport", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    try {
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
        setError(false)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  if (submitted) {
    return <p className="text-white text-center">✅ Email sent successfully!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-black p-6 rounded-lg shadow-xl">
      <h2 className="text-l font-regular text-white">We'll email you the sample report!</h2>
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="w-full p-3 rounded bg-white/10 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 rounded"
      >
        Submit
      </button>
      {error && <p className="text-red-400 text-sm">❗ Please enter a valid email.</p>}
    </form>
  )
}