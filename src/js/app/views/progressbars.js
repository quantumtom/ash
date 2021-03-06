define(function() {

  function render() {
    require(
        [
          'hbar!parts/progressbars',
          'data/progressbars'
        ], function (progressbarsPart, progressbarsData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = progressbarsPart(progressbarsData);
        });
  }

  return {
    render:render
  };
});
