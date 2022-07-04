async function retweet(tweetId, twitClient) {
  twitClient.post(
    "statuses/retweet/:id",
    { id: tweetId },
    function (err, data, response) {
      if (err) {
        return err;
      } else if (data) {
        return data;
      }
      return response;
    }
  );
}

module.exports = { retweet };
