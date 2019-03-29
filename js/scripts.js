$(document).ready(function(){
  $("#userInput").submit(function(event) {
    $("#form2").show();
      $("#frontOrBackEnd").submit(function(event) {
    // $("body").find(".col-md-4").addClass("hidden");
    // $("body").find(".col-md-4").toggleClass("hidden");
        var devType = $("input:radio[name=devType]:checked").val();
        if (devType === "frontEnd") {
          $(location).attr('href', 'frontend.html')
        } else if (devType === "backEnd") {
          $(location).attr('href', 'backend.html')
        }
    event.preventDefault();
    });
  event.preventDefault();
  });
});
