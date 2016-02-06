define(function (require) {
  require(['hbar!prt/progress-bars', 'jquery'], function (template, $) {
    var data = {
      title: 'My Title',
      body: 'My Body'
    };

    $(template(data)).appendTo($('#root'));
  });
});