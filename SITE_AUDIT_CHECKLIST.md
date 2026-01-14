# Spades Institute Site Audit Checklist

## 1. Navigation & Link Integrity
- [ ] All navigation links work correctly (Home, About, Engage, People, Briefings, Partner)
- [ ] Active page highlighting works on all pages
- [ ] Breadcrumbs display correctly on all pages
- [ ] Footer links are functional
- [ ] External links (LinkedIn, GiveButter, Operation MOS) open correctly
- [ ] Mobile menu opens/closes properly
- [ ] Skip to main content link works
- [ ] Back to top button appears and functions

## 2. Images & Assets
- [ ] All author photos display (Andrew Shea, Lili Davoudian, Vishal Amin, Dan Goodwin)
- [ ] Featured briefing image loads correctly
- [ ] Logo displays correctly in nav and footer
- [ ] Flag image displays on home page
- [ ] All images have proper alt text
- [ ] Images are optimized (lazy loading, proper dimensions)
- [ ] No broken image paths (check console for 404s)
- [ ] People page photos have unified overlay treatment

## 3. Forms & Functionality
- [ ] Contact form submits successfully
- [ ] Contact form validation works (required fields, email format)
- [ ] Contact form shows success/error messages
- [ ] Character counter works on message field
- [ ] Ethics letter generator opens in new window
- [ ] Ethics letter generator validates required fields
- [ ] Ethics letter displays Spades logo correctly
- [ ] Subscribe form validation works (if implemented)
- [ ] All buttons are clickable and have hover states

## 4. Page-Specific Content
- [ ] Home page hero displays correctly
- [ ] Home page value propositions are visible
- [ ] About page sections render properly
- [ ] Engagements page shows all 3 programs (Speaker Series, Fellowship, Veteran Mentoring)
- [ ] Engagements page has no "Output" lines
- [ ] Engagements page has no "Featured Initiative" section
- [ ] People page shows Founding Partners and Advisors sections
- [ ] People page cards have hover effects
- [ ] Briefings page shows featured post correctly
- [ ] Briefings page topic filters work
- [ ] Blog post pages render markdown correctly
- [ ] Partner page content is complete

## 5. SEO & Metadata
- [ ] All pages have unique, descriptive titles
- [ ] All pages have meta descriptions
- [ ] Canonical URLs are set on all pages
- [ ] Open Graph tags are present
- [ ] Twitter card tags are present
- [ ] Structured data (JSON-LD) is valid
- [ ] Sitemap.xml is accessible and complete
- [ ] Robots.txt is configured correctly
- [ ] All pages have proper heading hierarchy (H1, H2, H3)

## 6. Responsive Design
- [ ] Site works on mobile (320px+)
- [ ] Site works on tablet (768px+)
- [ ] Site works on desktop (1024px+)
- [ ] Navigation adapts to mobile menu
- [ ] Images scale properly on all screen sizes
- [ ] Text is readable on all devices
- [ ] Cards/grids reflow correctly
- [ ] Forms are usable on mobile
- [ ] Touch targets are adequate size (44x44px minimum)

## 7. Performance
- [ ] Page load times are acceptable (<3s)
- [ ] Images are lazy loaded
- [ ] CSS is minified
- [ ] JavaScript is optimized
- [ ] No console errors
- [ ] No 404 errors in network tab
- [ ] Fonts load efficiently
- [ ] Animations are smooth (60fps)

## 8. Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Focus indicators are visible
- [ ] ARIA labels are used where needed
- [ ] Skip links work
- [ ] Screen reader friendly (test with NVDA/JAWS)
- [ ] No keyboard traps

## 9. Visual Consistency
- [ ] Logo size is consistent (nav and footer)
- [ ] Navigation banner color matches logo background
- [ ] Color scheme is consistent across pages
- [ ] Typography is consistent (fonts, sizes, weights)
- [ ] Spacing is consistent (padding, margins)
- [ ] Button styles are consistent
- [ ] Card styles are consistent
- [ ] Hover states are consistent

## 10. Content Accuracy
- [ ] All author names match between blog posts and people.json
- [ ] Dates are formatted consistently
- [ ] "Quarterly" removed from "Speaker Series" everywhere
- [ ] No placeholder text remains
- [ ] All taglines are accurate
- [ ] Contact information is correct
- [ ] Social media links are correct
- [ ] EIN and nonprofit info is accurate

## 11. Interactive Elements
- [ ] Hover effects work on cards
- [ ] Hover effects work on buttons
- [ ] LinkedIn profile pills appear on hover (desktop)
- [ ] LinkedIn links work in mobile footer
- [ ] Filter chips change state correctly
- [ ] Accordion/FAQ sections expand/collapse
- [ ] Scroll animations trigger properly
- [ ] Reading progress bar works (if on blog posts)

## 12. Error Handling
- [ ] 404 page exists (if applicable)
- [ ] Form errors display clearly
- [ ] API errors are handled gracefully
- [ ] Missing images show placeholder
- [ ] Missing author photos don't break layout
- [ ] JavaScript errors don't break page

## 13. Cross-Browser Testing
- [ ] Works in Chrome/Edge
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works on iOS Safari
- [ ] Works on Android Chrome
- [ ] No browser-specific bugs

## 14. User Flows
- [ ] User can navigate from home to any page
- [ ] User can find contact information easily
- [ ] User can subscribe to newsletter (if implemented)
- [ ] User can read a blog post end-to-end
- [ ] User can view all team members
- [ ] User can understand engagement programs
- [ ] User can generate ethics letter
- [ ] User can donate via GiveButter link

## 15. Final Polish
- [ ] No console errors or warnings
- [ ] No broken links (use link checker)
- [ ] All external links have rel="noreferrer" or rel="noopener"
- [ ] Favicon displays correctly
- [ ] Theme color is set correctly
- [ ] View transitions work smoothly (if enabled)
- [ ] Print styles are acceptable (if needed)
- [ ] Site works with JavaScript disabled (graceful degradation)

---

## Quick Test Commands

```bash
# Check for broken links (if linkchecker is installed)
linkchecker https://heyitsmrshea.github.io/SpadesInstitute/

# Build and check for errors
npm run build

# Check for linting errors
npm run lint

# Test responsive design
# Use browser dev tools to test at: 320px, 768px, 1024px, 1440px
```

## Priority Issues to Fix First
1. Any 404 errors
2. Broken navigation links
3. Missing images
4. Form submission failures
5. Console errors
6. Mobile usability issues
7. Accessibility violations
