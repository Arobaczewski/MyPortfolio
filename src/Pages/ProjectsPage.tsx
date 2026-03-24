import { PageTransition } from '../Components/Layout/PageTransition';
import { ProjectCard } from '../Components/Projects/ProjectCard';
import { FallingElements } from '../Components/Projects/FallingElements';
import { DotNavigation } from '../Components/Projects/DotNavigation';
import { useEffect, useRef, useState } from 'react';

export const ProjectsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const lastScrollTime = useRef(0);
  const scrollCooldown = 1200;

  const projectNames = ['Bloom Wellness', "Robo's Wishlist", 'WeatherBeatz'];
  const dotColors = ['#00461e', '#ffffff', '#ffffff']; // Active dot colors
  const inactiveDotColors = ['rgba(0, 70, 30, 0.4)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)']; // Inactive dot colors

  useEffect(() => {
    document.title = 'Work - Alex Robaczewski';
  }, []);

  // Broadcast nav color when slide changes
  useEffect(() => {
    const navColors = ['#00461e', '#ffffff', '#ffffff'];
    const event = new CustomEvent('navColorChange', { 
      detail: { color: navColors[currentSlide] } 
    });
    window.dispatchEvent(event);
  }, [currentSlide]);

  const navigateToSlide = (index: number) => {
    if (isScrolling || index === currentSlide) return;

    const container = containerRef.current;
    if (!container) return;

    setIsScrolling(true);
    setCurrentSlide(index);

    const slideHeight = container.clientHeight;
    container.scrollTo({
      top: index * slideHeight,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, scrollCooldown);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      
      if (now - lastScrollTime.current < scrollCooldown) {
        return;
      }

      if (isScrolling) {
        return;
      }

      const delta = e.deltaY;
      
      if (Math.abs(delta) < 10) {
        return;
      }

      let newSlide = currentSlide;

      if (delta > 0) {
        if (currentSlide < totalSlides - 1) {
          newSlide = currentSlide + 1;
        } else {
          newSlide = 0;
        }
      } else if (delta < 0) {
        if (currentSlide > 0) {
          newSlide = currentSlide - 1;
        } else {
          newSlide = totalSlides - 1;
        }
      }

      lastScrollTime.current = now;
      setIsScrolling(true);
      setCurrentSlide(newSlide);

      const slideHeight = container.clientHeight;
      container.scrollTo({
        top: newSlide * slideHeight,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, scrollCooldown);
    };

    let touchStartY = 0;
    let isTouching = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      isTouching = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isTouching) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;
      
      if (Math.abs(delta) > 50) {
        handleWheel({ 
          deltaY: delta, 
          preventDefault: () => {} 
        } as WheelEvent);
      }
      
      isTouching = false;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isScrolling, currentSlide, totalSlides]);

  return (
    <PageTransition>
      <div 
        ref={containerRef}
        className="h-screen overflow-hidden"
        style={{ 
          overscrollBehavior: 'none',
        }}
      >
        {/* Dot Navigation */}
        <DotNavigation 
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          projectNames={projectNames}
          dotColors={dotColors}
          inactiveDotColors={inactiveDotColors}
          onDotClick={navigateToSlide}
        />

        {/* Bloom Wellness */}
        <div className="h-screen w-full relative">
          {currentSlide === 0 && (
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
              <FallingElements 
                images={['/bloom/leaf.svg', '/bloom/lily.svg']} 
                count={15}
              />
            </div>
          )}
          <ProjectCard
            company="Bloom"
            role="Web Developer"
            duration="Nov. 2025 - Present"
            technologies={['React', 'TypeScript', 'Cloudflare Pages']}
            skill="Operational Workflow Optimization"
            backgroundColor="#f6f8ef"
            textColor="#00461e"
            buttonColor="#00461e"
            backgroundImage="/bloom/bloombackground.svg"
            logoImage="/bloom/bloomlogo.svg"
            slug="bloom-wellness"
            companyFont="'Arial MT', Arial, sans-serif"
            demoUrl="https://landing.bloom-wellness.com/"
          />
        </div>

        {/* Robo's Wishlist */}
        <div className="h-screen w-full">
          <ProjectCard
            company="Robo's Wishlist"
            role="Full-Stack Developer"
            duration="Aug. 2025 - Nov. 2025"
            technologies={['Next.js', 'TypeScript', 'Redux']}
            skill="Full-Stack System Architecture"
            backgroundColor="#1a1a1a"
            textColor="#ffffff"
            buttonColor="#ffffff"
            backgroundImage="/robo/robosbackground.svg"
            logoImage="/robo/roboslogo.svg"
            slug="robos-wishlist"
            companyFont="'Dancing Script', cursive"
            logoAnimation="wiggle"
            addShadow={true}
            demoUrl="https://robos-wishlist.vercel.app/"
            githubUrl="https://github.com/Arobaczewski/RobosWishlist"
          />
        </div>

        {/* WeatherBeatz */}
        <div className="h-screen w-full">
          <ProjectCard
            company="WeatherBeatz"
            role="Software Developer"
            duration="June 2025 - Aug. 2025"
            technologies={['React', 'Spotify API', 'OpenWeather API']}
            skill="API Integration & Algorithm Design"
            backgroundColor="#0f172a"
            textColor="#ffffff"
            buttonColor="#ffffff"
            backgroundVideo="/weatherbeatz/weatherbeatzbackground.mp4"
            logoImage="/weatherbeatz/weatherbeatzlogo.svg"
            slug="weatherbeatz"
            companyFont="'Orbitron', sans-serif"
            demoUrl="https://weatherbeatz.netlify.app/"
            githubUrl="https://github.com/Arobaczewski/WeatherBeats"
          />
        </div>
      </div>
    </PageTransition>
  );
};