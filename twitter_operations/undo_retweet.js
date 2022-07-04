async function undoRetweet(tweetId, twitClient) {
  twitClient.post(
    "statuses/unretweet/:id",
    { id: tweetId },
    function (err, reply) {
      if (err) {
        return err;
      }
    }
  );
}

module.exports = { undoRetweet };
