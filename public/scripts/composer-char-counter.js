


$(document).ready(function () {
  let $tweetText = $('textarea');
  let charCount = 0;
  let $counter;
  let adjustedCount;

  $tweetText.on('keydown', function(ev) {   
    $counter = $(this).siblings('.counter');
    if (ev.key === 'Backspace' || ev.key === 'Delete') {
      charCount--;
    } else {
      charCount++;
    }
    adjustedCount = 140 - charCount;
    $counter[0].innerText = adjustedCount;
    if (adjustedCount <= 10) {
      $counter.css('color', 'red');
    }
    return;
  });
});


