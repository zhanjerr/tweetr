"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // We have a connection to the "tweeter" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);


  var net_tweet = {
    "user": {
      "name": "Bob",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@Bsmith"
    },
    "content": {
      "text": "newest tweet yo"
    },
    "created_at": 1461016532227
  }
  // ==> Refactored and wrapped as new, tweet-specific function:

  function saveTweet(tweet){
    db.collection('tweets').insert(tweet);
    console.log('saved tweet');
  }

  saveTweet(net_tweet);
  // function getTweets() {
  // db.collection("tweets").find().toArray();
  //   .then(tweets => {console.log(tweets)})
  // }
  // getTweets();
  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

  // getTweets((err, tweets) => {
  //   if (err) throw err;

    // console.log(tweets);
    // console.log("Logging each tweet:");
    // for (let tweet of tweets) {
    //   console.log(tweet);
    // })

    db.close();
  });
// };