
// File: js/main.js

// 'jquery' returns the jQuery object into '$'
//
// 'bootstrap' does not return an object. Must appear at the end

require(['jquery', 'bootstrap'], function($){

  // DOM ready
  $(function(){

    // Twitter Bootstrap 3 carousel plugin
    $("#element").carousel();
  });
});