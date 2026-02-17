"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import {
  ScrollAnimation,
  StaggerContainer,
  staggerItemVariants,
} from "./scroll-animation"
import { useBookingModal } from "./booking-modal"

const tiers = [
  {
    name: "Launchpad",
    audience: "For early-stage founders",
    price: "£500",
    period: "/mo",
    highlighted: false,
    features: [
      "Quarterly tax planning sessions",
      "Annual tax return preparation",
      "Entity structure optimization",
      "Startup tax credit identification",
      "Email support (24hr response)",
    ],
  },
  {
    name: "Scaleup",
    audience: "For funded startups",
    price: "£1,500",
    period: "/mo",
    highlighted: true,
    features: [
      "Monthly strategy sessions with Marcus",
      "Full tax return + quarterly estimates",
      "Equity compensation planning",
      "R&D tax credit maximization",
      "Multi-state compliance",
      "Priority support (<4hr response)",
      "Audit defense included",
    ],
  },
  {
    name: "Enterprise",
    audience: "For scaling teams",
    price: "Custom",
    period: "",
    highlighted: false,
    note: "Typical engagement: £3K–£8K/mo",
    features: [
      "Dedicated advisory relationship",
      "Full-spectrum tax + compliance",
      "M&A and exit tax planning",
      "International tax strategy",
      "Board-ready reporting",
      "On-call access to Marcus",
      "Custom engagement scope",
    ],
  },
]

export function PricingSection() {
  const { openModal } = useBookingModal()

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="section-container">
        <ScrollAnimation className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-accent">
            Investment
          </span>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Clear, predictable pricing with no hidden fees. Every plan includes
            direct access to Marcus.
          </p>
        </ScrollAnimation>

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.15}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItemVariants}
              className={`glass-card-hover group relative flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tier.highlighted
                  ? "border-accent/40 ring-1 ring-accent/20 hover:border-accent/60 hover:ring-accent/40 md:border-accent/40 md:ring-accent/20 lg:-translate-y-1 lg:scale-[1.03]"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground hover:bg-accent">
                  Most Popular
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.audience}
                </p>
              </div>

              <div className="mb-8">
                <span className="font-mono text-4xl font-semibold text-foreground">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-muted-foreground">{tier.period}</span>
                )}
                {"note" in tier && tier.note && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {tier.note}
                  </p>
                )}
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={openModal}
                className={`w-full ${
                  tier.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tier.price === "Custom"
                  ? "Get in Touch"
                  : "Book Your Strategy Session"}
              </Button>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
