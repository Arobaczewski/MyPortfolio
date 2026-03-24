import { motion } from 'framer-motion';

/**
 * DotNavigation Component
 * 
 * Vertical dot-based navigation for the project carousel on the Work page.
 * Provides visual indicator of current project and allows direct navigation.
 * 
 * Key Features:
 * - Fixed position on right side of screen (desktop only)
 * - Each dot represents a project in the carousel
 * - Active dot uses project's brand color (green for Bloom, white for Robo's/WeatherBeatz)
 * - Inactive dots use custom muted colors per project for visual consistency
 * - Hover reveals project name label with matching brand color
 * 
 * Design Pattern:
 * Inspired by Apple Keynote's slide navigation - provides context without
 * cluttering the main content. Hover labels help users identify projects
 * without needing to navigate through the carousel.
 */

interface DotNavigationProps {
  currentSlide: number;
  totalSlides: number;
  projectNames: string[];
  onDotClick: (index: number) => void;
  dotColors: string[]; // Active dot colors (brand colors)
  inactiveDotColors?: string[]; // Custom inactive colors per project
}

export const DotNavigation = ({ 
  currentSlide, 
  totalSlides, 
  projectNames,
  onDotClick,
  dotColors,
  inactiveDotColors,
}: DotNavigationProps) => {
  // Get colors for current project
  const activeDotColor = dotColors[currentSlide];
  const inactiveDotColor = inactiveDotColors 
    ? inactiveDotColors[currentSlide] 
    : 'rgba(255, 255, 255, 0.3)'; // Fallback to semi-transparent white

  return (
    // Fixed positioning on right side, hidden on mobile to avoid clutter
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div key={index} className="relative group">
          {/* Navigation Dot */}
          {/* Active dot uses project brand color, inactive dots are muted */}
          <motion.button
            onClick={() => onDotClick(index)}
            className="relative w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: currentSlide === index ? activeDotColor : inactiveDotColor,
              border: currentSlide === index ? `2px solid ${activeDotColor}` : '2px solid transparent',
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${projectNames[index]}`}
          />

          {/* Hover Label - Shows project name */}
          {/* Uses project brand color for background */}
          {/* Text color: white for Bloom (dark background), black for others (light backgrounds) */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div 
              className="px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
              style={{
                backgroundColor: dotColors[index],
                color: index === 0 ? '#ffffff' : '#000000', // Bloom uses white text, others use black
              }}
            >
              {projectNames[index]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};