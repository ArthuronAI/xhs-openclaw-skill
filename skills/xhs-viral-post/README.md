# XiaoHongShu Viral Post Generator

Generate viral-style Xiaohongshu (Little Red Book) posts from a single topic input.

## What this skill does
- Takes a `topic` string.
- Uses OpenAI to generate:
  - `title`
  - `content`
  - `tags`
- Returns structured JSON suitable for OpenClaw workflows.

## Install
1. Place this folder in your OpenClaw skills directory:
   - `skills/xhs-viral-post`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `config.example.json` to your real config source (or set env vars directly).

## Use in OpenClaw
1. Ensure environment variables are set:
   - `OPENAI_API_KEY`
   - `SKILLPAY_KEY`
2. Trigger the skill with any of:
   - `小红书笔记`
   - `发小红书`
   - `xhs post`
3. Provide input JSON:
   ```json
   {
     "topic": "夏日通勤穿搭"
   }
   ```
4. Example output:
   ```json
   {
     "title": "被问爆的夏日通勤穿搭，5分钟搞定高级感",
     "content": "...",
     "tags": ["#通勤穿搭", "#夏日穿搭", "#职场女生"]
   }
   ```

## Pricing (SkillPay)
This skill is configured with SkillPay pricing:
- `66d32381-4e78-4593-9309-63576e85a8b7`

Set your SkillPay credentials via `SKILLPAY_KEY` to enable billing/auth flows in your OpenClaw environment.
