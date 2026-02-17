"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useBookingModal } from "./booking-modal"
import { MobileNav } from "./mobile-nav"

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
    <header
      className={`glass-header fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg shadow-background/50" : "py-4"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="font-serif text-xl tracking-wide text-foreground transition-colors hover:text-accent"
        >
          LUMINA
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-foreground underline underline-offset-8 decoration-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={
                activeSection === link.href.replace("#", "") ? "page" : undefined
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={openModal}
            size="sm"
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex"
          >
            Book Your Strategy Session
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
