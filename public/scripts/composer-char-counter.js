


$(document).ready(function () {

  $('.new-tweet').css('display', 'none');

  $('#compose').on('click', () => {
    $('.new-tweet').slideToggle({
      duration: 300,
      complete: () => {
        $('textarea').focus();
      }
    })
  })

  let $tweetText = $('textarea'),
      $counter;
  $tweetText.on('input', function() {
    let max = $(this).attr('maxlength');
    let currentLength = $(this).val().length;
    
    if (currentLength <= max) {
      let adjustCount = max - currentLength;
      $counter = $(this).siblings('.counter');
        if (adjustCount <= 10) {
          $counter.addClass('red');
        } else {
          $counter.removeClass('red');
        }
      $counter.text(adjustCount);
    } else if (currentLength === max){
      alert('You have reached the maximum number of characters');
    } 
    return;
  });

});


