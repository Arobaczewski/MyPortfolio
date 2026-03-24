import { motion } from 'framer-motion';

interface DotNavigationProps {
  currentSlide: number;
  totalSlides: number;
  projectNames: string[];
  onDotClick: (index: number) => void;
  dotColors: string[];
  inactiveDotColors?: string[]; // New: custom inactive dot colors per project
}

export const DotNavigation = ({ 
  currentSlide, 
  totalSlides, 
  projectNames,
  onDotClick,
  dotColors,
  inactiveDotColors,
}: DotNavigationProps) => {
  const activeDotColor = dotColors[currentSlide];
  const inactiveDotColor = inactiveDotColors ? inactiveDotColors[currentSlide] : 'rgba(255, 255, 255, 0.3)';

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div key={index} className="relative group">
          {/* Dot */}
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

          {/* Hover Label */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div 
              className="px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
              style={{
                backgroundColor: dotColors[index],
                color: index === 0 ? '#ffffff' : '#000000',
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