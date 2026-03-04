const getTrendingKeywords = require("./trending");
const generatePost = require("./generator");
const rankHashtags = require("./hashtagRanker");
const generateCoverPrompt = require("./coverPrompt");
const buildStrategy = require("./strategy");

module.exports = async function (input) {
  const topic = (input && input.topic ? String(input.topic) : "").trim();
  if (!topic) {
    throw new Error("Missing required input: topic");
  }

  const trending = await getTrendingKeywords(topic);
  const keywords = Array.isArray(trending.keywords) ? trending.keywords : [];

  const post = await generatePost(topic, keywords);
  const title = String(post.title || "").trim();
  const content = String(post.content || "").trim();

  const hashtags = await rankHashtags(topic, keywords, title, content);
  const coverPrompt = await generateCoverPrompt(topic, title, hashtags);
  const strategy = await buildStrategy(topic, hashtags);

  return {
    title,
    content,
    hashtags,
    coverPrompt,
    strategy
  };
};
