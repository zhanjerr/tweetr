"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.collection('tweets').insert(newTweet);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      let tweets;
      db.collection('tweets').find().toArray().then(tweets => {
        tweets = tweets;
        simulateDelay(() => {
          const sortNewestFirst = (a, b) => a.created_at - b.created_at;
          callback(null, tweets.sort(sortNewestFirst));
        });
      }).catch (err => {throw err});
    }

  };
}
