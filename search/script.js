var searchBarInput = $("#searchBarInput");
var clearSearchBtn = $(".clearSearchBarField");

$(document).ready(function () {
  searchBarInput.keyup(function () {
    if ($(this).val().length === 0) {
      clearSearchBtn.hide();
    } else {
      clearSearchBtn.show();
    }
  });
});

function resetInput() {
  clearSearchBtn.hide();
  searchBarInput.val("").focus();
}
