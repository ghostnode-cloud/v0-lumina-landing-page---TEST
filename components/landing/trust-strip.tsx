"use client"

import { ScrollAnimation } from "./scroll-animation"
import { ScrollAnimation as ItemAnimation } from "./scroll-animation"

const stats = [
  { value: "£4.2M+", label: "Tax Saved (2025)" },
  { value: "22%", label: "Avg. Liability Reduction" },
  { value: "100%", label: "Audit Defense Success" },
  { value: "<4hrs", label: "Response Time" },
]

export function TrustStrip() {
  const order = [1, 2, 0, 3]
  const baseDelay = 0.06

  return (
    <section className="relative overflow-hidden border-y border-accent/10 bg-background py-20 sm:py-28">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--accent) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      <div className="section-container relative z-10">
        <ScrollAnimation>
          <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground sm:text-sm">
            Trusted by founders at
          </p>

          <div className="relative mx-auto mb-16 overflow-hidden">
            <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
              {/* First set of logos */}
              {['Y Combinator', 'Antler', 'Techstars', 'A16Z', 'Sequoia', 'Index Ventures'].map((logo) => (
                <span key={logo} className="font-serif text-lg font-bold tracking-tighter text-foreground/40 sm:text-xl md:text-2xl">
                  {logo}
                </span>
              ))}
              {/* Duplicate set for infinite effect */}
              {['Y Combinator', 'Antler', 'Techstars', 'A16Z', 'Sequoia', 'Index Ventures'].map((logo) => (
                <span key={`${logo}-dup`} className="font-serif text-lg font-bold tracking-tighter text-foreground/40 sm:text-xl md:text-2xl">
                  {logo}
                </span>
              ))}
            </div>
            {/* Fading edges overlay */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border/30">
          {stats.map((stat, index) => {
            const position = order.indexOf(index)
            const delay = position >= 0 ? position * baseDelay : index * baseDelay

            return (
              <ItemAnimation
                key={stat.label}
                delay={delay}
                className="flex flex-col items-center gap-2 rounded-lg px-2 py-3 text-center sm:px-4 sm:py-4 lg:rounded-none lg:px-8 lg:py-0"
              >
                <span className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </ItemAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
