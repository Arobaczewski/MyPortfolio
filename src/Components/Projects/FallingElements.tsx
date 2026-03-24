import { motion } from 'framer-motion';

/**
 * FallingElements Component
 * 
 * Creates animated falling elements for project branding (e.g., leaves and lilies for Bloom Wellness).
 * Adds subtle motion and brand personality without distracting from content.
 * 
 * Key Features:
 * - Configurable element count (default 10)
 * - Supports multiple image variants (randomly selected)
 * - Each element has randomized properties (position, size, speed, rotation)
 * - Infinite loop with staggered timing for continuous effect
 * - Semi-transparent (50% opacity) to stay subtle
 * 
 * Technical Details:
 * - Random X position (0-100% of viewport width)
 * - Random delay (0-5s) for staggered start times
 * - Random duration (8-16s) for varied falling speeds
 * - Random size (30-70px) for visual variety
 * - 360° rotation during fall for natural movement
 * 
 * Usage:
 * Used in Bloom Wellness project/case study for brand-specific falling leaves/lilies.
 * Rendered in absolute-positioned container with pointer-events-none.
 */

interface FallingElementsProps {
  images: string[]; // Array of image paths (e.g., ['/leaf.svg', '/lily.svg'])
  count?: number; // Number of falling elements to generate
}

export const FallingElements = ({ images, count = 10 }: FallingElementsProps) => {
  // Generate randomized properties for each falling element
  // Creates natural, organic feel with varied timing and positioning
  const elements = Array.from({ length: count }, (_, i) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomX = Math.random() * 100; // Horizontal position (0-100%)
    const randomDelay = Math.random() * 5; // Start delay (0-5s)
    const randomDuration = 8 + Math.random() * 8; // Fall duration (8-16s)
    const randomSize = 30 + Math.random() * 40; // Size (30-70px)
    const randomRotation = Math.random() * 360; // Initial rotation (0-360°)
    
    return {
      id: i,
      image: randomImage,
      startX: randomX,
      delay: randomDelay,
      duration: randomDuration,
      size: randomSize,
      rotation: randomRotation,
    };
  });

  return (
    <>
      {elements.map((element) => (
        <motion.img
          key={element.id}
          src={element.image}
          alt="Falling decoration"
          className="absolute"
          style={{
            left: `${element.startX}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: 0.5, // Semi-transparent to avoid distraction
          }}
          // Start above viewport, fall below viewport
          initial={{ y: -100, rotate: element.rotation }}
          animate={{
            // Fall from top to bottom of viewport
            y: [0, typeof window !== 'undefined' ? window.innerHeight + 100 : 1000],
            // Complete one full rotation during fall
            rotate: [element.rotation, element.rotation + 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity, // Loop continuously
            ease: 'linear', // Constant speed for natural falling motion
          }}
        />
      ))}
    </>
  );
};