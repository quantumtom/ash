define(function() {

  function render() {
    require(
        [
          'hbar!parts/indicators',
          'data/indicators'
        ], function (indicatorsPart, indicatorsData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = indicatorsPart(indicatorsData);
        });
  }

  return {
    render:render
  };
});
