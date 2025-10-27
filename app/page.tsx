"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import MoodSelector from "@/components/mood-selector";
import SubmitButton from "@/components/submit-button";
import Notification from "@/components/notification";
import RecommendationCard from "@/components/recommendation-card";
import LayoutContainer from "@/components/layout-container";
import Footer from "@/components/footer";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedMood, setLastSubmittedMood] = useState<string | null>(
    null
  );

  const handleSubmit = async () => {
    if (!selectedMood) return;
    const moodToShow = selectedMood;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // store submitted mood for notification, clear selection so selector shows "none"
    setLastSubmittedMood(moodToShow);
    setShowNotification(true);
    setIsSubmitting(false);

    // clear current selected mood so MoodSelector appears as 'none' after submit
    setSelectedMood(null);
  };

  return (
    <LayoutContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Header />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 mb-8"
        >
          <MoodSelector
            selectedMood={selectedMood}
            onMoodChange={setSelectedMood}
            isDisabled={isSubmitting || showNotification}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <SubmitButton
            onClick={handleSubmit}
            isLoading={isSubmitting}
            isDisabled={!selectedMood || isSubmitting || showNotification}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <RecommendationCard
            title="Talk to AI"
            description="Get personalized support and coping strategies from our AI companion"
            icon="🤖"
          />
          <RecommendationCard
            title="Schedule with Counselor"
            description="Connect with a licensed mental health professional"
            icon="👥"
          />
        </motion.div>

        <Footer />
      </motion.div>

      {showNotification && lastSubmittedMood && (
        <Notification
          mood={lastSubmittedMood as string}
          onClose={() => setShowNotification(false)}
        />
      )}
    </LayoutContainer>
  );
}
