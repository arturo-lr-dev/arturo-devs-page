'use client';

import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-200 mb-4 md:mb-0">{footer.text}</p>
        <div className="flex space-x-6">
          {footer.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-300"
              aria-label={`Visit ${social.name} profile`}
              dangerouslySetInnerHTML={{ __html: social.icon }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}