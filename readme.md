# Personal Blog Site
This is a rebuild of my site and blog posts to be managed through code, be statically generated and versioned.

## Technology Used
- Eleventy ([Nunjucks](https://mozilla.github.io/nunjucks/templating.html)/[Jinja](https://jinja.palletsprojects.com/en/3.1.x/) templating)
- Webpack
- SCSS

## For local Development
run `npm run start`

## To Do List

### Redesign (branch: redesign-26)
- [x] full SCSS architecture replacement (base/components/layouts)
- [x] sidebar + topbar layout system with two-column grid
- [x] light/dark/auto theme toggle (3-state radio fieldset, localStorage)
- [x] page-owned color system (CSS custom properties per pageName)
- [x] animated SVG nav icons
- [x] blog card and project card macros
- [x] experience page with collapsible job details + skill pills
- [x] projects page with tech icons from icons.json
- [x] remove privacy page, tracking link, and email from contact
- [x] fix a11y contrast colors
- [x] fix technology pill icon contrast (black on black)
- [x] fix logo scribble animation on single post pages
- [x] add hero images to blog posts (blog card + post layout)
- [x] add TL;DR to 5 blog posts
- [x] project card supports multiple URLs
- [ ] remove unused npm packages (`@primer/css`, `@primer/octicons`, `@11ty/eleventy-plugin-vue`, `postcss-logical`)
- [ ] Lighthouse accessibility audit ≥ 90
- [ ] nav icon hover animations manual test (bounce, rotate, flutter, sway, grind)

### Content & Polish
- [ ] add new blog content
- [ ] update remaining posts to use TL;DR frontmatter
- [ ] remove `_blank` targets, fix external links
- [ ] Add Accessibility Statement [w3c generator tool](https://www.w3.org/WAI/planning/statements/)
- [ ] add rel=canonical link to head
