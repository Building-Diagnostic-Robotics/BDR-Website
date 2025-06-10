"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Database, Layers, Zap } from "lucide-react"

export function ConcreteTechnologyProcess() {
  const steps = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Ground Penetrating Radar (GPR) penetrates up to 18 inches deep",
      description:
        "Advanced GPR technology penetrates concrete structures to map internal conditions and identify structural anomalies without any damage to the building.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time rebar mapping and corrosion detection",
      description:
        "Instantly locate rebar positioning and detect corrosion levels throughout the concrete structure with millimeter precision.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "3D structural modeling and digital twin creation",
      description:
        "Generate comprehensive 3D models of your concrete structure, creating a digital twin for ongoing monitoring and analysis.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-powered crack pattern analysis",
      description:
        "Machine learning algorithms analyze crack patterns to predict structural integrity and identify potential failure points.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Void and delamination identification",
      description:
        "Detect hidden voids, delamination, and air pockets within concrete structures that could compromise structural integrity.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Concrete density and quality assessment",
      description:
        "Evaluate concrete density variations and quality inconsistencies that may indicate structural weaknesses or construction defects.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Comprehensive structural health scoring",
      description:
        "Receive detailed structural health scores and risk assessments based on comprehensive data analysis and industry standards.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Historical comparison and trend analysis",
      description:
        "Track structural changes over time with historical data comparison and predictive trend analysis for proactive maintenance planning.",
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-600/20 mix-blend-overlay"></div>
            <Image
              src="/tech.jpg?height=600&width=600"
              alt="BDR's advanced concrete inspection robot in action"
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
                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-slate-500/50 rounded-lg"
              >
                <div className="absolute top-0 left-0 size-2 bg-slate-500 rounded-full"></div>
                <div className="absolute top-0 right-0 size-2 bg-slate-500 rounded-full"></div>
                <div className="absolute bottom-0 left-0 size-2 bg-slate-500 rounded-full"></div>
                <div className="absolute bottom-0 right-0 size-2 bg-slate-500 rounded-full"></div>
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
                className="absolute left-0 right-0 h-px bg-slate-500/70"
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
                  className="absolute size-1.5 bg-slate-500 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                ></motion.div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 size-40 bg-slate-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 size-40 bg-slate-600/30 rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">How Our Concrete Inspection Technology Works</h3>
            <p className="text-white/70">
              Advanced robotics and AI combine to deliver unmatched precision in structural assessment without damaging
              your building.
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 to-slate-600">
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-slate-600/10 rounded-2xl"></div>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-slate-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Non-Destructive Testing</h4>
              <p className="text-white/70">
                Our robots assess concrete structures without drilling, coring, or causing any damage to your building.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Layers className="h-12 w-12 text-slate-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Deep Penetration Analysis</h4>
              <p className="text-white/70">We analyze multiple concrete layers simultaneously, up to 18 inches deep.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Database className="h-12 w-12 text-slate-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Predictive Analytics</h4>
              <p className="text-white/70">
                Our AI predicts structural failures before they happen, enabling proactive maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
