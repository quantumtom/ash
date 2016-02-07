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
    // the '.js' file extension. This example
    // is using jQuery 1.9.0 located at
    // js/lib/jquery-1.9.0.js, relative to
    // the HTML page.
    bootstrap: 'lib/bootstrap',
    jquery: 'lib/jquery',
    Handlebars: 'lib/handlebars',
    text: 'lib/text',
    hbar: 'lib/hbars',
    prt: 'app/prt',
    views: 'app/views',
    models: 'app/data/models',
    controllers: 'app/controllers'
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
requirejs(['app/main'], function () {
  // Load stuff here.
  console.log('Load main from app.js');
});