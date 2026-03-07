'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "917799954555"; // Updated to client number
  const message = "Hi Abhiram Constructions, I'm interested in your services. Can we discuss?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact on WhatsApp"
    >
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MessageCircle size={32} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />

      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-charcoal text-sm font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Enquire on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
