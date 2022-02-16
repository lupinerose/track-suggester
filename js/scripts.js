// $(document).ready(function(){
//   $("#userInput").submit(function(event) {
//     $("#form3").show();
//     var userName = $(".name").val();
//     $("#nameInsert").text(userName);
//       $("#frontOrBackEnd").submit(function(event) {
//         var devType = $("input:radio[name=devType]:checked").val();
//         if (devType === "frontEnd") {
//           $(location).attr('href', 'frontend.html')
//         } else if (devType === "backEnd") {
//           $(location).attr('href', 'backend.html')
//         }
//       event.preventDefault();
//     });
//     event.preventDefault();
//   });
// });

window.addEventListener('load', handleEvents, false); // doc.ready

function handleEvents() {  
  // $("#userInput").submit()
  const personalInfoForm = document.getElementById("userInput");
  // using Global Event Handlers with onsubmit property 
  personalInfoForm.onsubmit = handleForm1Submission; 

  // $("#frontOrBackEnd").submit()
  // using Global Event Handlers with onsubmit property 
  const frontOrBackEndForm = document.getElementById("frontOrBackEnd");
  frontOrBackEndForm.onsubmit = handleForm2Submission; 
}


function handleForm1Submission() { 
  event.preventDefault();
  // $("#form3").show();
  document.getElementById("form3").style.display = "block"; 

  // $("#name").val();
  const userName = document.getElementById("name").value; 

  // $("#nameInsert").text(userName); 
  document.getElementById("nameInsert").innerText = userName; 
}

function handleForm2Submission() { 
  event.preventDefault();
  // $("input:radio[name=devType]:checked").val();
  var devTypeSelection = document.querySelectorAll('input[name=devType]:checked')[0].value;

  if (devTypeSelection === "frontEnd") {
    // $(location).attr('href', 'frontend.html')
    // this changes html pages
    window.location.href = 'frontend.html'
  } else if (devTypeSelection === "backEnd") {
    // $(location).attr('href', 'backend.html')
    // this changes html pages
    window.location.href = 'backend.html'
  }
}