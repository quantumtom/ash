define(function() {

  var routes = [
    {hash: '#base',         controller: 'base'          },
    {hash: '#home',         controller: 'home'          },
    {hash: '#buttons',      controller: 'buttons'       },
    {hash: '#accordion',    controller: 'accordion'     },
    {hash: '#carousel',     controller: 'carousel'      },
    {hash: '#containers',   controller: 'containers'    },
    {hash: '#dialogs',      controller: 'dialogs'       },
    {hash: '#forms',        controller: 'forms'         },
    {hash: '#indicators',   controller: 'indicators'    },
    {hash: '#navbar',       controller: 'navbar'        },
    {hash: '#navs',         controller: 'navs'          },
    {hash: '#progressbars', controller: 'progressbars'  },
    {hash: '#tables',       controller: 'tables'        },
    {hash: '#typography',   controller: 'typography'    }
  ];
  var defaultRoute = '#home';
  var currentHash = '';

  function loadController(controllerName) {
    require(['controllers/' + controllerName], function(controller) {
      controller.start();
    });
  }

  function hashCheck(){
    if (window.location.hash !== currentHash) {
      for (var i = 0, currentRoute; currentRoute = routes[i++];) {
        if (window.location.hash === currentRoute.hash) {
          loadController(currentRoute.controller);
        }
      }
      currentHash = window.location.hash;
    }
  }

  function startRouting(){
    window.location.hash = window.location.hash || defaultRoute;
    setInterval(hashCheck, 100);
  }

  return {
    startRouting:startRouting
  };
});