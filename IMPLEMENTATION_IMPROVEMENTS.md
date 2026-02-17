# LUMINA LANDING PAGE — Frontend Implementation Improvements

Implementation plan for the frontend-only improvements brainstorm. Use the checklists to track progress as you go.

---

## 1. Visual Hierarchy & Hero

- [x] **1.1** Add subtle gradient mesh or soft aurora behind hero glow (consider using or adapting `aurora-background.tsx` on main page) for depth.
- [x] **1.2** Shorten or simplify hero subcopy on mobile for better above-the-fold scannability (e.g. one clear benefit in first line).
- [x] **1.3** Add optional “As seen in” or “Trusted by” line above or near trust strip (placeholder logos or text) to bridge social proof before stats.

---

## 2. Navigation & Wayfinding

- [x] **2.1** Add active section state to main nav (underline or color change for About / Method / Pricing / FAQ) based on scroll position.
- [x] **2.2** Apply same smooth-scroll-on-click behavior to footer in-page links (`#about`, `#method`, etc.) as used in header.
- [x] **2.3** (Optional) Add floating CTA bar on mobile (e.g. bottom bar “Book a call”) after user scrolls past hero, without removing back-to-top.

---

## 3. Sections & Content

- [x] **3.1** Meet Marcus: Add small credential line or badge near name (e.g. “CPA”, “15+ years”, “Former Big 4”) for trust.
- [x] **3.2** Lumina Method: Make one card slightly larger or “featured” (e.g. Founder-Focused Optimization) to create a focal point.
- [x] **3.3** Testimonials: Add “1 / 3” (or current/total) counter to dot indicators for clarity.
- [x] **3.4** Testimonials: (Optional) Add one-time “Swipe for more” hint on mobile on first view.
- [x] **3.5** Pricing: Add optional placeholder line for Enterprise tier (e.g. “Typical engagement: $X–Y/mo” or “Starting at…”) to reduce friction.
- [x] **3.6** FAQ: Add “Still have questions? Book a call” (or similar) CTA link/button at bottom of FAQ section that opens booking modal.

---

## 4. Modals & Forms (UI Only)

- [x] **4.1** Booking modal: Add optional “What’s your biggest tax concern?” (dropdown or chips: e.g. Equity comp, R&D credits, Entity structure); client-side state only.
- [x] **4.2** Learn More modal: Consider tabs or “1 of 6” step indicator so the six reasons feel more guided.
- [x] **4.3** Contact page: Add client-side success state after submit (e.g. “Thanks, we’ll be in touch within 4 hours”) with no backend required.

---

## 5. Motion & Micro-Interactions

- [x] **5.1** Vary scroll animation stagger per section (e.g. trust strip from center outward, pricing left-to-right) so the page doesn’t feel repetitive.
- [x] **5.2** (Optional) Add “Book a call” FAB on mobile (e.g. bottom-left) alongside or instead of only back-to-top when appropriate.
- [x] **5.3** Add subtle hover enhancement on method/pricing cards (e.g. accent gradient border or icon animation) while keeping existing glass-card-hover.
- [x] **5.4** Audit and ensure visible focus states (keyboard) on all interactive elements: nav links, CTAs, accordion triggers, carousel buttons, modal inputs.

---

## 6. Responsive & Layout

- [x] **6.1** Trust strip: Verify vertical rhythm and tap target size on mobile 2×2 grid.
- [x] **6.2** Pricing: Check Scaleup card (`lg:scale-105`) at 768–1024px for cramped or cut-off layout; adjust if needed.
- [x] **6.3** Footer bento: On very narrow viewports, consider stack order so CTA cell appears earlier (e.g. second or third) for better visibility.

---

## 7. Copy & Consistency

- [x] **7.1** Standardize CTA wording: choose one primary phrase (“Book Your Tax Strategy Session” vs “Book Your Strategy Session”) and apply consistently (e.g. longer for hero/footer, shorter for header).
- [x] **7.2** Reuse or echo “Direct access to Marcus Chen — no gatekeepers” (or variant) in booking modal description.
- [x] **7.3** When replacing placeholder FAQ/pricing content, keep tone and approximate length consistent to avoid layout/rhythm issues.

---

## 8. Performance & Perceived Speed

- [ ] **8.1** Verify Instrument Serif + Geist have appropriate fallback metrics to prevent layout shift (e.g. hero text).
- [ ] **8.2** Use Next.js `Image` with correct `sizes` for Marcus headshot and testimonial avatars (and any future images).
- [ ] **8.3** Keep booking and Learn More modal content light; if adding images or long copy later, consider lazy-rendering so first open stays fast.

---

## 9. Accessibility

- [ ] **9.1** Testimonials carousel: Add `aria-live` (or equivalent) so screen readers announce when the quote/slide changes.
- [ ] **9.2** FAQ accordion: Verify focus movement on open/close and that heading hierarchy (e.g. section H2, triggers) is correct.
- [ ] **9.3** Run contrast check on muted text (`text-muted-foreground`) and other gray-on-dark combinations; fix to meet WCAG AA if needed.

---

## 10. Small Wins

- [ ] **10.1** Add or confirm favicon (e.g. “L” or Lumina mark) so the tab is recognizable.
- [ ] **10.2** If adding route transitions or heavier sections later, define a minimal skeleton or brand-colored loading state.
- [ ] **10.3** Confirm email/brand consistency: “marcus@luminatax.com” vs “Lumina Tax” naming (no unintended “Luminatax” typo in user-facing copy).

---

## Progress Summary

| Category                      | Done | Total |
|------------------------------|------|-------|
| 1. Visual Hierarchy & Hero    | 3    | 3     |
| 2. Navigation & Wayfinding    | 3    | 3     |
| 3. Sections & Content        | 6    | 6     |
| 4. Modals & Forms            | 3    | 3     |
| 5. Motion & Micro-Interactions | 4  | 4     |
| 6. Responsive & Layout       | 3    | 3     |
| 7. Copy & Consistency        | 3    | 3     |
| 8. Performance               | 0    | 3     |
| 9. Accessibility             | 0    | 3     |
| 10. Small Wins               | 0    | 3     |
| **Total**                    | **18**| **34**|

*Update the “Done” counts as you complete items. Optional items still count in Total if you choose to implement them.*
