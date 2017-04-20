$.when($.ready).then(function(){

var data = [
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
      "text": "this is the last tweet"
    },
    "created_at": 1492658281699
  }
];

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
      $('#tweet-feed').append(createTweetElement(tweet));
    })
  }

  renderTweets(data);
});