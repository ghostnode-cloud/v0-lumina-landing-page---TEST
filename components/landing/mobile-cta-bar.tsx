"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { useBookingModal } from "./booking-modal"

export function MobileCtaBar() {
  const isMobile = useIsMobile()
  const { openModal } = useBookingModal()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(false)
      return
    }

    function handleScroll() {
      const threshold = window.innerHeight * 0.7
      setIsVisible(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  if (!isMobile) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-3 bottom-4 z-40 flex items-center justify-center lg:hidden"
        >
          <div className="glass-card flex w-full items-center justify-between gap-3 rounded-full px-4 py-3 shadow-lg">
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Ready to talk?
              </span>
              <span className="text-sm text-foreground">
                Book your tax strategy session.
              </span>
            </div>
            <Button
              size="sm"
              className="bg-accent px-4 text-xs font-medium text-accent-foreground hover:bg-accent/90"
              onClick={openModal}
            >
              Book a call
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

