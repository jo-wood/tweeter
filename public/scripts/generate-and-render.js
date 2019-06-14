// 
// helper fns
//
function escape(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
function elapsedTime(ms) {
  let todayMillis = Date.now();
  let millisDiff = todayMillis - ms;
  let timeDiff = parseInt(millisDiff / 86400000, 10);
  //! update this function with precise time later
  let timeElapsed = (`${timeDiff} days ago`);
  return timeElapsed;
}
//
function renderTweets(tweets) {
  console.log((tweets));
  
  let $tweetSection = $('#tweet-container');
  for (let key in tweets) {
    let newTweet = createTweetElement(tweets[key]);
    $tweetSection.prepend(newTweet);
  }
}

  function createTweetElement(tweet) {    
    let $tweetContentText = escape(tweet.content.text);
    console.log($tweetContentText);
    
    let $tweet = $('<article>').addClass('tweet'),
        $tweetContent = $('<div>').addClass('tweet-content').append($tweetContentText),
        $img = $('<img>').attr('src', tweet.user.avatars.small),
        $handle = $('<a>').append(tweet.user.handle),
        $h3 = $('<h3>').append(tweet.user.name, $handle)
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
