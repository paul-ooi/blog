# Personal Blog Site
This is a rebuild of my site and blog posts to be managed through code, be statically genereated and versioned.

## Technology Used
- Eleventy ([Nunjucks](https://mozilla.github.io/nunjucks/templating.html)/[Jinja](https://jinja.palletsprojects.com/en/3.1.x/) templating) 
- Webpack
- SCSS

## For local Development
run `npm run start`

## To Do List
- [ ] design inspiration
- [x] convert blog content from old site to json/md
- [x] refactor resume content
- [x] style resume
  - [ ] add collapse/expand all for sections
- [x] style TLDR
  - [ ] update posts MDs to use TLDR template
  - [ ] remove `_blank` targets, fix links
- [x] refactor page metadata (different page title than h1)
- [ ] add hero images to blog posts
- [x] style Contact page
- [ ] style Blog Archive page
- [ ] add new blog content
- [ ] fix URL base when deployed to GH pages (https://maarten.be/blog/20220730/how-to-deploy-your-eleventy-website-to-github-pages-with-github-actions/, https://www.11ty.dev/docs/plugins/html-base/)
