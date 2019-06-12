$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    const $tweetValue = $('#new-tweet-input').val();

    switch (true) {
      case $tweetValue.length === 0:
        alert("Please enter a tweet before submitting");
        break;
      case $tweetValue.length > 140:
        alert("Please submit max 140 characters");
        break;
      case $tweetValue.length <= 140:
        submitTweet();
        break;
    }

    function submitTweet() {
      const $tweetMessage = $('#new-tweet-input').serialize(); 
      console.log($tweetMessage);
    
      $.ajax({
        type: 'POST',
        url: `/tweets`,
        data: $tweetMessage
      })
    }
  });


});