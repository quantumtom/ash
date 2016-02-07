define(function (require) {
  return require(
      [
        'hbar!prt/banner',
        'app/data/app'
      ], function (template, appData) {
        console.dir(appData);

    return template(appData);
  });
});
