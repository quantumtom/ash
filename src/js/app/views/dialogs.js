define(function (require) {
  require(['hbar!prt/dialogs'], function (template) {
    var data = {
      title: 'My Title',
      body: 'My Body'
    };

    $(template(data)).appendTo($('#root'));
  });
});