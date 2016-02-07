define(function (require) {
  require(['hbar!prt/progressbars'], function (template) {
    var data = {
      title: 'My Title',
      lead: 'My Lead'
    };

    $(template(data)).appendTo($('#root'));
  });
});