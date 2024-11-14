"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isInitiallyOpen?: boolean;
}

const Faq = () => {
  const faqItems: FAQItemProps[] = [
    {
      question: "What is SparkUp?",
      answer:
        "SparkUp is a platform designed to help startups gain visibility, submit ideas, and connect with like-minded entrepreneurs through virtual competitions and community voting.",
      isInitiallyOpen: true, // Open this question by default
    },
    {
      question: "Who can use SparkUp?",
      answer:
        "SparkUp is ideal for founders, early-stage startups, and entrepreneurs looking to present their ideas, receive feedback, and gain community support.",
    },
    {
      question: "Is SparkUp free to use?",
      answer:
        "Yes, SparkUp is completely free to use for all registered users.",
    },
    {
      question: "How do I submit my startup pitch?",
      answer:
        "Simply sign up, then click on the Create button in the home navigation. This will take you directly to a form where you can enter all the details about your startup and submit your pitch.",
    },
    {
      question: "How does SparkUp help my startup gain visibility?",
      answer:
        "SparkUp amplifies your idea by showcasing it to a community of like-minded entrepreneurs and potential supporters. The more interest your pitch garners, the more exposure your startup will receive.",
    },
  ];

  return (
    <div className="space-y-4 px-6 py-10 max-w-7xl mx-auto">
      <motion.p
        className="text-30-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        FAQ
      </motion.p>

      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isInitiallyOpen={item.isInitiallyOpen}
        />
      ))}
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isInitiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <div className="group rounded-lg border-s-4 border-primary bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between gap-1.5"
      >
        <motion.h2
          className="text-lg font-medium text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {question}
        </motion.h2>
        <motion.span
          className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </motion.span>
      </summary>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 leading-relaxed text-gray-700 overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
