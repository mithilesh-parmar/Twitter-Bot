const { getTweetDetails } = require("../twitter_operations/tweet_details");
const {
  checkIfParentTweetIsAlreadyRetweeted,
} = require("../twitter_operations/parent_tweet_retweeted.js");
const { retweet } = require("../twitter_operations/retweet.js");

async function executeRetweetBotOperation(
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

  // 5. If yes, Skip
  if (alreadyRetweeted) {
    return;
  }

  // 6. else, Retweet
  await retweet(parentTweetId, twitClient);
}

module.exports = { executeRetweetBotOperation };
