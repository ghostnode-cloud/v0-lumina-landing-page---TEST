"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

const testimonials = [
  {
    quote:
      "Marcus saved us over $380K in our first year by restructuring how we handle equity comp across the team. No other CPA even suggested it.",
    name: "Sarah Lin",
    title: "CEO, Vertex AI",
    initials: "SL",
  },
  {
    quote:
      "The response time alone is worth it. I texted Marcus at 9pm about a funding clause and he had an answer by 10. That kind of access changes everything.",
    name: "James Okonkwo",
    title: "CTO, NovaPay",
    initials: "JO",
  },
  {
    quote:
      "After years of generic advice from large firms, Lumina felt like having a co-founder who happens to be a tax genius. Our audit exposure dropped to near zero.",
    name: "Priya Mehta",
    title: "Founder, Canopy Health",
    initials: "PM",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showSwipeHint, setShowSwipeHint] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const key = "lumina_testimonials_swipe_hint_seen"
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia?.("(max-width: 639px)").matches

    if (!isMobile) return

    try {
      const alreadySeen = window.localStorage.getItem(key) === "1"
      if (alreadySeen) return
      window.localStorage.setItem(key, "1")
      setShowSwipeHint(true)
      const t = window.setTimeout(() => setShowSwipeHint(false), 3000)
      return () => window.clearTimeout(t)
    } catch {
      // If storage is blocked, fall back to a one-time-per-mount hint.
      setShowSwipeHint(true)
      const t = window.setTimeout(() => setShowSwipeHint(false), 2500)
      return () => window.clearTimeout(t)
    }
  }, [])

  return (
    <section className="py-24 sm:py-32">
      <div className="section-container">
        <ScrollAnimation className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-accent">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Trusted by Tech Founders</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_80%] lg:flex-[0_0_60%]"
                  >
                    <div className="glass-card flex flex-col gap-6 p-8 sm:p-10">
                      <Quote className="h-8 w-8 text-accent/30" />
                      <blockquote className="text-lg leading-relaxed text-foreground/90 italic">
                        {`"${testimonial.quote}"`}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 border border-border/30">
                          <AvatarImage
                            src={`/placeholder-${testimonial.initials.toLowerCase()}.jpg`}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-muted text-xs text-foreground">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              {showSwipeHint && (
                <div className="sm:hidden">
                  <span className="rounded-full border border-border/30 bg-background/30 px-3 py-1 text-xs text-muted-foreground">
                    Swipe for more
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center gap-4">
              <button
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === selectedIndex
                        ? "w-6 bg-accent"
                        : "w-2 bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <span className="min-w-[52px] text-center font-mono text-xs text-muted-foreground">
                {selectedIndex + 1} / {testimonials.length}
              </span>

              <button
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
