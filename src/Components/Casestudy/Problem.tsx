import { motion } from 'framer-motion';

/**
 * Problem Component
 * 
 * Outlines the challenges and pain points that motivated the project.
 * Uses a two-column layout with screenshot on left and problem statements on right.
 * 
 * Key Features:
 * - Mirror layout of ContextRole (screenshot swapped to left column)
 * - Staggered bullet point animations for readability
 * - Project-branded glow effect on screenshot
 * - Scroll arrow for desktop / divider for mobile navigation
 * 
 * Design Intent:
 * This section establishes the "why" behind the technical solution by clearly
 * defining business problems, workflow inefficiencies, or user pain points.
 */

interface ProblemProps {
  problems: string[];
  screenshot: string;
  accentColor: string;
}

export const Problem = ({
  problems,
  screenshot,
  accentColor,
}: ProblemProps) => {
  // Navigate to Solution section when scroll arrow is clicked
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('solution');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="problem"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center mb-16 sm:mb-20 md:mb-24">
          
          {/* Left Column - Screenshot */}
          {/* Positioned on left to create visual variety (ContextRole had it on right) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Screenshot with Project-Branded Glow Effect */}
            <motion.div 
              className="rounded-2xl overflow-hidden border-2 relative"
              style={{ borderColor: accentColor }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer glow layer */}
              <div 
                className="absolute -inset-4 rounded-2xl blur-2xl opacity-50 -z-10"
                style={{ background: accentColor }}
              />
              
              {/* Layered shadows for depth */}
              <div
                className="absolute inset-0 rounded-2xl -z-10"
                style={{
                  boxShadow: `
                    0 0 30px ${accentColor}80,
                    0 0 60px ${accentColor}50,
                    0 0 90px ${accentColor}30,
                    0 20px 60px rgba(0, 0, 0, 0.6)
                  `,
                }}
              />
              
              <img
                src={screenshot}
                alt="Problem illustration"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Problem Statements */}
          {/* Shows on mobile first (order-1) for content priority */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              The Problem
            </h2>

            {/* Problem Bullet Points */}
            {/* Staggered animations make each point easier to read and digest */}
            <ul className="space-y-4 sm:space-y-6">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index // Staggered entrance creates cascading effect
                  }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  {/* Accent-colored bullet dot */}
                  <span 
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2 sm:mt-2.5"
                    style={{ backgroundColor: accentColor }}
                  />
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300">
                    {problem}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

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
            aria-label="Scroll to Solution section"
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