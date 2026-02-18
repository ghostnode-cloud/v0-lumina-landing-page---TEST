"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, Coins } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  StaggerContainer,
  staggerItemVariants,
} from "./scroll-animation"
import { ScrollAnimation } from "./scroll-animation"

import { RoiCalculator } from "./roi-calculator"
import { ContextualTooltip } from "./contextual-tooltip"

const methods = [
  {
    icon: TrendingUp,
    title: "Proactive Tax Strategy",
    description: (
      <>
        We don't wait for tax season. Year-round planning identifies savings opportunities before they expire -- from{" "}
        <ContextualTooltip term="R&D credits" definition="Tax incentives that reduce a company’s tax liability based on qualified research and development expenditures." /> to entity restructuring.
      </>
    ),
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    icon: Shield,
    title: "Airtight Compliance",
    description:
      "Every strategy is built to withstand scrutiny. We maintain meticulous documentation and audit-ready files.",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: Coins,
    title: "Founder-Focused Optimization",
    description: (
      <>
        <ContextualTooltip term="Stock options" definition="Contracts that give you the right to buy shares at a fixed price, often complex to manage for tax purposes." />,{" "}
        <ContextualTooltip term="equity compensation" definition="Non-cash pay represented by ownership in the business, requiring careful timing to minimize tax impact." />, exit planning -- we specialize in the unique financial complexities of tech leaders.
      </>
    ),
    featured: true,
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    isCalculator: true,
    className: "lg:col-span-2 lg:row-span-1",
  },
]

export function LuminaMethod() {
  return (
    <section id="method" className="relative bg-muted/30 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/textures/paper.png')] opacity-[0.02] pointer-events-none" />
      <div className="section-container relative z-10">
        <ScrollAnimation className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-accent">
            Our Approach
          </span>
          <h2 className="font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="text-balance">The Lumina Method</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A deliberate, modern approach to tax strategy built for the pace and
            complexity of technology businesses.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 md:gap-6">
          {methods.map((method, idx) => (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className={`glass-card-hover group relative flex flex-col p-8 transition-shadow ${method.className
                } ${'featured' in method && method.featured
                  ? "border-accent/30 ring-1 ring-accent/10"
                  : ""
                }`}
            >
              {'isCalculator' in method && method.isCalculator ? (
                <RoiCalculator />
              ) : (
                <>
                  {/* Dynamic Gradient Background */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
                    <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 bg-gradient-to-br ${'featured' in method && method.featured ? 'from-accent via-accent/50 to-transparent' : 'from-accent/50 via-transparent to-transparent'
                      }`} />
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-end">
                    {'featured' in method && method.featured && (
                      <Badge className="mb-4 w-fit bg-accent text-accent-foreground hover:bg-accent">
                        Featured focus
                      </Badge>
                    )}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                      {(() => {
                        const Icon = 'icon' in method ? method.icon : null
                        return Icon ? <Icon className="h-6 w-6" /> : null
                      })()}
                    </div>
                    <h3 className="mb-3 font-serif text-2xl font-normal tracking-tight text-foreground">
                      {'title' in method && method.title}
                    </h3>
                    <div className="text-sm leading-relaxed text-muted-foreground lg:max-w-[90%]">
                      {method.description}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
