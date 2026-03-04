# XiaoHongShu Viral Post Generator

Advanced OpenClaw skill for generating high-performing Xiaohongshu (Little Red Book) posts from a single topic.

## New Features
- Trending keyword discovery:
  - Pulls related keywords from a public API with simulation fallback.
- AI content generation:
  - Uses OpenAI `gpt-4o` to generate viral-style `title` and `content`.
- Hashtag ranking:
  - Builds candidate hashtags and ranks them by simulated popularity score.
- Cover image prompt:
  - Generates a Midjourney/DALL-E-ready prompt for Xiaohongshu cover visuals.
- Posting strategy:
  - Produces best posting time, target audience, and engagement hook.

## Install
1. Keep this folder at:
   - `skills/xhs-viral-post`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (or your OpenClaw secret/config system):
   - `OPENAI_API_KEY`
   - `SKILLPAY_KEY`

## Use in OpenClaw
1. Trigger with one of:
   - `小红书笔记`
   - `发小红书`
   - `xhs post`
2. Input:
   ```json
   {
     "topic": "夏日通勤穿搭"
   }
   ```
3. Output:
   ```json
   {
     "title": "...",
     "content": "...",
     "hashtags": ["#...", "#...", "#...", "#...", "#..."],
     "coverPrompt": "...",
     "strategy": {
       "bestTime": "20:30",
       "audience": "22-30 urban female professionals",
       "hook": "Ask readers to comment their own method at the end."
     }
   }
   ```

## Pricing (SkillPay)
SkillPay pricing id:
- `66d32381-4e78-4593-9309-63576e85a8b7`

Set `SKILLPAY_KEY` in your OpenClaw environment to enable billing/auth flows.
