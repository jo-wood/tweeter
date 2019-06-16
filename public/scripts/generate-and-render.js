// 
//***** helper fns  ******/
//
function escape(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function elapsedTime(ms) {
  let todayMillis = Date.now();
  let millisDiff = (todayMillis - ms) / 1000;
  let sec = parseInt(millisDiff, 10);
  let timeDiff = '';
  let mins =  parseInt(sec / 60);
  let hours =parseInt(sec / 3600);
  let days = parseInt(hours / 24);

    if (days !== 0){
      if (days > 365){
        timeDiff += ' 1+ years ago'
        return timeDiff;
      } else {
        timeDiff += days + ' days ago'
      }
    } else if (hours !== 0){
      timeDiff += hours + ' hours ago'
    } else if (mins !== 0) {
      timeDiff += mins + ' mins ago'
    } else {
      timeDiff += sec + ' seconds ago'
    }
  return timeDiff;
}

function renderTweets(tweets) {
  let $tweetSection = $('#tweet-container');
  for (let key in tweets) {
    let newTweet = createTweetElement(tweets[key]);
    $tweetSection.prepend(newTweet);
  }
}

function createTweetElement(tweet) {    
  let $tweet = $('<article>').addClass('tweet'),
      $tweetContent = $('<div>').addClass('tweet-content').append(escape(tweet.content.text)),
      $img = $('<img>').attr('src', tweet.user.avatars.small),
      $handle = $('<a>').append(tweet.user.handle),
      $h3 = $('<h3>').append(tweet.user.name, $handle)
      $header = $('<header>').addClass('c-theme').append($img, $h3),
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
