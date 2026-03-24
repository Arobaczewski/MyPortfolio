import { motion } from 'framer-motion';

interface FallingElementsProps {
  images: string[];
  count?: number;
}

export const FallingElements = ({ images, count = 10 }: FallingElementsProps) => {
  const elements = Array.from({ length: count }, (_, i) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = 8 + Math.random() * 8;
    const randomSize = 30 + Math.random() * 40;
    const randomRotation = Math.random() * 360;
    
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
            opacity: 0.5,
          }}
          initial={{ y: -100, rotate: element.rotation }}
          animate={{
            y: [0, typeof window !== 'undefined' ? window.innerHeight + 100 : 1000],
            rotate: [element.rotation, element.rotation + 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
};