module.exports = function(grunt){

	// task config
	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),


		exec : {

			start : {
				cmd : 'nohup node app.js >> access.log&'
			},

			reboot : {
				command : "ps ux | grep 'node app.js' | grep -v grep  | awk '{print $2}' | xargs kill && grunt exec:start"
			}
		},

		watch : {

			all : {
				files : ['*.js', '**/*.js'],
				tasks : ['exec:reboot'],
				options : {
					spawn : false,
					interrupt : true
				}
			}

		}
	});

	// load plugin
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');

	// Define tasks
	grunt.registerTask('debug', ['exec:start', 'watch:all']);
};
