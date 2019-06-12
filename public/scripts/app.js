/* Client-side JS logic goes here */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


$(document).ready(function () {

  function createTweetElement(data) {
    let user = data.user,
        $tweetSection = $('#tweet-container'),
        $tweet = $('<article>').addClass('tweet'),
        $header = $('<header>'),
        $tweetContent = $('<div>').addClass('tweet-content'),
        $footer = $('<footer>').append('' + data.created_at + ''),
        $img = $('<img>'),
        $h3 = $('<h3>'),
        $handle = $('<a>'),
        $aHeart = $('<a>').append('<i class="fas fa-heart"></i>'),
        $aRetweet = $('<a>').append('<i class="fas fa-retweet"></i>'),
        $aFlag = $('<a>').append('<i class = "fas fa-flag" > </i>');

    $tweet.append(
      $header.append(
        $img.attr('src', user.avatars.small), 
        $h3.append('' + user.name + ''),
        $h3.append(
          $handle.append(
            '' + user.handle + '')
        )
      ),
      $tweetContent.append('' + data.content.text + ''),
      $footer.append($aFlag, $aRetweet, $aHeart)
    )
    $tweetSection.append($tweet);
    return $tweet;
  }



let $renderTweet = createTweetElement(tweetData);

});

