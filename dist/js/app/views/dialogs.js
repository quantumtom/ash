define(function() {

  function render() {
    require(
        [
          'hbar!parts/dialogs',
          'data/dialogs'
        ], function (dialogsPart, dialogsData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = dialogsPart(dialogsData);

          $('[data-toggle="tooltip"]').tooltip();
          $('[data-toggle="popover"]').popover();
        });
  }

  return {
    render:render
  };
});
