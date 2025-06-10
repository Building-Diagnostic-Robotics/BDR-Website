"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send, ArrowRight } from "lucide-react"

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "bot"; text: string }[]>([
    { type: "bot", text: "Hi there! I'm the BDR assistant. How can I help you with your roof inspection needs today?" },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([...chatHistory, { type: "user", text: message }])

    // Simulate bot response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Thanks for your message! One of our roof inspection specialists will contact you shortly. If you need immediate assistance, please call us at (510) 514-9518.",
        },
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg flex items-center justify-center hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 rounded-2xl border border-white/10 bg-black shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4">
            <h3 className="text-white font-bold">BDR Chat Support</h3>
            <p className="text-white/80 text-sm">We typically respond within minutes</p>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-gradient-to-br from-black to-black/95">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.type === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/90 flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-orange-500"
            />
            <Button type="submit" size="icon" className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
              <Send className="h-4 w-4" />
            </Button>
          </form>

          <div className="p-3 border-t border-white/10 bg-black/90">
            <Button
              onClick={() => (window.location.href = "tel:5105149518")}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
            >
              Call Us Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

