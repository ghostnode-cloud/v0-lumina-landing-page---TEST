"use client"

import { createContext, useContext, useState, useCallback } from "react"
import dynamic from "next/dynamic"

const BookingModal = dynamic(() => import("./booking-modal-internal"), {
  ssr: false,
})

interface BookingModalContextType {
  openModal: () => void
}

const BookingModalContext = createContext<BookingModalContextType>({
  openModal: () => { },
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
