# ArrowTrade Color Update

## Task: Update colors to match Arrow Trade brand guidelines

**Brand Palette (from PDF):**
- Background: `#0F142D` (dark navy)
- Accent: `#70FFEB` (cyan/teal)
- White: `#FFFFFF`

---

## Todo

- [x] Update globals.css CSS variables with new brand colors
- [x] Search and update any hardcoded color values in components
- [x] Update CLAUDE.md image generation notes to reflect new brand colors

---

## Review

### Summary of Changes

Updated all color values across the codebase to match the Arrow Trade brand guidelines:

**Color Mappings:**
| Old | New | Purpose |
|-----|-----|---------|
| `#0d1421` | `#0F142D` | Background |
| `#00d48a` | `#70FFEB` | Accent (cyan/teal) |
| `#00ff9d` | `#9FFFF4` | Accent light |

### Files Modified

**CSS:**
- `src/app/globals.css` - Updated CSS variables and rgba values

**Components:**
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/PoolCard.tsx`
- `src/components/FaqAccordion.tsx`

**Pages:**
- `src/app/page.tsx`
- `src/app/login/page.tsx`
- `src/app/register/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/partnerships/page.tsx`
- `src/app/plans/page.tsx`
- `src/app/about-us/page.tsx`
- `src/app/how-it-works/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/terms-conditions/page.tsx`
- `src/app/risk-disclaimer/page.tsx`

**Config:**
- `CLAUDE.md` - Updated image generation color notes

### Notes
- Accent color changed from green (#00d48a) to cyan/teal (#70FFEB)
- Background updated to exact brand color (#0F142D)
- All hardcoded colors replaced with new brand palette
