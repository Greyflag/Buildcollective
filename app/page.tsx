import { Suspense } from "react"
import Hero from "@/components/hero"
import IntroSection from "@/components/intro-section"
import CustomCursor from "@/components/ui/custom-cursor"
import ParticleBackground from "@/components/ui/particle-background"
import LightParticleBackground from "@/components/ui/light-particle-background"
import { Loader } from "@/components/ui/loader"
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Users, Shield, Heart, Sparkles } from "lucide-react"

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

      {/* Expectations Section - Dark Theme */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What to Expect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're changing the narrative around startup life. Here's how we work and what makes us different.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {/* Development Card */}
          <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 hover:border-blue-500/40 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl flex items-center justify-center mb-4 relative">
                {/* Custom Development Icon */}
                <div className="relative">
                  <div className="w-8 h-6 border-2 border-blue-400 rounded-sm relative">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-2 left-1.5 w-5 h-0.5 bg-blue-400/60"></div>
                    <div className="absolute top-3 left-1.5 w-3 h-0.5 bg-blue-400/60"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400/80 rounded-full"></div>
                </div>
              </div>
              <CardTitle className="text-xl text-blue-300">Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-blue-200 text-sm leading-relaxed">
                Building the product, writing code, and bringing ideas to life through technology.
              </p>
            </CardContent>
          </Card>

          {/* Outreach Card */}
          <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:border-green-500/40 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/30 rounded-xl flex items-center justify-center mb-4 relative">
                {/* Custom Outreach Icon */}
                <div className="relative">
                  <div className="w-6 h-6 border-2 border-green-400 rounded-full relative">
                    <div className="absolute top-1 left-1 w-4 h-3 border border-green-400 rounded-sm bg-green-400/20"></div>
                    <div className="absolute bottom-1 left-1.5 w-3 h-0.5 bg-green-400"></div>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-2 border-green-400 rounded-full bg-green-400/30"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border border-green-400 rounded-full bg-green-400/40"></div>
                  <div className="absolute top-1.5 -right-2 w-4 h-0.5 bg-green-400/60 rotate-12"></div>
                  <div className="absolute top-3 -right-1.5 w-3 h-0.5 bg-green-400/60 rotate-12"></div>
                </div>
              </div>
              <CardTitle className="text-xl text-green-300">Outreach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-green-200 text-sm leading-relaxed">
                Connecting with users, building community, and spreading the word about our projects.
              </p>
            </CardContent>
          </Card>

          {/* Research Card */}
          <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-violet-500/10 hover:border-purple-500/40 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/30 rounded-xl flex items-center justify-center mb-4 relative">
                {/* Custom Research Icon */}
                <div className="relative">
                  <div className="w-5 h-5 border-2 border-purple-400 rounded-full relative">
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 border border-purple-400 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-purple-400 rotate-45 bg-purple-400/20"></div>
                  <div className="absolute -top-1 left-1 w-6 h-0.5 bg-purple-400/60 rotate-45"></div>
                  <div className="absolute top-0 left-0 w-4 h-0.5 bg-purple-400/60 rotate-12"></div>
                  <div className="absolute -top-0.5 left-2 w-2 h-2 bg-purple-400/40 rounded-full"></div>
                  <div className="absolute top-1 left-3 w-1 h-1 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              <CardTitle className="text-xl text-purple-300">Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-purple-200 text-sm leading-relaxed">
                Understanding markets, validating ideas, and gathering insights to guide decisions.
              </p>
            </CardContent>
          </Card>

          {/* Flexible Structure Card */}
          <Card className="border-2 border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-red-500/10 hover:border-orange-500/40 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/30 rounded-xl flex items-center justify-center mb-4 relative">
                {/* Custom Team Structure Icon */}
                <div className="relative">
                  <div className="w-6 h-6 border-2 border-orange-400 rounded-lg relative bg-orange-400/10">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                    <div className="absolute top-2.5 left-2.5 w-1 h-1 bg-orange-400 rounded-full"></div>
                  </div>
                  <div className="absolute -top-1 left-0 w-3 h-2 border border-orange-400 rounded-t-full bg-orange-400/20"></div>
                  <div className="absolute -bottom-1 right-0 w-2 h-3 border border-orange-400 rounded-r-full bg-orange-400/30"></div>
                  <div className="absolute top-0 -left-1 w-0.5 h-4 bg-orange-400/60"></div>
                  <div className="absolute bottom-0 -right-0.5 w-4 h-0.5 bg-orange-400/60"></div>
                </div>
              </div>
              <CardTitle className="text-xl text-orange-300">Team Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-orange-200 text-sm leading-relaxed">
                Each project varies by team, but usually involves all these elements working together.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Part-time Founder Message */}
        <div className="max-w-5xl mx-auto">
          <Card className="border border-primary/20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 relative">
                  <Heart className="h-8 w-8 text-primary" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-4 w-4 text-primary/60" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">We Don't Expect You to Upheave Your Life</h3>
              </div>
              
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The startup world is very anti part-time founder, but not everyone has the luxury of dropping out of college, 
                  throwing away their career, and disturbing their family life.
                </p>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      We're here to change the narrative
                    </span>
                  </div>
                </div>
                
                <p className="text-xl font-medium text-foreground leading-relaxed">
                  Join us if you want to be part of something pushing the boundaries of what most thought impossible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Values */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Join The Build Collective</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our goal is to help founders take their first steps into the startup world, from absolute beginner to seasoned entrepreneurs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Community Card */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Tight-Knit Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                Join a tight-knit community of founders and builders keen on supporting one another in doing their best work. 
                Anyone with the desire to create is welcome, we thrive on inclusivity.
              </p>
            </CardContent>
          </Card>

          {/* Non-Dilutive Card */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Non-Dilutive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                We don't take any equity. Join to learn, build, and finally take your first step into the startup world. 
                Focus on growing your idea from launch to seed.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mt-12">
          <p className="text-lg text-muted-foreground italic">
            From absolute beginner to seasoned founders, everyone is welcome in this inclusive community focused on learning, building, and taking that crucial first step into entrepreneurship.
          </p>
        </div>
      </section>

      {/* Main CTA Section - Light Theme */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <LightParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
              Ready to Turn Your Idea Into Reality?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Do you have an idea, but lack the skills and network to get it off the ground? 
              <span className="text-gray-900 font-semibold"> Join our society now!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Card className="border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-6 max-w-sm">
                <CardContent className="text-center p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                    {/* Lightbulb Icon */}
                    <div className="relative">
                      {/* Bulb glass */}
                      <div className="w-5 h-6 border-2 border-blue-600 rounded-t-full bg-gradient-to-b from-blue-50 to-blue-100 relative">
                        {/* Filament */}
                        <div className="absolute top-2 left-1 w-3 h-2 flex flex-col justify-center items-center">
                          <div className="w-2 h-0.5 bg-blue-600 rounded-full mb-0.5"></div>
                          <div className="w-1.5 h-0.5 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      {/* Base/screw threads */}
                      <div className="absolute -bottom-0.5 left-0.5 w-4 h-2 bg-blue-600 rounded-b-sm">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-700"></div>
                        <div className="absolute top-1 left-0 w-full h-0.5 bg-blue-700"></div>
                      </div>
                      {/* Light rays */}
                      <div className="absolute -top-1 -left-1 w-6 h-0.5 bg-yellow-400 rotate-45 opacity-80"></div>
                      <div className="absolute -top-1 left-2 w-4 h-0.5 bg-yellow-400 -rotate-45 opacity-80"></div>
                      <div className="absolute top-0 -left-2 w-5 h-0.5 bg-yellow-400 opacity-60"></div>
                      <div className="absolute top-0 left-3 w-5 h-0.5 bg-yellow-400 opacity-60"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Got the Idea?</h3>
                  <p className="text-sm text-gray-600">We'll help you build the skills and connections</p>
                </CardContent>
              </Card>
              <div className="text-4xl text-gray-300 hidden sm:block">+</div>
              <Card className="border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-6 max-w-sm">
                <CardContent className="text-center p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                    {/* Helping Hand Icon */}
                    <div className="relative">
                      {/* Main hand palm */}
                      <div className="w-4 h-5 bg-green-600 rounded-t-2xl rounded-b-lg relative">
                        {/* Thumb */}
                        <div className="absolute -left-1 top-2 w-1.5 h-2 bg-green-600 rounded-full transform -rotate-12"></div>
                        {/* Fingers */}
                        <div className="absolute top-0 left-0.5 w-0.5 h-2 bg-green-700 rounded-t-full"></div>
                        <div className="absolute top-0 left-1.5 w-0.5 h-2.5 bg-green-700 rounded-t-full"></div>
                        <div className="absolute top-0 left-2.5 w-0.5 h-2 bg-green-700 rounded-t-full"></div>
                        <div className="absolute top-0 right-0.5 w-0.5 h-1.5 bg-green-700 rounded-t-full"></div>
                        {/* Palm lines */}
                        <div className="absolute top-2 left-1 w-2 h-0.5 bg-green-700 rounded-full opacity-60"></div>
                        <div className="absolute top-3 left-0.5 w-2.5 h-0.5 bg-green-700 rounded-full opacity-40"></div>
                      </div>
                      {/* Wrist/sleeve */}
                      <div className="absolute -bottom-1 left-0.5 w-3 h-2 bg-green-600 rounded-b-lg border-t-2 border-green-700"></div>
                      {/* Offering/reaching gesture sparkles */}
                      <div className="absolute -top-1 left-2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="absolute -top-0.5 right-0.5 w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-80"></div>
                      <div className="absolute top-1 -left-1.5 w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-60"></div>
                      {/* Motion lines showing helping gesture */}
                      <div className="absolute -top-0.5 left-1 w-3 h-0.5 bg-green-400 opacity-50 transform rotate-12"></div>
                      <div className="absolute -top-1 left-2.5 w-2 h-0.5 bg-green-400 opacity-40 transform -rotate-12"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Need the Network?</h3>
                  <p className="text-sm text-gray-600">Connect with founders, builders, and mentors</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section - Dark Theme */}
      <section className="py-24 relative overflow-hidden bg-black">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We're Looking For</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We welcome ambitious builders from all backgrounds who share our vision of collaborative entrepreneurship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Great Fit Card */}
            <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-950/50 to-emerald-950/50 hover:border-green-500/40 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-green-300">Great Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You're interested in the startup world, but don't want to risk everything to be involved.</span>
                  </li>
                  <li className="flex items-start text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You have a startup idea but lack all the skills and network to execute.</span>
                  </li>
                  <li className="flex items-start text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You have a track record of shipping impressive things.</span>
                  </li>
                  <li className="flex items-start text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You're committed (or soon committing) to starting a company.</span>
                  </li>
                  <li className="flex items-start text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You gain energy from helping other founders win.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Not a Fit Card */}
            <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-950/50 to-rose-950/50 hover:border-red-500/40 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <X className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-2xl text-red-300">Not a Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start text-red-200">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You've already raised beyond pre-seed / found product-market fit.</span>
                  </li>
                  <li className="flex items-start text-red-200">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You're building something that can't reach venture scale.</span>
                  </li>
                  <li className="flex items-start text-red-200">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You aren't looking for a community.</span>
                  </li>
                  <li className="flex items-start text-red-200">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>You already have a team.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to connect section with form */}
      <section id="contact-section" className="py-24 relative overflow-hidden">
        <ParticleBackground />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Ready to Connect?</h2>
            <ContactForm />
            <p className="mt-8 text-muted-foreground">
              For any further questions, please contact us at{" "}
              <a href="mailto:build@buildcollective.com" className="text-primary hover:underline">
                build@buildcollective.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}