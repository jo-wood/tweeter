/* Client-side JS logic goes here */
'use strict';
//
$(document).ready(function () {
//
  $('textarea').focus(() => {
    if ($('#new-tweet-form').children().length > 3) {
      $('.renderError').remove();
    }
  });
//
  function loadInitialTweets() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: (res) => renderTweets(res)
    })
  }
  loadInitialTweets(); 
//
  $('#new-tweet-form').submit((ev) => {
    ev.preventDefault();
    let tweetContent = $('#new-tweet-form').serialize();
    let noErrors = grabErrorMessage(ev.target, tweetContent.length);
      if (noErrors) {
        $.ajax({
          type: 'POST',
          url: '/tweets',
          data: tweetContent,
          success: (event) => {
            renderTweets([event]);
            $("#new-tweet-form").trigger('reset');
            $('.new-tweet').css('display', 'none');
            $('.counter').text(140);
          }
      });
    } 
  });
});