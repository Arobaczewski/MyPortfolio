import { motion } from 'framer-motion';

/**
 * WhatILearned Component
 * 
 * Reflects on technical skills and lessons gained from the project.
 * Demonstrates growth mindset and ability to extract learning from experience.
 * 
 * Key Features:
 * - Large, prominent bullet points emphasizing key learnings
 * - Staggered entrance animations for readability
 * - Scroll arrow for desktop / divider for mobile navigation
 * 
 * Design Intent:
 * Shows recruiters that I actively reflect on my work and continuously
 * improve my technical skills. Each bullet highlights a specific skill
 * or concept learned through hands-on project work.
 */

interface WhatILearnedProps {
  bullets: string[];
  accentColor: string;
}

export const WhatILearned = ({
  bullets,
  accentColor,
}: WhatILearnedProps) => {
  // Navigate to "See it Live" section when scroll arrow is clicked
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('see-it-live');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="what-i-learned"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          What I Learned
        </motion.h2>

        {/* Learning Statements */}
        {/* Larger text size emphasizes growth and skill development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <ul className="space-y-6 sm:space-y-8">
            {bullets.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index // Staggered for better readability
                }}
                className="flex items-start gap-4 sm:gap-6"
              >
                {/* Accent-colored bullet dot (slightly larger than standard bullets) */}
                <span 
                  className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                  style={{ backgroundColor: accentColor }}
                />
                {/* Larger text emphasizes importance of continuous learning */}
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-neutral-300">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Section Divider - Mobile Only */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full max-w-4xl mx-auto h-px sm:hidden"
          style={{ 
            background: 'linear-gradient(to right, transparent, #f6f8ef, transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Scroll Arrow - Desktop Only */}
        <motion.div
          className="hidden sm:flex justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToNextSection}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="cursor-pointer text-neutral-500 hover:text-neutral-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to See it Live section"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};