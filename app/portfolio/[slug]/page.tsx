import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectContactForm from "@/components/project-contact-form"

// Project data
const projects = [
  {
    id: 1,
    title: "Bill Club",
    description: "Smart bill splitting tool that makes expense sharing simple and hassle-free.",
    fullDescription: `
      Bill Club is a comprehensive bill splitting application designed to simplify expense sharing through a simple snap of a reciept
      
      Our team developed Bill Club to address the common frustrations associated with group expenses. The application features an OCR scanning system to streamline data entry and integration with payment platforms in order to keep things moving!
    `,
    problem:
      "Managing shared expenses in groups often leads to confusion, inequality, and strained relationships. Existing solutions require too many hoops for users to jump through and  still lack the features needed to be a all-in-one solution.",
    solution:
      "Bill Club provides a user-friendly platform that automates the bill-splitting process, integrates with popular payment methods, and offers insightful spending analytics to help users better manage their shared finances.",
    process: [
      "User research to identify pain points in existing expense-sharing workflows",
      "Iterative design process with multiple user testing sessions",
      "Development of a responsive web application with real-time updates",
      "Integration with payment platforms for seamless settlements",
    ],
    results:
      "Bill Club has been successfully launched and is gaining traction among users looking for a simple bill-splitting solution.",
    image: "/images/billclub-screenshot.jpeg",
    gallery: [
      "/images/billclub-screenshot.jpeg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Web Application",
    slug: "bill-club",
    team: ["Josiah Aviles", "Henry Zhao", "Kien Tran", "Sai Damireddi"],
    liveUrl: "https://billclub.io/",
  },
  {
    id: 2,
    title: "Sylvia",
    description: "B2B research platform that streamlines the entire VOC research workflow for enterprise clients.",
    fullDescription: `
      Sylvia is an enterprise-grade research platform designed to transform how businesses collect, analyze, and leverage data. The platform coupled with high touch consultancy services analyzes the pain points and objectives of a business's current state and generates the questions to ask that will help the business get the answers they need to grow and alleviate their pains.

      Once this in generated and a survey is coded, Sylvia helps usher businesses through the VOC process, allowing them a single pane of glass to view CRM data and customer insights throughout the colelction of data. 

      After collecting data, Sylvia will generate an investor or C-Suite ready report highlighting the answers to the objectives that started the process. Syvlia is also always available to chat and help you parse through you user data, allowing you to ask out of the box questions to your "clients" based on the data Sylvia has on them.
    `,
    problem:
      "VOC research is hard to do right and often expensive. Consultants cost a lot, and internal Marketing departments don't have enough time to put the thought and effort into a meaningful study. In an era of data, customer data for large enterprises isn't properly utilized to drive action.",
    solution:
      "Sylvia centralizes the entire research workflow, and operates as an in house consultant from survey design and data collection to advanced analysis and visualization. The platform employs machine learning to identify patterns and insights that might otherwise be missed.",
    process: [
      "Extensive stakeholder interviews with research professionals across industries",
      "Development of a secure, scalable architecture for handling sensitive data",
      "Creation of intuitive interfaces for complex analytical tasks",
      "Implementation of machine learning models for automated insight generation",
    ],
    results: "Sylvia is actively being developed by The Build Collective Team.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Enterprise Platform",
    slug: "sylvia",
    team: ["Henry Zhao", "Sai Damireddi", "Josiah Aviles", "Kien Tran"],
    liveUrl: "",
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found | The Build Collective",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | The Build Collective`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Hero section */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <Link href="/portfolio">
              <Button variant="outline" size="sm" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{project.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>{project.fullDescription}</p>
            </div>

            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>{project.problem}</p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>{project.solution}</p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Process & Methodology</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <ul>
                {project.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>{project.results}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Category</h4>
                <p>{project.category}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Team</h4>
                <ul className="space-y-1">
                  {project.team.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>

              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mb-4 group">
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Interested in This Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Whether you're a potential customer or looking to collaborate, we'd love to hear from you.
            </p>
            <ProjectContactForm projectName={project.title} />
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore More Projects</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our other innovative work and see how we're pushing boundaries.
          </p>
          <Link href="/portfolio">
            <Button size="lg">View All Projects</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
