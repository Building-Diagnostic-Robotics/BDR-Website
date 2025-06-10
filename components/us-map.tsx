"use client"

import { motion } from "framer-motion"
import { useState } from "react"

// States we serve
const servedStates = [
  // East Coast
  "ME",
  "NH",
  "VT",
  "MA",
  "RI",
  "CT",
  "NY",
  "NJ",
  "PA",
  "DE",
  "MD",
  "VA",
  "NC",
  "SC",
  "GA",
  "FL",
  // West Coast
  "WA",
  "OR",
  "CA",
  // Additional states
  "IL",
  "TX",
  "CO",
  "MI",
  "OH",
  "IN",
  "WI",
  "MN",
  "AZ",
  "NV",
]

// State abbreviations with their positions on the map
const statePositions = {
  AL: { x: 625, y: 350, name: "Alabama" },
  AK: { x: 180, y: 490, name: "Alaska" },
  AZ: { x: 205, y: 335, name: "Arizona" },
  AR: { x: 545, y: 345, name: "Arkansas" },
  CA: { x: 120, y: 270, name: "California" },
  CO: { x: 325, y: 275, name: "Colorado" },
  CT: { x: 745, y: 195, name: "Connecticut" },
  DE: { x: 715, y: 240, name: "Delaware" },
  FL: { x: 675, y: 435, name: "Florida" },
  GA: { x: 650, y: 365, name: "Georgia" },
  HI: { x: 235, y: 490, name: "Hawaii" },
  ID: { x: 205, y: 180, name: "Idaho" },
  IL: { x: 565, y: 250, name: "Illinois" },
  IN: { x: 600, y: 250, name: "Indiana" },
  IA: { x: 520, y: 225, name: "Iowa" },
  KS: { x: 455, y: 290, name: "Kansas" },
  KY: { x: 610, y: 285, name: "Kentucky" },
  LA: { x: 555, y: 400, name: "Louisiana" },
  ME: { x: 770, y: 135, name: "Maine" },
  MD: { x: 695, y: 245, name: "Maryland" },
  MA: { x: 750, y: 175, name: "Massachusetts" },
  MI: { x: 590, y: 190, name: "Michigan" },
  MN: { x: 500, y: 160, name: "Minnesota" },
  MS: { x: 585, y: 370, name: "Mississippi" },
  MO: { x: 525, y: 285, name: "Missouri" },
  MT: { x: 285, y: 140, name: "Montana" },
  NE: { x: 445, y: 240, name: "Nebraska" },
  NV: { x: 165, y: 240, name: "Nevada" },
  NH: { x: 755, y: 160, name: "New Hampshire" },
  NJ: { x: 725, y: 220, name: "New Jersey" },
  NM: { x: 300, y: 340, name: "New Mexico" },
  NY: { x: 700, y: 180, name: "New York" },
  NC: { x: 670, y: 310, name: "North Carolina" },
  ND: { x: 420, y: 140, name: "North Dakota" },
  OH: { x: 630, y: 240, name: "Ohio" },
  OK: { x: 455, y: 330, name: "Oklahoma" },
  OR: { x: 130, y: 160, name: "Oregon" },
  PA: { x: 675, y: 220, name: "Pennsylvania" },
  RI: { x: 760, y: 190, name: "Rhode Island" },
  SC: { x: 670, y: 340, name: "South Carolina" },
  SD: { x: 420, y: 190, name: "South Dakota" },
  TN: { x: 600, y: 315, name: "Tennessee" },
  TX: { x: 430, y: 390, name: "Texas" },
  UT: { x: 230, y: 250, name: "Utah" },
  VT: { x: 735, y: 160, name: "Vermont" },
  VA: { x: 670, y: 270, name: "Virginia" },
  WA: { x: 150, y: 120, name: "Washington" },
  WV: { x: 650, y: 260, name: "West Virginia" },
  WI: { x: 540, y: 180, name: "Wisconsin" },
  WY: { x: 300, y: 200, name: "Wyoming" },
}

export function USMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="size-4 rounded-full bg-teal-500"></div>
            <span className="text-white/70">States We Serve</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="size-4 border border-white/50 rounded-full"></div>
            <span className="text-white/70">Coming Soon</span>
          </div>
        </div>

        <div className="relative">
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Draw all states */}
            {Object.entries(statePositions).map(([stateCode, position]) => {
              const isServed = servedStates.includes(stateCode)
              const isHovered = hoveredState === stateCode

              return (
                <g key={stateCode}>
                  <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={isHovered ? 22 : 20}
                    fill={isServed ? "#10b981" : "transparent"}
                    stroke={isServed ? "#10b981" : "rgba(255,255,255,0.5)"}
                    strokeWidth={isServed ? 2 : 1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: isServed ? 0.1 : 0.3 }}
                    onMouseEnter={() => setHoveredState(stateCode)}
                    onMouseLeave={() => setHoveredState(null)}
                    className="cursor-pointer transition-all duration-200"
                  />
                  <motion.text
                    x={position.x}
                    y={position.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isServed ? "white" : "rgba(255,255,255,0.7)"}
                    fontSize="10"
                    fontWeight={isServed ? "bold" : "normal"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    pointerEvents="none"
                  >
                    {stateCode}
                  </motion.text>
                </g>
              )
            })}

            {/* Show state name on hover */}
            {hoveredState && (
              <motion.text
                x="400"
                y="470"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {statePositions[hoveredState as keyof typeof statePositions]?.name || hoveredState}
                {servedStates.includes(hoveredState) ? " - Service Available" : " - Coming Soon"}
              </motion.text>
            )}
          </svg>
        </div>

        <div className="mt-4 text-center text-white/70">
          <p>Our headquarters is located in Brooklyn, NYC with service coverage throughout the United States</p>
        </div>
      </div>
    </div>
  )
}

