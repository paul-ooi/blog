# Redesign Implementation Plan — Paul Ooi Blog

## Context

The existing Eleventy blog at `/Users/dvrs/dev/blog` is being redesigned based on the template export at `/Users/dvrs/Downloads/export`. The redesign introduces a page-owned color system, light/dark theme toggle, two-column sidebar layout, animated SVG nav icons, and a componentized SCSS architecture. The existing pages (`index`, `blog`, `work`, `resume`, `contact`, `sitemap`) are kept but updated to match the new design system.

**Key decisions:**
- **Experience page** shows Career + Education + Skills (no volunteer/awards). Projects from `resume.js` merge into `projects.json` for the projects page.
- **Colophon page** is pure "how this site is built" — no contact/social info (social links live in sidebar).
- **No URL redirects** — hosted on GitHub Pages (no server-side 301 support). Old URLs will naturally 404.
- **Projects data** merges both `projects.json` (6 entries) and `resume.js` projects (4 entries) into a single `projects.json` (up to 10 entries), keeping the template small via the `projectCard` macro.

**Page mapping (old → new concept):**
| Existing file | Current URL | New role | New URL | pageName |
|---|---|---|---|---|
| `index.njk` | `/` | Home (hero + pillars + latest) | `/` | `home` |
| `blog.njk` | `/blog/` | Blog listing | `/blog/` | `blog` |
| `work.njk` | `/work/` | Projects | `/projects/` | `projects` |
| `resume.njk` | `/resume/` | Experience | `/experience/` | `experience` |
| `contact.njk` | `/contact/` | Colophon | `/colophon/` | `colophon` |
| `sitemap.njk` | `/sitemap.xml` | Unchanged | `/sitemap.xml` | — |

---

## Phase 1: SCSS Architecture Replacement ✅ COMPLETE

**Goal:** Swap the flat SCSS structure for the redesign's organized `base/`, `layouts/`, `components/` system.

**Status:** All 22 SCSS files created/copied. `main.scss` uses `@use` imports.

**Deviations from plan:**
- **`_tokens.scss`** — Refactored to use CSS `light-dark()` function instead of separate `[data-theme="light"]`/`[data-theme="dark"]` rule blocks. This is more concise and leverages native browser color-scheme resolution.
- **`_logo-scribble.scss`** — Changed from JS-triggered `.scribble-loaded` class to CSS-only `@keyframes scribble-draw` animation with `animation-fill-mode: forwards`.
- **`_theme-toggle.scss`** — Redesigned from toggle track/thumb switch to a native radio `<fieldset>` styled as a segmented control (auto/light/dark).
- Old flat SCSS files not yet deleted (see Phase 6).

---

## Phase 2: Layout System & Partials ✅ COMPLETE

**Goal:** Create the new layout hierarchy and navigation partials.

**Status:** All layouts, partials, and component macros created. Build produces 18 files with 0 errors.

**Deviations from plan:**
- **`base.njk`** — Decomposed into subcomponent includes: `head.njk` (meta, fonts, CSS), `tracking.njk` (GTM). Base owns only the HTML shell, skip link, and script loading. Does NOT contain `<main>` — each child layout owns its own `<main>` placement via `{% block body_content %}`.
- **`sidebar-layout.njk`** — Owns `<main id="main">` inside `.site-wrapper` grid (not base.njk), ensuring single `<main>` per page. Uses `{{ content | safe }}` (not `{% block content %}`) because Eleventy injects frontmatter-based layout content via the `content` variable, not Nunjucks block inheritance.
- **`topbar-layout.njk`** — Also owns its own `<main>`, plus footer with "Made in Canada" maple leaf SVG. Uses `{% block content %}{{ content | safe }}{% endblock %}` — the block allows `post.njk` to override via Nunjucks extends, while `{{ content | safe }}` serves as the default for content files (like project detail pages) that use this layout directly via frontmatter.
- **`post.njk`** — TL;DR uses `<div>` not `<aside>` (TL;DR summarizes the article content, so it's not tangential). Supports both `publishedDate` and `date` during migration.
- **`theme-toggle.njk`** — Built as reusable partial with `compact` variable, using native `<fieldset>` + `<input type="radio">` (3-state: auto/light/dark). No ARIA needed — native HTML provides full semantics. Radio inputs use `clip-rect` visually-hidden pattern (not `width:0/height:0`) to remain in the a11y tree.
- **`sidebar.njk`** — Social links use `<nav aria-label="Social links">` instead of `<div role="group">`.
- **`footer.njk`** — Includes inline SVG red maple leaf icon for "Made in Canada".

---

## Phase 3: Data & Configuration Updates ✅ COMPLETE

**Goal:** Update data files and Eleventy config to support new templates.

**Status:** `navigation.json` created, `projects.json` restructured (7 entries), `.eleventy.js` updated with new filters/shortcodes.

**Deviations from plan:**
- **`projects.json`** — Final count is 7 entries (not 10), merged from old format + resume.js projects.
- **`.eleventy.js`** — `currentYear` registered as both shortcode and filter for flexibility. `myDate` filter kept alongside new `dateIso`/`dateReadable` for backward compatibility. Passthrough added for `theme-toggle.js` as ES module (`src/js/theme-toggle.js` → `js/theme-toggle.js`).

---

## Phase 4: Update Page Templates ✅ COMPLETE

**Goal:** Rewrite each page to use the new layout system and components.

**Status:** All 5 page templates rewritten. Frontmatter uses `layout: sidebar-layout.njk` (not `layouts/sidebar-layout.njk` — Eleventy's `layouts` dir config handles the path).

**Deviations from plan:**
- **Frontmatter `layout:`** — Uses `sidebar-layout.njk` instead of `layouts/sidebar-layout.njk` because Eleventy's config `layouts: '_includes/layouts'` already prepends the path. Using the `layouts/` prefix caused double-nesting (`_includes/layouts/layouts/...`).
- **`sitemap.njk`** — Unchanged as planned.

---

## Phase 5: Blog Post Migration ✅ COMPLETE

**Goal:** Update existing posts to use the new post layout.

**Status:** All 7 blog posts updated. All 4 project detail pages updated.

**Deviations from plan:**
- **Blog post frontmatter** — Uses `layout: post.njk` (not `layouts/post.njk`). Kept `publishedDate` alongside `date` support — migration to `date`-only deferred.
- **Project detail pages** — Used Eleventy directory data file (`src/projects/projects.11tydata.json`) to set shared `layout: topbar-layout.njk` and `pageName: projects` defaults. Named with `.11tydata.json` suffix (not `projects.json`) to avoid shadowing the global `projects` array from `_data/projects.json`. Individual files only need `title` and `description` in frontmatter.
- **`project-card.njk`** — Enhanced with technology icons from `icons.json`. Macro accepts `icons` as second parameter (Nunjucks macros can't access global data). Tags matching a key in `icons.json` show a 14px PNG icon alongside the pill text. Comment in `icons.json` documents `@primer/octicons` (installed) as SVG alternative for concept icons.

---

## Phase 6: JavaScript & Cleanup ✅ COMPLETE

**Goal:** Finalize JS, remove deprecated files.

### Update `src/js/main.js` ✅
Simplified to SCSS import only. Menu JS removed.

**Deviations from plan:**
- **Theme toggle JS** — NOT inline in templates. Created as separate ES module (`src/js/theme-toggle.js`) loaded via `<script type="module">` for browser caching. Passthrough copy configured in `.eleventy.js`.
- **Scribble animation** — CSS-only via `@keyframes`, no JS file needed.

### Delete deprecated files ✅ COMPLETE
**Deleted (27 files):**
- Layouts: `header.njk`, `hero.njk`, `card.njk`, `tldr.njk`, `posts.njk`, `meta-description.njk`, `resume/` directory (4 files)
- JS: `_menu.js`, `_octicons.js`
- Data: `nav.json` (replaced by `navigation.json`)
- All 13 old flat SCSS files: `_variables.scss`, `_mixins.scss`, `_base.scss`, `_layouts.scss`, `_typography.scss`, `_header.scss`, `_menu.scss`, `_footer.scss`, `_posts.scss`, `_contact.scss`, `_projects.scss`, `_resume.scss`, `_syntax-highlights.scss`

**Kept (still in use):**
- `icons.json` — maps technology tag names to PNG icon filenames, used by `project-card.njk`
- `terms.json` — full names for tech abbreviations, currently unused but available for future tooltip/title expansion

**Additional improvements:**
- **`resume.js`** — Added `skills` array to each job entry for tech pill display. `details` remain as responsibility sentences.
- **`resume.njk`** — Job entries now show responsibilities as a regular `<ul>` list + key skills as pill tags below. Detail HTML is rendered with `| safe` filter.
- **`_experience.scss`** — Added `.experience-details` styling for responsibility lists with themed `::marker` bullets.

> **Note:** `head.njk` and `tracking.njk` are NOT deprecated — they are active subcomponent includes used by `base.njk`.

### URL redirects — Skipped
GitHub Pages has no server-side 301 support.

### Optional: Remove unused npm packages ❌ TODO
`@primer/css`, `@primer/octicons`, `@11ty/eleventy-plugin-vue`, `postcss-logical`

### Post-Phase 6 fixes & enhancements ✅ COMPLETE
- **Privacy page removed** (`9d1ae10`) — `/privacy/` page deleted.
- **Email + tracking link removed** (`91fe0a8`, `15e37d3`) — contact page cleaned up; social links remain in sidebar.
- **A11y contrast colors fixed** (`d4fdfaf`) — `_tokens.scss` color values adjusted; `_buttons.scss` updated.
- **Technology pill icon contrast fixed** (`a1c02a1`) — `_pills.scss` + `_project-cards.scss` now handle icon inversion for dark backgrounds. Eleventy `iconPath` filter added to `.eleventy.js`.
- **Blog dates fixed** (`7b71b8c`).
- **Hello world wave removed** (`62b6f38`) — `index.njk` cleaned up.
- **Multiple URLs on project cards** (`9fd538e`) — `project-card.njk` enhanced to support array of `{label, url}` objects.
- **Hero images on blog posts** (`a9162a0`) — `post.njk` and `blog-card.njk` render `image` frontmatter; `_post.scss` + `_blog-cards.scss` updated. All 7 posts have `image` frontmatter added.
- **TL;DR added to 5 posts** (`36645b3`) — `first-post-in-a-long-while`, `inclusive-design`, `play-with-music-with-javascript`, `podcast-bingeing`, `scraping-websites-for-data`.
- **11ty passthrough for images** (`95f8c5a`) — `.eleventy.js` passes through `src/images/` directory.
- **Experience page collapsible job details** (`0b7e822`) — `resume.njk` uses `<details>`/`<summary>` for job responsibilities; `_experience.scss` styled accordingly.
- **Logo scribble fixed on single posts** (`0a91605`) — `_topbar.scss` corrected so scribble animation triggers on topbar-layout pages.

---

## Verification Checklist

- [x] `npm run ci` builds without errors (Eleventy: 18 files, Webpack: compiled successfully)
- [x] All 5 main pages render with sidebar layout (verified via Firefox MCP)
- [x] Dark/light theme toggle works (verified light → dark switch via browser)
- [x] Page colors change per page (experience=purple, projects=teal, home=red, blog=amber confirmed)
- [ ] Nav icon hover animations play (bounce, rotate, flutter, sway, grind) — requires manual hover test
- [x] Logo scribble draw-on animation triggers on load — fixed on single post pages (`0a91605`)
- [x] Responsive sidebar collapses to stacked header at < 900px (verified at 375px mobile)
- [x] Blog posts render with topbar layout (verified "Scraping Websites for Data")
- [x] Prev/next post navigation works (confirmed via JS — correct prev/next links)
- [x] Tag pills display on posts (confirmed "coding" pill on blog post)
- [x] Blog listing uses new blog-card macro with hero image support
- [x] Projects listing uses new project-card macro with tech icons + multiple URL support
- [x] Experience page shows collapsible job details + skill pills, education, and skills from resume.js
- [x] Projects page shows 7 merged projects with projectCard macro + PNG icons
- [x] Skip link present (confirmed in a11y tree as first focusable element)
- [x] Focus rings use page color — CSS: `:focus-visible { outline: 3px solid var(--clr-active) }`
- [x] `prefers-reduced-motion: reduce` disables all animations — CSS: `animation-duration: 0.01ms !important`
- [x] No console errors (0 errors in Firefox console)
- [x] A11y contrast colors fixed — tokens and button styles updated (`d4fdfaf`)
- [x] Technology pill icons visible in dark mode — icon inversion logic added (`a1c02a1`)
- [ ] Lighthouse accessibility audit ≥ 90 — requires manual Lighthouse run
- [x] Theme toggle persists across page navigation (localStorage confirmed `"dark"` after nav)

---

## Key Files Reference

| Purpose | Existing (modify) | Export (copy from) |
|---|---|---|
| HTML shell | `src/_includes/layouts/base.njk` | `export/src/_includes/layouts/base.njk` |
| Design tokens | — (new) | `export/src/assets/scss/base/_tokens.scss` |
| Sidebar partial | — (new) | `export/src/_includes/partials/sidebar.njk` |
| Topbar partial | — (new) | `export/src/_includes/partials/topbar.njk` |
| Blog card macro | — (new) | `export/src/_includes/components/blog-card.njk` |
| Project card macro | — (new) | `export/src/_includes/components/project-card.njk` |
| Eleventy config | `.eleventy.js` | README filter specs |
| SCSS entry | `src/scss/main.scss` | `export/src/assets/scss/main.scss` |
| Nav data | — (new `navigation.json`) | `export/src/_data/navigation.json` |
| Project data | `src/_data/projects.json` | restructure in place |
