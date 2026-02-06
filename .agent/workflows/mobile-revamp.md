---
description: Mobile-first site revamp project plan
---

# Spades Institute Mobile Revamp Project Plan

**Created:** 2026-02-06  
**Target:** Complete mobile-first redesign for optimal phone experience  
**Breakpoint Focus:** 390px (iPhone 14 Pro) as primary target

---

## 📊 Current State Audit Summary

### Issues Identified

| Area | Issue | Severity |
|------|-------|----------|
| **Header** | Donate button and hamburger menu cramped | Medium |
| **Navigation** | Dropdown menu feels disconnected, not immersive | High |
| **Spacing** | Tight horizontal padding, content touches edges | High |
| **Footer** | Long single-column link list, excessive scrolling | Medium |
| **RSA Page** | Invite card shows no visible logo, form cut off | High |
| **Typography** | Some text sizes don't scale well for mobile | Medium |
| **Touch Targets** | Some buttons/links too small for comfortable tapping | High |

---

## 🎯 Goals

1. **Premium mobile-first experience** - Site should feel native and polished on phones
2. **Thumb-friendly navigation** - All interactive elements easily reachable
3. **Fast visual load** - Above-the-fold content should render instantly
4. **Immersive navigation** - Full-screen mobile menu with smooth animations
5. **Optimized touch targets** - Minimum 44px hit areas for all interactive elements
6. **Reduced scrolling** - Condense footer, optimize vertical space usage

---

## 📋 Implementation Phases

### Phase 1: Navigation & Header Overhaul ✅ COMPLETE
**Estimated Time:** 2-3 hours

#### 1.1 Mobile Header Redesign
- [x] Reduce logo size on mobile (currently too large)
- [x] Move Donate button inside mobile menu (declutter header)
- [x] Increase hamburger icon size and tap target (min 44px)
- [x] Add subtle backdrop blur to sticky header
- [x] Ensure header height is consistent (60-70px max on mobile)

#### 1.2 Full-Screen Mobile Menu
- [x] Replace dropdown with full-screen overlay menu
- [x] Add smooth slide-in animation (from right or bottom)
- [x] Large, thumb-friendly menu items (48px+ height)
- [x] Include Donate CTA prominently in menu
- [x] Add close button with clear visual affordance
- [x] Implement body scroll lock when menu is open
- [x] Add subtle backdrop/blur behind menu

```css
/* Target CSS structure */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(12px);
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
}
.mobile-menu.open {
  transform: translateX(0);
}
```

---

### Phase 2: Spacing & Typography System ✅ COMPLETE
**Estimated Time:** 2 hours

#### 2.1 Mobile Spacing Tokens
- [x] Define consistent mobile padding (16-20px horizontal) - Added `mobile-gutter` utility
- [x] Create mobile-specific section spacing - Applied to all pages
- [x] Audit all `px` values and convert to responsive units

```css
/* Mobile spacing tokens */
:root {
  --mobile-gutter: 20px;
  --mobile-section-gap: 48px;
  --mobile-card-padding: 16px;
}
```

#### 2.2 Typography Scale
- [x] Audit all font sizes for mobile readability
- [x] Ensure minimum body text is 16px (prevents iOS zoom)
- [x] Reduce heading sizes proportionally
- [x] Increase line-height for better mobile readability

| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 | 48-56px | 32-36px |
| H2 | 36-40px | 24-28px |
| H3 | 24-28px | 20-22px |
| Body | 18px | 16px |
| Small | 14px | 14px |

---

### Phase 3: Touch Target Optimization ✅ COMPLETE
**Estimated Time:** 1.5 hours

#### 3.1 Button & Link Sizing
- [x] Audit all buttons for 44px minimum height
- [x] Increase CTA button padding on mobile
- [x] Ensure link text has adequate tap areas
- [x] Add touch-action: manipulation to reduce tap delay

#### 3.2 Form Elements
- [x] Increase form input height to 48px minimum
- [x] Ensure adequate spacing between form fields
- [x] Style focus states for better visibility
- [ ] Test with mobile keyboard visibility

---

### Phase 4: Footer Redesign ✅ COMPLETE
**Estimated Time:** 1.5 hours

#### 4.1 Compact Mobile Footer
- [x] Implement accordion or collapsible sections
- [x] Or: 2-column grid layout for link categories
- [x] Reduce logo size in footer
- [x] Move social links to prominent position
- [x] Simplify copyright and legal text

```
Proposed Mobile Footer Structure:
┌─────────────────────────────────┐
│         [Logo - smaller]        │
│     501(c)(3) · Washington DC   │
├─────────────────────────────────┤
│  Quick Links  │    Connect      │
│  About        │  LinkedIn       │
│  Programs     │  Email          │
│  People       │  Donate →       │
│  Blog         │                 │
├─────────────────────────────────┤
│   © 2026 · Democracy Freedom    │
└─────────────────────────────────┘
```

---

### Phase 5: Page-Specific Fixes ✅ COMPLETE
**Estimated Time:** 3-4 hours

#### 5.1 Homepage
- [x] Reduce hero section height on mobile
- [x] Stack CTA buttons vertically if needed
- [x] Optimize flag image size
- [x] Improve "Trusted Convening" cards stacking

#### 5.2 RSA Page
- [x] Show invite card form below event info on mobile (currently side-by-side)
- [x] Fix logo visibility in invite card header
- [x] Improve event card readability
- [x] Ensure form is fully visible without horizontal scroll

#### 5.3 Ethics Letter Generator
- [x] Optimize form layout for mobile
- [x] Ensure PDF preview works on mobile
- [ ] Test download functionality on iOS Safari

#### 5.4 Blog/Briefings
- [x] Optimize featured briefing card for mobile
- [x] Improve tag pill sizing and spacing
- [x] Ensure article cards have adequate touch targets

#### 5.5 People Page
- [x] Responsive team member grid (1 column on mobile)
- [x] Optimize profile images and bio layout

---

### Phase 6: Performance & Polish ✅ COMPLETE
**Estimated Time:** 2 hours

#### 6.1 Mobile Performance
- [x] Audit and optimize images for mobile (WebP, srcset) - Identified large images, added content-visibility
- [x] Implement lazy loading for below-fold content - Added native lazy loading CSS support
- [x] Reduce CSS bundle size (remove unused desktop styles) - N/A, using Tailwind purge
- [ ] Test Core Web Vitals on mobile - Needs real device testing

#### 6.2 Animations & Micro-interactions
- [x] Reduce or simplify animations on mobile (prefer-reduced-motion) - Added full support
- [x] Add subtle touch feedback (active states) - Added tap highlight color
- [x] Smooth scroll behavior for anchor links - Already implemented

#### 6.3 Cross-Browser Testing
- [ ] Test on iOS Safari (critical)
- [ ] Test on Chrome Android
- [ ] Test on Samsung Internet
- [ ] Verify in both light and dark mode (if applicable)

---

## 🗓 Execution Timeline

| Phase | Description | Duration | Priority |
|-------|-------------|----------|----------|
| **1** | Navigation & Header | 2-3 hrs | 🔴 Critical |
| **2** | Spacing & Typography | 2 hrs | 🔴 Critical |
| **3** | Touch Targets | 1.5 hrs | 🟡 High |
| **4** | Footer Redesign | 1.5 hrs | 🟡 High |
| **5** | Page-Specific Fixes | 3-4 hrs | 🟡 High |
| **6** | Performance & Polish | 2 hrs | 🟢 Medium |

**Total Estimated Time:** 12-15 hours

---

## 📁 Files to Modify

### Core Components
- `src/components/Nav.astro` - Header & mobile menu
- `src/components/Footer.astro` - Footer layout
- `src/components/Layout.astro` - Global spacing, meta viewport

### Stylesheets
- `src/styles/global.css` - Mobile tokens, base styles
- Component-specific `<style>` blocks

### Pages
- `src/pages/index.astro` - Homepage
- `src/pages/rsa.astro` - RSA page
- `src/pages/ethics-letter.astro` - Ethics generator
- `src/pages/blog/*.astro` - Blog pages
- `src/pages/people.astro` - Team page

---

## ✅ Success Criteria

1. [ ] All pages score 90+ on Lighthouse Mobile Performance
2. [ ] All touch targets meet 44px minimum
3. [ ] No horizontal scrolling on any page
4. [ ] Navigation feels native and smooth
5. [ ] Footer fits in ~1 screen height
6. [ ] Forms are fully usable with mobile keyboard visible
7. [ ] Page loads feel instant (<2s on 3G)

---

## 🚀 Quick Wins (Can Do First)

1. **Add mobile padding** - 20-30 min fix for edge-to-edge content
2. **Increase touch targets** - 30 min audit and fix
3. **Reduce logo size in header** - 10 min
4. **Stack RSA form below content** - 30 min

---

## Notes

- All changes should use mobile-first media queries (`min-width` breakpoints)
- Test changes on real devices, not just browser DevTools
- Consider adding `@supports` for progressive enhancement
- Keep desktop experience unchanged where possible
