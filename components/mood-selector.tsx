"use client";

import { motion } from "framer-motion";

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodChange: (mood: string) => void;
  isDisabled?: boolean;
}

const moods = [
  {
    id: "happy",
    label: "Happy",
    emoji: "😊",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    id: "calm",
    label: "Calm",
    emoji: "😌",
    color: "from-green-100 to-green-50",
  },
  {
    id: "stressed",
    label: "Stressed",
    emoji: "😰",
    color: "from-orange-100 to-orange-50",
  },
  { id: "sad", label: "Sad", emoji: "😢", color: "from-blue-100 to-blue-50" },
  {
    id: "anxious",
    label: "Anxious",
    emoji: "😟",
    color: "from-purple-100 to-purple-50",
  },
];

export default function MoodSelector({
  selectedMood,
  onMoodChange,
  isDisabled = false,
}: MoodSelectorProps) {
  const effectiveSelected = isDisabled ? null : selectedMood;
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {moods.map((mood, index) => (
        <motion.button
          key={mood.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={!isDisabled ? { scale: 1.05 } : undefined}
          whileTap={!isDisabled ? { scale: 0.95 } : undefined}
          onClick={() => !isDisabled && onMoodChange(mood.id)}
          className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-gentle ${
            isDisabled
              ? "pointer-events-none cursor-not-allowed opacity-60 bg-secondary shadow-none"
              : "cursor-pointer"
          } ${
            effectiveSelected === mood.id
              ? "bg-primary shadow-soft ring-2 ring-primary"
              : "bg-secondary hover:bg-muted shadow-soft"
          }`}
        >
          <span className="text-4xl">{mood.emoji}</span>
          <span
            className={`text-sm font-medium ${
              effectiveSelected === mood.id
                ? "text-primary-foreground"
                : "text-foreground"
            }`}
          >
            {mood.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
