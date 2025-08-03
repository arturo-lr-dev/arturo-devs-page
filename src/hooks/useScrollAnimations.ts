'use client';

import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const supportsScrollTimeline = CSS.supports('animation-timeline: scroll()');
    
    if (!supportsScrollTimeline) {
      const revealElements = document.querySelectorAll('.scroll-reveal, .reveal');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
          });
        },
        { threshold: 0.1 }
      );

      revealElements.forEach((el) => observer.observe(el));

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);
};

export const useScrollProgress = () => {
  useEffect(() => {
    const supportsScrollTimeline = CSS.supports('animation-timeline: scroll()');
    
    if (!supportsScrollTimeline) {
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      
      if (!progressBar) return;

      const updateScrollProgress = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollTop / docHeight;
        
        progressBar.style.transform = `scaleX(${Math.min(scrollPercent, 1)})`;
      };
      
      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', updateScrollProgress);
      };
    }
  }, []);
};