"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, Coins } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  StaggerContainer,
  staggerItemVariants,
} from "./scroll-animation"
import { ScrollAnimation } from "./scroll-animation"

const methods = [
  {
    icon: TrendingUp,
    title: "Proactive Tax Strategy",
    description:
      "We don't wait for tax season. Year-round planning identifies savings opportunities before they expire -- from R&D credits to entity restructuring for maximum efficiency.",
  },
  {
    icon: Shield,
    title: "Airtight Compliance",
    description:
      "Every strategy is built to withstand scrutiny. We maintain meticulous documentation and audit-ready files so you can sleep soundly, knowing your position is ironclad.",
  },
  {
    icon: Coins,
    title: "Founder-Focused Optimization",
    description:
      "Stock options, equity compensation, exit planning -- we specialize in the financial complexities unique to tech founders and startup leadership teams.",
    featured: true,
  },
]

export function LuminaMethod() {
  return (
    <section id="method" className="py-24 sm:py-32">
      <div className="section-container">
        <ScrollAnimation className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-accent">
            Our Approach
          </span>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">The Lumina Method</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A deliberate, modern approach to tax strategy built for the pace and
            complexity of technology businesses.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <motion.div
              key={method.title}
              variants={staggerItemVariants}
              className={`glass-card-hover group relative flex flex-col gap-4 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                method.featured
                  ? "border-accent/40 ring-1 ring-accent/20 lg:-translate-y-1 lg:scale-[1.03]"
                  : ""
              }`}
            >
              {method.featured && (
                <Badge className="absolute right-6 top-6 bg-accent text-accent-foreground hover:bg-accent">
                  Featured
                </Badge>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                <method.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {method.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {method.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
