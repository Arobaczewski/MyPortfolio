import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * ProjectCard Component
 * 
 * Full-screen project slide for the Work page carousel.
 * Each card represents one project with branding, overview, and action buttons.
 * 
 * Key Features:
 * - Full customization per project (colors, fonts, backgrounds)
 * - Video or image background support
 * - Optional logo animations (wiggle for playful brands like Robo's)
 * - Three action buttons: Demo, GitHub (conditional), Case Study
 * - Responsive layout (stacks on mobile, side-by-side on desktop)
 * 
 * Design Pattern:
 * Creates immersive, brand-specific experience for each project.
 * Similar to Apple product showcases - each project gets its own aesthetic
 * while maintaining consistent information architecture.
 */

interface ProjectCardProps {
  company: string;
  role: string;
  duration: string;
  technologies: string[];
  skill: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  logoImage: string;
  slug: string;
  companyFont?: string;
  logoAnimation?: 'wiggle' | 'none';
  addShadow?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const ProjectCard = ({
  company,
  role,
  duration,
  technologies,
  skill,
  backgroundColor,
  textColor,
  buttonColor,
  backgroundImage,
  backgroundVideo,
  logoImage,
  slug,
  companyFont,
  logoAnimation = 'none',
  addShadow = false,
  demoUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 sm:py-0"
      style={{
        backgroundColor,
      }}
    >
      {/* Video Background - For dynamic projects like WeatherBeatz */}
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

      {/* Image Background - For static branded backgrounds */}
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

      {/* Dark Overlay - Improves text readability on video backgrounds */}
      {backgroundVideo && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {/* Main Content Container */}
      {/* Two-column layout: text left, logo right */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 max-w-7xl mx-auto w-full">
        
        {/* Left Column - Project Information */}
        <motion.div
          className="max-w-xl w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Company Name - Uses custom font per project */}
          {/* e.g., Dancing Script for Robo's playful brand, Arial MT for Bloom's clean look */}
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

        {/* Right Column - Project Logo */}
        {/* Optional wiggle animation adds personality to playful brands */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            logoAnimation === 'wiggle'
              ? {
                  opacity: 1,
                  scale: 1,
                  rotate: [0, -3, 3, -3, 3, 0], // Wiggle back and forth
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
                    repeatDelay: 3, // 3s pause between wiggles
                    ease: 'easeInOut',
                  },
                }
              : { duration: 0.8, delay: 0.4 }
          }
        >
          <img
            src={logoImage}
            alt={`${company} logo`}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-contain"
            style={{
              filter: addShadow 
                ? 'drop-shadow(8px 8px 12px rgba(0, 0, 0, 0.4)) drop-shadow(16px 16px 24px rgba(0, 0, 0, 0.2))' 
                : 'none',
            }}
          />
        </motion.div>
      </div>

      {/* Action Buttons - Bottom Center */}
      {/* Three options: Demo, GitHub (conditional), Case Study */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-10 px-4 w-full sm:w-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Demo Button - Only renders if demo URL provided */}
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg text-center"
              style={{
                backgroundColor: 'transparent',
                border: `2px solid ${buttonColor}`,
                color: buttonColor,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.a>
          )}

          {/* GitHub Button - Only renders if GitHub URL provided */}
          {/* Not all projects have public repos (e.g., Bloom is private) */}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg text-center"
              style={{
                backgroundColor: 'transparent',
                border: `2px solid ${buttonColor}`,
                color: buttonColor,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}

          {/* Case Study Button - Always present */}
          {/* Links to detailed /work/:slug page */}
          <Link to={`/work/${slug}`} className="w-full sm:w-auto">
            <motion.button
              className="w-full px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg"
              style={{
                backgroundColor: 'transparent',
                border: `2px solid ${buttonColor}`,
                color: buttonColor,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Case Study
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};