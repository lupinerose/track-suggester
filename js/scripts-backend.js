$(document).ready(function(){
  $("#backendForm").submit(function(event) {
    // $("body").find(".col-md-4").addClass("hidden");
    // $("body").find(".col-md-4").toggleClass("hidden");
    var backendType = $("input:radio[name=backendType]:checked").val();
    $(answerArea).show();
    if (backendType === "PHP") {
      $("#answer").text("PHP");
      // $("#snake, #salamander").hide();
    } else if (backendType === "ruby") {
      $("#answer").text("Ruby");
      // $("#turtle, #salamander").hide();
    } else if (backendType === "java") {
      $("#answer").text("Java");
      // $("#snake, #turtle").hide();
    } else if (backendType === "Csharp") {
      $("#answer").text("C#");
      // $("#snake, #turtle").hide();
    } else if (backendType === "PHP") {
      $("#answer").text("PHP");
      // $("#snake, #turtle").hide();
    }

    event.preventDefault();
});
});
