/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function () {

  function createTweetElement(tweet) {

    const { name, handle } = tweet.user;
    const avatar = tweet.user.avatars.small;
    const tweetMessage = tweet.content.text;
    const dateCreated = tweet.created_at;

    const $tweetArticle =
      `
    <article class="tweet">
      <header>
        <h3>${name}</h3>
      </header>
      <main> 
        <p>${tweetMessage}</p>
      </main>
      <footer>${dateCreated}</footer> 
    </article>      
    `


    return $tweetArticle;
  }

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

  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});