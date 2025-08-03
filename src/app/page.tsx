'use client';

import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import { useNavHighlighting } from '@/hooks/useNavHighlighting';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import CursorFollower from '@/components/CursorFollower';
import ScrollProgress from '@/components/ScrollProgress';

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
