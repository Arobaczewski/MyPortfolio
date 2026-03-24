import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
      }}
    >
      {children}
    </motion.div>
  );
};