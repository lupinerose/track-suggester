$(document).ready(function(){
  $("#backendForm").submit(function(event) {
    // $("body").find(".col-md-4").addClass("hidden");
    // $("body").find(".col-md-4").toggleClass("hidden");
    var backendType = $("input:radio[name=backendType]:checked").val();
    $("#answerArea").show();
    if (backendType === "PHP") {
      $("#answer").text("PHP/Drupal");
      $("#ruby, #java, #Csharp").hide();
      $("#PHP").show();
    } else if (backendType === "ruby") {
      $("#answer").text("Ruby/Rails");
      $("#PHP, #java, #Csharp").hide();
      $("#ruby").show();

    } else if (backendType === "java") {
      $("#answer").text("Java/Android");
      $("#ruby, #PHP, #Csharp").hide();
      $("#java").show();

    } else if (backendType === "Csharp") {
      $("#answer").text("C#/.NET");
      $("#ruby, #java, #PHP").hide();
      $("#Csharp").show();

    } else if (backendType === "PHP") {
      $("#answer").text("PHP/Drupal");
      $("#ruby, #java, #Csharp").hide();
      $("#PHP").show();

    } else if (backendType === "undecided") {
      $("#answerArea2").show();
      $("#undecidedAnswer").show();
      $("#ruby, #java, #Csharp, #PHP").hide();
      $("#answerArea").hide();
    }


    event.preventDefault();
});
});
