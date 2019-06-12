/* Client-side JS logic goes here */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
const tweetData = [{
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



$(document).ready(function () {

  function renderTweets(tweets) {
    let $tweetSection = $('#tweet-container');
    let $tweetElement;
    for (let tweetInfo of tweets) {
      $tweetElement = createTweetElement(tweetInfo);
      $tweetSection.append($tweetElement);
    }
  }
  
  function createTweetElement(tweet) {
    let user = tweet.user,
        $tweet = $('<article>').addClass('tweet'),
        $header = $('<header>'),
        $tweetContent = $('<div>').addClass('tweet-content'),
        $footer = $('<footer>').append('' + tweet.created_at + ''),
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
      $tweetContent.append('' + tweet.content.text + ''),
      $footer.append($aFlag, $aRetweet, $aHeart)
    )
    return $tweet;
  }

renderTweets(tweetData);

});

