'use client';

import { useEffect } from 'react';

export const useCursorFollower = () => {
  useEffect(() => {
    // Solo ejecutar en dispositivos con hover y puntero preciso (desktop)
    const hasHoverSupport = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (!hasHoverSupport) return;

    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    };

    const handleMouseEnter = () => {
      cursorDot.classList.add('cursor-grow');
      cursorOutline.classList.add('cursor-outline-hidden');
    };

    const handleMouseLeave = () => {
      cursorDot.classList.remove('cursor-grow');
      cursorOutline.classList.remove('cursor-outline-hidden');
    };

    // Agregar listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('a, button, .group, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};