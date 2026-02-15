# LUMINA TAX & ADVISORY - IMPLEMENTATION KICKSTART

## Project Overview
High-conversion, dark-themed, full-width landing page for **Lumina Tax & Advisory** targeting tech-forward entrepreneurs. Features glassmorphism cards, bento box layouts, a sticky CTA header, booking modal, smooth scroll animations, and a separate contact page.

---

## 1. Design Token System

### Color Palette (Dark Theme)
| Token | Hex | HSL | Usage |
|---|---|---|---|
| **Background** | `#0F172A` | `222.2 47.4% 11.2%` | Page background (Deep Navy) |
| **Foreground** | `#F8FAFC` | `210 40% 98%` | Primary text (near-white) |
| **Card** | `rgba(30, 41, 59, 0.5)` | Semi-transparent | Glass card backgrounds |
| **Card Foreground** | `#F1F5F9` | `210 40% 96.1%` | Card text |
| **Muted** | `#1E293B` | `217.2 32.6% 17.5%` | Muted backgrounds, secondary surfaces |
| **Muted Foreground** | `#94A3B8` | `215 20.2% 65.1%` | Muted/secondary text (Slate) |
| **Accent** | `#3B82F6` | `217.2 91.2% 59.8%` | Action Blue - CTAs, links, highlights |
| **Accent Foreground** | `#FFFFFF` | `0 0% 100%` | Text on accent backgrounds |
| **Border** | `rgba(71, 85, 105, 0.3)` | Semi-transparent | Glass borders, subtle dividers |
| **Ring** | `#3B82F6` | Same as accent | Focus rings |
| **Primary** | `#F8FAFC` | Same as foreground | Primary UI elements |
| **Primary Foreground** | `#0F172A` | Same as background | Text on primary elements |
| **Secondary** | `#1E293B` | Same as muted | Secondary buttons/surfaces |
| **Secondary Foreground** | `#F1F5F9` | `210 40% 96.1%` | Text on secondary surfaces |
| **Destructive** | `#EF4444` | `0 84.2% 60.2%` | Error states |

### Typography
| Role | Font | Weight | Usage |
|---|---|---|---|
| **Headings** | Instrument Serif (Google Fonts) | 400 (Regular) | H1, H2, section titles - conveys trust & legacy |
| **Body** | Geist Sans (next/font/google) | 400, 500, 600 | Body text, UI elements - conveys clarity |
| **Mono** | Geist Mono | 400 | Numbers in trust strip, pricing |

### Glass Effect Spec
```
background: rgba(30, 41, 59, 0.4)
backdrop-filter: blur(16px)
border: 1px solid rgba(71, 85, 105, 0.3)
border-radius: 12px
```

---

## 2. File Architecture

### Files Created
```
app/
  layout.tsx                    (MODIFIED - fonts, metadata, dark class, smooth scroll)
  page.tsx                      (MODIFIED - compose landing page from section components)
  globals.css                   (MODIFIED - dark theme tokens, glass utilities, animations)
  contact/
    page.tsx                    (NEW - Contact Marcus page with SEO metadata)
    contact-content.tsx         (NEW - Client component for contact page)

components/
  landing/
    header.tsx                  (NEW - Sticky header with nav + CTA, mobile burger menu)
    hero-section.tsx            (NEW - Hero with headline, sub, CTA, illustration)
    trust-strip.tsx             (NEW - "By The Numbers" horizontal stats)
    meet-marcus.tsx             (NEW - Founder bio + placeholder headshot)
    lumina-method.tsx           (NEW - 3-col bento box with glass cards + icons)
    testimonials.tsx            (NEW - Embla carousel of 3 testimonials with glass cards)
    pricing-section.tsx         (NEW - 3-tier glass pricing cards)
    faq-section.tsx             (NEW - Accordion FAQ with glass styling)
    bento-footer.tsx            (NEW - Dark bento-box footer with final CTA)
    booking-modal.tsx           (NEW - CTA modal using shadcn Dialog + context provider)
    back-to-top.tsx             (NEW - Smooth scroll back-to-top button)
    scroll-animation.tsx        (NEW - Reusable scroll animation wrapper + stagger)
    mobile-nav.tsx              (NEW - Sheet-based mobile navigation)
```

### Existing shadcn/ui Components Leveraged
- `components/ui/button.tsx` - CTAs throughout
- `components/ui/card.tsx` - Pricing cards, bento boxes
- `components/ui/accordion.tsx` - FAQ section
- `components/ui/dialog.tsx` - Booking modal
- `components/ui/sheet.tsx` - Mobile navigation drawer
- `components/ui/avatar.tsx` - Testimonial avatars, Marcus headshot
- `components/ui/badge.tsx` - "Most Popular" tier badge
- `components/ui/input.tsx` - Form inputs
- `components/ui/label.tsx` - Form labels
- `components/ui/textarea.tsx` - Form text areas

### Dependencies Added
- `framer-motion` - Scroll animations, fade-in effects, stagger animations

---

## 3. CTA Placement Strategy (5 placements)

| # | Location | Style | Action |
|---|---|---|---|
| 1 | Hero Section | Large accent button with arrow | Opens booking modal |
| 2 | Meet Marcus Section | Ghost button with arrow | Opens booking modal |
| 3 | Pricing Section (per tier) | Accent/secondary button per card | Opens booking modal |
| 4 | Sticky Header | Compact accent button | Opens booking modal |
| 5 | Bento Footer | Medium accent button with arrow | Opens booking modal |

---

## 4. Animation Strategy

| Element | Animation | Trigger | Library |
|---|---|---|---|
| Section entry | Fade in + slide up (30px) | Scroll into view (once) | Framer Motion |
| Bento/Method cards | Staggered fade-in (100ms delay each) | Scroll into view | Framer Motion |
| Trust strip numbers | Fade in from bottom | Scroll into view | Framer Motion |
| Glass cards hover | translateY(-4px) + shadow boost | Hover | CSS transitions |
| Header background | Glass blur always visible, padding transition on scroll | Scroll position | CSS + JS |
| Back-to-top button | Fade in/out | Scroll > 400px | Framer Motion |
| Page load hero | Staggered fade + slide up | On mount (once) | Framer Motion |
| Smooth scrolling | Native smooth | Anchor clicks | CSS `scroll-behavior: smooth` |
| Accordion open/close | Height animation | Click | Radix (built-in) |
| Modal open/close | Fade + zoom | Trigger | Radix Dialog (built-in) |

---

## 5. Responsive Breakpoint Strategy

| Breakpoint | Behavior |
|---|---|
| **Mobile** (< 640px) | Single column, burger menu, hero centered, pricing stacked, trust strip 2x2 |
| **Tablet** (640-1024px) | 2-column grids, burger menu, Meet Marcus stacks |
| **Desktop** (> 1024px) | Full layout: 3-col bento, side-by-side Meet Marcus, horizontal trust strip, full nav |
| **Full-width** | All sections span viewport width, content constrained by `max-w-7xl mx-auto` |

---

## 6. SEO Strategy

- **Title**: "Lumina Tax & Advisory | Modern Tax Strategy for Tech Founders"
- **Meta description**: Targeted for search intent
- **OpenGraph tags**: Title, description, type (website), locale, siteName
- **Viewport**: Theme color #0F172A, device-width, initial-scale 1
- **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<footer>` landmarks
- **Section IDs**: #about, #method, #pricing, #faq for deep linking
- **Heading hierarchy**: Single H1 in hero, H2 for sections, H3 for sub-items
- **Alt text**: On all avatar images
- **`next/font`**: Optimized font loading (no layout shift)
- **Contact page**: Separate metadata with own title/description

---

## 7. Key Decisions Summary

| Decision | Choice | Rationale |
|---|---|---|
| Theme mode | Dark only (no toggle) | Brand identity is dark-first |
| Heading font | Instrument Serif | Trust & legacy feel, pairs well with Geist |
| Body font | Geist Sans | Already in project, clean & modern |
| CTA action | Modal (shadcn Dialog) | User specified: open modal |
| Contact link | Separate `/contact` page | User specified |
| Mobile nav | Sheet (side drawer) | Natural mobile pattern |
| Animations | Framer Motion | Industry standard for React scroll animations |
| Testimonials | Embla Carousel | Already installed in project |
| State management | Context only (BookingModal) | Prototype stage |
| Email capture | None on landing page | User specified |
| File size target | ~200 lines max per component | Maintainability |
| Layout | Full-width | User specified |

---

## 8. Placeholder Items (To Replace Later)

- Marcus Chen headshot (uses Avatar fallback "MC")
- Testimonial avatars (uses initials as fallback)
- LinkedIn URL (placeholder href)
- Booking form submission (preventDefault only)
- Contact form submission (preventDefault only)
- FAQ content (prototype examples)
- Pricing amounts (editable)
