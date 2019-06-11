$(document).ready(function() {
  console.log("document is ready");
  let counter = 0;

  $("#new-tweet-input").on("input", function(event) {
    //console.log(event.originalEvent.data); //The this keyword is a reference to the button
    
    let $textArea = $(this);
    //console.log($textArea.val().length);
    
    let $textLength = $textArea.val().length; 
    let $remainingChar = 140 - $textLength  
    console.log($remainingChar);
    
  

    let charCounter = ($(this).siblings(".counter"))
    charCounter[0].innerHTML = $remainingChar;
    // switch (event.originalEvent.data) {
    //   case typeof event.originalEvent.data === 'number':
    //     counter++;
    //     break;
    //   case null:
    //     counter--;
    //     break;
    // }
  
    // console.log(counter);
  
  });
  





});

