module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      dist: {
        options: {
          baseUrl: 'src/js',
          name: 'app',
          optimize: 'none',
          out: 'dist/js/app.js',
          paths: {
            'templates': 'app/parts',
            'jquery': 'lib/jquery',
            'bootstrap': 'lib/bootstrap',
            'handlebars': 'lib/handlebars',
            'controllers': 'app/controllers',
            'data': 'app/data',
            'models': 'app/models',
            'parts': 'app/parts',
            'views': 'app/views',
            'router': 'app/router'
          }
        }
      }
    },
    cssmin: {
      dist  : [{
        src: ['src/css/*.css', '!src/css/*.min.css'],
        dest: 'dist/css/app.css'
      }]
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/js/app/**/*.js',
        'src/js/app.js'
      ],
      options: {
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', 'Default grunt task.', ['jshint']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['requirejs','cssmin']);

};