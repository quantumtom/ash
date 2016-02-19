require([
  'models/user',
  'controllers/home',
  'router'
], function (User, Home, Router) {

  var users = [new User('Tom'),
    new User('Dick'),
    new User('Harry')];

  localStorage.users = JSON.stringify(users);



  Home.start();

  Router.startRouting();
});
