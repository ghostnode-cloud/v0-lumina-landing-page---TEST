"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useBookingModal } from "./booking-modal"
import { MobileNav } from "./mobile-nav"
import { ScrollProgress } from "./scroll-progress"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Method", href: "#method" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const { openModal } = useBookingModal()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["about", "method", "pricing", "faq"]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))

        if (visibleSections[0]?.target?.id) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed left-1/2 top-4 z-50 w-full -translate-x-1/2 px-4 transition-all duration-300 md:top-6 lg:max-w-4xl">
      <header
        className={`relative flex items-center justify-between overflow-hidden rounded-full border border-black/5 bg-background/60 px-6 py-2.5 backdrop-blur-xl transition-all duration-300 md:px-8 ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.08)]" : ""
          }`}
      >
        {/* Animated background accent */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -left-[10%] -top-[50%] h-[200%] w-[40%] bg-accent/20 blur-[60px]" />
          <div className="absolute -right-[10%] -bottom-[50%] h-[200%] w-[40%] bg-accent/10 blur-[60px]" />
        </div>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="relative z-10 font-sans text-lg font-black tracking-tighter text-foreground transition-colors hover:text-accent"
        >
          LUMINA
        </a>

        <nav
          className="relative z-10 hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none ${isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 z-[-1] rounded-full bg-accent/10 ring-1 ring-accent/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-4">
          <Button
            onClick={openModal}
            size="sm"
            className="hidden h-9 rounded-full bg-accent px-5 text-xs font-bold uppercase tracking-wider text-accent-foreground hover:bg-accent/90 sm:inline-flex"
          >
            Start Strategy
          </Button>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
        <ScrollProgress />
      </header>
    </div>
  )
}
