
module.exports = function(grunt) {

    //Project configuration.
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['*.js', 'src/**/*.js'],
                tasks: ['jshint']
            }
        },
        jshint: {
            all: ['*.js', 'src/**/*.js'],
            options: {
                jshintrc: true
            }
        }
    });

    //Load plugins.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Default task(s).
    grunt.registerTask('default', 'jshint');
};
