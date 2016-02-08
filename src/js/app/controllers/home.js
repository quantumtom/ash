define(['views/home'], function(homeView){

  function start(){
    homeView.render();
  }

  return {
    start:start
  };
});