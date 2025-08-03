'use client';

import { portfolioData } from '@/data/portfolio';

export default function ContactSection() {
  const { contact, personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          {contact.title}
        </h2>
        <p className="text-gray-200 mb-8 scroll-reveal">
          {contact.description}
        </p>
        <div className="scroll-reveal">
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-gradient-primary text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 inline-block btn-animated btn-pulse btn-gradient-animated"
          >
            {contact.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}