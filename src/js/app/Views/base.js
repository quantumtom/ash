define(function () {

  function render() {
    require(
        [
          'hbar!parts/base',
          'data/base'
        ], function (basePart, baseData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = basePart(baseData);
        });
  }

  return {
    render:render
  };
});
