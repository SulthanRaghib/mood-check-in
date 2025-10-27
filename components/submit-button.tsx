"use client";

import { motion } from "framer-motion";

interface SubmitButtonProps {
  onClick: () => void;
  isLoading: boolean;
  isDisabled: boolean;
}

export default function SubmitButton({
  onClick,
  isLoading,
  isDisabled,
}: SubmitButtonProps) {
  return (
    <motion.div
      className="flex justify-center"
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
    >
      <button
        onClick={onClick}
        disabled={isDisabled || isLoading}
        className={`px-8 py-3 rounded-full font-semibold text-lg transition-gentle ${
          isDisabled || isLoading
            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            : "bg-primary text-primary-foreground hover:shadow-soft active:shadow-none"
        }`}
      >
        {isLoading ? (
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            Submitting...
          </motion.span>
        ) : (
          "Submit Check-In"
        )}
      </button>
    </motion.div>
  );
}
