
$(document).ready(function () {

  let $tweetForm = $('#new-tweet-form');
  let $tweetText = $('textarea');

  $tweetForm.submit((ev) => {

    ev.preventDefault();
    console.log(ev.currentTarget);
    
    $.ajax({
      method: 'GET',
      url: "index.html",
      data: $tweetForm.serialize()
    })
    .done(function(res) {
      console.log($tweetText[0].value);
    })
    .fail(function(xhr, desc, err){
      console.log('error: ', xhr);      
    })
  });
});