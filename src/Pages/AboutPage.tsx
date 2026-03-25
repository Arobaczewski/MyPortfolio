import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../Components/Layout/PageTransition';
import { Footer } from '../Components/Layout/Footer';

export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Alex Robaczewski';
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 sm:py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
              
              {/* LEFT COLUMN */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 sm:space-y-10 md:space-y-12"
              >
                {/* Headshot - Circle */}
                <div className="flex justify-center lg:justify-start">
                  <motion.div
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-neutral-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/about/about-headshot.jpg"
                      alt="Alex Robaczewski"
                      className="w-full h-full object-fill"
                    />
                  </motion.div>
                </div>

                {/* Small Title */}
                <div className="text-center lg:text-left">
                  <p className="text-sm font-bold sm:text-base md:text-lg text-neutral-500 uppercase tracking-wider">
                    A Little About Me
                  </p>
                </div>

                {/* Main Header */}
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center lg:text-left">
                    Hello! I'm Alex!
                  </h1>
                </div>

                {/* Intro Paragraph */}
                <div>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300">
                    I'm a software developer based in the Greater Chicagoland Area. I transitioned into development
                    after nearly 10 years in technology sales, where I developed a passion for building solutions 
                    instead of just selling them. Today, I use my experience from sales and retail environments to 
                    build modern software that solves real-world problems and creates meaningful user experiences.
                  </p>
                </div>

                {/* My Story Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    My Story
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300">
                    For nearly a decade, I worked in technology sales, where I developed a strong interest in the 
                    products and systems I was working with. Over time, I realized I was more interested in how 
                    technology worked and how it could be built than in the sales side of the role.
                    After leaving that environment, I explored several paths within tech, including cybersecurity and 
                    networking. While I found the topics interesting, I quickly realized those paths didn't fully 
                    align with how I like to learn and problem-solve. I was drawn more toward creating and building 
                    rather than memorizing systems. That's what led me to software development. I started learning 
                    through Codecademy and quickly began building my own projects, starting with a tip calculator 
                    that was later used in a real workplace environment. Seeing something I built solve an actual 
                    problem was the moment everything clicked for me. Since then, I've continued to focus on 
                    development, building applications that solve real-world problems and constantly improving my 
                    skills along the way.
                  </p>
                </div>

                {/* Conclusion - Desktop Only */}
                <div className="hidden lg:block">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300">
                    I'm always looking for opportunities to continue growing as a developer and work on meaningful projects. If you'd like to connect or collaborate, feel free to reach out.
                  </p>
                </div>

                {/* Social Links - Desktop Only */}
                <div className="hidden lg:flex flex-wrap gap-6 lg:gap-8">
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/Arobaczewski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-base sm:text-lg font-medium">GitHub</span>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/alexander-robaczewski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-base sm:text-lg font-medium">LinkedIn</span>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:alexander.robaczewski@gmail.com"
                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base sm:text-lg font-medium">Email</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* RIGHT COLUMN */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8 sm:space-y-10 md:space-y-12"
              >
                {/* How I Build Software */}
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    How I Build Software
                  </h2>

                  {/* Section 1 */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                      Identify the Problem
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
                      Before I start coding, I focus on clearly understanding the problem I'm trying to solve and the 
                      outcome I want to achieve. Breaking things down and identifying what truly matters helps me 
                      build solutions that are both efficient and intentional.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                      Building for Real Users
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
                      Through my experience in retail environments, I've worked with a wide range of software as an 
                      end user. That perspective shapes how I build applications today—focusing on creating 
                      experiences that are simple, intuitive, and genuinely useful.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                      Continuous Learning
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
                      I'm constantly looking to improve as a developer. I enjoy learning new technologies, 
                      refining my approach, and building projects that push me to grow.
                    </p>
                  </div>
                </div>

                {/* What I'm Focused On */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    What's Next?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300">
                    Right now, I'm focused on continuing to grow as a developer by expanding into backend development 
                    and building more complete, full-stack applications. I'm currently learning C# and .NET along 
                    with MSSQL, with plans to integrate backend systems and databases into my existing projects.
                    I'm also continuing to refine and improve my current work, both technically and visually, while 
                    building new real-world solutions. My goal is to keep developing practical, production-ready 
                    applications and grow into a well-rounded developer.
                  </p>
                </div>

                {/* Secondary Photo - Polaroid Style */}
                <motion.div
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-2xl inline-block"
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/about/about-pic.jpg"
                    alt="Polaroid style photo"
                    className="w-full h-auto rounded"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* MOBILE ONLY: Conclusion + Social Links (After Picture) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:hidden mt-12 md:mt-16 space-y-8 sm:space-y-10"
            >
              {/* Conclusion - Mobile Only */}
              <div>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300 text-center">
                  I'm always looking for opportunities to continue growing as a developer and work on meaningful projects. If you'd like to connect or collaborate, feel free to reach out.
                </p>
              </div>

              {/* Social Links - Mobile Only - Centered */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* GitHub */}
                <motion.a
                  href="https://github.com/Arobaczewski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-base sm:text-lg font-medium">GitHub</span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/alexander-robaczewski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-base sm:text-lg font-medium">LinkedIn</span>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:alexander.robaczewski@gmail.com"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base sm:text-lg font-medium">Email</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};