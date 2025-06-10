"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cpu, Database, FileText, Gauge, Layers, Scan, Smartphone, Zap } from "lucide-react"

export function TechnologyProcess() {
  const steps = [
    {
      icon: <Scan className="h-6 w-6" />,
      title: "Advanced LIDAR Scanning",
      description:
        "Our robots use precision LIDAR technology to create detailed 3D maps of your roof's surface with millimeter accuracy, identifying structural anomalies invisible to the human eye.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "MetaCam Imaging",
      description:
        "High-resolution Meta Cam technology captures comprehensive visual data across multiple spectrums, detecting issues that traditional cameras miss.",
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Moisture Detection",
      description:
        "Specialized sensors identify moisture trapped within roof systems with 90% accuracy, pinpointing water intrusion before visible damage occurs.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Data Processing",
      description:
        "Our proprietary machine learning algorithms analyze millions of data points to identify patterns and anomalies that human inspectors would miss.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Digital Twin Creation",
      description:
        "We generate a complete digital twin of your roof system, allowing for virtual inspections and historical comparisons over time.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Comprehensive Reporting",
      description:
        "Receive detailed reports with actionable insights, repair recommendations, and cost estimates within 24-48 hours of inspection.",
    },
  ]

  return (
    <div className="relative">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 mix-blend-overlay"></div>
            <Image
              src="/tech.jpg?height=600&width=600"
              alt="BDR's advanced roof inspection robot in action"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Animated overlay elements */}
            <div className="absolute inset-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.7, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  repeatDelay: 1,
                }}
                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-teal-500/50 rounded-lg"
              >
                <div className="absolute top-0 left-0 size-2 bg-teal-500 rounded-full"></div>
                <div className="absolute top-0 right-0 size-2 bg-teal-500 rounded-full"></div>
                <div className="absolute bottom-0 left-0 size-2 bg-teal-500 rounded-full"></div>
                <div className="absolute bottom-0 right-0 size-2 bg-teal-500 rounded-full"></div>
              </motion.div>

              {/* Scanning lines */}
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "linear",
                }}
                className="absolute left-0 right-0 h-px bg-teal-500/70"
              ></motion.div>

              {/* Data points */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: i * 0.2,
                    repeatDelay: 3,
                  }}
                  className="absolute size-1.5 bg-teal-500 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                ></motion.div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 size-40 bg-teal-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 size-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">How Our Technology Works</h3>
            <p className="text-white/70">
              Our proprietary robotic inspection system combines cutting-edge hardware with advanced AI to deliver
              unmatched accuracy in roof assessment.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-600/10 rounded-2xl"></div>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-teal-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Real-time Processing</h4>
              <p className="text-white/70">
                Our robots process data in real-time, allowing for immediate adjustments during inspection.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Layers className="h-12 w-12 text-teal-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Multi-layer Analysis</h4>
              <p className="text-white/70">We analyze multiple roof layers simultaneously, not just the surface.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Database className="h-12 w-12 text-teal-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
              <p className="text-white/70">
                Our AI improves with every inspection, constantly enhancing detection accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

