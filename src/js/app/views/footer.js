define(function () {

  function render() {
    require(
        [
          'hbar!parts/footer',
          'data/footer'
        ], function (footerPart, footerData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = footerPart(footerData);
        });
  }

  return {
    render:render
  };
});
