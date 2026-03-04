const OpenAI = require("openai");

function normalizeTags(raw) {
  if (Array.isArray(raw)) {
    return raw.map((t) => String(t).trim()).filter(Boolean);
  }
  if (typeof raw === "string") {
    return raw
      .split(/[\s,，#]+/)
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 12)
      .map((t) => (t.startsWith("#") ? t : `#${t}`));
  }
  return [];
}

module.exports = async function (input) {
  const topic = (input && input.topic ? String(input.topic) : "").trim();
  if (!topic) {
    throw new Error("Missing required input: topic");
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY in environment");
  }

  const client = new OpenAI({ apiKey });

  const prompt = [
    "你是小红书爆款文案专家。",
    `主题: ${topic}`,
    "请输出JSON，字段为title, content, tags。",
    "要求:",
    "1) title: 18-28字，吸引点击，有真实感，不夸大。",
    "2) content: 180-320字，口语化，包含场景、方法、结果、行动号召。",
    "3) tags: 6-10个话题标签，数组格式，每项以#开头。",
    "只返回JSON，不要额外说明。"
  ].join("\n");

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
    max_output_tokens: 700
  });

  const text = (response.output_text || "").trim();
  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch (err) {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("Model response was not valid JSON");
    }
    parsed = JSON.parse(match[0]);
  }

  const title = String(parsed.title || "").trim();
  const content = String(parsed.content || "").trim();
  const tags = normalizeTags(parsed.tags);

  if (!title || !content) {
    throw new Error("Model response missing title or content");
  }

  return {
    title,
    content,
    tags
  };
};
