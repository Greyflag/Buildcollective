import { Suspense } from "react"
import ContactForm from "@/components/contact-form"
import { Loader } from "@/components/ui/loader"

export const metadata = {
  title: "Connect | The Build Collective",
  description: "Get in touch with The Build Collective to discuss collaboration opportunities.",
}

export default function ConnectPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Interested in collaborating or learning more about our work? We'd love to hear from you. 
            Reach out to build@buildcollective.org.
          </p>

          <Suspense fallback={<Loader />}>
            <ContactForm isConnectPage={true} />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
