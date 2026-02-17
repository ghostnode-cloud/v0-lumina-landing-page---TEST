"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"
import { useBookingModal } from "./booking-modal"

const faqs = [
  {
    question: "How is Lumina different from a traditional accounting firm?",
    answer:
      "Traditional firms assign you to a team of juniors supervised by a partner you rarely see. At Lumina, you work directly with Marcus -- one strategist, full attention. We focus exclusively on tech founders, so every recommendation is tailored to the complexities of equity, rapid growth, and startup tax law.",
  },
  {
    question: "What types of clients does Lumina work with?",
    answer:
      "We specialize in tech founders at every stage -- from pre-seed startups to series-funded companies and bootstrapped businesses. If you're building a technology company and want proactive tax strategy (not just compliance), we're built for you.",
  },
  {
    question: "Do you handle day-to-day bookkeeping?",
    answer:
      "Our core focus is strategic tax planning and compliance, not transactional bookkeeping. However, we partner with vetted bookkeeping services and can recommend solutions that integrate seamlessly with our advisory work.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "It starts with a strategy session where Marcus reviews your current tax position, entity structure, and goals. From there, we build a custom roadmap. Most clients are fully onboarded within two weeks, with immediate quick wins identified in the first session.",
  },
  {
    question: "Can I switch plans or cancel at any time?",
    answer:
      "Absolutely. All plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or pause your engagement at any time. We earn your business every month.",
  },
]

export function FaqSection() {
  const { openModal } = useBookingModal()

  return (
    <section id="faq" className="border-y border-border/30 bg-muted/30 py-24 sm:py-32">
      <div className="section-container">
        <ScrollAnimation className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-accent">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Everything You Need to Know</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline hover:text-accent focus-visible:outline-none focus-visible:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimation>

        <ScrollAnimation className="mx-auto mt-12 max-w-3xl">
          <div className="glass-card flex flex-col items-center justify-between gap-4 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-base font-semibold text-foreground">
                Still have questions?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a quick call and get direct answers from Marcus.
              </p>
            </div>
            <Button
              onClick={openModal}
              className="group bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Book a call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
