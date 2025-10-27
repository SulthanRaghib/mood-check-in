"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
        How are you feeling today?
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
        Take a moment to check in with yourself. Your emotional well-being
        matters.
      </p>
    </motion.div>
  );
}
