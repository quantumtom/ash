define(function (require) {
  require(['hbar!prt/footer'], function (template) {
    var data = {
      title: 'My Title',
      body: 'My Body'
    };

    $(template(data)).appendTo($('#root'));
  });
});