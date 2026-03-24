import { motion } from 'framer-motion';

interface SolutionProps {
  paragraphs: string[];
  videoSrc: string;
  accentColor: string;
}

export const Solution = ({
  paragraphs,
  videoSrc,
  accentColor,
}: SolutionProps) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('key-features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="solution"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center mb-16 sm:mb-20 md:mb-24">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              The Solution
            </h2>

            {/* Solution Paragraphs */}
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

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div 
              className="rounded-2xl overflow-hidden border-2 relative bg-black"
              style={{ borderColor: accentColor }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Green glow effect behind video */}
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