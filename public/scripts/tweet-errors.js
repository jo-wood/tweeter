function grabErrorMessage(eventTarget, tweetContent){
  let $errEmpty = $('<p>').addClass('renderError').text('* Why are you tweeting nothing? Add some text!');
  let $errMaxReached = $('<p>').addClass('renderError').text("* You've reached 140 characters - better to be short and sweet");
  // form captures tweetContent in a string with prefix of 'text=' therefore must be greater than 5
    if (tweetContent <= 0) {
      (eventTarget).append($errEmpty[0]);
      return false;
    } else if (tweetContent > 140) {
      (eventTarget).append($errMaxReached[0]);
      return false;
    } else {
      return true;
    }
}