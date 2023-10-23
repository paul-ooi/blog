const { octiconClose, octiconMenu } = require ('./src/js/_octicons');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {

    let nunjucksEnvironment = new Nunjucks.Environment(
        new Nunjucks.FileSystemLoader(["src/_includes"], {
            watch: process.env.NODE_ENV !== 'production',
            noCache: true
        })
      );
    eleventyConfig.setLibrary("njk", nunjucksEnvironment);

    eleventyConfig.addFilter('myDate' , function (date) {
        return Intl.DateTimeFormat("en-CA", {
            dateStyle: 'medium',
            timeZone: 'UTC'
        }).format(date);
    })

    eleventyConfig.addCollection("posts", function(collectionApi) {
        // FIlter to just Published posts
        const publishedPosts = collectionApi.getFilteredByGlob("./src/posts/*.md")
                                .filter((post) => post.data.publishedDate !== null)
                    
        // sort by publishedDate - descending
        const chronologicalPosts = publishedPosts.sort(function(a, b) {
            const dateB = b.data.publishedDate ?? b.date;
            const dateA = a.data.publishedDate ?? a.date;
            return dateB - dateA;
        });
        return chronologicalPosts;
    });
    
    eleventyConfig.setWatchThrottleWaitTime(1000);
    eleventyConfig.setTemplateFormats("md,njk,html,js,css,map");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPlugin(syntaxHighlight);

    octiconMenu(eleventyConfig)
    octiconClose(eleventyConfig)

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            layouts: '_includes/layouts',
            output: 'public'
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};