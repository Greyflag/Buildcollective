"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to create unique solutions.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description: "We believe in the power of leveraging diverse perspectives and experience to build interdiciplinary solutions.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Craftsmanship",
    description: "We are committed to excellence in every line of code and pixel of design, and user workflow.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Impact",
    description: "We create work that resonates, drives engagement, and makes a meaningful difference.",
  },
]

export default function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border hover:bg-card/80 transition-colors"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
