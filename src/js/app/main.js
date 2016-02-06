define(function (require) {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  var messages = require('./messages');

  // Load library/vendor modules using
  // full IDs, like:
  var print = require('../lib/print');
  var myData = {
    title: 'My Title',
    body: 'My Body'
  };

  var $ = require('jquery');

  var myVar = require(['hbar!prt/templateOne'], function (template) {

    $('#target-one').html(template(myData));

  });

  print(messages.getHello());

});