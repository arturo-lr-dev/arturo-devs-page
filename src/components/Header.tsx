'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { navigation, personalInfo } = portfolioData;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black bg-opacity-70 backdrop-blur-sm shadow-lg'
            : ''
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            {personalInfo.logo.endsWith('.png') ||
            personalInfo.logo.endsWith('.jpg') ||
            personalInfo.logo.endsWith('.jpeg') ||
            personalInfo.logo.endsWith('.webp') ||
            personalInfo.logo.endsWith('.svg') ? (
              <Image
                src={personalInfo.logo}
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            ) : (
              personalInfo.logo
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-8" id="nav-links">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Menú Móvil */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black bg-opacity-95 z-30 md:hidden flex-col items-center justify-center space-y-8 text-2xl ${
          isMobileMenuOpen ? 'flex menu-open' : 'hidden'
        }`}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMobileMenu}
            className="block py-2"
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}