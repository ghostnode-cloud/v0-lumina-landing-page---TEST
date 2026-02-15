"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Info } from "lucide-react"
import { useBookingModal } from "./booking-modal"
import { LearnMoreModal } from "./learn-more-modal"

export function HeroSection() {
  const { openModal } = useBookingModal()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background accent glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[800px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,250,252,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              Tax Strategy for Innovators
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">
              Modern tax strategy for people who build the future.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            Cutting-edge tax optimization for tech founders and growth-focused
            businesses. One strategist. Full attention. Real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button
                onClick={openModal}
                size="lg"
                className="group bg-accent px-8 py-6 text-base font-medium text-accent-foreground hover:bg-accent/90"
              >
                Book Your Tax Strategy Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <LearnMoreModal
                trigger={
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-border/40 bg-transparent px-6 py-6 text-base font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                  >
                    <Info className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                }
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Direct access to Marcus Chen -- no gatekeepers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
