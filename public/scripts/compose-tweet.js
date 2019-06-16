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
    let max = 140;
    let currentLength = $(this).val().length;
    let adjustCount = max - currentLength;
    $counter = $(this).siblings('.counter');
      if (currentLength > 130) {
        $counter.addClass('alert');
      } else {
        $counter.removeClass('alert');
      }
    $counter.text(adjustCount);
    return;
  });
});