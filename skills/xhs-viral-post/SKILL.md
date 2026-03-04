---
name: XiaoHongShu Viral Post Generator
description: Generate viral Xiaohongshu posts with AI
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

Generate a Xiaohongshu-style viral post from a topic.

## Input
- `topic` (string): The post subject.

## Output (JSON)
- `title` (string)
- `content` (string)
- `tags` (array of strings)

## Runtime
- Entry: `run.js`
- Function: `async function(input)`
