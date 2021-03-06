require([
  'models/user',
  'controllers/home',
  'app/router',
  'lib/ga'
], function (User, Home, Router) {

  var users = [new User('Tom'),
    new User('Dick'),
    new User('Harry')];

  localStorage.users = JSON.stringify(users);

  Home.start();

  Router.startRouting();
});
