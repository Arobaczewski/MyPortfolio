import { motion } from 'framer-motion';

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
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </motion.h2>

        {/* Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col"
            >
              {/* Feature Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
                {feature.title}
              </h3>

              {/* Screenshot */}
              <motion.div 
                className="rounded-2xl overflow-hidden border-2 relative mb-6"
                style={{ borderColor: accentColor }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Green glow effect */}
                <div 
                  className="absolute -inset-4 rounded-2xl blur-2xl opacity-50 -z-10"
                  style={{ background: accentColor }}
                />
                
                {/* Layered shadows */}
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
                  src={feature.screenshot}
                  alt={`${feature.title} screenshot`}
                  className="w-full h-auto object-cover bg-black"
                />
              </motion.div>

              {/* Bullet Points */}
              <ul className="space-y-3 sm:space-y-4">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3"
                  >
                    <span 
                      className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
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

        {/* Divider - Mobile Only */}
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