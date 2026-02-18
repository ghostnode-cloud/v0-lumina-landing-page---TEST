"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useBookingModal } from "./booking-modal"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Method", href: "#method" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal } = useBookingModal()

  function handleNavClick(href: string) {
    setIsOpen(false)
    if (href.startsWith("#")) {
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 300)
    }
  }

  function handleBooking() {
    setIsOpen(false)
    setTimeout(() => openModal(), 300)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="glass-card border-border/30 w-72"
      >
        <SheetHeader>
          <SheetTitle className="font-sans text-xl font-black tracking-tighter text-foreground">
            LUMINA
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="mt-8 px-4">
          <Button
            onClick={handleBooking}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Book Your Tax Strategy Session
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
