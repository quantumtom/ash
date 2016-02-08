/**
 * Load all the Views.
 */

require([
  //'models/user',
  'controllers/home',
  'router'
], function (home, router) {

  //var users = [new User('Barney'),
  //  new User('Cartman'),
  //  new User('Sheldon')];
  //
  //localStorage.users = JSON.stringify(users);

  home.start();

  router.startRouting();
});
