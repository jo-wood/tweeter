

$(document).ready(function () {

  //? how refactor this redundant code on hover in and out ?//

  let $tweet = $('.tweet');

  $tweet.hover(
    function () {
      let $tweetStyle = $(this);
      let $tweetIcons = $(this).find('i');
      $tweetStyle.css({
        'opacity': '1.0',
        'border-width': 'medium'
      });
      $tweetIcons.css('visibility', 'visible');
    },
    function () {
      let $tweetStyle = $(this);
      let $tweetIcons = $(this).find('i');
      $tweetStyle.css({
        'opacity': '0.7',
        'border-width': 'thin'
      });
      $tweetIcons.css('visibility', 'hidden');
    });
});
