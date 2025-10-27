export const moodOptions = [
  { id: "happy", label: "Happy", emoji: "😊" },
  { id: "calm", label: "Calm", emoji: "😌" },
  { id: "stressed", label: "Stressed", emoji: "😰" },
  { id: "sad", label: "Sad", emoji: "😢" },
  { id: "anxious", label: "Anxious", emoji: "😟" },
]

export const motivationalQuotes = [
  "You are stronger than you think.",
  "This moment is temporary. You will get through it.",
  "Your feelings are valid and important.",
  "Be kind to yourself today.",
  "Progress, not perfection.",
  "You deserve care and compassion.",
  "One day at a time.",
  "Your mental health is a priority.",
]

export function getRandomQuote(): string {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
}
