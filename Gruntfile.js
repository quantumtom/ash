module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    version: pkg.version,
    clean: ['dist'],
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: [
          'js/require',
          'css/**/*',
          'img/**/*',
          'fonts/**/*',
          '*.txt',
          '*.html',
          '*.ico',
          '*.png'
        ],
        dest: 'dist'
      }
    },
    requirejs: {
      dist: {
        options: {
          baseUrl: 'src/js',
          name: 'app',
          mainConfigFile: 'src/js/app.js',
          optimize: 'none',
          out: 'dist/js/app.js',
          paths: {
            router:         'app/router',
            parts:          'app/parts',
            controllers:    'app/controllers',
            data:           'app/data',
            models:         'app/models',
            views:          'app/views',
            bootstrap:      'lib/bootstrap',
            twbs:           'lib/twbs',
            jquery:         'lib/jquery',
            Handlebars:     'lib/handlebars',
            text:           'lib/text',
            hbar:           'lib/hbars'
          },
          shim: {
            bootstrap: {
              deps: ['jquery']
            },
            twbs: {
              deps: ['bootstrap']
            },
            Handlebars: {
              deps: ['bootstrap'],
              exports: 'Handlebars'
            },
            'jquery': {
              exports: '$'
            },
            locale: "en-us",
            optimize: 'uglify'
          }
        }
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css'],
          dest: 'dist/css'
        }]
      }
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
    },
    htmlmin: {
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: false,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html'
        }
      }
    },
    cache_control: {
      dist: {
        source: "src/index.html",
        options: {
          version: "2.0",
          links: true,
          scripts: true,
          replace: false,
          outputDest: "dist/index.html"
        }
      }
    }
  });

  /**
   * Distribution tasks.
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-cache-control');

  /**
   * Test tasks.
   */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bootlint');

  /**
   * Development task.
   */
  grunt.loadNpmTasks('grunt-contrib-watch');

  /**
   *
   */
  grunt.registerTask('default', 'Default grunt task.', ['build']);
  grunt.registerTask('build', ['clean','copy','cssmin','htmlmin']);
  grunt.registerTask('dev', ['clean','copy']);
  grunt.registerTask('test', ['jshint','bootlint']);

};