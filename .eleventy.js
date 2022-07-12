const { octiconClose, octiconMenu } = require ('./src/js/_octicons')

module.exports = function(eleventyConfig) {
    eleventyConfig.setWatchThrottleWaitTime(1000);
    eleventyConfig.setTemplateFormats("md,njk,html,js,css");
    eleventyConfig.addPassthroughCopy("src/assets/images");

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