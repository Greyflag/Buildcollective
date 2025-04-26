import { Suspense } from "react"
import PortfolioGrid from "@/components/portfolio-grid"
import PortfolioFilter from "@/components/portfolio-filter"
import { Loader } from "@/components/ui/loader"

export const metadata = {
  title: "Portfolio | The Build Collective",
  description: "Explore our innovative digital projects and case studies.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Explore our collection of innovative digital experiences that push boundaries and connect visionaries.
        </p>

        <PortfolioFilter />

        <Suspense fallback={<Loader />}>
          <PortfolioGrid />
        </Suspense>
      </section>
    </main>
  )
}
