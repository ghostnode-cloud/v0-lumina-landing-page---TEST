import type { Metadata } from "next"
import { ContactPageContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact Marcus | Lumina Tax & Advisory",
  description:
    "Get in touch with Marcus Chen, CPA. Direct access to your tax strategist at Lumina Tax & Advisory.",
}

export default function ContactPage() {
  return <ContactPageContent />
}
