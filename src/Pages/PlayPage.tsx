import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../Components/Layout/PageTransition';
import { Footer } from '../Components/Layout/Footer';

interface MediaItem {
  src: string;
  type: 'image' | 'video';
  caption: string; // Caption for this specific media
}

interface PlayItem {
  title: string; // Title for the entire collection
  media: MediaItem[];
  description: string; // Overall description of the collection
}



export const PlayPage = () => {
  useEffect(() => {
    document.title = 'Play - Alex Robaczewski';
  }, []);

  const playItems: PlayItem[] = [
    {
      title: 'Travel & Music',
      media: [
        { src: '/travel/colorado.jpg', type: 'image', caption: 'Colorado' },
        { src: '/travel/bean.jpeg', type: 'image', caption: 'The Bean' },
        { src: '/travel/firecat.jpeg', type: 'image', caption: 'Firecat' },
        { src: '/travel/greenday.JPG', type: 'image', caption: 'Green Day' },
        { src: '/travel/jawbreaker.JPG', type: 'image', caption: 'Jawbreaker' },
        { src: '/travel/lorde.JPG', type: 'image', caption: 'Lorde' },
        { src: '/travel/mest.jpg', type: 'image', caption: 'Mest' },
        { src: '/travel/myrtlebeach.JPG', type: 'image', caption: 'Myrtle Beach' },
        { src: '/travel/oldwest.jpg', type: 'image', caption: 'Myrtle Beach' },
        { src: '/travel/streetlight.JPG', type: 'image', caption: 'Streetlight Manifesto' },
        { src: '/travel/vegas-2.JPG', type: 'image', caption: 'The Bellagio' },
        { src: '/travel/vegas.jpeg', type: 'image', caption: 'Las Vegas' },
      ],
      description: 'Enjoying new places and great music'
    },
    {
      title: 'Nala & Maverick',
      media: [
        { src: '/dogs/nala-mav-1.JPG', type: 'image', caption: 'Nala & Maverick' },
        { src: '/dogs/nala-puppy.JPG', type: 'image', caption: 'Puppy Nala' },
        { src: '/dogs/mav.JPG', type: 'image', caption: 'Maverick Wanting Food' },
        { src: '/dogs/mav-yelling.MP4', type: 'video', caption: 'A Daily Occurance' },
        { src: '/dogs/nala-mav-2.JPG', type: 'image', caption: 'Nala & Maverick' },
        { src: '/dogs/mav-hoodie.jpg', type: 'image', caption: 'Hoodie Maverick' },
        { src: '/dogs/nala-mav-3.jpg', type: 'image', caption: 'Nala & Maverick' },
      ],
      description: 'A view into the daily lives of my dogs Nala 😇 & Maverick 💙'
    },
    {
      title: 'Gaming & Tech',
      media: [
        { src: '/gaming/computer.mp4', type: 'video', caption: 'Custom Built Computer (2021)' },
        { src: '/gaming/graphics-card.jpg', type: 'image', caption: 'Graphics Card' },
        { src: '/gaming/computer-parts.jpg', type: 'image', caption: 'Motherboard, Processor & RAM' },
        { src: '/gaming/setup.JPG', type: 'image', caption: 'Computer Setup' },
        { src: '/gaming/pokemon-cake.jpg', type: 'image', caption: 'Charmander Birthday Cake' },
        { src: '/gaming/demonrobo.jpeg', type: 'image', caption: 'WoW SOD Warlock' },
        { src: '/gaming/raiding.JPG', type: 'image', caption: 'WoW BFA Raiding' },
        { src: '/gaming/achieves.jpeg', type: 'image', caption: 'WoW Legend Achievement' },
        { src: '/gaming/ratings.jpeg', type: 'image', caption: 'WoW PvP Ratings' },
        { src: '/gaming/solos.JPG', type: 'image', caption: 'WoW 2400 Rating' }
      ],
      description: 'All things technology and Gaming'
    },
    {
      title: 'Tattoos',
      media: [
        { src: '/tattoos/forearm-outline.jpeg', type: 'image', caption: 'The Beginning' },
        { src: '/tattoos/forearm.MP4', type: 'video', caption: 'Roses & Stopwatch' },
        { src: '/tattoos/back-of-arm.mp4', type: 'video', caption: 'Gates To Heaven' },
        { src: '/tattoos/sleeve.mp4', type: 'video', caption: 'The Sleeve' },
      ],
      description: 'All of my different tattoos (more coming soon...)'
    },
    {
      title: 'Sports',
      media: [
        { src: '/sports/bananas.JPEG', type: 'image', caption: 'Savannah Bananas' },
        { src: '/sports/bananas-game.jpeg', type: 'image', caption: 'Great American Ball Park' },
        { src: '/sports/batting.JPG', type: 'image', caption: 'Proviso West - Batting' },
        { src: '/sports/blackhawks-rink.png', type: 'image', caption: 'United Center' },
        { src: '/sports/magic-game.PNG', type: 'image', caption: 'Kia Center' },
        { src: '/sports/pitching.jpg', type: 'image', caption: 'Proviso West - Pitching' },
        { src: '/sports/soccer.JPG', type: 'image', caption: 'Proviso West - Soccer' },
        { src: '/sports/sox-family.jpeg', type: 'image', caption: 'White Sox Game' },
      ],
      description: 'Cheering for different sport\'s teams'
    },
    {
      title: 'Wrestling',
      media: [
        { src: '/wrestling/royal-rumble.PNG', type: 'image', caption: 'Royal Rumble - Indianapolis' },
        { src: '/wrestling/family.JPEG', type: 'image', caption: 'My Sister, Brother & I' },
        { src: '/wrestling/survivor-series.JPG', type: 'image', caption: 'Survivor Series - Chicago' },
        { src: '/wrestling/cmpunk.MP4', type: 'video', caption: 'CM Punk Return' },
        { src: '/wrestling/summerslam.JPG', type: 'image', caption: 'Summerslam - Cleveland' },
        { src: '/wrestling/summerslam.MP4', type: 'video', caption: 'Summerslam - Cleveland' },
        { src: '/wrestling/miz-maryse.MP4', type: 'video', caption: 'The Miz & Maryse' },
        { src: '/wrestling/smackdown.JPG', type: 'image', caption: 'Smackdown - Chicago' },
        { src: '/wrestling/fatu-debut.MP4', type: 'video', caption: 'Jacob Fatu Debut' },
        { src: '/wrestling/elimination-chamber-banner.jpg', type: 'image', caption: 'Elimination Chamber - Chicago' },
        { src: '/wrestling/elimination-chamber.JPG', type: 'image', caption: 'Elimination Chamber - Chicago' },
      ],
      description: 'Attending wrestling events all over the world'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Play
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative projects, experiments, and things I'm exploring outside of work.
          </motion.p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {playItems.map((item, index) => (
              <PlayCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </PageTransition>
  );
};

// Carousel Card Component with Touch Swipe and Arrows
interface PlayCardProps {
  item: PlayItem;
  index: number;
}
const PlayCard = ({ item, index }: PlayCardProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % item.media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + item.media.length) % item.media.length);
  };

  // Handle swipe gesture
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      prevMedia();
    } else if (info.offset.x < -swipeThreshold) {
      nextMedia();
    }
  };

  const hasMultipleMedia = item.media.length > 1;
  const currentMedia = item.media[currentMediaIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
        {item.title}
      </h2>

      {/* Media Carousel */}
      <div className="relative overflow-hidden rounded-2xl mb-4 bg-neutral-900 aspect-video group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMediaIndex}
            drag={hasMultipleMedia ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full h-full touch-pan-y"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentMedia.type === 'image' ? (
              <img
                src={currentMedia.src}
                alt={currentMedia.caption}
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              />
            ) : (
              <video
                src={currentMedia.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                controls
                playsInline
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMediaIndex}
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-base sm:text-lg md:text-xl font-medium">
              {currentMedia.caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - ALWAYS VISIBLE on Mobile, Hover on Desktop */}
        {hasMultipleMedia && (
          <>
            {/* Previous Button - Mobile: Always Visible, Desktop: Hover to Show */}
            <button
              onClick={prevMedia}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Previous media"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next Button - Mobile: Always Visible, Desktop: Hover to Show */}
            <button
              onClick={nextMedia}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Next media"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
              {item.media.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentMediaIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};