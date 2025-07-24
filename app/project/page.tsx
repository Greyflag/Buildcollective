import { Suspense } from "react"
import ProjectGrid from "@/components/project-grid"
import ProjectFilter from "@/components/project-filter"
import { Loader } from "@/components/ui/loader"

export const metadata = {
  title: "Project | The Build Collective",
  description: "Explore our innovative digital projects and case studies.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Project</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Explore our collection of innovative digital experiences that push boundaries and connect visionaries.
        </p>

        <ProjectFilter />

        <Suspense fallback={<Loader />}>
          <ProjectGrid />
        </Suspense>
      </section>
    </main>
  )
}
