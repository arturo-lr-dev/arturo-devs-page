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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-opacity-70 backdrop-blur-md shadow-lg'
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
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" // This attribute is redundant if aria-expanded is present
            >
              <path
                className={`${
 isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
 } transition-opacity duration-300`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" // Original hamburger icon paths
              />
              <path
                className={`${
 isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
 } transition-opacity duration-300`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" // Cross icon paths
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Menú Móvil */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black bg-opacity-95 z-30 flex md:hidden flex-col items-center justify-center space-y-8 text-2xl transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto menu-open'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {navigation.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMobileMenu}
            className="block py-2"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}