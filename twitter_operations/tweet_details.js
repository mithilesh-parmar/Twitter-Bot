async function getTweetDetails(tweetId, twitterReadWriteClient) {
  const { data, response } = await twitterReadWriteClient.v2.get("tweets", {
    ids: tweetId,
    "tweet.fields": "conversation_id",
  });
  return { data, response };
}

module.exports = { getTweetDetails };
