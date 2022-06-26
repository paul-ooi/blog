module.exports = function(eleventyConfig) {
    eleventyConfig.setWatchThrottleWaitTime(800);
    eleventyConfig.setTemplateFormats("md,njk,html,js,css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addShortcode("octicon", function(svg) {
        console.log('testing')
        console.log(svg)

        return svg;
     });
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