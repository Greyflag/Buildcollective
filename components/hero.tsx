"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import HeroCanvas from "./ui/hero-canvas"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const textRef = useRef<HTMLHeadingElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Check if animation has already run in this session
  useEffect(() => {
    const hasRun = localStorage.getItem("textAnimationHasRun")
    if (hasRun) {
      setHasAnimated(true)
    }
  }, [])

  // Text scramble effect
  useEffect(() => {
    if (!textRef.current || !inView || hasAnimated) return

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interval: NodeJS.Timeout | null = null

    const originalText = "THE BUILD COLLECTIVE"
    let iteration = 0

    clearInterval(interval as NodeJS.Timeout)

    interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("")
      }

      if (iteration >= originalText.length) {
        clearInterval(interval as NodeJS.Timeout)
        setHasAnimated(true)
        localStorage.setItem("textAnimationHasRun", "true")
      }

      iteration += 1 / 3
    }, 30)

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [inView, hasAnimated])

  // Function to replay the animation when clicked
  const replayAnimation = () => {
    setHasAnimated(false)
  }

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D WebGL Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1
            ref={textRef}
            onClick={replayAnimation}
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-bold mb-6",
              "tracking-tighter gradient-text cursor-pointer",
            )}
          >
            THE BUILD COLLECTIVE
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
Building to learn, grow, and create together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="group magnetic-button">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="magnetic-button">
              Connect With Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
              }}
              className="w-1 h-1 rounded-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
