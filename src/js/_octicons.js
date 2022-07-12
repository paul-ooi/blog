const octicons = require("@primer/octicons");


const octiconMenu = (eleventyConfig) => {
  eleventyConfig.addShortcode("octimenu", () => {
    return octicons['three-bars'].toSVG();
  });
}

const octiconClose = (eleventyConfig) => {
  eleventyConfig.addShortcode("octiclose", () => {
    return octicons['x'].toSVG();
  });
}
 
module.exports = {
  octiconMenu,
  octiconClose,
};