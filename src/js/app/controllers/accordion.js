/**
 * A module representing an accordion controller.
 * @module controllers/accordion
 */

define(['views/accordion'], function(accordionView){

  function start(){
    accordionView.render();
  }

  return {
    start:start
  };
});