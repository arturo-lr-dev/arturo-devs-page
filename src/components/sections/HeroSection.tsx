'use client';

import { portfolioData } from '@/data/portfolio';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

export default function HeroSection() {
  const { personalInfo, heroButtons } = portfolioData;
  const typingText = useTypingAnimation(personalInfo.titles);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
          Hola, soy{' '}
          <span className="text-gradient bg-gradient-primary">
            {personalInfo.name}
          </span>
          .
          <br />
          Soy{' '}
          <span className="text-gradient bg-gradient-secondary">
            {typingText}
          </span>
          <span className="typing-cursor"></span>
        </h1>
        
        <div
          className="mt-6 text-lg md:text-xl max-w-3xl text-gray-200 scroll-reveal"
          dangerouslySetInnerHTML={{ __html: personalInfo.description }}
        />
        
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start scroll-reveal">
          {heroButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`${
                button.primary
                  ? 'bg-gradient-primary text-white btn-gradient-animated py-3 px-6'
                  : 'text-white btn-outlined-gradient'
              } ${
                index === 0 ? 'btn-animated btn-float' : 'btn-animated'
              } font-semibold rounded-full transition-all duration-300 hover:scale-105 inline-block w-full sm:w-auto text-center relative`}
              {...(button.text.includes('CV') ? { download: true } : {})}
            >
              {button.primary ? button.text : (
                <span className="relative z-10 py-3 px-6 block">
                  {button.text}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}