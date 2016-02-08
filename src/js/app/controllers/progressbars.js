define(['views/progressbars'], function(progressbarsView){

  function start(){
    progressbarsView.render();
  }

  return {
    start:start
  };
});