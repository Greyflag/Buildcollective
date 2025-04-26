"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Pushing Boundaries Through Collective Innovation
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            The Build Collective is a team of creators dedicated to crafting innovative solutions leveraging the experience of community.
            Where others go alone, we build together, ensuring that our builders have the proper resources and people in their corner to succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative",
                description: "We push interdisciplinary boundaries to create unique experiences.",
              },
              {
                title: "Collaborative",
                description: "We believe in the power of leveraging experience and perspective by working together.",
              },
              {
                title: "Impactful",
                description: "We create work that resonates and drives meaningful engagement.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
