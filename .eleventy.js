const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Nunjucks = require('nunjucks');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

    let nunjucksEnvironment = new Nunjucks.Environment(
        new Nunjucks.FileSystemLoader(["src/_includes"], {
            watch: process.env.NODE_ENV !== 'production',
            noCache: true
        })
      );
    eleventyConfig.setLibrary("njk", nunjucksEnvironment);

    // ── Filters ──

    // ISO date string for <time datetime>
    eleventyConfig.addFilter('dateIso', function (date) {
        if (!date) return '';
        return new Date(date).toISOString().split('T')[0];
    });

    // Human-readable date (e.g., "Feb 15, 2026")
    eleventyConfig.addFilter('dateReadable', function (date) {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC'
        }).format(new Date(date));
    });

    // URL-safe slug
    eleventyConfig.addFilter('slugify', function (str) {
        if (!str) return '';
        return str.toString().toLowerCase().trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-');
    });

    // Unique tags from collection (excluding "posts")
    eleventyConfig.addFilter('getAllTags', function (collection) {
        const tags = new Set();
        for (const item of collection) {
            if (item.data.tags) {
                for (const tag of item.data.tags) {
                    if (tag !== 'posts') tags.add(tag);
                }
            }
        }
        return [...tags].sort();
    });

    // ── Shortcodes ──

    eleventyConfig.addShortcode('currentYear', function () {
        return new Date().getFullYear().toString();
    });

    // Also register as a filter for {{ "" | currentYear }} usage
    eleventyConfig.addFilter('currentYear', function () {
        return new Date().getFullYear().toString();
    });

    // ── Collections ──

    eleventyConfig.addCollection("posts", function(collectionApi) {
        const publishedPosts = collectionApi.getFilteredByGlob("./src/posts/*.md")
            .filter((post) => {
                // Support both publishedDate (existing) and date (new) during migration
                return post.data.publishedDate != null || post.data.date;
            });

        const chronologicalPosts = publishedPosts.sort(function(a, b) {
            const dateB = b.data.publishedDate ?? b.date;
            const dateA = a.data.publishedDate ?? a.date;
            return dateB - dateA;
        });
        return chronologicalPosts;
    });

    // ── Config ──

    eleventyConfig.setWatchThrottleWaitTime(1000);
    eleventyConfig.setTemplateFormats("md,njk,html,js,css,map");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/dist");
    // Serve theme-toggle.js as ES module (cached independently by browser)
    eleventyConfig.addPassthroughCopy({ "src/js/theme-toggle.js": "js/theme-toggle.js" });
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            layouts: '_includes/layouts',
            output: 'public'
        },
        pathPrefix: '/',
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};
