module.exports = async function generateCoverPrompt(topic, title, hashtags) {
  const cleanTopic = String(topic || "").trim();
  const cleanTitle = String(title || "").trim();
  const tagText = (Array.isArray(hashtags) ? hashtags : []).slice(0, 3).join(" ");

  return [
    "Xiaohongshu cover image, vertical 4:5 composition, high click-through design,",
    `theme: ${cleanTopic || "lifestyle"},`,
    `headline concept: ${cleanTitle || "viral xhs post"},`,
    `include visual motifs from: ${tagText || "modern clean aesthetic"},`,
    "bright natural lighting, clean background, stylish props, premium lifestyle photography,",
    "editorial composition, ultra-detailed, realistic, no watermark, no text artifacts"
  ].join(" ");
};
