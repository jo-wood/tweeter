


$(document).ready(function () {

  let $tweetForm = $('#new-tweet-form');

  $tweetForm.submit((ev) => {
    ev.preventDefault();
        
    let tweetContent = $tweetForm.serialize();

    $.ajax({        
      method: $tweetForm.attr('method'),
      url: $tweetForm.attr('action'),
      data: tweetContent
    })
    .done(function() {
      console.log('tweet was submitted');

    })
    .fail(function(xhr, status, err){
      console.log('error status: ', xhr.responseJSON.status);    
      console.log('error message: ', xhr.responseJSON.err);
    })
  });
});