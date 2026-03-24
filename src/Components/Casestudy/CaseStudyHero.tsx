import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * CaseStudyHero Component
 * 
 * Hero section for case study pages that displays project overview and branding.
 * Supports flexible customization including brand-specific colors, fonts, backgrounds,
 * and optional animated elements (e.g., falling leaves for Bloom Wellness).
 * 
 * Key Features:
 * - Dynamic theming per project (colors, fonts, backgrounds)
 * - Video or image background support
 * - Optional logo animations and drop shadows
 * - Responsive layout (stacks on mobile, side-by-side on desktop)
 * - Demo and GitHub links positioned below logo
 * - Smooth scroll indicator to next section
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
  // Smooth scroll to next section when arrow is clicked
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('context-role');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 overflow-hidden"
      style={{
        backgroundColor,
        height: '90vh'
      }}
    >
      {/* Optional animated elements (e.g., falling leaves for Bloom) */}
      {fallingElements && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {fallingElements}
        </div>
      )}

      {/* Background - Video option for dynamic projects like WeatherBeatz */}
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

      {/* Background - Static image option for projects like Bloom */}
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

      {/* Semi-transparent overlay for video backgrounds to improve text readability */}
      {backgroundVideo && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {/* Main Content Container - Two-column layout on desktop */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 max-w-7xl mx-auto w-full">
        
        {/* Left Column - Project Details */}
        <motion.div
          className="max-w-xl w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Company Name - Uses custom font per project (e.g., Dancing Script for Robo's) */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-12 text-center md:text-left"
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
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2" style={{ color: textColor }}>
              Role
            </h2>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: textColor }}>
              {role}
            </p>
          </div>

          {/* Duration */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2" style={{ color: textColor }}>
              Duration
            </h2>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: textColor }}>
              {duration}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2" style={{ color: textColor }}>
              Technologies
            </h2>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: textColor }}>
              {technologies.join(', ')}
            </p>
          </div>

          {/* Skill Demonstrated */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2" style={{ color: textColor }}>
              Skill Demonstrated
            </h2>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: textColor }}>
              {skill}
            </p>
          </div>
        </motion.div>

        {/* Right Column - Logo and Action Buttons */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Project Logo - Optional wiggle animation for playful branding (Robo's) */}
          <motion.div
            className="shrink-0"
            animate={
              logoAnimation === 'wiggle'
                ? {
                    rotate: [0, -3, 3, -3, 3, 0],
                  }
                : {}
            }
            transition={
              logoAnimation === 'wiggle'
                ? {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }
                : {}
            }
          >
            <img
              src={logoImage}
              alt={`${company} logo`}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-80 lg:w-96 lg:h-96 object-contain"
              style={{
                filter: addShadow 
                  ? 'drop-shadow(8px 8px 12px rgba(0, 0, 0, 0.4)) drop-shadow(16px 16px 24px rgba(0, 0, 0, 0.2))' 
                  : 'none',
              }}
            />
          </motion.div>

          {/* Action Buttons - Demo and GitHub links positioned below logo */}
          <div className="flex flex-wrap justify-center gap-3">
            {/* Demo Button - Only renders if demoUrl is provided */}
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-medium text-sm text-center"
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

            {/* GitHub Button - Only renders if githubUrl is provided (not all projects have public repos) */}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-medium text-sm text-center"
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

      {/* Scroll Indicator - Guides users to continue reading the case study */}
      {/* Hidden on mobile to avoid cluttering smaller screens */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToNextSection}
          animate={{ y: [0, 8, 0] }} // Bouncing animation to draw attention
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