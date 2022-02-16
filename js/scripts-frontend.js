// $(document).ready(function(){
//   $("#btn-css").click(function(event) {
//     $("#CSS").fadeIn(5000);
//     $("#CSSinfo").toggle();
//     });
//   $("#btn-design").click(function(event) {
//     $("#design").fadeIn(5000);
//     $("#designInfo").toggle();
//     });
// });

window.addEventListener('load', handleEvents, false); // doc.ready

function handleEvents() {
  // $("#btn-css").click()
  const cssBTN = document.querySelector("#btn-css");
  // hide functionality is new and shows that we can add two 'click' event listeners
  // to the same element, which we cannot do with an onclick event handler.
  cssBTN.addEventListener('click', () => 
    hideOtherResults("#design", "#designInfo")
  );
  cssBTN.addEventListener('click', () => 
    showResults("#CSS", "#CSSinfo")
  );

  // $("#btn-design").click()
  const designBTN = document.querySelector("#btn-design");

  // Here we're showing a different way of writing the above. 
  // Note that if we did call designBTN.onclick again and gave it a new value, 
  // the click event listener would have the new value and no access to the old one. 
  // This may seem obvious, because it is, but it is also one of the differences between event handlers (onclick) and event listeners (the .addEventListener method)
  designBTN.onclick = function () { 
    hideOtherResults("#CSS", "#CSSinfo");
    showResults("#design", "#designInfo");
  };
}

function showResults(element1, element2) {
  // $("#CSS").fadeIn(5000);
  // $("#design").fadeIn(5000);
  // we're simplifying by doing a .show() in vanilla JS
  const result = document.querySelector(element1)
  result.style.display = "block";

  // $("#CSSinfo").toggle();  
  // $("#designInfo").toggle();
  // we're simplifying by doing a .show() in vanilla JS
  document.querySelector(element2).style.display = "block";
}

// this functionality was not included in the original jQuery
function hideOtherResults(element1, element2) {
  const result = document.querySelector(element1)
  result.style.display = "none";
  const infoBox = document.querySelector(element2)
  infoBox.style.display = "none";
}