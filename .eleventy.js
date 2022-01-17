module.exports = function(eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css'
	});

  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};