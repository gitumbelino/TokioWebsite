// ============================================================
// design-tasks.mjs
// All labels and tasks for the Research + Design phase
// Edit this file to add, remove, or update tasks
// ============================================================

export const LABELS = [
  { name: "research", color: "F4A261", description: "Research phase tasks" },
  { name: "design-phase", color: "4A90D9", description: "Design phase tasks" }
];

export const TASKS = [
  {
    title: "R-01 — Find reference websites",
    body: `## Description
Find 3–5 websites to use as visual and structural inspiration for the project. Focus on study academies, military prep schools, and e-learning platforms. Note what works on each one.

## Acceptance Criteria
- [ ] At least 3 websites collected
- [ ] For each: URL + 1–2 sentences on what to take from it
- [ ] At least one example of a hero section, one of a course/card layout

**Blocks:** R-03, R-04
**Estimate:** ~45 min`,
    labels: ["research", "design-phase"]
  },
  {
    title: "R-02 — Find UI component inspiration",
    body: `## Description
Find 2–3 examples of strong UI components relevant to the project: hero sections, course cards, navbars, CTAs. Sources can include Dribbble, Behance, Awwwards, or real sites.

## Acceptance Criteria
- [ ] At least 2 examples collected
- [ ] Each example has a URL or screenshot reference
- [ ] Note what component it demonstrates and why it works

**Blocks:** D-02, D-03
**Estimate:** ~30 min`,
    labels: ["research", "design-phase"]
  },
  {
    title: "R-03 — Explore color palette options",
    body: `## Description
Research dark blue + accent color combinations suitable for a professional study academy. Candidates: coral (#E8503A), gold (#C9A84C), or teal. Use Coolors, Realtime Colors, or reference sites from R-01.

## Acceptance Criteria
- [ ] At least 2 palette candidates documented (hex values)
- [ ] Each palette has a dark base, a light background, and 1 accent
- [ ] Notes on why each works or doesn't for this audience

**Depends on:** R-01
**Blocks:** R-05
**Estimate:** ~30 min`,
    labels: ["research", "design-phase"]
  },
  {
    title: "R-04 — Explore typography options",
    body: `## Description
Find 2–3 Google Fonts pairings: one display font for headings, one readable font for body text. The tone should feel professional and modern, not playful.

## Acceptance Criteria
- [ ] At least 2 pairings documented
- [ ] For each: font names + sample sentence rendered or described
- [ ] Note which pairing best fits the project tone

**Depends on:** R-01
**Blocks:** R-05
**Estimate:** ~20 min`,
    labels: ["research", "design-phase"]
  },
  {
    title: "R-05 — Pick final palette + fonts",
    body: `## Description
Decision task. Review R-03 and R-04 outputs and lock in the final color palette and font pairing. This closes the research phase and unblocks all design tasks.

## Acceptance Criteria
- [ ] Final palette confirmed (hex values for all roles: base, surface, accent, text)
- [ ] Final font pairing confirmed (heading font + body font, both from Google Fonts)
- [ ] Decision documented in a short note (1 paragraph max)

**Depends on:** R-03, R-04
**Blocks:** D-01, D-02, D-03, D-04, D-05, D-06, D-07
**Estimate:** ~20 min`,
    labels: ["research", "design-phase"]
  },
  {
    title: "D-01 — Document spacing & sizing system",
    body: `## Description
Define the base spacing unit, font scale, and responsive breakpoints that will be used consistently across all pages. This becomes the reference for all Figma work and later CSS variables.

## Acceptance Criteria
- [ ] Base unit defined (e.g. 8px)
- [ ] Font scale documented (h1 → body → caption sizes)
- [ ] Breakpoints defined (mobile, tablet, desktop)

**Depends on:** R-05
**Estimate:** ~20 min`,
    labels: ["design-phase"]
  },
  {
    title: "D-02 — Design shared components: Navbar + Footer",
    body: `## Description
Design the navbar and footer that will appear on all 5 pages. Keep them simple and consistent. Navbar: logo + nav links + CTA button. Footer: links + social placeholders + copyright.

## Acceptance Criteria
- [ ] Navbar designed (desktop + mobile collapsed state)
- [ ] Footer designed
- [ ] Both use the confirmed palette and fonts from R-05

**Depends on:** R-05, D-01
**Blocks:** D-03, D-04, D-05, D-06, D-07
**Estimate:** ~45 min`,
    labels: ["design-phase"]
  },
  {
    title: "D-03 — Wireframe: Home (index.html)",
    body: `## Description
Wireframe the home page layout. Sections: hero, highlights/stats, course preview cards, next exam date banner (dynamic JS element), CTA.

## Acceptance Criteria
- [ ] All sections identified and ordered
- [ ] Layout sketched in Figma (low-fidelity is fine)
- [ ] Dynamic exam date element visually indicated

**Depends on:** D-02
**Estimate:** ~40 min`,
    labels: ["design-phase"]
  },
  {
    title: "D-04 — Wireframe: Metodologia (metodologia.html)",
    body: `## Description
Wireframe the metodologia page. Sections: intro, schedule table (Sep–Jun), teaching methodology explanation.

## Acceptance Criteria
- [ ] Schedule table structure defined (rows, columns, visual style)
- [ ] Methodology section layout sketched
- [ ] Page fits within the shared layout system

**Depends on:** D-02
**Estimate:** ~30 min`,
    labels: ["design-phase"]
  },
  {
    title: "D-05 — Wireframe: Exames (exames.html)",
    body: `## Description
Wireframe the exames page. Sections: exam listing (cards or table), dates, requirements, study programme, CTA to contact page.

## Acceptance Criteria
- [ ] Exam card/row structure defined
- [ ] CTA placement decided
- [ ] Page fits within the shared layout system

**Depends on:** D-02
**Estimate:** ~30 min`,
    labels: ["design-phase"]
  },
  {
    title: "D-06 — Wireframe: Cursos (cursos.html)",
    body: `## Description
Wireframe the cursos page. Sections: course cards, content overview, career opportunities, CTA to contact page.

## Acceptance Criteria
- [ ] Course card layout defined
- [ ] Career section structure sketched
- [ ] CTA placement decided

**Depends on:** D-02
**Estimate:** ~30 min`,
    labels: ["design-phase"]
  },
  {
    title: "D-07 — Wireframe: Contacto (contacto.html)",
    body: `## Description
Wireframe the contact page. Sections: contact form (name, email, message, submit), location (embedded map or image), contact details.

## Acceptance Criteria
- [ ] Form fields defined
- [ ] Map/location section placement decided
- [ ] Page fits within the shared layout system

**Depends on:** D-02
**Estimate:** ~20 min`,
    labels: ["design-phase"]
  },
  {
    title: "D-08 — Review: visual consistency check",
    body: `## Description
Go through all 5 wireframes side by side and check for visual consistency. Spacing, font usage, component reuse, and tone should feel cohesive across pages.

## Acceptance Criteria
- [ ] All 5 pages reviewed together
- [ ] Any inconsistencies noted and corrected
- [ ] Design phase signed off — ready to move to development

**Depends on:** D-03, D-04, D-05, D-06, D-07
**Estimate:** ~30 min`,
    labels: ["design-phase"]
  }
];