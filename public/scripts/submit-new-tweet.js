$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const $tweetMessage = $('#new-tweet-input').serialize(); 
    console.log($tweetMessage);

    $.ajax({
      type: 'POST',
      url: `/tweets`,
      data: $tweetMessage
    })
   
  });


});