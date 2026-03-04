function hash(text) {
  let n = 0;
  for (let i = 0; i < text.length; i += 1) {
    n = (n * 33 + text.charCodeAt(i)) >>> 0;
  }
  return n;
}

module.exports = async function buildStrategy(topic, hashtags) {
  const source = `${topic || ""}|${(hashtags || []).join("|")}`;
  const value = hash(source);

  const bestTimes = ["07:30", "12:20", "18:45", "20:30", "22:00"];
  const audiences = [
    "18-24 students and first-job creators",
    "22-30 urban female professionals",
    "20-35 lifestyle and beauty seekers",
    "young parents looking for practical tips",
    "new creators learning social growth"
  ];
  const hooks = [
    "Open with a relatable pain point in the first sentence.",
    "Ask readers to comment their own method at the end.",
    "Share one counter-intuitive tip before the main steps.",
    "Use a before/after contrast to boost saves.",
    "Invite readers to bookmark for a checklist version."
  ];

  return {
    bestTime: bestTimes[value % bestTimes.length],
    audience: audiences[value % audiences.length],
    hook: hooks[value % hooks.length]
  };
};
