const OpenAI = require("openai");

function parseJson(text) {
  const clean = String(text || "").trim();
  if (!clean) {
    throw new Error("Empty model response");
  }

  try {
    return JSON.parse(clean);
  } catch (_) {
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("Model response was not valid JSON");
    }
    return JSON.parse(match[0]);
  }
}

module.exports = async function generatePost(topic, keywords) {
  const cleanTopic = String(topic || "").trim();
  if (!cleanTopic) {
    throw new Error("Missing required input: topic");
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY in environment");
  }

  const client = new OpenAI({ apiKey });
  const keywordList = (Array.isArray(keywords) ? keywords : []).slice(0, 10);

  const prompt = [
    "你是小红书爆款文案专家。",
    `主题: ${cleanTopic}`,
    `趋势关键词: ${keywordList.join("、")}`,
    "输出严格JSON，字段: title, content。",
    "要求:",
    "1) title: 18-28字，口语化，有钩子。",
    "2) content: 220-380字，包含痛点、步骤、效果、互动提问。",
    "3) 融入2-4个趋势关键词，语气真实，不要夸张。",
    "只返回JSON。"
  ].join("\n");

  const response = await client.responses.create({
    model: "gpt-4o",
    input: prompt,
    max_output_tokens: 900
  });

  const parsed = parseJson(response.output_text);
  const title = String(parsed.title || "").trim();
  const content = String(parsed.content || "").trim();

  if (!title || !content) {
    throw new Error("Model response missing title or content");
  }

  return { title, content };
};
