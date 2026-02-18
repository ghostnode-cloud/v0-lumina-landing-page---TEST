"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Info } from "lucide-react"
import { useBookingModal } from "./booking-modal"
import { LearnMoreModal } from "./learn-more-modal"
import { StrategicInsightCard } from "./strategic-insight-card"
import { AuroraBackground } from "./aurora-background"
import { ContextualTooltip } from "./contextual-tooltip"
import { Magnetic } from "./magnetic"
import { FloatingNumbers } from "./floating-numbers"

export function HeroSection() {
  const { openModal } = useBookingModal()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle aurora / gradient mesh behind hero for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
        <AuroraBackground />
      </div>
      <FloatingNumbers />
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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
                Tax Strategy for Innovators
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="sr-only">
                Modern tax strategy for people who build the future.
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start" aria-hidden="true">
                {"Modern tax strategy for people who build the future."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + i * 0.05,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="mr-[0.25em] inline-block last:mr-0"
                    >
                      {word}
                    </motion.span>
                  ))}
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
            >
              <span className="md:hidden">
                One strategist. Full attention. Real results.
              </span>
              <span className="hidden md:inline">
                Cutting-edge <ContextualTooltip term="tax optimization" definition="Proactive strategies designed to legally reduce tax liability through credits, deductions, and structural shifts." /> for tech founders and growth-focused
                businesses. One strategist. Full attention. Real results.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col items-center gap-4 lg:items-start"
            >
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Magnetic>
                  <Button
                    onClick={openModal}
                    size="lg"
                    className="group bg-primary px-8 py-6 text-base font-bold text-primary-foreground hover:bg-primary/90"
                  >
                    Book Your Tax Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Magnetic>
                <Magnetic>
                  <LearnMoreModal
                    trigger={
                      <Button
                        variant="outline"
                        size="lg"
                        className="group border-accent/20 bg-white/40 px-6 py-6 text-base font-bold text-foreground backdrop-blur-sm hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                      >
                        <Info className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    }
                  />
                </Magnetic>
              </div>
              <p className="text-sm text-muted-foreground">
                Direct access to Marcus Chen — no gatekeepers.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex justify-center"
          >
            <StrategicInsightCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
