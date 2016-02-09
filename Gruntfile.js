module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      dist  : {
        options: {
          baseUrl: 'src/js',
          name: 'app',
          optimize: 'none',
          out: 'dist/js/requirejs.js',
          paths: {
            'templates':  'app/parts',
            'jquery':     'lib/jquery',
            'bootstrap':  'lib/bootstrap',
            'handlebars': 'lib/handlebars',
            'controllers': 'app/controllers',
            'data': 'app/data',
            'models': 'app/models',
            'parts': 'app/parts',
            'views': 'app/views',
            'router': 'app/router'
          },
          preserveLicenseComments: false,
          useStrict: true,
          wrap: true,
          wrapShim: true
        }
      }
    },
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