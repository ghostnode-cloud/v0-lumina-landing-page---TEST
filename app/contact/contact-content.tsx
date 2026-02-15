"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ContactPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <header className="glass-header sticky top-0 z-50 py-4">
        <div className="section-container flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-foreground transition-colors hover:text-accent"
          >
            LUMINA
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="py-24 sm:py-32">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-accent">
                Get in Touch
              </span>
              <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
                Contact Marcus
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Have a question or ready to start optimizing your tax strategy?
                Reach out directly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-8 sm:p-10"
            >
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="contact-name"
                      className="text-sm text-foreground"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      className="border-border/30 bg-background/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="contact-email"
                      className="text-sm text-foreground"
                    >
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@company.com"
                      className="border-border/30 bg-background/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="contact-company"
                    className="text-sm text-foreground"
                  >
                    Company
                  </Label>
                  <Input
                    id="contact-company"
                    placeholder="Your company name"
                    className="border-border/30 bg-background/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="contact-subject"
                    className="text-sm text-foreground"
                  >
                    Subject
                  </Label>
                  <Input
                    id="contact-subject"
                    placeholder="What is this regarding?"
                    className="border-border/30 bg-background/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm text-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your tax situation or goals..."
                    rows={5}
                    className="border-border/30 bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Direct contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
            >
              <a
                href="mailto:marcus@luminatax.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                marcus@luminatax.com
              </a>
              <span className="hidden text-border sm:inline">|</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Linkedin className="h-4 w-4 text-accent" />
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-border/30 bg-[#0A0F1C] py-8">
        <div className="section-container text-center">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Lumina Tax & Advisory. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
