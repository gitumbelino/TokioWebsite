// ============================================================
// dev-tasks.mjs
// All labels and tasks for the Development phase
// Edit this file to add, remove, or update tasks
// ============================================================

export const LABELS = [
  { name: "dev",         color: "2DA44E", description: "Development phase tasks" },
  { name: "css",         color: "6F42C1", description: "CSS related tasks"       },
  { name: "javascript",  color: "E3B341", description: "JavaScript tasks"        },
  { name: "html",        color: "E8503A", description: "HTML structure tasks"    },
  { name: "polish",      color: "A5ACBA", description: "Polish and review tasks" }
];

export const TASKS = [
  // ----------------------------------------------------------
  // CSS FOUNDATION
  // ----------------------------------------------------------
  {
    title: "DEV-01 — Project folder structure setup",
    body: `## Description
Create the full folder and file structure for the project. All files should be empty or contain a placeholder comment — no content yet. This is the foundation everything else builds on.

## Acceptance Criteria
- [ ] Folders created: \`css/\`, \`js/\`, \`img/\`, \`pages/\`
- [ ] Files created: \`index.html\`, \`pages/metodologia.html\`, \`pages/exames.html\`, \`pages/cursos.html\`, \`pages/contacto.html\`
- [ ] CSS files created: \`css/reset.css\`, \`css/variables.css\`, \`css/typography.css\`, \`css/layout.css\`, \`css/components.css\`
- [ ] JS files created: \`js/main.js\`
- [ ] All HTML files have a valid boilerplate (doctype, meta, linked CSS files)

**Blocks:** DEV-02, DEV-03, DEV-04, DEV-05
**Estimate:** ~20 min`,
    labels: ["dev", "html"]
  },
  {
    title: "DEV-02 — CSS reset",
    body: `## Description
Implement a modern CSS reset in \`css/reset.css\`. Use the Josh Comeau reset as the base — it removes browser defaults cleanly without being too aggressive.

## Acceptance Criteria
- [ ] Reset applied in \`css/reset.css\`
- [ ] File is imported first in all HTML pages (before any other CSS)
- [ ] Box-sizing, margin, padding, font inheritance all handled

**Depends on:** DEV-01
**Blocks:** DEV-03, DEV-04, DEV-05
**Estimate:** ~15 min`,
    labels: ["dev", "css"]
  },
  {
    title: "DEV-03 — CSS variables (variables.css)",
    body: `## Description
Define all design tokens as CSS custom properties in \`css/variables.css\`. This is the single source of truth for colors, typography, and spacing across the entire project.

## Acceptance Criteria
- [ ] Color tokens defined (base, surface, accent, text roles)
- [ ] Typography tokens defined (font families, font sizes for full scale)
- [ ] Spacing tokens defined (based on 8pt grid)
- [ ] All variables scoped to \`:root\`
- [ ] File is well commented with sections for each token group

**Depends on:** DEV-01, DEV-02
**Blocks:** DEV-04, DEV-05, DEV-06, DEV-07
**Estimate:** ~30 min`,
    labels: ["dev", "css"]
  },
  {
    title: "DEV-04 — Typography styles (typography.css)",
    body: `## Description
Set up all typographic styles in \`css/typography.css\`. Import Google Fonts and apply the type scale using the variables defined in DEV-03.

## Acceptance Criteria
- [ ] Google Fonts imported (heading font + body font)
- [ ] Base font size and line-height set on \`body\`
- [ ] Heading styles defined (h1 → h6) using \`var()\` tokens
- [ ] Paragraph, caption, and small text styles defined
- [ ] Font weights consistent with the type scale

**Depends on:** DEV-03
**Estimate:** ~25 min`,
    labels: ["dev", "css"]
  },
  {
    title: "DEV-05 — Layout utilities (layout.css)",
    body: `## Description
Create reusable layout classes in \`css/layout.css\`. These are utility classes used across all pages for consistent containers, grids, and flex patterns.

## Acceptance Criteria
- [ ] \`.container\` class defined (max-width + horizontal padding)
- [ ] Basic flex utilities defined (\`.flex\`, \`.flex-center\`, \`.flex-between\`)
- [ ] Basic grid utility defined (\`.grid-2\`, \`.grid-3\` at minimum)
- [ ] Section spacing class defined (\`.section\`)
- [ ] All values use \`var()\` tokens from variables.css

**Depends on:** DEV-03
**Blocks:** DEV-06, DEV-07, DEV-08, DEV-09, DEV-10, DEV-11, DEV-12
**Estimate:** ~25 min`,
    labels: ["dev", "css"]
  },

  // ----------------------------------------------------------
  // SHARED COMPONENTS
  // ----------------------------------------------------------
  {
    title: "DEV-06 — Navbar (HTML + CSS + mobile toggle)",
    body: `## Description
Build the shared navbar component. It will be copied into all 5 pages. Includes logo, nav links, CTA button, and a hamburger menu for mobile.

## Acceptance Criteria
- [ ] Desktop layout: logo left, links center or right, CTA button
- [ ] Mobile layout: hamburger icon toggles nav links (JS required)
- [ ] Active page link is visually highlighted
- [ ] Styles use \`var()\` tokens throughout
- [ ] JS toggle is in \`js/main.js\` and works on all pages

**Depends on:** DEV-03, DEV-05
**Blocks:** DEV-08, DEV-09, DEV-10, DEV-11, DEV-12
**Estimate:** ~60 min`,
    labels: ["dev", "css", "html", "javascript"]
  },
  {
    title: "DEV-07 — Footer (HTML + CSS)",
    body: `## Description
Build the shared footer component. It will be copied into all 5 pages. Includes nav links, social media placeholders, and copyright notice.

## Acceptance Criteria
- [ ] Footer sections: nav links, social icons/placeholders, copyright
- [ ] Layout is consistent with the design
- [ ] Styles use \`var()\` tokens throughout
- [ ] Responsive — stacks cleanly on mobile

**Depends on:** DEV-03, DEV-05
**Blocks:** DEV-08, DEV-09, DEV-10, DEV-11, DEV-12
**Estimate:** ~40 min`,
    labels: ["dev", "css", "html"]
  },

  // ----------------------------------------------------------
  // PAGES
  // ----------------------------------------------------------
  {
    title: "DEV-08 — Home (index.html)",
    body: `## Description
Build the home page. Sections: hero, highlights/stats, course preview cards, next exam date banner, CTA. The dynamic exam date banner requires JavaScript (see DEV-13).

## Acceptance Criteria
- [ ] All sections built and styled
- [ ] Navbar and footer included
- [ ] Course preview cards are reusable (same markup pattern as Cursos page)
- [ ] Exam date banner exists and has a placeholder — JS wired in DEV-13
- [ ] Page is visually consistent with the design system

**Depends on:** DEV-06, DEV-07
**Estimate:** ~90 min`,
    labels: ["dev", "html", "css"]
  },
  {
    title: "DEV-09 — Metodologia (metodologia.html) + schedule table",
    body: `## Description
Build the metodologia page. Sections: intro, academic schedule table (Sep–Jun), teaching methodology explanation.

## Acceptance Criteria
- [ ] Schedule table built with semantic HTML (\`<table>\`)
- [ ] Table covers Sep–Jun with correct columns (day, time, subject or similar)
- [ ] Methodology section explains the academy's approach (Lorem Ipsum acceptable for body)
- [ ] Navbar and footer included
- [ ] Page is visually consistent with the design system

**Depends on:** DEV-06, DEV-07
**Estimate:** ~60 min`,
    labels: ["dev", "html", "css"]
  },
  {
    title: "DEV-10 — Exames (exames.html)",
    body: `## Description
Build the exames page. Sections: exam listing (cards or table), dates, requirements, study programme, CTA linking to the contact page.

## Acceptance Criteria
- [ ] At least 3 exam entries with name, date, requirements, phases
- [ ] Study programme section included
- [ ] CTA button links to \`contacto.html\`
- [ ] Navbar and footer included
- [ ] Page is visually consistent with the design system

**Depends on:** DEV-06, DEV-07
**Estimate:** ~60 min`,
    labels: ["dev", "html", "css"]
  },
  {
    title: "DEV-11 — Cursos (cursos.html)",
    body: `## Description
Build the cursos page. Sections: course cards, content overview per course, career opportunities, CTA linking to the contact page.

## Acceptance Criteria
- [ ] At least 3 course cards with title, description, and key topics
- [ ] Career opportunities section included
- [ ] CTA button links to \`contacto.html\`
- [ ] Navbar and footer included
- [ ] Page is visually consistent with the design system

**Depends on:** DEV-06, DEV-07
**Estimate:** ~60 min`,
    labels: ["dev", "html", "css"]
  },
  {
    title: "DEV-12 — Contacto (contacto.html) + form + map",
    body: `## Description
Build the contact page. Sections: contact form, location map, contact details. Form validation is handled in DEV-14.

## Acceptance Criteria
- [ ] Form fields: name, email, subject, message, submit button
- [ ] Map section included (embedded Google Map iframe or static image)
- [ ] Contact details included (address, phone, email)
- [ ] Navbar and footer included
- [ ] Page is visually consistent with the design system

**Depends on:** DEV-06, DEV-07
**Blocks:** DEV-14
**Estimate:** ~50 min`,
    labels: ["dev", "html", "css"]
  },

  // ----------------------------------------------------------
  // JAVASCRIPT
  // ----------------------------------------------------------
  {
    title: "DEV-13 — Dynamic next exam date (Home)",
    body: `## Description
Implement the JavaScript feature that displays the next upcoming exam date on the home page. This is a required JS feature per the project brief.

## Acceptance Criteria
- [ ] Exam dates defined as a data array in \`js/main.js\`
- [ ] Script calculates which date is next relative to today
- [ ] Message displayed dynamically in the banner on \`index.html\`
- [ ] If no upcoming dates, shows a fallback message
- [ ] Code is commented

**Depends on:** DEV-08
**Estimate:** ~30 min`,
    labels: ["dev", "javascript"]
  },
  {
    title: "DEV-14 — Contact form validation",
    body: `## Description
Add client-side validation to the contact form on \`contacto.html\`. No backend — just validate fields before submission and show inline error messages.

## Acceptance Criteria
- [ ] All fields validated: name (required), email (format), message (required)
- [ ] Inline error messages shown per field
- [ ] Submit button disabled or blocked until form is valid
- [ ] On valid submit: show a success message (no real sending needed)
- [ ] Code is commented

**Depends on:** DEV-12
**Estimate:** ~40 min`,
    labels: ["dev", "javascript"]
  },

  // ----------------------------------------------------------
  // POLISH
  // ----------------------------------------------------------
  {
    title: "DEV-15 — Responsiveness pass across all pages",
    body: `## Description
Go through all 5 pages and verify they work correctly on mobile and desktop. Fix any layout breaks, overflow issues, or font size problems.

## Acceptance Criteria
- [ ] All pages tested at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] No horizontal scroll on any page
- [ ] Navbar mobile toggle works on all pages
- [ ] Tables and grids adapt correctly at smaller breakpoints
- [ ] Images scale correctly

**Depends on:** DEV-08, DEV-09, DEV-10, DEV-11, DEV-12
**Blocks:** DEV-16
**Estimate:** ~60 min`,
    labels: ["dev", "polish"]
  },
  {
    title: "DEV-16 — Code cleanup + comments",
    body: `## Description
Final pass on all files. Add missing comments, remove unused code, check naming consistency, and ensure the file structure is clean for delivery.

## Acceptance Criteria
- [ ] All HTML files have section comments
- [ ] All CSS files have section comments and variable usage is consistent
- [ ] All JS files are commented (what each function does)
- [ ] No unused classes, variables, or dead code
- [ ] File and class naming is consistent across all pages

**Depends on:** DEV-15
**Estimate:** ~45 min`,
    labels: ["dev", "polish"]
  }
];