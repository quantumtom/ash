define(function (require) {
  require(['hbar!prt/footer'], function (template) {
    var data = {
      copyright: '©2016 AwesomenessTV, Inc. All rights reserved. Los Angeles, California, U.S.A.'
    };

    $(template(data)).appendTo($('#root'));
  });
});