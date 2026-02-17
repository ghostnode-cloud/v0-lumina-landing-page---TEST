"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useBookingModal } from "./booking-modal"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  const { openModal } = useBookingModal()

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>

          {isMobile && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={openModal}
              className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
              aria-label="Book Your Tax Strategy Session"
            >
              <span className="text-xs font-semibold">Book</span>
            </motion.button>
          )}
        </>
      )}
    </AnimatePresence>
  )
}
