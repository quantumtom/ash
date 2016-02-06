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
    jquery: 'lib/jquery-1.11.2.min',
    Handlebars: 'lib/handlebars',
    text: 'lib/text',
    hbar: 'lib/hbars'
  },
  shim: {
    Handlebars: {
      exports: 'Handlebars'
    }
  },
  hbars: {
   extension: '.hbar' // default = '.html'
  }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);