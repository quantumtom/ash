
// file: js/require-setup.js
//
// Declare this variable before loading RequireJS JavaScript library
// To config RequireJS after it’s loaded, pass the below object into require.config();

var require = {
  shim : {
    "bootstrap" : { "deps" :['jquery'] }
  },
  paths: {
    "jquery" : "//code.jquery.com/jquery-2.1.1.min",
    "bootstrap" :  "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
  }
};