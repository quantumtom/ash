requirejs.config({baseUrl:"js",paths:{router:"app/router",parts:"app/parts",controllers:"app/controllers",data:"app/data",models:"app/models",views:"app/views",bootstrap:"lib/bootstrap",twbs:"lib/twbs",jquery:"lib/jquery",Handlebars:"lib/handlebars",text:"lib/text",hbar:"lib/hbars"},shim:{router:{deps:["jquery"]},bootstrap:{deps:["jquery"]},Handlebars:{deps:["bootstrap"],exports:"Handlebars"},jquery:{exports:"$"}},hbars:{extension:".hbar"}}),require(["app/main"],function(){});