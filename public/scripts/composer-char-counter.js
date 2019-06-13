


$(document).ready(function () {

  let $tweetText = $('textarea'),
      $counter;
  $tweetText.on('input', function() {
    let max = $(this).attr('maxlength');
    let currentLength = $(this).val().length;
    
    if (currentLength <= max) {
      let adjustCount = max - currentLength;
      $counter = $(this).siblings('.counter');
        if (adjustCount <= 10) {
          $counter.css('color', 'red');
        }
      $counter.text(adjustCount);
    } else if (currentLength === max){
      alert('You have reached the maximum number of characters');
    }
    return;
  });

});


