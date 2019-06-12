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

  // function loadTweets(){
  //   let $tweetForm = $('#new-tweet-form');
  //   let serializedForm = $tweetForm.serialize();
  //   // let $tweetText = $('textarea');

  //   $tweetForm.submit((ev) => {

  //     ev.preventDefault();

  //     console.log(ev);


  //     $.ajax({
  //         method: 'GET',
  //         url: ''
  //       })
  //       .done(function (res) {
  //         console.log(res);

  //         // console.log($tweetText[0].value);
  //       })
  //       .fail(function (xhr, desc, err) {
  //         console.log('error: ', xhr);
  //       })
  //   });
  // }

  function renderTweets(tweets) {
    let $tweetSection = $('#tweet-container');
    
    let $tweetElement;
    for (let tweetInfo of tweets) {
      $tweetElement = createTweetElement(tweetInfo);
      $tweetSection.append($tweetElement);
    }
    return;
  }

  function elapsedTime(ms) {
    let todayMillis = Date.now();
    let millisDiff = todayMillis - ms;
    // convert ms to days
    let timeDiff = parseInt( millisDiff / 86400000, 10);
    // let h = timeDiff / 3600;
    // let m = (timeDiff - ( h * 3600)) / 60;
    // let s = timeDiff - (h * 3600) - m * 60;
    //! update this function with precise time later
    let timeElapsed = (`${timeDiff} days ago`);
    return timeElapsed;    
  }
  
  function createTweetElement(tweet) {
    let user = tweet.user,
        $tweet = $('<article>').addClass('tweet'),
        $tweetContent = $('<div>').addClass('tweet-content').append(tweet.content.text),
        $img = $('<img>').attr('src', user.avatars.small),
        $handle = $('<a>').append(user.handle),
        $h3 = $('<h3>').append(user.name, $handle);
        $header = $('<header>').append($img, $h3),
        $aHeart = $('<a>').attr('href', '#').append('<i class="fas fa-heart"></i>'),
        $aRetweet = $('<a>').attr('href', '#').append('<i class="fas fa-retweet"></i>'),
        $aFlag = $('<a>').attr('href', '#').append('<i class = "fas fa-flag" > </i>'),
        $footer = $('<footer>').append(elapsedTime(tweet.created_at), $aHeart, $aRetweet, $aFlag);
    $tweet
    .append(
      $header,
      $tweetContent,
      $footer
    )
    return $tweet;
  }

renderTweets(tweetData);

});

