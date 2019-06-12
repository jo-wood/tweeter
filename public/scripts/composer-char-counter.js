$(document).ready(function() {
  console.log("document is ready");

  $("#new-tweet-input").on("input", function(event) {
    //console.log(event.originalEvent.data); //The this keyword is a reference to the button
    
    const $textArea = $(this);
    //console.log($textArea.val().length);
    
    const $textLength = $textArea.val().length; 
    const $remainingChar = 140 - $textLength;
    console.log($remainingChar);
    
    const charCounter = $(this).siblings(".counter");
    
    // Update counter to include remaining character
    charCounter[0].innerHTML = $remainingChar;
    
    // Change counter to red when value is negative
    if ($remainingChar < 0) {
      charCounter.addClass("red");
    } else {
      charCounter.removeClass("red"); 
    }
    // $remainingChar < 0
    //   ? charCounter.addClass("red")
    //   : charCounter.removeClass("red"); 
  });
});
