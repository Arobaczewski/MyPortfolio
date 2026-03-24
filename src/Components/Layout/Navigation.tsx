import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleNavColorChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setNavColor(customEvent.detail.color);
    };

    window.addEventListener('navColorChange', handleNavColorChange);
    return () => window.removeEventListener('navColorChange', handleNavColorChange);
  }, []);

  useEffect(() => {
    // Projects page
    if (location.pathname === '/work') {
      setNavColor('#00461e'); // Green for Bloom (first project)
    } 
    // Bloom case study
    else if (location.pathname === '/work/bloom-wellness') {
      setNavColor('#00461e'); // Green for Bloom case study
    }
    // Robo's case study
    else if (location.pathname === '/work/robos-wishlist') {
      setNavColor('#ffffff'); // White for Robo's case study
    }
    // WeatherBeatz case study
    else if (location.pathname === '/work/weatherbeatz') {
      setNavColor('#ffffff'); // White for WeatherBeatz case study
    }
    // All other pages
    else {
      setNavColor('#ffffff');
    }
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Function to determine if a nav item should be active
  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      // Home should only be active on exact match
      return location.pathname === '/';
    }
    // Other pages use startsWith
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
          <motion.div
            onClick={() => handleNavigation('/')}
            className="text-2xl font-bold transition-colors duration-500 cursor-pointer"
            style={{ color: navColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alex Robaczewski
          </motion.div>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="relative text-sm font-medium transition-all duration-500 cursor-pointer"
                style={{
                  color: navColor,
                  opacity: isActive(item.path) ? 1 : 0.7,
                }}
                whileHover={{ y: -2, opacity: 1 }}
              >
                {item.label}
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