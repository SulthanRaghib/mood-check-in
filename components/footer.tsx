"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-center mt-16 pt-8 border-t border-border"
    >
      <p className="text-sm text-muted-foreground mb-4">
        EmergencyyCall • Your mental health matters
      </p>
      <div className="flex justify-center gap-6 text-xs text-muted-foreground">
        <a href="#" className="hover:text-primary transition-gentle">
          Privacy
        </a>
        <a href="#" className="hover:text-primary transition-gentle">
          Terms
        </a>
        <a href="#" className="hover:text-primary transition-gentle">
          Support
        </a>
      </div>
    </motion.footer>
  );
}
