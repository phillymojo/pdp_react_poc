module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			libs: {
				files: ['src/libs/*.js'],
				tasks: ['concat:libs']
			},
			browserify: {
				files: ['app.js', 'components/**/*.js'],
				tasks: ['browserify:main']
			}
		},
		concat: {
			libs: {
				src: ['src/libs/jquery*.js','<%= watch.libs.files %>'],
				dest: 'public/js/libs.js',
				options: {
					seperator: ';'
				}
			}
		},
		browserify: {
			main: {
				src: ['app.js', '<%= watch.browserify.files %>'],
				dest: 'public/js/bundle.js'
			},
			options: {
				transform: ['reactify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-react');

	grunt.registerTask('default', []);
};