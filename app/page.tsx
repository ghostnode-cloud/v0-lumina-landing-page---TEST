"use client"

import { BookingModalProvider } from "@/components/landing/booking-modal"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { TrustStrip } from "@/components/landing/trust-strip"
import { MeetMarcus } from "@/components/landing/meet-marcus"
import { LuminaMethod } from "@/components/landing/lumina-method"
import { Testimonials } from "@/components/landing/testimonials"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection } from "@/components/landing/faq-section"
import { BentoFooter } from "@/components/landing/bento-footer"
import { BackToTop } from "@/components/landing/back-to-top"

export default function Page() {
  return (
    <BookingModalProvider>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <MeetMarcus />
        <LuminaMethod />
        <Testimonials />
        <PricingSection />
        <FaqSection />
      </main>
      <BentoFooter />
      <BackToTop />
    </BookingModalProvider>
  )
}
