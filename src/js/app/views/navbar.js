define(function () {

  function render() {
    require(
        [
          'hbar!parts/navbar',
          'data/navbar'
        ], function (navbarPart, navbarData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = navbarPart(navbarData);
        });
  }

  return {
    render:render
  };
});
