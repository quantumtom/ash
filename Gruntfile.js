module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      simple: {
        src: [
          'src/js/**/*.js',
          '!src/js/require.js',
          '!src/js/lib/**',
          '!src/js/app/Partials/**'
        ]
      },
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', 'Default grunt task.', ['jshint']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['jshint']);

};