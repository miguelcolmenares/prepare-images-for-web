module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		clean: {
			resized: "resized/**",
			compress: "compress/**",
		},
		image_resize: {
			options: {
				width: 1500,
				height: 1500,
				overwrite: true,
			},
			resize: {
				src: ['originals/*'],
				dest: 'resized/'
			}
		},
		tinypng: {
			options: {
				apiKey: TINYPNG_API,
				summarize: true,
				showProgress: true,
			},
			assets: {
				expand: true,
				src: ["*"],
				cwd: "resized/",
				dest: "compress/",
			},
		},
	});

	// Plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks("grunt-image-resize");
	grunt.loadNpmTasks("grunt-tinypng");

	// Default task(s).
	grunt.registerTask("default", ["clean", "image_resize", "tinypng"]);
};
