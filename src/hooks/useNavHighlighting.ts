'use client';

import { useEffect } from 'react';

export const useNavHighlighting = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav-links a, #mobile-menu a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.remove('active-nav');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active-nav');
              }
            });
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
};