import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * HeroSection Component
 * 
 * Homepage landing section with video background and primary call-to-action buttons.
 * First impression for recruiters and visitors - establishes professional brand.
 * 
 * Key Features:
 * - Video background at 40% opacity for subtle motion without distraction
 * - Staggered entrance animations for name, title, and CTAs
 * - Two primary actions: View Projects (filled) and View Resume (outlined)
 * - Scroll indicator to guide users through homepage
 * 
 * Design Intent:
 * Clean, modern aesthetic inspired by Apple's presentation style.
 * White glow on name creates subtle premium feel. Dual CTAs give recruiters
 * choice between exploring work or reviewing credentials.
 */

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      {/* Reduced opacity (40%) keeps focus on content while adding visual interest */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Name - Primary Headline */}
        {/* Subtle white glow creates premium, polished aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 md:mb-12 text-white leading-tight px-2"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
            }}
          >
            Alex Robaczewski
          </h1>
        </motion.div>

        {/* Role & Skills */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-neutral-200 mb-6 sm:mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Full Stack Developer <span className="text-neutral-600">•</span> UI/UX Designer
        </motion.p>

        {/* Call-to-Action Buttons */}
        {/* Two clear paths: Explore work (primary) or review resume (secondary) */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* View Projects - Primary CTA */}
          {/* Filled white button draws more attention as main action */}
          <motion.button
            onClick={() => handleNavigation('/work')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-medium text-base sm:text-lg"
            style={{
              boxShadow: '0 4px 30px rgba(255, 255, 255, 0.3)',
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: '0 8px 40px rgba(255, 255, 255, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>

          {/* View Resume - Secondary CTA */}
          {/* Glassmorphism style (blur + transparency) creates modern, premium feel */}
          <motion.a
            href="/Alex's_Resume_2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white inline-block text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(5px)',
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              background: 'rgba(255, 255, 255, 0.15)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      {/* Guides users to continue exploring homepage content */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.button
          onClick={() => {
            const nextSection = document.getElementById('credibility');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          animate={{ y: [0, 8, 0] }} // Bouncing animation
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-neutral-300 cursor-pointer hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
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
    </section>
  );
};