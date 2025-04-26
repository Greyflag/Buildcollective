import { Suspense } from "react"
import Image from "next/image"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"
import { Loader } from "@/components/ui/loader"

export const metadata = {
  title: "About | The Build Collective",
  description: "Learn about The Build Collective, our mission, values, and team.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Us</h1>
            <p className="text-xl text-muted-foreground mb-6">
              The Build Collective is a community formed to help builders to create.
            </p>
            <p className="text-lg text-muted-foreground">
              We create a blend of opportunity, resources, and connectivity to enable builders to hone their craft and utilize the resources and learning of the community around them. Our collaborative approach brings together diverse perspectives to solve complex problems and
              create meaningful products and experiences.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="The Build Collective team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-card border-y border-border py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Mission & Vision</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To hone our skills and create opportunity for growth through the practice of building together.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A community where we can enable anyone to work on their dreams and launch their next start-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <Suspense fallback={<Loader />}>
        <ValuesSection />
      </Suspense>

      {/* Team - Now with enhanced styling and join option */}
      <Suspense fallback={<Loader />}>
        <TeamSection />
      </Suspense>
    </main>
  )
}
