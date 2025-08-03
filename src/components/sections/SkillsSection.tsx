'use client';

import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-reveal">
        {skills.title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.list.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg scroll-reveal transition-transform duration-300 hover:-translate-y-2"
          >
            <Image
              src={`https://api.iconify.design/${skill.icon}.svg`}
              alt={`${skill.name} logo`}
              width={48}
              height={48}
              className="h-12 w-12 mb-2"
            />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}