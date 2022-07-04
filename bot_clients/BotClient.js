const Twit = require("twit");
const { TwitterApi } = require("twitter-api-v2");

const appKey = "";
const appSecret = "";
const accessSecret = "";
const accessToken = "";

var BotTwit = new Twit({
  consumer_key: appKey,
  consumer_secret: appSecret,
  access_token: accessToken,
  access_token_secret: accessSecret,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

const BotClient = new TwitterApi({
  appKey: appKey,
  appSecret: appSecret,
  accessSecret: accessSecret,
  accessToken: accessToken,
});

const BotReadWriteClient = BotClient.readWrite;

module.exports = {
  BotClient: BotClient,
  BotTwit: BotTwit,
  BotReadWriteClient: BotReadWriteClient,
};
