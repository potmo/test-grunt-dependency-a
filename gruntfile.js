module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bump: {
			options: {
				files: ['package.json'],
				updateConfigs: [],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['-a'], // '-a' for all files
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: true,
				pushTo: 'origin',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
			}
}

	});


	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask('default', []);



};