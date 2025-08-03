'use client';

import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export default function PortfolioSection() {
  const { portfolio } = portfolioData;

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-reveal">
        {portfolio.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden group scroll-reveal transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 portfolio-card-shine relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-700 text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}