"use client"

import { BookingModalProvider } from "@/components/landing/booking-modal"
import { Header } from "@/components/landing/header"
import { TrustStrip } from "@/components/landing/trust-strip"
import { MeetMarcus } from "@/components/landing/meet-marcus"
import { LuminaMethod } from "@/components/landing/lumina-method"
import { ScrollFrameSequence } from "@/components/landing/scroll-frame-sequence"
import { Testimonials } from "@/components/landing/testimonials"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection } from "@/components/landing/faq-section"
import { BentoFooter } from "@/components/landing/bento-footer"
import { BackToTop } from "@/components/landing/back-to-top"
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar"

export default function Page() {
  return (
    <BookingModalProvider>
      <Header />
      <main>
        <ScrollFrameSequence
          frameCount={240}
          baseUrl="/frames/frame_"
          extension=".jpg"
        />
        <TrustStrip />
        <MeetMarcus />
        <LuminaMethod />
        <Testimonials />
        <PricingSection />
        <FaqSection />
      </main>
      <BentoFooter />
      <div className="h-24 lg:hidden" aria-hidden="true" />
      <BackToTop />
      <MobileCtaBar />
    </BookingModalProvider>
  )
}
