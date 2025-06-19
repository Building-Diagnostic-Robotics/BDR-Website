"use client"

import { X } from "lucide-react"
import { SampleReportForm } from "./sample-report-form"

interface SampleReportModalProps {
  open: boolean
  onClose: () => void
}

export default function SampleReportModal({ open, onClose }: SampleReportModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-auto rounded-2xl p-1 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-2xl shadow-black/50">
        <div className="bg-black rounded-xl p-8 relative">
          <button
            className="absolute top-4 right-4 text-white hover:text-teal-300"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-2xl font-bold mb-6 text-white">Get the Sample Report</h3>
          <SampleReportForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};