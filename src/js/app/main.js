define(function (require, hbars) {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  var messages = require('./messages');

  // Load library/vendor modules using
  // full IDs, like:
  var print = require('../lib/print');

  print(messages.getHello());

  require(['lib/domReady', 'handlebars'], function (domReady, handlebars) {
    console.dir(handlebars);
  });

});