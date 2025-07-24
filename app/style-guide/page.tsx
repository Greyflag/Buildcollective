"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle, Info, Check, X, Users, Shield, Moon, Sun, Palette, Type, Layers } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { cn } from "@/lib/utils"

export default function StyleGuidePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full border-2 bg-background/80 backdrop-blur-sm"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <div className="space-y-0">
        {/* Header - Always Dark */}
        <section className="bg-black text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-50" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Build Collective Style Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
              A comprehensive design system showcasing alternating dark and light themes for dynamic visual experiences
            </p>
          </div>
        </section>

        {/* Typography - Light Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-3 mb-12">
              <Type className="h-8 w-8 text-gray-700" />
              <h2 className="text-4xl font-bold text-gray-900">Typography</h2>
            </div>
            
            <div className="grid gap-8">
              {/* Font Families */}
              <Card className="bg-white border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <CardTitle className="text-gray-900">Font Families</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Primary Font (Inter)</p>
                    <p className="text-2xl text-gray-900">The quick brown fox jumps over the lazy dog</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Heading Font (Space Grotesk)</p>
                    <p className="text-2xl font-space text-gray-900">The quick brown fox jumps over the lazy dog</p>
                  </div>
                </CardContent>
              </Card>

              {/* Font Sizes Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white border-gray-200 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <CardTitle className="text-gray-900">Font Sizes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-6">
                    {[
                      { size: "text-xs", label: "12px", class: "text-xs" },
                      { size: "text-sm", label: "14px", class: "text-sm" },
                      { size: "text-base", label: "16px", class: "text-base" },
                      { size: "text-lg", label: "18px", class: "text-lg" },
                      { size: "text-xl", label: "20px", class: "text-xl" },
                    ].map((item) => (
                      <div key={item.size} className="flex items-baseline justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm text-gray-600 font-mono">{item.size}</span>
                        <span className={cn(item.class, "text-gray-900")}>Aa ({item.label})</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <CardTitle className="text-gray-900">Font Weights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-6">
                    {[
                      { weight: "font-light", label: "Light (300)" },
                      { weight: "font-normal", label: "Normal (400)" },
                      { weight: "font-medium", label: "Medium (500)" },
                      { weight: "font-semibold", label: "Semibold (600)" },
                      { weight: "font-bold", label: "Bold (700)" },
                    ].map((item) => (
                      <div key={item.weight} className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <p className={cn("text-lg text-gray-900", item.weight)}>{item.label}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Colors - Dark Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-3 mb-12">
              <Palette className="h-8 w-8 text-white" />
              <h2 className="text-4xl font-bold text-white">Color System</h2>
            </div>
            
            <div className="grid gap-8">
              {/* Primary Colors */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Core Brand Colors</CardTitle>
                  <CardDescription className="text-gray-400">Primary palette for both themes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "Primary", class: "bg-primary", hex: "#3B82F6" },
                      { name: "Secondary", class: "bg-secondary", hex: "#10B981" },
                      { name: "Accent", class: "bg-accent", hex: "#8B5CF6" },
                      { name: "Destructive", class: "bg-destructive", hex: "#EF4444" },
                    ].map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div className={cn("h-32 rounded-lg", color.class, "shadow-lg")} />
                        <div>
                          <p className="text-sm font-medium text-white">{color.name}</p>
                          <p className="text-xs text-gray-400 font-mono">{color.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Theme Colors Comparison */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Dark Theme Colors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-black border border-gray-800">
                      <p className="text-xs text-gray-500 mb-2">Background</p>
                      <p className="text-white font-mono">#000000</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                      <p className="text-xs text-gray-500 mb-2">Card</p>
                      <p className="text-white font-mono">#111827</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                      <p className="text-xs text-gray-500 mb-2">Border</p>
                      <p className="text-white font-mono">#1F2937</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Light Theme Colors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-white border border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Background</p>
                      <p className="text-gray-900 font-mono">#FFFFFF</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Card</p>
                      <p className="text-gray-900 font-mono">#F9FAFB</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-100 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Border</p>
                      <p className="text-gray-900 font-mono">#E5E7EB</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Components - Light Section */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-white py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-3 mb-12">
              <Layers className="h-8 w-8 text-gray-700" />
              <h2 className="text-4xl font-bold text-gray-900">UI Components</h2>
            </div>

            {/* Buttons */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Buttons</h3>
              <Card className="bg-white border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900">Button Variants</CardTitle>
                  <CardDescription className="text-gray-600">Different styles for various use cases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-4">Standard Variants</p>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white">Default</Button>
                      <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300 text-gray-900">Secondary</Button>
                      <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100">Outline</Button>
                      <Button variant="ghost" className="text-gray-900 hover:bg-gray-100">Ghost</Button>
                      <Button variant="link" className="text-primary">Link</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-4">Sizes</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm" className="bg-gray-900 text-white">Small</Button>
                      <Button className="bg-gray-900 text-white">Default</Button>
                      <Button size="lg" className="bg-gray-900 text-white">Large</Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-4">States</p>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-gray-900 text-white">Normal</Button>
                      <Button disabled className="bg-gray-300 text-gray-500">Disabled</Button>
                      <Button className="bg-primary text-white">Primary Action</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Badges */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Badges & Alerts</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white border-gray-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Badge Variants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gray-900 text-white">Default</Badge>
                      <Badge variant="secondary" className="bg-gray-200 text-gray-900">Secondary</Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-900">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge className="bg-green-100 text-green-800 border-green-200">Success</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Info</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Alert States</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert className="border-gray-200 bg-gray-50">
                      <Info className="h-4 w-4" />
                      <AlertDescription className="text-gray-700">Default informational alert</AlertDescription>
                    </Alert>
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">Success message</AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements - Dark Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-white mb-12">Form Elements</h2>
            
            <div className="grid gap-8">
              {/* Dark Theme Forms */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Dark Theme Forms</h3>
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Input Fields</CardTitle>
                    <CardDescription className="text-gray-400">Form elements optimized for dark backgrounds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-white">Text Input</Label>
                        <Input 
                          placeholder="Enter text..." 
                          className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white">Select</Label>
                        <Select>
                          <SelectTrigger className="bg-black border-gray-700 text-white">
                            <SelectValue placeholder="Choose option" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-800">
                            <SelectItem value="1" className="text-white hover:bg-gray-800">Option 1</SelectItem>
                            <SelectItem value="2" className="text-white hover:bg-gray-800">Option 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white">Textarea</Label>
                      <Textarea 
                        placeholder="Type your message..." 
                        className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-primary min-h-[100px]"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox id="dark-terms" className="border-gray-600 data-[state=checked]:bg-primary" />
                      <Label htmlFor="dark-terms" className="text-gray-300">Accept terms and conditions</Label>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Light Theme Forms */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Light Theme Forms</h3>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Input Fields</CardTitle>
                    <CardDescription className="text-gray-600">Form elements optimized for light backgrounds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-gray-900">Text Input</Label>
                        <Input 
                          placeholder="Enter text..." 
                          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-900">Select</Label>
                        <Select>
                          <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                            <SelectValue placeholder="Choose option" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-200">
                            <SelectItem value="1" className="text-gray-900 focus:bg-gray-100">Option 1</SelectItem>
                            <SelectItem value="2" className="text-gray-900 focus:bg-gray-100">Option 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-gray-900">Textarea</Label>
                      <Textarea 
                        placeholder="Type your message..." 
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[100px]"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox id="light-terms" className="border-gray-300 data-[state=checked]:bg-primary" />
                      <Label htmlFor="light-terms" className="text-gray-700">Accept terms and conditions</Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Community Fit - Light Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Who We're Looking For</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're building a community of passionate founders and builders. Here's who thrives in our environment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Great Fit Card */}
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-800">Great Fit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700">You're interested in the startup world, but don't want to risk everything to be involved.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700">You have an startup idea but lack all the skills and network to execute.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700">You have a track record of shipping impressive things.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700">You're committed (or soon committing) to starting a company.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700">You gain energy from helping other founders win.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Not a Fit Card */}
              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-rose-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <X className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl text-red-800">Not a Fit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">You've already raised beyond pre-seed / found product-market fit.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">You're building something that can't reach venture scale.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">You aren't looking for a community.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">You already have a team.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Values - Dark Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Why Join The Build Collective</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our goal is to help founders take their first steps into the startup world, from absolute beginner to seasoned entrepreneurs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Community Card */}
              <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-white">Tight-Knit Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-300 leading-relaxed">
                    Join a tight-knit community of founders and builders keen on supporting one another in doing their best work. 
                    Anyone with the desire to create is welcome, we thrive on inclusivity.
                  </p>
                </CardContent>
              </Card>

              {/* Non-Dilutive Card */}
              <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-white">Non-Dilutive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-300 leading-relaxed">
                    We don't take any equity. Join to learn, build, and finally take your first step into the startup world. 
                    Focus on growing your idea from launch to seed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Light */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
                Ready to Turn Your Idea Into Reality?
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                Do you have an idea, but lack the skills and network to get it off the ground? 
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Card className="border-2 border-gray-200 bg-white shadow-xl p-6 max-w-sm hover:shadow-2xl transition-shadow">
                  <CardContent className="text-center p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Got the Idea?</h3>
                    <p className="text-sm text-gray-600">We'll help you build the skills and connections</p>
                  </CardContent>
                </Card>
                <div className="text-4xl text-gray-300 hidden sm:block">+</div>
                <Card className="border-2 border-gray-200 bg-white shadow-xl p-6 max-w-sm hover:shadow-2xl transition-shadow">
                  <CardContent className="text-center p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Need the Network?</h3>
                    <p className="text-sm text-gray-600">Connect with founders, builders, and mentors</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form - Dark Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Connect?</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}