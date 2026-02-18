"use client"

import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"
import { useBookingModal } from "./booking-modal"
import dynamic from "next/dynamic"

const LearnMoreModalInternal = dynamic(() => import("./learn-more-modal-internal"), {
  ssr: false,
})

interface LearnMoreModalProps {
  trigger: React.ReactNode
}

export function LearnMoreModal({ trigger }: LearnMoreModalProps) {
  const [open, setOpen] = useState(false)
  const { openModal } = useBookingModal()

  const handleBooking = () => {
    setOpen(false)
    setTimeout(() => openModal(), 200)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <span onClick={() => setOpen(true)} className="inline-flex cursor-pointer">
        {trigger}
      </span>
      {open && (
        <LearnMoreModalInternal
          onClose={() => setOpen(false)}
          onBooking={handleBooking}
        />
      )}
    </Dialog>
  )
}
