"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = ["Web Application", "Enterprise Platform"]

export default function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
      <div className="flex space-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="relative"
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-primary opacity-10 rounded-md"
                initial={false}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
