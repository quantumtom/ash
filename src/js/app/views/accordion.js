/**
 * A module representing an accordion view.
 * @module views/accordion
 */

define('views/accordion', function() {

  function render() {
    require(
        [
          'hbar!parts/accordion',
          'data/accordion'
        ], function (accordionPart, accordionData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = accordionPart(accordionData);
        });
  }

  return {
    render:render
  };
});
