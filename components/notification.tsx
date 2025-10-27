"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface NotificationProps {
  mood: string;
  onClose: () => void;
}

const moodMessages: Record<
  string,
  { title: string; message: string; emoji: string }
> = {
  happy: {
    title: "That's wonderful! 🌟",
    message: "Keep spreading that positive energy. You're doing great!",
    emoji: "✨",
  },
  calm: {
    title: "Beautiful peace 🧘",
    message: "You're in a great place. Cherish this moment of tranquility.",
    emoji: "🌿",
  },
  stressed: {
    title: "We're here for you 💙",
    message:
      "Take a deep breath. Consider talking to our AI or scheduling with a counselor.",
    emoji: "🤝",
  },
  sad: {
    title: "It's okay to feel this way 💙",
    message:
      "Your feelings are valid. Reach out for support whenever you need it.",
    emoji: "🫂",
  },
  anxious: {
    title: "You're not alone 🌈",
    message: "Anxiety is temporary. Let's work through this together.",
    emoji: "💪",
  },
};

export default function Notification({ mood, onClose }: NotificationProps) {
  const moodData = moodMessages[mood] || moodMessages.calm;

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 max-w-sm"
      >
        <div className="bg-card border border-border rounded-2xl shadow-soft p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">{moodData.emoji}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                {moodData.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {moodData.message}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
