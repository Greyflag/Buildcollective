import { Suspense } from "react"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import IntroSection from "@/components/intro-section"
import CallToAction from "@/components/call-to-action"
import CustomCursor from "@/components/ui/custom-cursor"
import ParticleBackground from "@/components/ui/particle-background"
import { Loader } from "@/components/ui/loader"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Custom cursor that follows mouse movement */}
      <CustomCursor />

      {/* Particle background effect */}
      <ParticleBackground />

      {/* Hero section with immersive animation */}
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      {/* Brief introduction to The Build Collective */}
      <IntroSection />

      {/* Featured projects showcase */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured Work</h2>
        <FeaturedProjects />
      </section>

      {/* Call to action section */}
      <CallToAction
        title="Ready to Build Together?"
        description="Join us in creating innovative solutions that push boundaries."
        primaryCta="View All Projects"
        primaryCtaLink="/portfolio"
        secondaryCta="Connect With Us"
        secondaryCtaLink="/connect"
      />
    </main>
  )
}
