"use client"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className, size = "lg" }: LogoProps) {
  // Size mappings
  const sizes = {
    sm: {
      fontSize: "text-2xl",
      spacing: { t: "0px", b: "7px", c: "20px" },
    },
    md: {
      fontSize: "text-3xl",
      spacing: { t: "0px", b: "8px", c: "22px" },
    },
    lg: {
      fontSize: "text-4xl",
      spacing: { t: "0px", b: "10px", c: "24px" },
    },
  }

  const currentSize = sizes[size]

  return (
    <div className={cn("relative font-bold tracking-tighter", currentSize.fontSize, className)}>
      <span className="absolute gradient-text" style={{ left: currentSize.spacing.t }}>
        t
      </span>
      <span className="absolute gradient-text" style={{ left: currentSize.spacing.b }}>
        b
      </span>
      <span className="absolute gradient-text" style={{ left: currentSize.spacing.c }}>
        c
      </span>
      <span className="invisible">tbc</span>
    </div>
  )
}
