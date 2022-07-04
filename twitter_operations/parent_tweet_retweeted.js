async function checkIfParentTweetIsAlreadyRetweeted(
  tweetId,
  twitterReadWriteClient,
  twitClient
) {
  let user = await twitterReadWriteClient.currentUser();
  let currentUserId = user.id;
  try {
    const result = await twitClient.get("statuses/retweeters/ids", {
      id: tweetId,
    });
    let userIds = result["data"]["ids"];
    let alreadyRetweeted = userIds.includes(currentUserId);
    return alreadyRetweeted;
  } catch (err) {
    return err;
  }
}

module.exports = { checkIfParentTweetIsAlreadyRetweeted };
