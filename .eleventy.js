const { octiconClose, octiconMenu } = require ('./src/js/_octicons');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {

    let nunjucksEnvironment = new Nunjucks.Environment(
        new Nunjucks.FileSystemLoader(["src/_includes"], {
            watch: true,
            noCache: true
        })
      );
    eleventyConfig.setLibrary("njk", nunjucksEnvironment);
    
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