define(function() {

  function render() {
    require(
        [
          'hbar!parts/forms',
          'data/forms'
        ], function (formsPart, formsData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = formsPart(formsData);
        });
  }

  return {
    render:render
  };
});
