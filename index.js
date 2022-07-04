const { BotReadWriteClient, BotTwit } = require("./bot_clients/BotClient.js");

const {
  executeUndoRetweetBotOperation,
} = require("./bot_operations/undo_retweet_operation.js");
const {
  executeRetweetBotOperation,
} = require("./bot_operations/retweet_operation.js");

var bangaloreMentionTweetStreams = BotTwit.stream("statuses/filter", {
  track: ["@BangaloreRoomi"],
});

var bangaloreFlatMateFoundTweetStreams = BotTwit.stream("statuses/filter", {
  track: ["@BangaloreRoomi found"],
});

bangaloreMentionTweetStreams.on("tweet", function (tweet) {
  const tweetId = tweet["id_str"];

  executeRetweetBotOperation(tweetId, BotReadWriteClient, BotTwit);
});

bangaloreFlatMateFoundTweetStreams.on("tweet", function (tweet) {
  const tweetId = tweet["id_str"];

  executeUndoRetweetBotOperation(tweetId, BotReadWriteClient, BotTwit);
});
