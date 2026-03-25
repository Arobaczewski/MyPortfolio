import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * CaseStudyHero Component
 * 
 * Hero section for case study pages with project branding and overview.
 * Matches ProjectCard layout for consistency across Work page and case studies.
 * 
 * Key Features:
 * - Logo positioned to the right of text (matches ProjectCard)
 * - Buttons positioned below content
 * - Project-branded colors and fonts
 * - Optional animations (wiggle for playful brands)
 * - Optional falling elements for brand personality
 * 
 * Design Intent:
 * Creates consistent experience between project carousel and case study pages.
 * Users see the same visual layout, just with ability to scroll down for more detail.
 */

interface CaseStudyHeroProps {
  company: string;
  role: string;
  duration: string;
  technologies: string[];
  skill: string;
  logoImage: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundColor: string;
  textColor: string;
  companyFont?: string;
  addShadow?: boolean;
  logoAnimation?: 'wiggle' | 'none';
  fallingElements?: ReactNode;
  demoUrl?: string;
  githubUrl?: string;
}

export const CaseStudyHero = ({
  company,
  role,
  duration,
  technologies,
  skill,
  logoImage,
  backgroundImage,
  backgroundVideo,
  backgroundColor,
  textColor,
  companyFont,
  addShadow = false,
  logoAnimation = 'none',
  fallingElements,
  demoUrl,
  githubUrl,
}: CaseStudyHeroProps) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('context-role');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-24 sm:py-28 md:py-32 min-h-screen overflow-hidden"
      style={{
        backgroundColor,
      }}
    >
      {/* Falling Elements - Desktop Only */}
      {fallingElements && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {fallingElements}
        </div>
      )}

      {/* Video Background */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Image Background */}
      {!backgroundVideo && backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      {/* Dark overlay for video */}
      {backgroundVideo && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 mb-8 sm:mb-10 md:mb-12">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="w-full max-w-xl flex-shrink"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Company Name */}
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-left"
              style={{ 
                color: textColor,
                fontFamily: companyFont || 'inherit',
                fontWeight: 'bold',
                textShadow: addShadow 
                  ? '4px 4px 8px rgba(0, 0, 0, 0.3), 8px 8px 16px rgba(0, 0, 0, 0.2)' 
                  : 'none',
              }}
            >
              {company}
            </h1>

            {/* Role */}
            <div className="mb-3 sm:mb-4 md:mb-6">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2" style={{ color: textColor }}>
                Role
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: textColor }}>
                {role}
              </p>
            </div>

            {/* Duration */}
            <div className="mb-3 sm:mb-4 md:mb-6">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2" style={{ color: textColor }}>
                Duration
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: textColor }}>
                {duration}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-3 sm:mb-4 md:mb-6">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2" style={{ color: textColor }}>
                Technologies
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: textColor }}>
                {technologies.join(', ')}
              </p>
            </div>

            {/* Skill Demonstrated */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2" style={{ color: textColor }}>
                Skill Demonstrated
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: textColor }}>
                {skill}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Logo (Always Next to Text) */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              logoAnimation === 'wiggle'
                ? {
                    opacity: 1,
                    scale: 1,
                    rotate: [0, -3, 3, -3, 3, 0],
                  }
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={
              logoAnimation === 'wiggle'
                ? {
                    opacity: { duration: 0.8, delay: 0.4 },
                    scale: { duration: 0.8, delay: 0.4 },
                    rotate: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'easeInOut',
                    },
                  }
                : { duration: 0.8, delay: 0.4 }
            }
          >
            <img
              src={logoImage}
              alt={`${company} logo`}
              className="w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 object-contain"
              style={{
                filter: addShadow 
                  ? 'drop-shadow(8px 8px 12px rgba(0, 0, 0, 0.4)) drop-shadow(16px 16px 24px rgba(0, 0, 0, 0.2))' 
                  : 'none',
              }}
            />
          </motion.div>
        </div>

        {/* Action Buttons - Below Content */}
        <motion.div
          className="relative z-20 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-2xl mx-auto">
            {/* Demo Button */}
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-sm md:text-base text-center"
                style={{
                  backgroundColor: 'transparent',
                  border: `2px solid ${textColor}`,
                  color: textColor,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo
              </motion.a>
            )}

            {/* GitHub Button */}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-sm md:text-base text-center"
                style={{
                  backgroundColor: 'transparent',
                  border: `2px solid ${textColor}`,
                  color: textColor,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToNextSection}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer transition-colors"
          style={{ color: textColor }}
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