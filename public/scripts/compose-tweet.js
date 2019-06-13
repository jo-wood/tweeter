$(document).ready(function () {
// hide compose tweet box so 'toggle' renders the slide in only once
  $('.new-tweet').css('display', 'none');
  $('#compose').on('click', () => {
    $('.new-tweet').slideToggle({
      duration: 300,
      complete: () => {
        $('textarea').focus();
      }
    })
  })
//
// character counter
//
  let $tweetText = $('textarea');
  let $counter;
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
    } 
    return;
  });
});
