module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			libs: {
				files: ['src/libs/*.js'],
				tasks: ['concat:libs']
			},
			scripts: {
				files: ['app.js'],
				tasks: ['concat:scripts']
			}
		},
		concat: {
			libs: {
				src: ['src/libs/jquery*.js','<%= watch.libs.files %>'],
				dest: 'public/js/libs.js',
				options: {
					seperator: ';'
				}
			},
			scripts: {
				src: []
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-react');

	grunt.registerTask('default', []);
};