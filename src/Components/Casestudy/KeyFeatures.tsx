import { motion } from 'framer-motion';

/**
 * KeyFeatures Component
 * 
 * Showcases the main technical features of a project in a card-based grid layout.
 * Each feature includes a title, screenshot, and bullet-point descriptions.
 * 
 * Key Features:
 * - Responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)
 * - Staggered entrance animations for visual interest
 * - Project-branded glow effects on screenshots using accent color
 * - Fixed image height so screenshots align across cards regardless of title length
 * - Scroll arrow for desktop / divider for mobile navigation
 */

interface Feature {
  title: string;
  bullets: string[];
  screenshot: string;
}

interface KeyFeaturesProps {
  features: Feature[];
  accentColor: string;
}

export const KeyFeatures = ({
  features,
  accentColor,
}: KeyFeaturesProps) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('impact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="key-features"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </motion.h2>

        {/* Feature Cards Grid */}
        {/* Responsive: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2
              }}
              className="flex flex-col"
            >
              {/* Feature Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
                {feature.title}
              </h3>

              {/* Feature Screenshot with Project-Branded Glow */}
              {/*
                The image wrapper uses a fixed height so all screenshots sit at the
                same vertical position regardless of how long the title above is.
                object-cover fills the fixed area without distorting the image.
                Adjust h-48/h-56/h-64 to match your screenshot aspect ratios.
              */}
              <motion.div 
                className="rounded-2xl overflow-hidden border-2 relative mb-6"
                style={{ borderColor: accentColor }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Outer glow layer */}
                <div 
                  className="absolute -inset-4 rounded-2xl blur-2xl opacity-50 -z-10"
                  style={{ background: accentColor }}
                />
                
                {/* Multiple box-shadows for depth */}
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

                {/* Fixed height container — adjust h-48/h-56/h-64 to taste */}
                <div className="h-48 sm:h-56 md:h-64">
                  <img
                    src={feature.screenshot}
                    alt={`${feature.title} screenshot`}
                    className="w-full h-full object-cover object-top bg-black"
                  />
                </div>
              </motion.div>

              {/* Feature Bullet Points */}
              <ul className="space-y-3 sm:space-y-4">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3"
                  >
                    <span 
                      className="shrink-0 w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: accentColor }}
                    />
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-300">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
            aria-label="Scroll to Impact section"
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