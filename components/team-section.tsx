"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, ArrowRight, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Team data with LinkedIn profiles
const team = [
  {
    name: "Josiah Aviles",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/josiahaviles/",
    },
  },
  {
    name: "Henry Zhao",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/henryzhao14/",
    },
  },
  {
    name: "Kien Tran",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/kien-tran-a66b94148/",
    },
  },
  {
    name: "Sai Damireddi",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/sai-damireddi/",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold mb-6 gradient-text">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate creators, developers, and designers dedicated to pushing the boundaries of
            digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>

        {/* Join the team section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Join Our Team</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for eager builders who are passionate about growing through experience. If you think you'd be a good fit, we'd love to hear from you.
          </p>
          <Link href="/connect">
            <Button size="lg" className="group magnetic-button">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function TeamMember({ member, index }: { member: (typeof team)[0]; index: number }) {
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

    const rotateX = (y - centerY) / 30
    const rotateY = (centerX - x) / 30

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
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-xl tilt-card",
        "border border-border bg-card hover:shadow-lg transition-shadow duration-300",
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6">
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className={cn("object-cover transition-transform duration-500", isHovered ? "scale-110" : "scale-100")}
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-primary mb-3">{member.role}</p>
          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

          <div className="flex justify-center space-x-4">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
