function createTweetElement (data) {
  return `<article class="tweet">
        <header>
          <img class="display-pic" src="${data.user.avatars.small}">
          <h2>${data.user.name}</h2>
          <a class="handle" href="#">${data.user.handle}</a>
        </header>
        <p>${data.content.text}</p>
        <footer>
          <span>${getTimeDiff(data.created_at)}</span>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-flag" aria-hidden="true"></i>
        </footer>
      </article>`;
}

function getTimeDiff (time) {
  let currentTime = Date.now();
  let diff = currentTime - time ;
  if (diff < 60000) {
    return "just now";
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)} minutes ago`;
  } else if (diff < 86400000) {
    // time in hours
    return `${Math.floor(diff / 3600000)} hours ago`;
  } else if (diff < 31536000000) {
    // time in days
    return `${Math.floor(diff / 86400000)} days ago`;
  } else {
    return `${Math.floor(diff / 31536000000)}+ years ago`;
  }
}

function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    $('#tweet-feed').prepend(createTweetElement(tweet));
  })
}

function loadTweets(bol) {
    $.ajax({
      url: '/tweets',
      method: 'GET',
    }).then(data => {
      renderTweets(data);
    })
}

$(document).ready(function() {

  $('#new-tweet-form').on('submit', function(event) {
    event.preventDefault();
    if ($(this).children('textarea').val() === ''){
      $(this).children('.warning').text('Your tweet is empty :(');
      $(this).children('.warning').removeClass('hidden');
    }else if ($(this).children('textarea').val().length > 140){

    }else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize()
      }).then(function(data) {
        loadTweets();
        $('.new-tweet').find('textarea').val('');
      })
    }
  });

  $('#nav-bar').find('i').on('click', event => {
    $('.new-tweet').toggle();
    $('.new-tweet').find('textarea').focus();
  })

  loadTweets();
});