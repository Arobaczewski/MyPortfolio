import { motion } from 'framer-motion';

/**
 * OutcomesTakeaways Component
 * 
 * Displays measurable business impact and results from the project.
 * Features animated background logo that pulses behind content.
 * 
 * Key Features:
 * - Large, prominent impact statements
 * - Animated background SVG (project logo with pulsing glow)
 * - Staggered entrance animations for readability
 * - Scroll arrow for desktop / divider for mobile navigation
 * 
 * Design Intent:
 * Emphasizes business value and real-world results over technical details.
 * The pulsing logo background creates visual interest while reinforcing
 * project branding.
 */

interface OutcomesTakeawaysProps {
  impact: string[];
  accentColor: string;
  backgroundSvg?: string;
}

export const OutcomesTakeaways = ({
  impact,
  accentColor,
  backgroundSvg,
}: OutcomesTakeawaysProps) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('what-i-learned');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="impact"
      className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black overflow-hidden isolate"
    >
      {/* Animated SVG Background - Constrained to this section only */}
      {backgroundSvg && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Glow Layer */}
          <motion.div
            className="absolute"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: '70%',
              height: '70%',
              background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
          />
          
          {/* SVG with Scale Animation */}
          <motion.img
            src={backgroundSvg}
            alt="Background decoration"
            className="relative"
            style={{
              width: '60%',
              height: 'auto',
              opacity: 0.25,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Impact
        </motion.h2>

        {/* Impact List */}
        {/* Larger text emphasizes importance of business results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <ul className="space-y-6 sm:space-y-8">
            {impact.map((item, index) => (
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
                {/* Accent-colored bullet dot */}
                <span 
                  className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                  style={{ backgroundColor: accentColor }}
                />
                {/* Impact statement */}
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
            aria-label="Scroll to What I Learned section"
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