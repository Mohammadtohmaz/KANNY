# Oddsi Clone - Frontend UI/UX Testing

## Project Overview
Create a frontend-only clone of oddsi.io using Next.js + React for UI/UX testing purposes. All data will be mocked - no real backend or trading functionality.

---

## Phase 1: Project Setup
- [x] Initialize Next.js project with TypeScript
- [x] Set up Tailwind CSS for styling
- [x] Create basic folder structure (components, pages, data, styles)

## Phase 2: Core Layout Components
- [x] Header/Navigation component (logo, nav links, login/register buttons)
- [x] Footer component (links, social icons, disclaimers)
- [x] Layout wrapper component

## Phase 3: Main Pages
- [x] Home page (hero, featured pools, key features, CTA sections)
- [x] About Us page
- [x] How It Works page (step-by-step explanation)
- [x] FAQ page (accordion-style Q&A)
- [x] Plans/Pricing page
- [x] Partnerships page

## Phase 4: Trading Pool Components
- [x] Pool card component (showing event, odds, deadline, pool size)
- [x] Pool list/grid component
- [x] Mock data file with sample trading pools

## Phase 5: Supporting Pages
- [x] Login page (UI only)
- [x] Register page (UI only)
- [x] Privacy Policy page
- [x] Terms & Conditions page
- [x] Risk Disclaimer page

## Phase 6: Polish & Testing
- [x] Responsive design check (mobile, tablet, desktop)
- [x] Navigation flow testing
- [x] Final styling adjustments

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## Notes
- All trading data is mocked (no real API calls)
- No actual authentication - just UI mockups
- Focus on visual fidelity and user flow for testing purposes

---

## Review

### Completed: January 2025

### Summary
Successfully built a frontend-only clone of oddsi.io with all 11 pages and core components.

### Files Created

**Configuration:**
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind configuration
- `postcss.config.js` - PostCSS with @tailwindcss/postcss
- `next.config.js` - Next.js configuration

**Components (src/components/):**
- `Header.tsx` - Navigation with mobile menu
- `Footer.tsx` - Footer with links and social icons
- `PoolCard.tsx` - Trading pool display card
- `FaqAccordion.tsx` - Expandable FAQ component

**Pages (src/app/):**
- `/` - Home page with hero, features, and pool grid
- `/about-us` - Company info, mission, vision, values
- `/how-it-works` - Step-by-step trading explanation
- `/faq` - FAQ with accordion
- `/plans` - Pricing tiers (Free, Pro, Elite)
- `/partnerships` - Affiliate program info
- `/login` - Login form UI
- `/register` - Registration form UI
- `/privacy-policy` - Privacy policy content
- `/terms-conditions` - Terms and conditions
- `/risk-disclaimer` - Risk warnings

**Mock Data (src/data/):**
- `pools.ts` - 6 sample trading pools
- `faq.ts` - 12 FAQ items

### Success Criteria Verification
- ✅ All 11 pages render without errors
- ✅ Navigation works between all pages
- ✅ Responsive design (mobile + desktop)
- ✅ Home page shows mock trading pools
- ✅ FAQ accordion expands/collapses
- ✅ Forms have proper input fields
- ✅ `npm run build` succeeds with no errors

### How to Run
```bash
npm run dev    # Development server at http://localhost:3000
npm run build  # Production build
npm run start  # Production server
```
