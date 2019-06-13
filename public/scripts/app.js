/* Client-side JS logic goes here */

$(document).ready(function () {

  function loadTweets() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: (res) => {
        console.log(res);
        
        renderTweets(res);
      }
    })
  }
  loadTweets();

  function renderTweets(tweets) {
    let $tweetSection = $('#tweet-container');

    tweets.forEach(tweet => {
      let newTweet = createTweetElement(tweet);
      $tweetSection.prepend(newTweet);
    });    
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
    let $tweet = $('<article>').addClass('tweet'),
        $tweetContent = $('<div>').addClass('tweet-content').append(tweet.content.text),
        $img = $('<img>').attr('src', tweet.user.avatars.small),
        $handle = $('<a>').append(tweet.user.handle),
        $h3 = $('<h3>').append(tweet.user.name, $handle);
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


    $('#new-tweet-form').submit((ev) => {
      ev.preventDefault();

      let tweetContent = $('#new-tweet-form').serialize();

      $.ajax({
          type: 'POST',
          url: '/tweets',
          data: tweetContent,
          success: (event) => {
            renderTweets([event]); 
            $('textarea').val("");
          }
      })
        .fail(function (xhr, status, err) {
          console.log('error status: ', xhr.responseJSON.status);
          console.log('error message: ', xhr.responseJSON.err);
        })
    });

});



  // $(document).ajaxSuccess(function( event, xhr, settings ) {
    

  //   // if (condition) {
      
  //   // }
  //   console.log(settings);
    
    

  // });