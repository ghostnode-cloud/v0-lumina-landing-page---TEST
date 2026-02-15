"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Zap,
  Brain,
  Clock,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const REASONS = [
  {
    icon: UserCheck,
    title: "One Strategist, Full Attention",
    description:
      "Work directly with Marcus Chen -- no junior staff, no handoffs. You get a senior CPA with 15+ years of experience dedicated to your success.",
  },
  {
    icon: TrendingUp,
    title: "Average $47K Saved Annually",
    description:
      "Lumina clients save an average of $47,000 per year through proactive tax planning, entity optimization, and strategic timing of income and deductions.",
  },
  {
    icon: Brain,
    title: "Tech-Native Tax Expertise",
    description:
      "From R&D tax credits to equity compensation strategies, Marcus speaks the language of tech founders and understands the nuances of startup finance.",
  },
  {
    icon: Zap,
    title: "Proactive, Not Reactive",
    description:
      "Unlike traditional CPAs who file paperwork, Lumina builds forward-looking strategies that reduce your tax burden before the year ends.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-Ready at All Times",
    description:
      "Every strategy is documented, defensible, and built to withstand scrutiny. Sleep easy knowing your filings are bulletproof.",
  },
  {
    icon: Clock,
    title: "Transparent, Fixed Pricing",
    description:
      "No surprise invoices. Choose a tier that fits your stage, and know exactly what you pay -- every month, every year.",
  },
]

interface LearnMoreModalProps {
  trigger: React.ReactNode
}

export function LearnMoreModal({ trigger }: LearnMoreModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <span onClick={() => setOpen(true)} className="inline-flex">
        {trigger}
      </span>
      <DialogContent className="glass-card max-h-[85vh] overflow-y-auto border-border/30 bg-background/95 sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground sm:text-3xl">
            Why Lumina?
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
            Six reasons founders trust Lumina Tax & Advisory with their most
            important financial decisions.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence>
          {open && (
            <div className="mt-4 flex flex-col gap-4">
              {REASONS.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex gap-4 rounded-lg border border-border/20 bg-card/50 p-4 transition-colors hover:border-accent/30 hover:bg-card/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
