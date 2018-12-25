function ajaxStart() {
  $("#smallProcessingPage").addClass("ui-page-active");
  $(".ui-processing").css("visibility", "");
}

function ajaxEnd() {
  $("#smallProcessingPage").removeClass("ui-page-active");
  $(".ui-processing").css("visibility", "hidden");
}
