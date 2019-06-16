//
function grabErrorMessage(eventTarget, contentLength, inputString){
  let $errEmpty = $('<p>').addClass('renderError').text('* Why are you tweeting nothing? Add some text!');
  let $errMaxReached = $('<p>').addClass('renderError').text("* You've reached 140 characters - better to be short and sweet");
  // check if no input or input is just an empty string
    if (contentLength === 0 || /^\s*$/.test(inputString)) {
      (eventTarget).append($errEmpty[0]);
      return false;
    } else if (contentLength > 140) {
      (eventTarget).append($errMaxReached[0]);
      return false;
    } else {
      return true;
    }
}