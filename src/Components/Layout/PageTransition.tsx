import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

/**
 * PageTransition Component
 * 
 * Wrapper component that creates smooth vertical slide transitions between pages.
 * Inspired by Apple Keynote presentations - pages slide vertically like slides.
 * 
 * Key Features:
 * - Vertical slide animation (enters from bottom, exits upward)
 * - Custom cubic-bezier easing for smooth, professional feel
 * - Fixed positioning allows both pages to animate simultaneously
 * - Scroll position resets on navigation for clean page starts
 * 
 * Technical Details:
 * - Initial: y: '100vh' (starts off-screen below)
 * - Animate: y: 0 (slides to normal position)
 * - Exit: y: '-100vh' (slides off-screen above)
 * - Duration: 1s for deliberate, elegant transition
 * - Easing: [0.4, 0, 0.2, 1] (cubic-bezier for smooth acceleration/deceleration)
 * 
 * Usage:
 * Wrap each page component in App.tsx to enable transitions.
 * Requires AnimatePresence in parent with mode="sync" for simultaneous animations.
 */

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {

  // Disable browser's automatic scroll restoration
  // Ensures pages always start at top on navigation
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <motion.div
      initial={{ y: '100vh' }} // Start position: off-screen below viewport
      animate={{ y: 0 }} // End position: normal viewport position
      exit={{ y: '-100vh' }} // Exit position: off-screen above viewport
      transition={{
        duration: 1, // 1 second transition for smooth, deliberate feel
        ease: [0.4, 0, 0.2, 1], // Cubic-bezier easing (ease-in-out variant)
      }}
      style={{
        position: 'fixed', // Fixed positioning allows simultaneous page animations
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto', // Enables scrolling within the page
      }}
    >
      {children}
    </motion.div>
  );
};