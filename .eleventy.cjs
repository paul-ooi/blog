module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `dist` to `_site/dist`
    eleventyConfig.addPassthroughCopy({"./dist/*.js" : "dist/js"});
    // eleventyConfig.setTemplateFormats("html,njk");

    // // Copy `css/fonts/` to `_site/css/fonts`
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");
  
    // // Copy any .jpg file to `_site`, via Glob pattern
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("**/*.jpg");
    
};