'use client';

import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { footer, personalInfo } = portfolioData;

  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-200 mb-4 md:mb-0 flex items-center justify-center md:justify-start">
          Vibecoded con
          <span className="heart-beat-icon mx-1.5">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          por {personalInfo.name} © {new Date().getFullYear()}
        </p>
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
        <style jsx>{`
          @keyframes beat {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.25);
            }
          }
          .heart-beat-icon {
            display: inline-block;
            animation: beat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
          }
        `}</style>
      </div>
    </footer>
  );
}