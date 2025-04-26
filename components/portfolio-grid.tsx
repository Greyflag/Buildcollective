"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Project data
const projects = [
  {
    id: 1,
    title: "Bill Club",
    description: "Smart bill splitting tool that makes expense sharing simple and hassle-free.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web Application",
    slug: "bill-club",
  },
  {
    id: 2,
    title: "Sylvia",
    description: "B2B research platform that streamlines data collection and analysis for enterprise clients.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Enterprise Platform",
    slug: "sylvia",
  },
]

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Handle tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("group relative overflow-hidden rounded-xl tilt-card", "border border-border bg-card")}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={cn("object-cover transition-transform duration-500", isHovered ? "scale-110" : "scale-100")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="relative p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
              {project.category}
            </span>
            <motion.div animate={{ rotate: isHovered ? 45 : 0 }} transition={{ duration: 0.3 }}>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>

          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
