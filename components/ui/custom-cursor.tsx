"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Add cursor-hidden class to body
    document.body.classList.add("cursor-hidden")

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.body.classList.remove("cursor-hidden")
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHidden ? 0 : isClicking ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          mass: 0.5,
          stiffness: 400,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 border-white ${isPointer ? "bg-white mix-blend-difference" : "bg-transparent"}`}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          mass: 0.2,
          stiffness: 800,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full" style={{ transform: "translate(-50%, -50%)" }} />
      </motion.div>
    </>
  )
}
