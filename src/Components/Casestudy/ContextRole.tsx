import { motion } from 'framer-motion';

/**
 * ContextRole Component
 * 
 * Case study section that provides project background and defines the developer's role.
 * Uses a two-column layout with text on the left and a visual media asset on the right.
 * 
 * Key Features:
 * - Animated entrance from opposite directions (text from left, media from right)
 * - Project-branded glow effect on media using accent color
 * - Supports both image (screenshot) and video (mp4 collage) via `mediaType` prop
 * - Responsive layout (stacks on mobile, side-by-side on desktop)
 * - Scroll arrow on desktop / divider on mobile for section navigation
 */

interface ContextRoleProps {
  context: string;
  role: string;
  /** Path or URL to the media asset (image or video) */
  media: string;
  /** Controls whether to render an <img> or <video>. Defaults to 'image'. */
  mediaType?: 'image' | 'video';
  accentColor: string;
}

export const ContextRole = ({
  context,
  role,
  media,
  mediaType = 'image',
  accentColor,
}: ContextRoleProps) => {
  // Navigate to next section when scroll arrow is clicked
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('problem');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="context-role"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center mb-16 sm:mb-20 md:mb-24">
          
          {/* Left Column - Project Context and Developer Role */}
          {/* Animates from left, re-triggers animation on scroll for dynamic feel */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: false, margin: '-100px' }} // Triggers 100px before entering viewport
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Context & Role
            </h2>

            {/* Project Context - Explains business problem and project goals */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                Context
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300">
                {context}
              </p>
            </div>

            {/* Developer Role - Clarifies responsibilities and technical contributions */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                My Role
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300">
                {role}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Project Media with Branded Glow Effect */}
          {/* Animates from right, order swapped on mobile for visual priority */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Media Container with Layered Glow Effects */}
            {/* Uses project accent color (green for Bloom, purple for Robo's, etc.) */}
            <motion.div 
              className="rounded-2xl overflow-hidden border-2 relative"
              style={{ borderColor: accentColor }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer glow - creates soft halo effect around media */}
              <div 
                className="absolute -inset-4 rounded-2xl blur-2xl opacity-50 -z-10"
                style={{ background: accentColor }}
              />
              
              {/* Layered shadows - multiple box-shadows for depth and brand cohesion */}
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

              {mediaType === 'video' ? (
                /* Video - autoplay, looped, muted (required for autoplay), and playsInline for mobile */
                <video
                  src={media}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              ) : (
                <img
                  src={media}
                  alt="Project screenshot"
                  className="w-full h-auto object-cover"
                />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Section Divider - Mobile Only */}
        {/* Provides visual separation on smaller screens where scroll arrow is hidden */}
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
        {/* Guides users through case study narrative, hidden on mobile to save space */}
        <motion.div
          className="hidden sm:flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToNextSection}
            animate={{ y: [0, 8, 0] }} // Bouncing animation
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="cursor-pointer text-neutral-500 hover:text-neutral-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to Problem section"
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