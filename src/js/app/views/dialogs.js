define(function() {

  function render() {
    require(
        [
          'hbar!parts/dialogs',
          'data/dialogs'
        ], function (dialogsPart, dialogsData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = dialogsPart(dialogsData);
        });
  }

  return {
    render:render
  };
});
