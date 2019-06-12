/* Client-side JS logic goes here */

$(document).ready(function () {

  function loadDummyTweets(handleTweets) {
    $.ajax({
      method: 'GET',
      url: './tweets',
      success: function (res) {
        console.log(res);        
        handleTweets(res);
      }
    })
  }

  function renderTweets(tweets) {
    let $tweetSection = $('#tweet-container');
    
    let $tweetElement;
    for (let tweetInfo of tweets) {
      $tweetElement = createTweetElement(tweetInfo);
      $tweetSection.prepend($tweetElement);
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

  loadDummyTweets(renderTweets);

  let $tweetForm = $('#new-tweet-form');
  $tweetForm.submit((ev) => {
    ev.preventDefault();

    let tweetContent = $tweetForm.serialize();

    $.ajax({
        method: $tweetForm.attr('method'),
        url: $tweetForm.attr('action'),
        data: tweetContent,
        success: function(data){
                  let tweetSubmitted = true;
                  console.log('tweet was submitted: ', tweetSubmitted);
          renderTweets(data);
        }
      })
      .fail(function (xhr, status, err) {
        console.log('error status: ', xhr.responseJSON.status);
        console.log('error message: ', xhr.responseJSON.err);
      })
  });

});

