module.exports = function(eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css'
	});
  eleventyConfig.addPassthroughCopy("_src/assets/js");

  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};