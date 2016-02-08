// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  baseUrl: 'js',
  paths: {
    // the left side is the module ID,
    // the right side is the path to
    // the jQuery file, relative to baseUrl.
    // Also, the path should NOT include
    // the '.js' file extension.
    bootstrap:      'lib/bootstrap',
    jquery:         'lib/jquery',
    Handlebars:     'lib/handlebars',
    text:           'lib/text',
    hbar:           'lib/hbars',
    router:         'app/router',
    parts:          'app/parts',
    controllers:    'app/controllers',
    data:           'app/data',
    models:         'app/models',
    views:          'app/views'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    Handlebars: {
      deps: ['bootstrap'],
      exports: 'Handlebars'
    },
    'jquery': {
      exports: '$'
    }
  },
  hbars: {
   extension: '.hbar' // default = '.html'
  }
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['app/main'], function () {
});
