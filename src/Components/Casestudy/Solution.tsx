import { motion } from 'framer-motion';

/**
 * Solution Component
 * 
 * Explains the technical approach taken to solve the problems outlined
 * in the previous section. Uses video demonstration on the right to
 * show the solution in action.
 * 
 * Key Features:
 * - Two-column layout with text explanation and video demo
 * - Supports multiple paragraphs for detailed technical explanations
 * - Auto-playing video (muted, no loop) to demonstrate functionality
 * - Project-branded glow effect on video container
 * - Scroll arrow for desktop / divider for mobile navigation
 * 
 * Design Intent:
 * Bridges the gap between problem identification and feature showcase
 * by explaining the overall technical approach and architecture decisions.
 */

interface SolutionProps {
  paragraphs: string[]; // Array allows for multi-paragraph explanations
  videoSrc: string;
  accentColor: string;
}

export const Solution = ({
  paragraphs,
  videoSrc,
  accentColor,
}: SolutionProps) => {
  // Navigate to Key Features section when scroll arrow is clicked
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('key-features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="solution"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full max-w-full">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center mb-16 sm:mb-20 md:mb-24">
          
          {/* Left Column - Solution Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              The Solution
            </h2>

            {/* Solution Paragraphs */}
            {/* Supports multiple paragraphs for detailed technical explanations */}
            <div className="space-y-4 sm:space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Video Demonstration */}
          {/* Shows solution in action, more engaging than static screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Video Container with Project-Branded Glow */}
            {/* bg-black prevents white flash during video load */}
            <motion.div 
              className="rounded-2xl overflow-hidden border-2 relative bg-black"
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
              
              {/* Auto-playing Demo Video */}
              {/* muted required for autoPlay to work, playsInline for mobile Safari */}
              {/* No loop - plays once to keep attention focused */}
              <video
                autoPlay
                muted
                playsInline
                className="w-full h-auto object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
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
            aria-label="Scroll to Key Features section"
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