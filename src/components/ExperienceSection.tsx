'use client';

import { portfolioData } from '@/data/portfolio';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 scroll-reveal">
        {experience.title}
      </h2>
      <div className="relative">
        {/* Línea de tiempo para Desktop (centrada) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>
        {/* Línea de tiempo para Móvil (a la izquierda) */}
        <div className="md:hidden absolute left-2 top-0 h-full w-0.5 bg-gray-700"></div>
        
        {experience.jobs.map((job, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div key={index} className="scroll-reveal mb-12 relative">
              {/* Punto en la línea de tiempo */}
              <div className="absolute left-2 md:left-1/2 top-1 w-4 h-4 bg-gray-900 border-4 border-blue-500 rounded-full -translate-x-1/2"></div>

              {/* Contenedor de la tarjeta */}
              <div
                className={`
                  w-auto
                  ml-10 md:ml-0 
                  ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-1/2 text-left'}
                `}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg inline-block w-full text-left">
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                    {job.period}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    {job.title}
                  </h3>
                  <h4 className="text-md font-medium text-blue-400 mb-2">
                    {job.company}
                  </h4>
                  <div
                    className="text-base font-normal text-gray-400"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}