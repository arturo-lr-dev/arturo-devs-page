'use client';

import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export default function AboutSection() {
  const { personalInfo, about } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 scroll-reveal">
          <Image
            src={personalInfo.profileImage}
            alt="Foto de perfil"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
          />
        </div>
        <div className="md:col-span-3 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {about.title}
          </h2>
          <div
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: about.description }}
          />
        </div>
      </div>
    </section>
  );
}