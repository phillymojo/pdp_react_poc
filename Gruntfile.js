module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			libs: {
				files: ['src/libs/*.js'],
				tasks: ['concat:libs']
			}
		},
		concat: {
			libs: {
				src: ['<%= watch.libs.files %>'],
				dest: 'public/js/libs.js',
				options: {
					seperator: ';'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', []);
};