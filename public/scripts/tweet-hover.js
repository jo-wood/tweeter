

$(document).ready(function () {
  let $tweet = $('.tweet');

  $tweet.hover(function () {
  $(this).css('opacity', '1.0');
  $(this).css('border-width', 'medium');
  $(this).find('i').css('visibility', 'visible');


  }, function() {
    $(this).css('opacity', '0.7');
    $(this).css('border-width', 'thin');
    $(this).find('i').css('visibility', 'hidden');
  });

});
