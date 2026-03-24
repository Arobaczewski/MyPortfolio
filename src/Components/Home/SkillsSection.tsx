import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  points: string[];
  index: number;
}

function SkillCard({ title, points, index }: SkillCardProps) {
  return (
    <motion.div
      className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
    >
      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
        {title}
      </h3>

      {/* Bullet Points */}
      <ul className="space-y-2 sm:space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
            <span className="text-white mt-1 flex-shrink-0">•</span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export const SkillsSection = () => {
  const skills = [
    {
      title: 'Frontend Engineering',
      points: [
        'Architecting scalable component systems',
        'Performance-optimized UI implementation',
        'Accessible, responsive interface design',
      ],
    },
    {
      title: 'Full-Stack Development',
      points: [
        'Designing and integrating RESTful APIs',
        'Secure authentication and authorization flows',
        'Database-backed application logic',
      ],
    },
    {
      title: 'Product Execution',
      points: [
        'Building tools used in live business environments',
        'Reducing operational friction through automation',
        'Shipping features from concept to deployment',
      ],
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            How I Deliver Value
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto">
            From concept to deployment
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              points={skill.points}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button
          onClick={() => {
            const nextSection = document.getElementById('work');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to next section"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};