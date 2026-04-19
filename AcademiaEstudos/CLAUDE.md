# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start Vite dev server
npm run build      # tsc type-check + Vite production build
npm run lint       # ESLint
npm run preview    # preview production build locally
```

No test suite is configured.

## Stack

React 19 + TypeScript + Vite. Routing via `react-router-dom` v7. Icons via FontAwesome (SVG core + `react-fontawesome`). No CSS framework — all styles are hand-written vanilla CSS.

## CSS architecture

All CSS is imported through a single entry point: `src/css/index.css`, in this order:

```
reset → variables → typography → layout → buttons → navbar → footer →
hero → ticker → timetable → methodology-card → exams-card →
courses-card → contact-form → location
```

**`variables.css`** is the single source of truth for all design tokens: colors, spacing (8pt grid: `--space-1` = 8px … `--space-12` = 96px), typography, radii, shadows, transitions, and the fixed header stack tokens (`--ticker-height: 40px`, `--navbar-height: 64px`).

**`layout.css`** owns structure-only rules: `.container`, `.section`, `.grid--*`, `.navbar` positioning, `.footer` grid, `.hero__inner`, utility classes, and all global responsive breakpoints. Component files own only visual (color, font, shadow) rules for their elements — never layout that belongs in `layout.css`.

**Split responsibility pattern**: some components have their structure in `layout.css` and their visual skin in their own component file (navbar, footer, hero).

**Fixed header stack**: ticker is `z-index: 101` at `top: 0`; navbar is `z-index: 100` at `top: var(--ticker-height)`. `body` has `padding-top: calc(var(--ticker-height) + var(--navbar-height))` to clear both. Change heights only in `variables.css`.

**Section comments**: every component CSS file uses `/* ====================== section name ====================== */` dividers.

## Data flow

All page data lives in `src/data/*.json`. `App.tsx` is the sole state owner — it loads JSON files via `useState` and passes data down as props to pages. Pages are purely presentational.

```
App (state) → Methods (methodologyCards, timetable)
            → Exams   (examsData)
            → Courses (coursesData)
            # Contacts, Home take no data props
```

`AnnouncementTicker` reads directly from `src/data/ticker.json` — it is not managed by App state.

## Types

All shared types live in `src/types/`. The main ones:
- `cards.ts` — `MethodologyCard`, `ExamCard`, `CourseCard`, `BadgeVariant`
- `ticker.ts` — `TickerItem`
- `timetable.ts` / `subject.ts` — timetable types

## Component conventions

- **Buttons**: `CTAButton` (variant: `filled | outline` → renders `<a>`), `NavbarButton` (renders `<button>` with `btn--primary`), `HamburguerButton` (icon swap via FontAwesome, no CSS animation).
- **Badges**: accept a `label` string; `ExamsBadge` also takes a `variant: "open" | "waiting" | "predicted"`.
- **Cards**: always receive a single typed object prop (e.g. `exam: ExamCard`).
- Page-level layout classes (`.contacts__grid`, `.contact-strip`) live in the component CSS file most related to that page — currently `location.css` holds contacts-page layout.

## Routes

| Path | Page |
|---|---|
| `/home` | Home |
| `/metodologia` | Methods |
| `/exames` | Exams |
| `/cursos` | Courses |
| `/contacto` | Contacts |
| `*` | _404 |
