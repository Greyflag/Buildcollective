"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm as useFormspree } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  expertise: z.string().min(1, { message: "Please select your expertise." }),
  exceptionalWork: z.string().min(10, { message: "Please describe your exceptional work in at least 10 characters." }),
  currentWork: z.string().min(2, { message: "Please tell us where you work or plan to work." }),
  message: z.string().min(10, { message: "Please tell us about your idea/project in at least 10 characters." }),
  weeklyHours: z.string().min(1, { message: "Please estimate your weekly time commitment." }),
})

type FormValues = z.infer<typeof formSchema>

interface ContactFormProps {
  isConnectPage?: boolean
}

export default function ContactForm({ isConnectPage = false }: ContactFormProps) {
  const [state, handleSubmit] = useFormspree("xwpqlyeo")
  const router = useRouter()

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      expertise: "",
      exceptionalWork: "",
      currentWork: "",
      message: "",
      weeklyHours: "",
    },
  })

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    try {
      // Formspree expects the data as an object, not FormData for JSON submissions
      await handleSubmit(data)
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  // Expertise options
  const expertiseOptions = ["Development", "Design", "Project Management", "Marketing", "Business", "Other"]

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      {state.succeeded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center py-12 relative overflow-hidden"
        >
          {/* Background celebration particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                initial={{ 
                  x: "50%", 
                  y: "50%", 
                  scale: 0,
                  opacity: 0 
                }}
                animate={{ 
                  x: `${Math.random() * 400 - 200}%`, 
                  y: `${Math.random() * 400 - 200}%`,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 2,
                  delay: 0.5 + Math.random() * 1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Success icon with pulse animation */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative"
            >
              <CheckCircle className="h-16 w-16 text-green-500" />
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 border-2 border-green-400 rounded-full"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Animated heading */}
          <motion.h2 
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 via-primary to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Application Submitted!
          </motion.h2>

          {/* Animated description */}
          <motion.p 
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Thank you for applying. We'll review your application and get back to you soon.
          </motion.p>

          {/* Animated button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              onClick={() => router.push('/')}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <motion.span
                className="inline-block"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                &larr;
              </motion.span>
              <span className="ml-2">Back to Home</span>
            </Button>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-10 left-10 w-4 h-4 bg-primary/20 rounded-full"
            animate={{ 
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-20 right-16 w-3 h-3 bg-green-400/30 rounded-full"
            animate={{ 
              y: [10, -10, 10],
              x: [5, -5, 5],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-16 left-20 w-2 h-2 bg-primary/40 rounded-full"
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="expertise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Expertise</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your expertise" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {expertiseOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weeklyHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is the estimated amount of hours you can commit each week?</FormLabel>
                  <FormControl>
                    <Input placeholder="How much time can you commit each week to building a start-up..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentWork"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where do you currently work, have worked, or future career plans?</FormLabel>
                  <FormControl>
                    <Input placeholder="Company, startup, or future plans..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="exceptionalWork"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What exceptional work have you done?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your achievements, projects, or notable contributions..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isConnectPage ? "Message" : "Ambitions?"}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={isConnectPage ? "Tell us about your project or inquiry..." : "Tell us about your idea/project or if there are any existing projects we have that interest you..."}
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {state.errors && (
              <div className="text-red-500 text-sm mb-4">
                There was an error submitting your application. Please try again.
              </div>
            )}

            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Apply"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}
