define(function (require) {
  require(['views/banner', 'jquery'], function (bannerView, $) {
    $(bannerView).appendTo($('#root'));
  });
});
