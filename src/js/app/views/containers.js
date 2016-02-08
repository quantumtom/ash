define(function () {

  function render() {
    require(
        [
          'hbar!parts/containers',
          'data/containers'
        ], function (containersPart, containersData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = containersPart(containersData);
        });
  }

  return {
    render:render
  };
});
