define(function () {

  function render() {
    require(
        [
          'hbar!parts/buttons',
          'data/buttons'
        ], function (buttonsPart, buttonsData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = buttonsPart(buttonsData);
        });
  }

  return {
    render:render
  };
});
