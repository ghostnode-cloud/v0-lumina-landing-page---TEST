"use client"

import { ScrollAnimation } from "./scroll-animation"

const stats = [
  { value: "$4.2M+", label: "Tax Saved (2025)" },
  { value: "22%", label: "Avg. Liability Reduction" },
  { value: "100%", label: "Audit Defense Success" },
  { value: "<4hrs", label: "Response Time" },
]

export function TrustStrip() {
  return (
    <section className="relative border-y border-border/30 bg-muted/50 py-12 sm:py-16">
      <div className="section-container">
        <ScrollAnimation>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border/30">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center lg:px-8"
              >
                <span className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
