import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function AnimatedStat({ end, label, suffix = '', delay = 0 }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const displayValue = useSpring(0, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(end);
      }, delay);
    }
  }, [isInView, end, motionValue, delay]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      displayValue.set(Math.round(latest));
    });
  }, [springValue, displayValue]);

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
      <div 
        ref={ref}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4"
      >
        0{suffix}
      </div>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export const CredibilitySection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20">
        {/* Impact Statement */}
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

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-24">
          <AnimatedStat 
            end={3} 
            label="Production Apps" 
            delay={200}
          />
          <AnimatedStat 
            end={75} 
            suffix="%" 
            label="Time Saved" 
            delay={400}
          />
          <AnimatedStat 
            end={100000} 
            suffix="+" 
            label="Users Impacted" 
            delay={600}
          />
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
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
          animate={{ y: [0, 8, 0] }}
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