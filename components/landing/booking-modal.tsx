"use client"

import { createContext, useContext, useState, useCallback } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays } from "lucide-react"

interface BookingModalContextType {
  openModal: () => void
}

const BookingModalContext = createContext<BookingModalContextType>({
  openModal: () => {},
})

export function useBookingModal() {
  return useContext(BookingModalContext)
}

export function BookingModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])

  return (
    <BookingModalContext.Provider value={{ openModal }}>
      {children}
      <BookingModal open={isOpen} onOpenChange={setIsOpen} />
    </BookingModalContext.Provider>
  )
}

function BookingModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border/30 sm:max-w-lg">
        <DialogHeader className="gap-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <CalendarDays className="h-6 w-6 text-accent" />
          </div>
          <DialogTitle className="text-center font-serif text-2xl text-foreground">
            Book Your Tax Strategy Session
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Get direct access to Marcus Chen. No gatekeepers, no runaround.
          </DialogDescription>
        </DialogHeader>

        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-name" className="text-sm text-foreground">
              Full Name
            </Label>
            <Input
              id="booking-name"
              placeholder="Your name"
              className="border-border/30 bg-background/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-email" className="text-sm text-foreground">
              Email
            </Label>
            <Input
              id="booking-email"
              type="email"
              placeholder="you@company.com"
              className="border-border/30 bg-background/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="booking-company"
              className="text-sm text-foreground"
            >
              Company
            </Label>
            <Input
              id="booking-company"
              placeholder="Your company name"
              className="border-border/30 bg-background/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="booking-message"
              className="text-sm text-foreground"
            >
              What would you like to discuss?
            </Label>
            <Textarea
              id="booking-message"
              placeholder="Briefly describe your tax situation or goals..."
              rows={3}
              className="border-border/30 bg-background/50 resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Request Session
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            {"We'll respond within 4 hours during business days."}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
