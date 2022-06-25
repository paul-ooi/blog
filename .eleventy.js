module.exports = function(eleventyConfig) {
    eleventyConfig.setWatchThrottleWaitTime(800);
    eleventyConfig.setTemplateFormats("md,njk,html,js,css");
    eleventyConfig.addPassthroughCopy({"./dist/*.js" : "./dist/js"});
    // eleventyConfig.addPassthroughCopy("css/fonts");
    // eleventyConfig.addPassthroughCopy("**/*.jpg");
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