const axios = require("axios");

const FALLBACK_KEYWORDS = [
  "真实测评",
  "平替推荐",
  "懒人教程",
  "学生党必看",
  "通勤必备",
  "省钱技巧",
  "新手入门",
  "高颜值"
];

function normalizeKeywords(items) {
  return Array.from(
    new Set(
      items
        .map((item) => String(item || "").trim())
        .filter(Boolean)
        .slice(0, 12)
    )
  );
}

async function fetchFromPublicApi(topic) {
  const url = "https://api.datamuse.com/words";
  const response = await axios.get(url, {
    params: {
      ml: topic,
      max: 12
    },
    timeout: 5000
  });

  const words = Array.isArray(response.data)
    ? response.data.map((item) => item.word)
    : [];

  return normalizeKeywords(words);
}

module.exports = async function getTrendingKeywords(topic) {
  const cleanTopic = String(topic || "").trim();

  try {
    if (cleanTopic) {
      const apiKeywords = await fetchFromPublicApi(cleanTopic);
      if (apiKeywords.length >= 5) {
        return { keywords: apiKeywords };
      }
    }
  } catch (_) {
    // Fallback to simulated trending keywords when API is unavailable.
  }

  const simulated = normalizeKeywords([
    cleanTopic,
    ...FALLBACK_KEYWORDS,
    "爆款",
    "干货",
    "收藏级"
  ]);

  return {
    keywords: simulated
  };
};
