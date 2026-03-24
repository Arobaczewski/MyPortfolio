import { useEffect } from 'react';
import { PageTransition } from '../Components/Layout/PageTransition';
import { HeroSection } from '../Components/Home/HeroSection';
import { CredibilitySection } from '../Components/Home/CredibilitySection';
import { SkillsSection } from '../Components/Home/SkillsSection';
import { WorkTransition } from '../Components/Home/WorkTransition';
import { Footer } from '../Components/Layout/Footer';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Alex Robaczewski';
  }, []);

  return (
    <PageTransition>
      <div id="home">
        <HeroSection />
      </div>
      <div id="credibility">
        <CredibilitySection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="work">
        <WorkTransition />
      </div>
      <Footer />
    </PageTransition>
  );
};