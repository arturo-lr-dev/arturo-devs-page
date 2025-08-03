'use client';

import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import { useNavHighlighting } from '@/hooks/useNavHighlighting';

import { Header, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  PortfolioSection,
  ContactSection,
} from '@/components/sections';
import { Preloader, CursorFollower, ScrollProgress } from '@/components/ui';

export default function Home() {
  useScrollAnimations();
  useNavHighlighting();

  return (
    <>
      <CursorFollower />
      <ScrollProgress />
      <Preloader />
      
      <Header />

      <main className="container mx-auto px-6">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
