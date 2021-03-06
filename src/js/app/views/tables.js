define(function() {

  function render() {
    require(
        [
          'hbar!parts/tables',
          'data/tables'
        ], function (tablesPart, tablesData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = tablesPart(tablesData);
        });
  }

  return {
    render:render
  };
});
