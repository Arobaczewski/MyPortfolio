import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Navigation Component
 * 
 * Fixed navigation bar with dynamic color adaptation based on current page/project.
 * Provides consistent site navigation while respecting each project's brand identity.
 * 
 * Key Features:
 * - Dynamic color system that adapts to project branding
 * - Animated underline indicator for active page
 * - Smooth color transitions (500ms duration)
 * - Click handler for both logo and nav items
 * - Spring physics for underline animation
 * 
 * Design Pattern:
 * Navigation color changes based on:
 * - Projects page: Green (Bloom brand color, first project)
 * - Case study pages: Matches project brand (green for Bloom, white for Robo's/WeatherBeatz)
 * - All other pages: White
 * 
 * This creates visual cohesion with project branding while maintaining usability.
 */

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navColor, setNavColor] = useState('#ffffff');

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/play', label: 'Play' },
    { path: '/about', label: 'About' },
  ];

  // Listen for custom color change events from project carousel
  // ProjectsPage.tsx dispatches these events when scrolling between projects
  useEffect(() => {
    const handleNavColorChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setNavColor(customEvent.detail.color);
    };

    window.addEventListener('navColorChange', handleNavColorChange);
    return () => window.removeEventListener('navColorChange', handleNavColorChange);
  }, []);

  // Set navigation color based on current route
  useEffect(() => {
    // Projects page - starts with Bloom's green
    if (location.pathname === '/work') {
      setNavColor('#00461e'); // Bloom brand green
    } 
    // Bloom Wellness case study
    else if (location.pathname === '/work/bloom-wellness') {
      setNavColor('#00461e'); // Green for brand consistency
    }
    // Robo's Wishlist case study
    else if (location.pathname === '/work/robos-wishlist') {
      setNavColor('#ffffff'); // White for dark backgrounds
    }
    // WeatherBeatz case study
    else if (location.pathname === '/work/weatherbeatz') {
      setNavColor('#ffffff'); // White for dark backgrounds
    }
    // All other pages (Home, Play, About)
    else {
      setNavColor('#ffffff');
    }
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Determine active state for navigation items
  // Home requires exact match to prevent double underline on /work routes
  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      // Home only active on exact match (not on /work, /play, etc.)
      return location.pathname === '/';
    }
    // Other pages use startsWith for nested routes (e.g., /work/bloom-wellness)
    return location.pathname.startsWith(itemPath);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name - Clickable home link */}
          <motion.div
            onClick={() => handleNavigation('/')}
            className="text-2xl font-bold transition-colors duration-500 cursor-pointer"
            style={{ color: navColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alex Robaczewski
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="relative text-sm font-medium transition-all duration-500 cursor-pointer"
                style={{
                  color: navColor, // Adapts to current page/project color
                  opacity: isActive(item.path) ? 1 : 0.7, // Active link is fully opaque
                }}
                whileHover={{ y: -2, opacity: 1 }}
              >
                {item.label}
                
                {/* Animated Active Indicator */}
                {/* layoutId creates shared animation between nav items */}
                {/* Spring physics creates smooth, natural-feeling transition */}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-5.25 left-0 right-0 h-0.5 transition-colors duration-500"
                    style={{ backgroundColor: navColor }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};