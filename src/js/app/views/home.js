define(function() {

  function render() {
    require(
        [
          'hbar!parts/home',
          'data/home'
        ], function (homePart, homeData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = homePart(homeData);
        });
  }

  return {
    render:render
  };
});
