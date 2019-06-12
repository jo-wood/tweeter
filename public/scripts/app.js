$(document).ready(function () {
    
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
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
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  
  // Renders article element for each tweet, placed in tweet-container
  function createTweetElement(tweet) {

    const { name, handle } = tweet.user;
    const avatar = tweet.user.avatars.small;
    const tweetMessage = tweet.content.text;
    const dateCreated = tweet.created_at;

    const $tweetArticle =
      `
    <article class="tweet">
      <header>
        <div>
          <img class="avatar" src=${avatar}>
          <h3>${name}</h3>
        </div>
        <h4>${handle}</h4>
      </header>
      <main> 
        <p>${tweetMessage}</p>
      </main>
      <footer>${dateCreated}</footer> 
    </article>      
    `

    return $tweetArticle;
  }
  
  // Loops through tweet array append to tweets-container
  function renderTweets(tweets) {
    tweets.forEach((entry) => {
      let $tweet = createTweetElement(entry);
      $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    })
  }

  // Get Request to retrieve tweet array from DB
  function loadTweets() {
    $.ajax({
      type: 'GET',
      url: `/tweets`,
      dataType: 'JSON'
    })
    .done( (tweetDB) => {
      renderTweets(tweetDB);
    });
  }


  loadTweets();


});