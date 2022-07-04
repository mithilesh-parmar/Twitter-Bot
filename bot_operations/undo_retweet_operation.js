const { getTweetDetails } = require("../twitter_operations/tweet_details");
const {
  checkIfParentTweetIsAlreadyRetweeted,
} = require("../twitter_operations/parent_tweet_retweeted.js");
const { undoRetweet } = require("../twitter_operations/undo_retweet.js");

async function executeUndoRetweetBotOperation(
  tweetId,
  twitterReadWriteClient,
  twitClient
) {
  // 1. Fetch tweet details with id
  const { data } = await getTweetDetails(tweetId, twitterReadWriteClient);

  // 2. Extract parentTweetId
  const parentTweetId = data[0]["conversation_id"];

  // 4. Check if already retweeted
  let alreadyRetweeted = await checkIfParentTweetIsAlreadyRetweeted(
    parentTweetId,
    twitterReadWriteClient,
    twitClient
  );

  // 5. If yes, undo retweet
  if (alreadyRetweeted) {
    undoRetweet(parentTweetId, twitClient);
  } else {
    // 6. else, skip
    return;
  }
}

module.exports = { executeUndoRetweetBotOperation };
