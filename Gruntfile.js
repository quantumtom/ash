module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      release: {
        options: {
          'force': true
        },
        src: [
          'dist/css',
          'dist/fonts',
          'dist/img',
          'dist/js',
          'dist/favicon.ico',
          'dist/index.html'
        ]
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: [
          'js/**/*.hbar',
          'img/**',
          'fonts/**',
          '*.txt',
          '*.html',
          '*.ico',
          '*.png'
        ],
        dest: 'dist'
      },
      docs: {
        expand: true,
        src: [
          'README.md'
        ],
        dest: 'dist'
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      all: {
        files: [
          'src/**',
          '!src/js/lib/**',
          'README.md',
          'Gruntfile.js'
        ],
        tasks: ['build']
      }
    },
    jsdoc: {
      dist : {
        src: [
          'src/js/**/*.js',
          'dist/README.md',
          '!src/js/lib'
        ],
        options: {
          destination: 'dist/doc',
          template : 'node_modules/ink-docstrap/template'
        }
      }
    },
    htmlmin: {
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: false,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'dist/index.html'
        }
      }
    },
    cache_control: {
      dist: {
        source: 'src/index.html',
        options: {
          version: '2.0.1',
          links: true,
          scripts: true,
          replace: false,
          outputDest: 'dist/index.html'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      min: {
        files: grunt.file.expandMapping(['src/js/**/*.js'], 'dist/', {
          rename: function(destBase, destPath) {
            return destBase+destPath.replace('src/js', 'js');
          }
        })
      }
    },
    less: {
      development: {
        options: {
          paths: ['src/css']
        },
        files: {
          'dist/css/main.css': '**/*.less'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      dist: {
        files: {
          'dist/css/main.css': ['src/css/**/*.css']
        }
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
    bootlint: {
      options: {
        stoponerror: false,
        relaxerror: [
          'W005'
        ]
      },
      files: ['src/**/*.html']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      lax: {
        src: [
          'src/css/**/*.css',
          '!src/css/bootstrap*'
        ]
      }
    }
  });

  /**
   * Distribution tasks.
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-cache-control');

  /**
   * Test tasks.
   */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-bootlint');

  /**
   * Development task.
   */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');

  /**
   *
   */
  grunt.registerTask('default', 'Default grunt task.', ['build']);

  grunt.registerTask('build', ['clean','copy','cache_control','cssmin','htmlmin','uglify','copy:docs','jsdoc']);

  grunt.registerTask('test', ['csslint','jshint','bootlint']);

};