/**
 * Load all the Views.
 */

require([
  'models/user',
  'controllers/home',
  'outer'
], function (User, Home, Router) {

  var users = [new User('Barney'),
    new User('Cartman'),
    new User('Sheldon')];

  localStorage.users = JSON.stringify(users);

  Home.start();

  Router.startRouting();
});
