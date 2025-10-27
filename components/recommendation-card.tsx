"use client";

import { motion } from "framer-motion";

interface RecommendationCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function RecommendationCard({
  title,
  description,
  icon,
}: RecommendationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border rounded-2xl shadow-soft p-6 cursor-pointer hover:shadow-lg transition-gentle"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <motion.button
            whileHover={{ x: 4 }}
            className="text-primary font-medium text-sm hover:underline"
          >
            Learn more →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
