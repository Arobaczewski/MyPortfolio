import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * CredibilitySection Component
 * 
 * Homepage section that establishes credibility through quantifiable impact metrics.
 * Features animated counting numbers that trigger when scrolled into view.
 * 
 * Key Features:
 * - Animated counting effect using Framer Motion spring physics
 * - Three key metrics: Production Apps, Time Saved, Users Impacted
 * - Staggered animations for visual interest
 * - Scroll indicator to guide users through homepage
 * 
 * Design Intent:
 * Quickly communicates real-world impact to recruiters by highlighting
 * measurable outcomes from production applications. The counting animation
 * draws attention and makes the metrics more memorable.
 */

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  delay?: number;
}

/**
 * AnimatedStat Component
 * 
 * Individual stat with counting animation that triggers on scroll.
 * Uses Framer Motion's spring physics for smooth, natural-feeling animation.
 */
function AnimatedStat({ end, label, suffix = '', delay = 0 }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Motion values for smooth spring-based counting animation
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const displayValue = useSpring(0, { damping: 30, stiffness: 100 });

  // Trigger counting animation when stat comes into view
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(end);
      }, delay);
    }
  }, [isInView, end, motionValue, delay]);

  // Round spring value for cleaner display
  useEffect(() => {
    springValue.on('change', (latest) => {
      displayValue.set(Math.round(latest));
    });
  }, [springValue, displayValue]);

  // Update DOM with current count value
  useEffect(() => {
    return displayValue.on('change', (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [displayValue, suffix]);

  return (
    <motion.div
      className="text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      {/* Large number display */}
      <div 
        ref={ref}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4"
      >
        0{suffix}
      </div>
      {/* Stat label */}
      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export const CredibilitySection = () => {
  return (
    <section 
      id="credibility"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20">
        {/* Impact Statement */}
        {/* Frames the metrics with context about building meaningful software */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Software that matters
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto">
            Building production applications that solve real business problems
          </p>
        </motion.div>

        {/* Metric Stats Grid */}
        {/* Three columns on desktop, stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-24">
          {/* Production Apps - Demonstrates shipping real software */}
          <AnimatedStat 
            end={3} 
            label="Production Apps" 
            delay={200}
          />
          {/* Time Saved - Shows efficiency impact (e.g., Bloom tip calculator) */}
          <AnimatedStat 
            end={75} 
            suffix="%" 
            label="Time Saved" 
            delay={400}
          />
          {/* Users Impacted - Scale of reach (e.g., Bloom landing page) */}
          <AnimatedStat 
            end={100000} 
            suffix="+" 
            label="Users Impacted" 
            delay={600}
          />
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      {/* Guides users to continue exploring the homepage */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button
          onClick={() => {
            const nextSection = document.getElementById('skills');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          animate={{ y: [0, 8, 0] }} // Bouncing animation
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to next section"
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
    </section>
  );
};