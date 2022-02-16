// $(document).ready(function(){
//   $("#backendForm").submit(function(event) {
//     var backendType = $("input:radio[name=backendType]:checked").val();
//     $("#answerArea").show();
//     if (backendType === "PHP") {
//       $("#answer").text("PHP/Drupal");
//       $("#ruby, #java, #Csharp, #undecidedAnswer, #answerArea2").hide();
//       $("#PHP").show();
//     } else if (backendType === "ruby") {
//       $("#answer").text("Ruby/Rails");
//       $("#PHP, #java, #Csharp, #undecidedAnswer, #answerArea2").hide();
//       $("#ruby").show();

//     } else if (backendType === "java") {
//       $("#answer").text("Java/Android");
//       $("#ruby, #PHP, #Csharp, #undecidedAnswer, #answerArea2").hide();
//       $("#java").show();

//     } else if (backendType === "Csharp") {
//       $("#answer").text("C#/.NET");
//       $("#ruby, #java, #PHP, #undecidedAnswer, #answerArea2").hide();
//       $("#Csharp").show();

//     } else if (backendType === "PHP") {
//       $("#answer").text("PHP/Drupal");
//       $("#ruby, #java, #Csharp, #undecidedAnswer, #answerArea2").hide();
//       $("#PHP").show();

//     } else if (backendType === "undecided") {
//       $("#answerArea2, #undecidedAnswer").show();
//       $("#ruby, #java, #Csharp, #PHP, #answerArea").hide();
//     }
//     event.preventDefault();
//   });
// });


// A different way of setting up 'doc.ready' equivalent
window.onload = function() {
  document.getElementById("backendForm").onsubmit = processResults
}

function processResults() {
  event.preventDefault();

  // $("input:radio[name=backendType]:checked").val();
  var backendType = document.querySelectorAll('input[name=backendType]:checked')[0].value;
  
  document.querySelector(".backendLangAnswers").style.display = "block";
  clearAnswers();
  if (backendType === "PHP") {
    // $("#answerArea").show();
    document.getElementById("answerArea").style.display = "block";
    // $("#answer").text("PHP/Drupal");
    document.getElementById("answer").innerText = "PHP/Drupal";
    // $("#PHP").show();
    document.getElementById("PHP").style.display = "block";
  } else if (backendType === "ruby") {
    document.getElementById("answerArea").style.display = "block";
    document.getElementById("answer").innerText = "Ruby/Rails";
    document.getElementById("ruby").style.display = "block";   
  } else if (backendType === "java") {
    document.getElementById("answerArea").style.display = "block";
    document.getElementById("answer").innerText = "Java/Android";
    document.getElementById("java").style.display = "block"; 
  } else if (backendType === "Csharp") {
    document.getElementById("answerArea").style.display = "block";
    document.getElementById("answer").innerText = "C#/.NET";
    document.getElementById("Csharp").style.display = "block"; 
  } else if (backendType === "undecided") {
    document.querySelector(".backendLangAnswers").style.display = "none";
    document.getElementById("answerArea2").style.display = "block"; 
    document.getElementById("undecidedAnswer").style.display = "block"; 
  }
}

function clearAnswers() {
  // $("#ruby, #java, #Csharp, #undecidedAnswer, #answerArea2").hide();
  document.getElementById("ruby").style.display = "none";
  document.getElementById("PHP").style.display = "none";
  document.getElementById("java").style.display = "none";
  document.getElementById("Csharp").style.display = "none";
  document.getElementById("answerArea2").style.display = "none";
  document.getElementById("undecidedAnswer").style.display = "none";
  document.getElementById("answerArea").style.display = "none";
}
