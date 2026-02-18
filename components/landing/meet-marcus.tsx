"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "./scroll-animation"
import { useBookingModal } from "./booking-modal"
import { ArrowRight } from "lucide-react"

import Image from "next/image"

export function MeetMarcus() {
  const { openModal } = useBookingModal()

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <ScrollAnimation className="relative">
          {/* Background glow for the card */}
          <div className="absolute -inset-4 z-0 bg-accent/5 blur-3xl opacity-50" />
          <div className="glass-card relative z-10 overflow-hidden border-black/5">
            <div className="flex flex-col items-center gap-10 p-8 md:flex-row md:gap-16 md:p-12 lg:p-16">
              {/* Avatar / Headshot */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" />
                  <Avatar className="relative h-40 w-40 border-2 border-accent/20 sm:h-48 sm:w-48 md:h-56 md:w-56">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src="/placeholder-marcus.jpg"
                        alt="Marcus Chen, CPA - Founder of Lumina Tax & Advisory"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                      />
                    </div>
                    <AvatarFallback className="bg-muted text-3xl font-black text-foreground">
                      MC
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex flex-col text-center md:text-left">
                <span className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
                  Meet Your Strategist
                </span>
                <h2 className="font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
                  Marcus Chen
                </h2>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <Badge
                    variant="secondary"
                    className="border border-border/30 bg-background/30 text-foreground"
                  >
                    CPA
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border border-border/30 bg-background/30 text-foreground"
                  >
                    10+ years advising startups
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border border-border/30 bg-background/30 text-foreground"
                  >
                    Former Big 4
                  </Badge>
                </div>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  After a decade advising high-growth startups and their founders
                  at top-tier firms, Marcus launched Lumina to do things
                  differently. No layers of junior staff. No cookie-cutter
                  playbooks. Just direct access to a strategist who speaks your
                  language -- tech, equity, and ambition.
                </p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  His clients include seed-stage founders, series-funded CTOs,
                  and bootstrapped entrepreneurs who refuse to overpay the IRS.
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    onClick={openModal}
                    className="group text-accent hover:bg-accent/10 hover:text-accent"
                  >
                    Book Your Tax Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
