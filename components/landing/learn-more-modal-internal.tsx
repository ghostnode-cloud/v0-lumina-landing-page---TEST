"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
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
    ArrowRight,
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
        title: "Average £47K Saved Annually",
        description:
            "Lumina clients save an average of £47,000 per year through proactive tax planning, entity optimization, and strategic timing of income and deductions.",
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

export default function LearnMoreModalInternal({
    onClose,
    onBooking
}: {
    onClose: () => void;
    onBooking: () => void;
}) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
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

            {/* Step indicator */}
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                    Reason {activeIndex + 1} of {REASONS.length}
                </span>
                <div className="flex gap-1">
                    {REASONS.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 rounded-full transition-all ${index === activeIndex
                                    ? "w-4 bg-accent"
                                    : "w-1.5 bg-muted-foreground/30"
                                }`}
                            aria-label={`Jump to reason ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={REASONS[activeIndex]?.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 flex flex-col gap-4"
                >
                    <div className="flex gap-4 rounded-lg border border-border/20 bg-card/50 p-4 transition-colors">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                            {(() => {
                                const Icon = REASONS[activeIndex].icon
                                return <Icon className="h-5 w-5 text-accent" />
                            })()}
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-foreground">
                                {REASONS[activeIndex].title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                {REASONS[activeIndex].description}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <button
                            type="button"
                            onClick={() =>
                                setActiveIndex(
                                    (prev) => (prev - 1 + REASONS.length) % REASONS.length,
                                )
                            }
                            className="rounded-full border border-border/30 px-3 py-1 hover:border-accent/50 hover:text-accent"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                setActiveIndex((prev) => (prev + 1) % REASONS.length)
                            }
                            className="rounded-full border border-border/30 px-3 py-1 hover:border-accent/50 hover:text-accent"
                        >
                            Next
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-6 flex flex-col items-center gap-2 border-t border-border/20 pt-6"
            >
                <Button
                    onClick={onBooking}
                    size="lg"
                    className="group w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                    Book Your Tax Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-xs text-muted-foreground">
                    Free 30-minute session -- no obligation.
                </p>
            </motion.div>
        </DialogContent>
    )
}
