import { motion } from 'framer-motion';

/**
 * Footer Component
 * 
 * Site-wide footer with contact information and social links.
 * Used across all pages to provide consistent access to contact methods.
 * 
 * Key Features:
 * - "Let's Work Together" headline creates warm, collaborative tone
 * - Email, LinkedIn, and GitHub links for multiple contact options
 * - Responsive layout (stacks on mobile, horizontal on desktop)
 * - Personal touch with "Made with ❤️ and 🍫" signature
 * 
 * Design Intent:
 * Creates approachable ending to every page while providing clear paths
 * for recruiters to reach out. Personal signature adds human element
 * without being unprofessional.
 */

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black border-t border-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* CTA Headline */}
          {/* Collaborative tone encourages connection */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 px-4">
            Let's Work Together
          </h3>

          {/* Contact Links */}
          {/* Multiple contact methods give recruiters flexibility */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg px-4">
            {/* Email - Primary contact method */}
            <a
              href="mailto:alexander.robaczewski@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors break-all"
            >
              alexander.robaczewski@gmail.com
            </a>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            
            {/* LinkedIn - Professional network */}
            <a
              href="https://www.linkedin.com/in/alexander-robaczewski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            
            {/* GitHub - Code portfolio */}
            <a
              href="https://github.com/Arobaczewski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Copyright & Location */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-500 px-4">
            © 2026 Alex Robaczewski • Chicago, IL
          </p>
          
          {/* Personal Signature */}
          {/* Adds personality while staying professional */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 mt-2 px-4">
            Made with ❤️ and 🍫
          </p>
        </motion.div>
      </div>
    </footer>
  );
};