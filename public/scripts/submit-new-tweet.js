
$(document).ready(function () {

  let $tweetForm = $('#new-tweet-form');

  $tweetForm.submit((ev) => {
    ev.preventDefault();
      $.ajax({
      method: $tweetForm.attr('method'),
      url: $tweetForm.attr('action'),
      data: $tweetForm.serialize()
    })
    .done(function() {
      console.log('tweet was sent');

    })
    .fail(function(xhr){
      console.log('error: ', xhr);      
    })
  });
});