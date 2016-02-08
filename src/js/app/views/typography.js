define(function () {

  function render() {
    require(
        [
          'hbar!parts/typography',
          'data/typography'
        ], function (typographyPart, typographyData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = typographyPart(typographyData);
        });
  }

  return {
    render:render
  };
});
