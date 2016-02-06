module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      revisedFiles: {
        src: [
          'app/assets/javascripts/**/*.js',
          '!app/assets/javascripts/*.js',
          '!app/assets/javascripts/bootstrap-components/*'
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

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-check-dependencies');

  grunt.registerTask('default', 'Default grunt task.', [
    'jshint'
  ]);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['jshint']);

};