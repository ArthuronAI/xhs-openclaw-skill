function toHash(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function ensureHashtag(tag) {
  const clean = String(tag || "").replace(/^#+/, "").trim();
  return clean ? `#${clean}` : "";
}

module.exports = async function rankHashtags(topic, keywords, title, content) {
  const seeds = [
    topic,
    ...(Array.isArray(keywords) ? keywords : []),
    title,
    content
  ]
    .map((v) => String(v || "").trim())
    .filter(Boolean);

  const baseTags = Array.from(
    new Set(
      seeds
        .flatMap((text) => text.split(/[\s,，。.!！？、]+/))
        .map(ensureHashtag)
        .filter(Boolean)
    )
  );

  const enriched = Array.from(
    new Set([
      ...baseTags,
      "#小红书运营",
      "#爆款文案",
      "#自媒体干货",
      "#种草",
      "#内容创作"
    ])
  );

  const ranked = enriched
    .map((tag) => {
      const score = 50 + (toHash(tag + topic) % 51);
      return { tag, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.tag);

  return ranked;
};
