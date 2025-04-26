"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CallToActionProps {
  title: string
  description: string
  primaryCta: string
  primaryCtaLink: string
  secondaryCta: string
  secondaryCtaLink: string
}

export default function CallToAction({
  title,
  description,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
}: CallToActionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">{title}</h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryCtaLink}>
              <Button size="lg" className="group magnetic-button">
                {primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href={secondaryCtaLink}>
              <Button size="lg" variant="outline" className="magnetic-button">
                {secondaryCta}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
