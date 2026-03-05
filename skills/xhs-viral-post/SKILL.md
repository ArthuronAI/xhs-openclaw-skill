---
name: XiaoHongShu Viral Post Generator
description: Generate viral Xiaohongshu posts using AI including titles, content, hashtags, and posting strategy.
version: 1.0
author: ArthuronAI
triggers:
  - 小红书笔记
  - 发小红书
  - xhs post
pricing:
  skillpay: 66d32381-4e78-4593-9309-63576e85a8b7
---

# XiaoHongShu Viral Post Generator

This OpenClaw skill generates **high-engagement Xiaohongshu posts** from a topic using AI.

It is designed for creators, social media marketers, and AI automation builders who want to quickly produce Xiaohongshu-style content.

---

# What this skill does

Given a topic, the skill will:

- Generate a viral-style Xiaohongshu title
- Write a natural Xiaohongshu post body
- Suggest high-performing hashtags
- Suggest a cover image prompt
- Provide posting strategy insights

The generated content follows common Xiaohongshu writing patterns including conversational tone, emojis, and engagement hooks.

---

# Input

```
{
  "topic": "夏日通勤穿搭"
}
```

Field description:

| Field | Type | Description |
|------|------|-------------|
| topic | string | The subject or theme of the Xiaohongshu post |

---

# Output

```
{
  "title": "...",
  "content": "...",
  "hashtags": ["#...", "#..."],
  "coverPrompt": "...",
  "strategy": {
    "bestTime": "20:30",
    "audience": "...",
    "hook": "..."
  }
}
```

Field description:

| Field | Description |
|------|-------------|
| title | Generated viral title |
| content | Main Xiaohongshu-style post content |
| hashtags | Recommended hashtags |
| coverPrompt | Suggested prompt for cover image |
| strategy | Posting strategy recommendation |

---

# Example use cases

This skill is useful for:

- Xiaohongshu content creators
- Social media marketing teams
- AI agent workflows
- Automated content pipelines

Example scenarios:

- Generate daily Xiaohongshu posts automatically
- Integrate with AI agents that schedule social media content
- Brainstorm viral post ideas quickly

---

# Runtime

Entry point:

```
run.js
```

The main function receives the user input topic and orchestrates the following steps:

1. Fetch trending keywords
2. Generate viral content using LLM
3. Rank hashtags
4. Generate cover prompt
5. Produce posting strategy

---

# Pricing

This skill uses SkillPay billing.

Each execution costs:

```
0.05 USDT
```

Pricing id:

```
66d32381-4e78-4593-9309-63576e85a8b7
```