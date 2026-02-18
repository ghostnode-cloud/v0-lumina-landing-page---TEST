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
    className: "md:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    icon: Shield,
    title: "Airtight Compliance",
    description:
      "Every strategy is built to withstand scrutiny. We maintain meticulous documentation and audit-ready files so you can sleep soundly, knowing your position is ironclad.",
    className: "md:col-span-1",
  },
  {
    icon: Coins,
    title: "Founder-Focused Optimization",
    description:
      "Stock options, equity compensation, exit planning -- we specialize in the financial complexities unique to tech founders and startup leadership teams.",
    featured: true,
    className: "md:col-span-1 lg:col-span-2",
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

        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {methods.map((method) => (
            <motion.div
              key={method.title}
              variants={staggerItemVariants}
              className={`glass-card-hover group relative flex min-h-[320px] flex-col justify-end p-8 transition-shadow ${method.className
                } ${method.featured
                  ? "border-accent/30 ring-1 ring-accent/10"
                  : ""
                }`}
            >
              {/* Dynamic Gradient Background for Bento feel - with overflow hidden here */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 dark:bg-gradient-to-br ${method.featured ? 'from-accent via-accent/50 to-transparent' : 'from-accent/50 via-transparent to-transparent'
                  }`} />
              </div>

              <div className="relative z-10">
                {method.featured && (
                  <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">
                    Featured focus
                  </Badge>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                  {method.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground lg:max-w-[90%]">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
