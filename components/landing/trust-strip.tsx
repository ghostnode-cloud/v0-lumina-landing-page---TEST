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
    <section className="relative border-y border-border/30 bg-muted/50 py-12 sm:py-16">
      <div className="section-container">
        <ScrollAnimation>
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by founders at
          </p>
          <p className="mx-auto mb-10 max-w-xl text-center text-xs text-muted-foreground/80 sm:text-sm">
            Tech accelerators · Series A+ startups · VC-backed teams
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border/30">
          {stats.map((stat, index) => {
            const position = order.indexOf(index)
            const delay = position >= 0 ? position * baseDelay : index * baseDelay

            return (
              <ItemAnimation
                key={stat.label}
                delay={delay}
                className="flex flex-col items-center gap-2 text-center lg:px-8"
              >
                <span className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
