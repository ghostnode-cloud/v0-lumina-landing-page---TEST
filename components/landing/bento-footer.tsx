"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ArrowRight } from "lucide-react"
import { useBookingModal } from "./booking-modal"
import { ScrollAnimation } from "./scroll-animation"

function handleFooterNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (!href.startsWith("#")) return

  e.preventDefault()
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function BentoFooter() {
  const { openModal } = useBookingModal()

  return (
    <footer className="border-t border-border/30 bg-[#0A0F1C]">
      <div className="section-container py-16 sm:py-20">
        <ScrollAnimation>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border/20 bg-border/10 md:grid-cols-2">
            {/* Box 1: Brand */}
            <div className="flex flex-col justify-between bg-[#0A0F1C] p-8 sm:p-10">
              <div>
                <span className="font-serif text-2xl tracking-wide text-foreground">
                  LUMINA
                </span>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Modern tax strategy for tech founders. One strategist, full
                  attention, real results.
                </p>
              </div>
              <p className="mt-8 text-xs text-muted-foreground/60">
                &copy; {new Date().getFullYear()} Lumina Tax & Advisory. All
                rights reserved.
              </p>
            </div>

            {/* Box 2: Final CTA (surface this earlier on mobile) */}
            <div className="order-2 flex flex-col items-start justify-center bg-[#0A0F1C] p-8 sm:order-2 sm:p-10 md:order-none">
              <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
                Ready to optimize?
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Stop overpaying the IRS. Start building a real tax strategy.
              </p>
              <Button
                onClick={openModal}
                className="group mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Book Your Tax Strategy Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Box 3: Contact */}
            <div className="order-3 flex flex-col gap-6 bg-[#0A0F1C] p-8 sm:order-3 sm:p-10 md:order-none">
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="/contact"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  marcus@luminatax.com
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Linkedin className="h-4 w-4 text-accent" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Box 4: Navigation */}
            <div className="order-4 flex flex-col gap-6 bg-[#0A0F1C] p-8 sm:order-4 sm:p-10 md:order-none">
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Navigate
              </h3>
              <nav
                className="flex flex-col gap-3"
                aria-label="Footer navigation"
              >
                {[
                  { label: "About Marcus", href: "#about" },
                  { label: "The Method", href: "#method" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleFooterNavClick(e, link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

           
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
